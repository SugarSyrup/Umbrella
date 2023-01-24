export default function Chats() {
    const socket = new WebSocket(`ws://BackEnd WebSocket Link`);
    // socket.addEventListener('open', () => {
    //     console.log("Connected to WebSocket Server");
    // })
    // socket.addEventListener('close', () => {
    //     console.log("Closed to WebSocket Server");
    // })
    socket.addEventListener("message", (message) => {
        console.log(message);
    })
    return (<>
        <ul></ul>
    </>)
}