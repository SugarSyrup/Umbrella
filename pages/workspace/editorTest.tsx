import * as React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { NextPage } from 'next';
//https://jforj.tistory.com/211

const Editor = dynamic(() => import('../../components/molecules/Workspace/editor'), { ssr: false }); // client 사이드에서만 동작되기 때문에 ssr false로 설정

const Index: NextPage = () => {
    // state
    const [htmlStr, setHtmlStr] = React.useState<string>('');

    // ref
    const viewContainerRef = React.useRef<HTMLDivElement>(null);

    // useEffect
    React.useEffect(() => {
        if(viewContainerRef.current) {
            viewContainerRef.current.innerHTML = '<h2>html 코드를 이용하여 만들어지는 View입니다.</h2>'
            viewContainerRef.current.innerHTML += htmlStr;
        }
    }, [htmlStr])

    return (
        <>
            <EditorContainer>
                <Editor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
            </EditorContainer>

            <Contents.Container>
                <Contents.HtmlContainer>
                    <h2>Editor를 통해 만들어진 html 코드입니다.</h2>
                    {htmlStr}
                </Contents.HtmlContainer>

                <Contents.ViewContainer ref={viewContainerRef} />
            </Contents.Container>
        </>
    );
};

export default Index;

// style
const EditorContainer = styled.div`
    width: 800px;
    height: 400px;

    margin: 0 auto;
`;

const Contents = {
    Container: styled.div`
        width: 1200px;
        
        margin: 0 auto;

        display: flex;
        gap: 40px;

        & > div {
            width: 600px;

            padding: 16px;

            box-sizing: border-box;
        }
    `,

    HtmlContainer: styled.div`
        border: 2px solid orange;
    `,

    ViewContainer: styled.div`
        border: 2px solid olive;

        // quill에서 가운데 정렬을 한 경우
        .ql-align-center {
            text-align: center;
        }

        // quill에서 코드 블럭을 사용한 경우
        .ql-syntax {
            background-color: #23241f;
            color: #f8f8f2;
            border-radius: 3px;
            padding: 5px;
            margin: 0 10px;
        }
    `,
}