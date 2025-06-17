import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("Server is running");
  ws.on("error", console.error);

  ws.on("message", function response(data) {
    if (data.toString() === "ping") {
      ws.send("pong");
    }else{
    ws.send("wrong word");
    }
  });
});
