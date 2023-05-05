import { useEffect, useState } from "react";
import useAxios from "../businesses/useAxios";

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
        console.log(response?.data);
        if(response?.data) {
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