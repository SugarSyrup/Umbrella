import { useEffect } from "react"

interface IChattingProps {
    id : number
}

export function Chatting({id} : IChattingProps) {
    const searchParams = new URLSearchParams();
    let userIdx=searchParams.get('user-idx') //유저 인덱스 
    let userName=searchParams.get('user-name'); //현재 유저 이름
    let roomNum=searchParams.get('room-num') // 채팅방 번호 
    let otherName=searchParams.get('other-name')// 상대방 이름
    let eventSite= "http://{aws ip 주소}"
    
    return(<>

    </>)
}