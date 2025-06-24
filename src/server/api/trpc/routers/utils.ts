import { publicProcedure, router } from '../../trpc';
import { z } from 'zod';
import { PrismaClient } from '@generated/prisma'

const prisma = new PrismaClient()

export const utilsRouter = router({
  DateTimeRange: publicProcedure.query(async () => {
    const doohStart = await prisma.dooh_detection.findFirst({ orderBy: { timestamp: 'asc' }, select: { timestamp: true } });
    const doohEnd = await prisma.dooh_detection.findFirst({ orderBy: { timestamp: 'desc' }, select: { timestamp: true } });

    const posStart = await prisma.pos_purchase.findFirst({ orderBy: { timestamp: 'asc' }, select: { timestamp: true } });
    const posEnd = await prisma.pos_purchase.findFirst({ orderBy: { timestamp: 'desc' }, select: { timestamp: true } });

    return {
      dooh: [doohStart?.timestamp || null, doohEnd?.timestamp || null],
      pos: [posStart?.timestamp || null, posEnd?.timestamp || null]
    };
  }),
});



