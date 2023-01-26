import { useState, useEffect, FormEvent, useRef } from "react";
import Head from 'next/head';

export default function Chats() {
    const [_messages,setMessages] = useState<string[]>(["Chatting Service is Now starting!"]);
    const [sendMessage, setSendMessage] = useState<string>();
    const socket = useRef<WebSocket>();
    
    useEffect(() => {
        const _socket = new WebSocket('wss://umbrellawss.fly.dev/');
        _socket.addEventListener("open", () => {
            console.log('✔webSocket is Connected!✔');
        });
        _socket.addEventListener("close", () => {
            console.log('❌webSocket Connection is Closed!❌');
        });
        _socket.addEventListener("message", (message) => {
            setMessages(prev => [...prev, message.data]);
        });
        socket.current = _socket;
    }, []);

    const onSubmit = (event:FormEvent) => {
        event.preventDefault();
        if(socket.current !== undefined) {
            socket.current.send(JSON.stringify({type:"new_message",payload:sendMessage}));
        }
    }
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSendMessage(event.target.value);
    }

    return (<>
        <Head>
            <title>Chat</title>
            <link rel="stylesheet" href="https://unpkg.com/mvp.css@1.12/mvp.css" /> 
        </Head>
        <h1>Chatting</h1>
        {
            _messages.map((message) => {
                return (<div key={message}>
                    <span >{message}</span>
                    <br />
                </div>)
            })
        }
        <br />
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="input your text" style={{width:'50%'}} onChange={onChange}/>
            <input type="submit" value="전송" />
        </form>
    </>)
}

// export function getServerSideProps() {
//     const _socket = new WebSocket('wss://umbrellawss.fly.dev/');

// }