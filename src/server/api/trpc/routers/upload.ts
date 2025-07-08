import { publicProcedure, router } from '../../trpc';
import { z } from 'zod';
import { PrismaClient } from '@generated/prisma'

const prisma = new PrismaClient()

export const campaignRouter = router({
  upload: publicProcedure
    .input(
      z.object({
        name: z.string(),
        start_date: z.string().datetime(),
        end_date: z.string().datetime(),
        target_age_groups: z.array(z.string()),
        target_gender: z.string(),
        creative_ids: z.array(z.string().uuid()),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.campaigns.create({
        data: {
          name: input.name,
          start_date: new Date(input.start_date),
          end_date: new Date(input.end_date),
          age_groups: input.target_age_groups,
          gender: input.target_gender,
          campaign_creative: {
            create: input.creative_ids.map((creativeId) => ({
              creatives: {
                connect: { id: creativeId },
              },
            })),
          },
        },
        include: {
          campaign_creative: {
            include: {
              creatives: true, 
            },
          },
        },
      });
    }),
});

export const creativeRouter = router({
  upload: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.creatives.create({
        data: {
          name: input.name,
        },
      });
    }),
});
