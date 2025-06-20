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
let allSocket = [];
server.on("connection", (socket) => {
    socket.on("message", (event) => {
        var _a;
        let message = JSON.parse(event);
        if (message.type === "join") {
            allSocket.push({
                socket,
                roomID: message.payload.roomID,
            });
        }
        if (message.type === "chat") {
            let currentUserRoom = (_a = allSocket.find((x) => x.socket == socket)) === null || _a === void 0 ? void 0 : _a.roomID;
            for (let i = 0; i < allSocket.length; i++) {
                if (allSocket[i].roomID == currentUserRoom) {
                    allSocket[i].socket.send(message.payload.message);
                }
            }
        }
    });
    socket.on("disconnect", () => {
        allSocket = allSocket.filter((x) => x.socket != socket);
    });
});
