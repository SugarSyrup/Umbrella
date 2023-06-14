import * as React from 'react';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import useAxios from '@/components/businesses/useAxios';
import {Comments} from '@/components/molecules/Workspace/Comments';
import { useRouter } from 'next/router';

interface IBoradViewProps {
    id: number;
}

export function BoardView({id} : IBoradViewProps) {
    const { response, error, loading, sendData } = useAxios({
        method: `GET`,
        url: `{id}`,
        headers : {
            "Content-Type" : "application/json",
        }
    })
    const [data, setData] = React.useState<{id:number, title: string, writer: string, content: string, likeCount:number}>();
    const viewContainerRef = React.useRef<HTMLDivElement>(null);
    const router = useRouter();

    const onEdit = () => {
        router.push(`/workspace/board/edit/${id}`)
    }

    const onDeletePost = () => {
        if(!confirm("정말 이 게시글을 삭제하시겠습니까?")) {
            alert("삭제를 취소합니다.")
        }
        else {
            //axios.
        }
    }

    React.useEffect(() => {
        setData(response?.data);
        if(viewContainerRef.current){
            viewContainerRef.current.innerHTML = response?.data?.content;
        }
    }, [response])
    
    return(<EditorContainer>
        <h2>{data?.title}</h2>
        <span>{data?.writer}</span>
        <span ref={viewContainerRef}></span>
        <span>{data?.likeCount}</span>
        <span onClick={() => {
            onEdit();
        }}>수정</span>
        <span onClick={() => {
            onDeletePost();
        }}>삭제</span>
        <Comments id={data?.id}/>
    </EditorContainer>)
}

const EditorContainer = styled.div`
    position:relative;
    height:100%;
    width:100%;
`