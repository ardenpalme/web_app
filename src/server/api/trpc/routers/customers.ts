import { publicProcedure, router } from '../../trpc';
import { z } from 'zod';
import { PrismaClient } from '@generated/prisma'

const prisma = new PrismaClient()

export const customerRouter = router({
  NumPurchasesByRace: publicProcedure
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

  NumPurchasesByGender: publicProcedure
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

  NumPurchasesByAge: publicProcedure
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

  PurchaseAmtByAge: publicProcedure
  .input(
    z.object({
      start: z.string().datetime(),
      end: z.string().datetime(),
    })
  )
  .query(async ({ input }) => {
    const purchases = await prisma.pos_purchase.findMany({
      where: {
        timestamp: {
          gte: new Date(input.start),
          lte: new Date(input.end),
        },
        age: { not: null },
        sale_total: { not: null },
      },
      select: { age: true, amount: true },
    });

    const buckets = new Map<string, number>();

    for (const { age, amount } of purchases) {
      const bucket = `${Math.floor(age! / 10) * 10}-${Math.floor(age! / 10) * 10 + 9}`;
      buckets.set(bucket, (buckets.get(bucket) || 0) + amount!);
    }

    return Array.from(buckets.entries())
      .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
      .map(([age, total]) => ({ age, total }));
  }),


  PurchaseAmtByRace: publicProcedure
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
      _sum: {sale_total: true}
    });
  }),


  PurchaseAmtByGender: publicProcedure
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
      _sum: {sale_total: true}
    });
  }),
});

