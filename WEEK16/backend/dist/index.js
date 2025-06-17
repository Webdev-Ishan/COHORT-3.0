"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function connection(ws) {
    console.log("Server is running");
    ws.on("error", console.error);
    ws.on("message", function response(data) {
        if (data.toString() === "ping") {
            ws.send("pong");
        }
        else {
            ws.send("wrong word");
        }
    });
});
