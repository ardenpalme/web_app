import { publicProcedure, router } from '../../trpc';
import { z } from 'zod';
import { PrismaClient } from '@generated/prisma'

const prisma = new PrismaClient()

export const audienceRouter = router({
  ImpressionByRace: publicProcedure.query(async () => {
    return await prisma.pos_purchase.groupBy({
      by: ['race'],
      _count: true,
    });
  }),
});

