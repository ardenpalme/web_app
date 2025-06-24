import { publicProcedure, router } from '../../trpc';
import { z } from 'zod';
import { PrismaClient } from '@generated/prisma'

const prisma = new PrismaClient()

export const audienceRouter = router({
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

  PurchaseByGender: publicProcedure.query(async () => {
    return await prisma.pos_purchase.groupBy({
      by: ['gender'],
      _count: { gender: true }
    });
  }),

  PurchaseByAge: publicProcedure.query(async () => {
    const all = await prisma.pos_purchase.findMany({
      select: { age: true }
    });

    const buckets = new Map<string, number>();

    for (const { age } of all) {
      if (age !== null) {
        const bucketStart = Math.floor(age / 10) * 10;
        const label = `${bucketStart}-${bucketStart + 9}`;
        buckets.set(label, (buckets.get(label) || 0) + 1);
      }
    }

    return [...buckets.entries()].sort((a, b) => parseInt(a[0]) - parseInt(b[0])).
      map(([range, count]) => ({ ageRange: range, count }));
  }),

  DateTimeRange: publicProcedure.query(async () => {
    const doohStart = await prisma.dooh_detection.findFirst({ orderBy: { timestamp: 'asc' }, select: { timestamp: true } });
    const doohEnd = await prisma.dooh_detection.findFirst({ orderBy: { timestamp: 'desc' }, select: { timestamp: true } });

    const posStart = await prisma.pos_purchase.findFirst({ orderBy: { timestamp: 'asc' }, select: { timestamp: true } });
    const posEnd = await prisma.pos_purchase.findFirst({ orderBy: { timestamp: 'desc' }, select: { timestamp: true } });

    return {
      dooh: [doohStart?.timestamp || null, doohEnd?.timestamp || null],
      pos: [posStart?.timestamp || null, posEnd?.timestamp || null]
    };
  })
});

