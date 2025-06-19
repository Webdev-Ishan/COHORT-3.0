import { WebSocketServer, WebSocket } from "ws";
import dotenv from "dotenv";
dotenv.config();

const Port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
const server = new WebSocketServer({ port: Port });

let userCount = 0;
let allSocket: WebSocket[] = [];
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
