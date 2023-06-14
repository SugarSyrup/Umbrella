import useAxios from "@/components/businesses/useAxios";
import { Form, Button, Input } from "antd";
import React from "react";


interface IComments {
    id: number;
}

export function Comments({id} : IComments) {
    const {response, error, loading} = useAxios({ 
        method: `GET`,
        url: `/posts/{id}/comments`,
        headers : {
            "Content-Type" : "application/json",
        }
    })
    const [comments, setCommnets] = React.useState<{
        commentId : number,
        content : string,
        nickName : string
    }[]>([])

    
    const onFinish = (values: any) => {
        console.log('Received values from form: ', values);
    };

    React.useEffect(() => {
        if(response) {
            setCommnets(response.data);
        }
        
        else if(error) {
            console.log(error)
        }
    }, [response, error])
    return <>
        <Form
            name="comments_form"
            layout="inline"
            onFinish={onFinish}
        >
            <Form.Item name="comment" label="Comment" >
                <Input 
                    type="text"
                    style={{ width: 100 }}
                />
            </Form.Item> 
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
        {comments && comments.map((comment) => {
            return <div key={comment.commentId}>
                {comment.nickName} : {comment.content}
            </div>
        })}
    </>
}