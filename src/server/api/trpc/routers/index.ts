import { router } from '../../trpc';
import { helloRouter } from './hello';
import { audienceRouter } from './audience';

export const appRouter = router({ 
  hello: helloRouter,
  audience: audienceRouter,
});
