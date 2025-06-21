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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgclient = new pg_1.Client({
    user: "neondb_owner",
    password: "npg_Q6wqrAoWLk7h",
    host: "ep-sparkling-king-a1oct7a9-pooler.ap-southeast-1.aws.neon.tech",
    port: 5432,
    database: "neondb",
    ssl: true,
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield pgclient.connect();
    console.log("Connected");
    const response = yield pgclient.query("UPDATE users set name='Manisha' WHERE name='Mannu';");
    console.log(response);
});
main();
