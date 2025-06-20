import { WebSocketServer, WebSocket } from "ws";
import dotenv from "dotenv";
dotenv.config();

interface User {
  socket: WebSocket;
  roomID: String;
}

const Port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
const server = new WebSocketServer({ port: Port });


let allSocket: User[] = [];
server.on("connection", (socket) => {
  socket.on("message", (event) => {
    let message = JSON.parse(event as unknown as string);
    if (message.type === "join") {
      allSocket.push({
        socket,
        roomID: message.payload.roomID,
      });
    }

    if (message.type === "chat") {
      let currentUserRoom = allSocket.find((x) => x.socket == socket)?.roomID;

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
