import { useEffect, useState } from "react";
import useAxios from "../businesses/useAxios";
import Link from "next/link";
import styled from "styled-components";

export function WorkSpaceLinks() {
    const [workspace, setWorkSpace] = useState<string[]>([]);
    const {response, error, loading } = useAxios({
        method: `GET`,
        url: `workspace`,
        headers : {
            "Content-Type" : "application/json",
        },
    })

    useEffect(() => {
        if(response) {
            setWorkSpace(response.data);
        }
    },[response])

    return(
        <>
            {
                loading ? <h2>Loading...</h2> : workspace.map((ele) => <span key={ele}>{ele}</span>)
            }
        </>
    )
}

const StyledWorkSpaceLink = styled(Link)`
    text-decoration : none;

    color:black;
    font-size:10px;
    font-weight:bolder;
`