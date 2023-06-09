import * as React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import useAxios from '@/components/businesses/useAxios';
import { Button, Input, InputRef } from 'antd';

const Editor = dynamic(() => import('../../molecules/Workspace/editor'), { ssr: false }); // client 사이드에서만 동작되기 때문에 ssr false로 설정

export function BoardView() {
    
    return(<EditorContainer>
        <h2></h2>
    </EditorContainer>)
}

const EditorContainer = styled.div`
    position:relative;
    height:100%;
    width:100%;
`