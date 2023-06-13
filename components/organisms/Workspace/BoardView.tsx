import * as React from 'react';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import useAxios from '@/components/businesses/useAxios';

export function BoardView() {
    const { response, error, loading, sendData } = useAxios({
        method: `GET`,
        url: `{POSTID}`,
        headers : {
            "Content-Type" : "application/json",
        }
    })
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        setData(response?.data)
    }, [response])
    
    return(<EditorContainer>
        <h2>data.</h2>
    </EditorContainer>)
}

const EditorContainer = styled.div`
    position:relative;
    height:100%;
    width:100%;
`