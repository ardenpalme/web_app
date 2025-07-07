import { publicProcedure, router } from '../../trpc';
import { z } from 'zod';
import { PrismaClient } from '@generated/prisma'

const prisma = new PrismaClient()

export const audienceRouter = router({
  ViewsByRace: publicProcedure
  .input(
    z.object({
      start: z.string().datetime(),
      end: z.string().datetime(),
    })
  )
  .query(async ({ input }) => {
    const { start, end } = input;
    return await prisma.dooh_detection.groupBy({
      by: ['race'],
      where: {
        timestamp: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
      _count: true,
    });
  }),

  ViewsByGender: publicProcedure
  .input(
    z.object({
      start: z.string().datetime(),
      end: z.string().datetime(),
    })
  )
  .query(async ({ input }) => {
    const { start, end } = input;
    return await prisma.dooh_detection.groupBy({
      by: ['gender'],
      where: {
        timestamp: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
      _count: true,
    });
  }),

  ViewsByAge: publicProcedure
  .input(
    z.object({
      start: z.string().datetime(),
      end: z.string().datetime(),
      binWidth: z.number().int().min(1).max(50).default(10), // e.g., 10 = bins like 0–9, 10–19, etc.
    })
  )
  .query(async ({ input }) => {
    const { start, end, binWidth } = input

    const all = await prisma.dooh_detection.findMany({
      where: {
        timestamp: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
      select: { age: true },
    })

    // Bin ages into ranges
    const bins: Record<string, number> = {}
    for (const { age } of all) {
      const binStart = Math.floor(age / binWidth) * binWidth
      const binLabel = `${binStart}-${binStart + binWidth - 1}`
      bins[binLabel] = (bins[binLabel] || 0) + 1
    }

    // Return as array
    return Object.entries(bins).map(([range, count]) => ({
      ageRange: range,
      _count: count,
    }))
  }),

});

