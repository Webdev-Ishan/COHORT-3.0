import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setmessage] = useState("");

  const sendMessage = (message:string) => {
    if (!socket) return;
    socket.send(message);
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080"); 

    ws.onopen = () => {
      alert("Connected");
      setSocket(ws);

      ws.onmessage = (event) => {
        alert(event.data);
      };
    };

    ws.onerror = () => {
      alert("Error");
    };

    ws.onclose = () => {
      alert("Connection closed");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setmessage(e.target.value)}
      />
      <button onClick={()=>sendMessage(message)}>Send</button>
    </>
  );
}

export default App;
