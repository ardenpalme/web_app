import { publicProcedure, router } from '../../trpc';
import { z } from 'zod';
import { PrismaClient } from '@generated/prisma'

const prisma = new PrismaClient()

export const customerRouter = router({
  PurchaseByRace: publicProcedure
  .input(
    z.object({
      start: z.string().datetime(),
      end: z.string().datetime(),
    })
  )
  .query(async ({ input }) => {
    const { start, end } = input;
    return await prisma.pos_purchase.groupBy({
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

  PurchaseByGender: publicProcedure
  .input(
    z.object({
      start: z.string().datetime(),
      end: z.string().datetime(),
    })
  )
  .query(async ({ input }) => {
    const { start, end } = input;
    return await prisma.pos_purchase.groupBy({
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

  PurchaseByAge: publicProcedure
  .input(
    z.object({
      start: z.string().datetime(),
      end: z.string().datetime(),
    })
  )
  .query(async ({ input }) => {
    const { start, end } = input;

    const all = await prisma.pos_purchase.findMany({
      where: {
        timestamp: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
      select: { age: true },
    });

    const buckets = new Map<string, number>();

    for (const { age } of all) {
      if (age !== null) {
        const bucketStart = Math.floor(age / 10) * 10;
        const label = `${bucketStart}-${bucketStart + 9}`;
        buckets.set(label, (buckets.get(label) || 0) + 1);
      }
    }

    return [...buckets.entries()]
      .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
      .map(([age, _count]) => ({ age, _count }));
  }),
});

