import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 8080 });


let userCount = 0;
server.on("connection",(socket)=>{
userCount++;
console.log("user Connected : ", userCount);
})