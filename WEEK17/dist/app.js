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
exports.pgclient = void 0;
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
const handler_1 = require("./handler");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
exports.pgclient = new pg_1.Client({
    user: "neondb_owner",
    password: process.env.NEON_PASSWORD,
    host: process.env.NEON_HOST,
    port: process.env.NEON_PORT ? parseInt(process.env.NEON_PORT, 10) : 5432,
    database: "neondb",
    ssl: true,
});
app.post("/signup", handler_1.signUp);
app.post("/signin", handler_1.Signin);
app.post("/profile", handler_1.Profile);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.pgclient.connect();
    console.log("Connected to PostgreSQL");
    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000");
    });
});
main();
