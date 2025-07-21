import { publicProcedure, router } from "./trpc";
import z from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoinput = z.object({
  title: z.string(),
  content: z.string(),
});

const authsignin = z.object({
  email: z.string(),
  password: z.string(),
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

  signUp: publicProcedure.input(authsignin).mutation(async (opt) => {
    
    const email = opt.input.email;
    const password = opt.input.password;

    const token = opt.ctx.username;

    return {
      token,
    };
  }),
});

const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeader = opts.req.headers["authorization"];
    return {
      username: "IshanSaini",
    };
  },
});

server.listen(3000);

export type AppRouter = typeof appRouter;
