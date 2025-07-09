import { publicProcedure, router } from '../../trpc';
import { z } from 'zod';
import { PrismaClient } from '@generated/prisma'

const prisma = new PrismaClient()

const creativeInputSchema = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(1),
  notes: z.string().nullish(),
  tags: z.array(z.string()),
  proofOfPlay: z.boolean(),
  fileUrl: z.string().min(1, "A valid file key is required."),
  fileType: z.string(),
  fileSize: z.number().int(),
  width: z.number().int().nullish(),
  height: z.number().int().nullish(),
  duration: z.number().nullish(),
})

const campaignUpsertSchema = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(1, "Campaign name is required."),
  startDate: z.string(),
  endDate: z.string(),
  notes: z.string().nullish(),
  creatives: z.array(creativeInputSchema),
})

export const campaignRouter = router({
  listForSelect: publicProcedure.query(async () => {
    return await prisma.campaign.findMany({
      select: { id: true, name: true },
      orderBy: { updatedAt: 'desc' },
    })
  }),

  listWithStatus: publicProcedure.query(async () => {
    return await prisma.campaign.findMany({
      select: {
        id: true,
        name: true,
        submittedBy: true,
        submissionDate: true,
        status: true,
        _count: { select: { creatives: true } },
      },
      orderBy: { updatedAt: 'desc' },
    })
  }),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
    return await prisma.campaign.findUnique({
      where: { id: input.id },
      include: { creatives: true },
    })
  }),

  upsert: publicProcedure.input(campaignUpsertSchema).mutation(async ({ input }) => {
    const { id, creatives, ...campaignData } = input
    campaignData.startDate = new Date(campaignData.startDate)
    campaignData.endDate = new Date(campaignData.endDate)
    const campaign = await prisma.campaign.upsert({
      where: { id: id ?? '' },
      create: {
        ...campaignData,
        creatives: { create: creatives },
      },
      update: {
        ...campaignData,
        creatives: { deleteMany: {}, create: creatives },
      },
    })
    return { success: true, campaignId: campaign.id }
  }),
});

export const creativeRouter = router({
  listAll: publicProcedure.query(async () => {
    return await prisma.creative.findMany({
      select: {
        id: true,
        name: true,
        approvalStatus: true,
        fileUrl: true,
        campaign: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })
  }),

  getById: publicProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
    return await prisma.creative.findUnique({
      where: { id: input.id },
      include: {
        campaign: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
      },
    })
  }),

  upsert: publicProcedure.input(creativeInputSchema).mutation(async ({ input }) => {
    const { id, ...data } = input
    const creative = await prisma.creative.upsert({
      where: { id: id ?? '' },
      create: data,
      update: data,
    })
    return { success: true, creativeId: creative.id }
  }),
});

