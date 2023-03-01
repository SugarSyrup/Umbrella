import { useState, FormEvent } from "react";
import Head from 'next/head';

import { useMySocket, MySocketState } from "@/utils/useMySocket";

export default function Chats() {
    const {responseMessage, myWebSocket} = useMySocket((state) => {
        if (state === MySocketState.onNewMessageReceived ) {
            console.log('onNewMessageReceived');
        }
    });
    const [sendMessage, setSendMessage] = useState<string>();

    const onSubmit = (event:FormEvent) => {
        event.preventDefault();
        if(myWebSocket.current !== undefined) {
            myWebSocket.current.send(JSON.stringify({type:"new_message",payload:sendMessage}));
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
            responseMessage.map((message) => {
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