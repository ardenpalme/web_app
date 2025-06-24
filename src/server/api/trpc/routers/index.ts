import { router } from '../../trpc';
import { utilsRouter } from './utils';
import { audienceRouter } from './audience';
import { customerRouter } from './customers';

export const appRouter = router({ 
  audience: audienceRouter,
  customers: customerRouter,
  utils: utilsRouter,
});
