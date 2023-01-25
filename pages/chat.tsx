import { useState, useEffect } from "react";

export default function Chats() {
    const [_messages,setMessages] = useState<string[]>(["Chatting Service is Now starting!"]);
    useEffect(() => {
        const socket = new WebSocket('wss://umbrellawss.fly.dev/');
        socket.addEventListener("open", () => {
            console.log('✔webSocket is Connected!✔');
        });
        socket.addEventListener("close", () => {
            console.log('❌webSocket Connection is Closed!❌');
        });
        socket.addEventListener("message", (message) => {
            setMessages(prev => [...prev, message.data]);
        });
    }, []);
    
    return (<>
        <h3>Chatting</h3>
        {
            _messages.map((message) => {
                return (<>
                    <span key={message}>{message}</span>
                    <br />
                </>)
            })
        }
        <br />
        <form>
            <input type="text" />
        </form>
    </>)
}