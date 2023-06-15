import * as React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import useAxios from '@/components/businesses/useAxios';
import { Button, Input, InputRef } from 'antd';
import { useRouter } from 'next/router';

const Editor = dynamic(() => import('../../molecules/Workspace/editor'), { ssr: false }); // client 사이드에서만 동작되기 때문에 ssr false로 설정

export function BoardEditor() {
    const router = useRouter();
    const [htmlStr, setHtmlStr] = React.useState<string>('');
    const [imgList, setImgList] = React.useState<string[]>([]);
    const titleRef = React.useRef<InputRef>(null);
    const {response, error, loading, sendData} = useAxios({
        method: `PUT`,
        url: `${localStorage.getItem('boardId')}/post`,
        headers : {
            "Content-Type" : "application/json",
        }
    });
    const { response : response2, error : error2, loading: loading2, sendData : sendData2 } = useAxios({
        method: `GET`,
        url: `${localStorage.getItem('boardId')}/${localStorage.getItem('currentPostId')}/update`,
        headers : {
            "Content-Type" : "application/json",
        }
    })

    
    const [data, setData] = React.useState<{id:number, title: string, writer: string, content: string, likeCount:number, nickname:string}>();
    const viewContainerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if(response2){
            setData(response2.data);
            setHtmlStr(response2.data.content);
        }
        
        if(viewContainerRef.current){
            viewContainerRef.current.innerHTML = response2?.data?.content;
        }
    }, [response2])
    
    return(
    <EditorContainer>
        <Input type="text" placeholder="title" defaultValue={`${data?.title}`} ref={titleRef} style={{width:"90%", height:"40px", marginBottom:"10px"}} />
        <Editor htmlStr={htmlStr} setHtmlStr={setHtmlStr} setImgList={setImgList}/>
        <Button type="primary" style={{marginTop:"70px"}} onClick={() => {
            sendData({            
                title : titleRef.current?.input?.value,
                content : htmlStr,
                fileNameList : imgList,
            })
            router.push({
                pathname: `/workspace/boards/${localStorage.getItem('boardId')}`
            })
        }}>제출하기</Button>
    </EditorContainer>)
}

const EditorContainer = styled.div`
    position:relative;
    height:100%;
    width:100%;
`