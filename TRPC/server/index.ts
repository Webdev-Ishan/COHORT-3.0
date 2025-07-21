import { publicProcedure, router } from "./trpc";
import z from "zod";
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const todoinput = z.object({
  title: z.string(),
  content: z.string(),
});
const appRouter = router({
  createTodo: publicProcedure.input(todoinput).mutation(async (opt) => {
    const title = opt.input.title;
    const description = opt.input.content;

    return {
      id: "1",
      status: "done",
      message: "Todo added",
    };
  }),
});

const server = createHTTPServer({
  router: appRouter,
});
 
server.listen(3000);

export type AppRouter = typeof appRouter;
