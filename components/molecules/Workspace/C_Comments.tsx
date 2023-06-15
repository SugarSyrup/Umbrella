import useAxios from "@/components/businesses/useAxios";
import { Form, Button, Input, Dropdown, MenuProps } from "antd";
import type {FormInstance} from 'antd/es/form'
import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userAtom } from "@/atoms/user";
import { MenuOutlined } from "@ant-design/icons";


interface IComments {
    id: number;
}

export function C_Comments({id} : IComments) {
    const {response, error, loading} = useAxios({ 
        method: `GET`,
        url: `/comments/${id}/childComments`,
        headers : {
            "Content-Type" : "application/json",
        }
    })
    const [comments, setCommnets] = React.useState<{
        commentId : number,
        content : string,
        nickName : string
    }[]>([])
    const formRef = React.useRef<FormInstance>(null);
    const [user, setUser] = useRecoilState(userAtom);

    
    const onFinish = (values: any) => {
        console.log('Received values from form: ', values);
    };

    React.useEffect(() => {
        console.log(id);
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
            ref={formRef}
        >
            <Form.Item name="comment" label="Comment" >
                <Input 
                    type="text"
                    style={{ width: 100 }}
                />
            </Form.Item> 
            <Button type="primary" htmlType="submit" onClick={() => {
                axios.post(`/comments/${id}/childComments`, {
                    'commentId' : id,
                    'content': formRef.current?.getFieldValue('comment'),
                    'nickName': user.nickname,
                })
            }}>
                대댓글 작성
            </Button>
        </Form>
        {comments && comments.map((comment) => {
            let toggle = false;
            return <div key={comment.commentId}>
                <span>{comment.nickName}</span>
                { toggle ?
                    <input type="text" value={comment.content} onChange={(e) => {comment.content = e.currentTarget.value }} />
                    : <span>{comment.content} </span>
                }
                { comment.nickName === user.nickname &&
                    <>
                        <span onClick={() => {
                            toggle = !toggle;
                        }}>수정</span>
                        <span onClick={() => {
                            axios.delete(`/posts/${id}/comments/${comment.commentId}`)
                        }}>삭제</span>
                    </>
                }
            </div>
        })}
    </>
}