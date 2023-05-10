import { useState, useEffect, useRef } from "react";

export enum MySocketState {
    onNewMessageReceived = 'onNewMessageReceived',
    onConnectionFailed = 'onConnectionFaield',
    onConnectionOpened = 'onConnectionOpened'
}

//https://kokohapps.tistory.com/entry/React%EC%97%90%EC%84%9C-Socket-%EC%97%B0%EA%B2%B0%EC%9D%84-Custom-Hook-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B5%AC%EC%84%B1%ED%95%B4-%EB%B3%B4%EC%95%98%EB%8B%A4

export const useMySocket = ( onConnectionStateChanged: (state: MySocketState) => void) => {
    const [responseMessage, setResponseMessage] = useState<string[]>([]);
    const myWebSocket = useRef<WebSocket>();

    useEffect(() => {
        connectStart();
    }, []);

    const connectStart = () => {
        const ws = new WebSocket('wss://umbrellawss.fly.dev/');
        
        ws.onmessage = (e) => {
            e.preventDefault();      
            const data = e.data;
            
            setResponseMessage((prev) => [...prev, data]);
            onConnectionStateChanged(MySocketState.onNewMessageReceived);
        }

        ws.onopen = () => {
            console.log('✔webSocket is Connected!✔');
            onConnectionStateChanged(MySocketState.onConnectionOpened);
        };

        ws.onclose = () => {
            console.log('❌webSocket Connection is Closed!❌');
            onConnectionStateChanged(MySocketState.onConnectionFailed);
        };
        myWebSocket.current = ws;
    }

    return {responseMessage: responseMessage, myWebSocket};
}