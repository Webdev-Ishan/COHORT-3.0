"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
const server = new ws_1.WebSocketServer({ port: Port });
let userCount = 0;
let allSocket = [];
server.on("connection", (socket) => {
    userCount++;
    allSocket.push(socket);
    console.log("user Connected : ", userCount);
    socket.on("message", (event) => {
        console.log("User sent a message : ", event.toString());
        for (let i = 0; i < allSocket.length; i++) {
            if (allSocket[i] !== socket) {
                setTimeout(() => {
                    allSocket[i].send(event.toString());
                }, 1000);
            }
        }
    });
});
