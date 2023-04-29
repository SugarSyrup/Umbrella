import { useState, useEffect } from "react";
import axios from "axios";

export function WorkSpaceLinks() {
    const [workspace, setWorkspace] = useState<string[]>([]);

    useEffect(() => {
        axios.get("/api/workspace")
            .then((response) => {
                setWorkspace(response.data)
            });
    }, []);

    return(
        <>
            {
                workspace ? workspace.map((ele) => <span key={ele}>{ele}</span>) : <h2>Loading...</h2> 
            }
        </>
    )
}