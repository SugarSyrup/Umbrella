import * as React from 'react';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import useAxios from '@/components/businesses/useAxios';
import {Comments} from '@/components/molecules/Workspace/Comments';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userAtom } from '@/atoms/user';


export function BoardView() {
    const router = useRouter();
    const id = localStorage.getItem('currentPostId');
    const [user, setUser] = useRecoilState(userAtom);

    const { response, error, loading, sendData } = useAxios({
        method: `GET`,
        url: `${localStorage.getItem('boardId')}/${id}/findOne`,
        headers : {
            "Content-Type" : "application/json",
        }
    })

    const [data, setData] = React.useState<{id:number, title: string, writer: string, content: string, likeCount:number}>();
    const viewContainerRef = React.useRef<HTMLDivElement>(null);

    const onEdit = () => {
        router.push(`/workspace/board/edit/${id}`)
    }

    const onDeletePost = () => {
        if(!confirm("정말 이 게시글을 삭제하시겠습니까?")) {
            alert("삭제를 취소합니다.");
        }
        else {
            axios.delete(`${localStorage.getItem('boardId')}/${id}/delete`);
            router.push({
                pathname: `/workspace`,
            })
        }
    }

    React.useEffect(() => {
        setData(response?.data);
        if(viewContainerRef.current){
            viewContainerRef.current.innerHTML = response?.data?.content;
        }
    }, [response])
    
    return(
    <EditorContainer>
        <div style={{marginBottom:"10px"}}>
            <h2 style={{fontSize:"28px", fontWeight:"bolder", marginBottom:"5px"}}>{data?.title}</h2>
            <div style={{
                width:"100%",
                display:"flex",
                justifyContent:"space-between",
            }}>
                <span style={{fontSize:"16px", color:'grey'}}>{data?.writer}</span>
                {data?.writer === user.nickname &&
                    <div style={{marginRight:"10px", display:"flex", alignItems:"center", gap:"10px", cursor:"pointer", fontSize:"12px", fontWeight:"bold"}}>
                        <span onClick={() => {
                            onEdit();
                        }}>수정</span>
                        <span onClick={() => {
                            onDeletePost();
                        }}>삭제</span>
                    </div>
                }
            </div>
        </div>
        <div style={{
            width:"100%",
            height:"70%",
            overflowY:'scroll',
            marginBottom:"30px"
        }}>
            <span ref={viewContainerRef}></span>
            <span>{data?.likeCount}</span>
        </div>
        <Comments id={Number(id)}/>
    </EditorContainer>)
}

const EditorContainer = styled.div`
    position:relative;
    height:100%;
    width:100%;
`