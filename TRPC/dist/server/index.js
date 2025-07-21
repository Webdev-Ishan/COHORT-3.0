"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("./trpc");
const zod_1 = __importDefault(require("zod"));
const standalone_1 = require("@trpc/server/adapters/standalone");
const todoinput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
const authsignin = zod_1.default.object({
    email: zod_1.default.string(),
    password: zod_1.default.string(),
});
const appRouter = (0, trpc_1.router)({
    createTodo: trpc_1.publicProcedure.input(todoinput).mutation((opt) => __awaiter(void 0, void 0, void 0, function* () {
        const title = opt.input.title;
        const description = opt.input.content;
        return {
            id: "1",
            status: "done",
            message: "Todo added",
        };
    })),
    signUp: trpc_1.publicProcedure.input(authsignin).mutation((opt) => __awaiter(void 0, void 0, void 0, function* () {
        const email = opt.input.email;
        const password = opt.input.password;
        const token = opt.ctx.username;
        return {
            token,
        };
    })),
});
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
    createContext(opts) {
        let authHeader = opts.req.headers["authorization"];
        return {
            username: "IshanSaini",
        };
    },
});
server.listen(3000);
