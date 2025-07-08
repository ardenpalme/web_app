import { publicProcedure, router } from '../../trpc';
import { z } from 'zod';
import { PrismaClient } from '@generated/prisma'

const prisma = new PrismaClient()

export const utilsRouter = router({
  getAgeBuckets: publicProcedure.query(async () => {
    const config = await prisma.system_config.findMany({
      where: {
        parameter: { in: ['age_bucket_start', 'age_bucket_range'] },
      },
    });

    const configMap = Object.fromEntries(
      config.map((c) => [c.parameter, parseInt(c.value, 10)])
    );

    const start = configMap.age_bucket_start;
    const range = configMap.age_bucket_range;

    if (isNaN(start) || isNaN(range)) {
      throw new Error("Invalid or missing config");
    }

    const maxAge = 70;
    const buckets: string[] = [];

    for (let age = start; age <= maxAge; age += range) {
      const from = age;
      const to = Math.min(age + range - 1, maxAge);
      buckets.push(to === maxAge ? `${from}+` : `${from}–${to}`);
    }

    //console.log(buckets);

    return buckets;
  }),
});



