import * as React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import useAxios from '@/components/businesses/useAxios';

const Editor = dynamic(() => import('../../molecules/Workspace/editor'), { ssr: false }); // client 사이드에서만 동작되기 때문에 ssr false로 설정

export function BoardEditor() {
    const [htmlStr, setHtmlStr] = React.useState<string>('');
    const titleRef = React.useRef<HTMLInputElement>(null);
    const {response, error, loading, sendData} = useAxios({
        method: `POST`,
        url: `login`,
        headers : {
            "Content-Type" : "application/json",
        }
    });
    
    return(<EditorContainer>
        <input type="text" placeholder="title" ref={titleRef} style={{width:"90%", height:"30px", marginBottom:"10px"}}/>
        <Editor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
        <button style={{marginTop:"50px"}} onClick={() => {
            
        }}>제출하기</button>
    </EditorContainer>)
}

const EditorContainer = styled.div`
    position:relative;
    height:100%;
    width:100%;
`