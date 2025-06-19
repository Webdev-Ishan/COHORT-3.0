"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const server = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
server.on("connection", (socket) => {
    userCount++;
    console.log("user Connected : ", userCount);
});
