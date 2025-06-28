"use client"
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        
      }}
    >
      <div
        style={{
          width: "85vw",
          height: "85vh",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "16px",
            borderBottom: "1px solid #eee",
            fontWeight: "bold",
            fontSize: "1.2rem",
            background: "#f0f0f0",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        >
          Chat App
        </div>
        {/* Messages */}
        <div
          style={{
            flex: 1,
            padding: "16px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            background: "#fafafa",
          }}
        >
          <div
            style={{
              alignSelf: "flex-start",
              background: "#e0e0e0",
              borderRadius: 8,
              padding: "8px 12px",
              maxWidth: "70%",
            }}
          >
            Hello! How can I help you?
          </div>
          <div
            style={{
              alignSelf: "flex-end",
              background: "#0078fe",
              color: "#fff",
              borderRadius: 8,
              padding: "8px 12px",
              maxWidth: "70%",
            }}
          >
            Hi! I have a question.
          </div>
        </div>
        {/* Input */}
        <div
          style={{
            padding: "12px",
            borderTop: "1px solid #eee",
            display: "flex",
            gap: "8px",
            background: "#f0f0f0",
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}
        >
          <input
            type="text"
            placeholder="Type a message..."
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: 6,
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
          <button
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              border: "none",
              background: "#0078fe",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={()=>{
           router.push(`/chat}`)
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
