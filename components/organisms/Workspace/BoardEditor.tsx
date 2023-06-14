import * as React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import useAxios from '@/components/businesses/useAxios';
import { Button, Input, InputRef } from 'antd';

const Editor = dynamic(() => import('../../molecules/Workspace/editor'), { ssr: false }); // client 사이드에서만 동작되기 때문에 ssr false로 설정

export function BoardEditor() {
    const [htmlStr, setHtmlStr] = React.useState<string>('');
    const [imgList, setImgList] = React.useState<string[]>([]);
    const titleRef = React.useRef<InputRef>(null);
    const {response, error, loading, sendData} = useAxios({
        method: `POST`,
        url: `${localStorage.getItem('boardId')}/post`,
        headers : {
            "Content-Type" : "application/json",
        }
    });
    
    return(<EditorContainer>
        <Input type="text" placeholder="title" ref={titleRef} style={{width:"90%", height:"40px", marginBottom:"10px"}}/>
        <Editor htmlStr={htmlStr} setHtmlStr={setHtmlStr} setImgList={setImgList}/>
        <Button type="primary" style={{marginTop:"70px"}} onClick={() => {
            sendData({            
                title : titleRef.current?.input?.value,
                content : htmlStr,
                fileNameList : imgList,
            })
        }}>제출하기</Button>
    </EditorContainer>)
}

const EditorContainer = styled.div`
    position:relative;
    height:100%;
    width:100%;
`