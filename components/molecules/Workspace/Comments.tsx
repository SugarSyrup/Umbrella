import useAxios from "@/components/businesses/useAxios";
import { Form, Button, Input, Dropdown, MenuProps } from "antd";
import type {FormInstance} from 'antd/es/form'
import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userAtom } from "@/atoms/user";
import {useRouter} from 'next/router';
import { C_Comments } from "./C_Comments";


interface IComments {
    id: number;
}

export function Comments({id} : IComments) {
    const router = useRouter();
    const {response, error, loading} = useAxios({ 
        method: `GET`,
        url: `/posts/${id}/comments`,
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
    const commentsCommentForm = React.useRef<FormInstance>(null);
    const [toggle, setToggle] = useState(false);

    
    const onFinish = (values: any) => {
        console.log('Received values from form: ', values);
    };

    React.useEffect(() => {
        if(response) {
            setCommnets(response.data.content);
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
            style={{
                marginBottom:"20px"
            }}
        >
            <Form.Item name="comment" label="Comment" >
                <Input 
                    type="text"
                    style={{ width: 300 }}
                />
            </Form.Item> 
            <Button type="primary" htmlType="submit" onClick={() => {
                axios.post(`posts/${id}/comments/create`, {
                    'content': formRef.current?.getFieldValue('comment'),
                    'nickName': user.nickname,
                })
            }}>
                댓글 작성
            </Button>
        </Form>
        {comments && comments.map((comment) => {
            return <div key={comment.commentId} style={{
                overflowY:"scroll",
                height:'100px',
                display:'flex',
                flexDirection:'column',
                gap:'10px'
            }}>
                <div style={{display:'flex', width:'90%', justifyContent:'space-between'}}>
                    <span style={{fontWeight:'bolder', fontSize:18}}>{comment.nickName}</span>
                    { comment.nickName === user.nickname &&
                        <div style={{fontSize:12}}>
                            <span 
                                style={{
                                    cursor:'pointer',
                                    marginRight:'10px'
                                }}
                                onClick={() => {
                                if(toggle){
                                    const inputValue = document.querySelector<HTMLInputElement>(`.Re${comment.commentId}`)?.value
                                    axios.put(`posts/${id}/comments/update`, {'commentId' : comment.commentId, 'content' : inputValue})
                                    window.location.reload();
                                }else {
                                    setToggle(prev => !prev);
                                }
                            }}>수정</span>
                            <span onClick={() => {
                                axios.delete(`/posts/${id}/comments/${comment.commentId}`);
                                window.location.reload();
                            }}>삭제</span>
                        </div>
                    }
                </div>
                { toggle ?
                    <input type="text" defaultValue={comment.content} className={`Re${comment.commentId}`}/>
                    : <span>{comment.content} </span>
                }
                
                {/* <C_Comments id={comment.commentId} /> */}
            </div>
        })}
    </>
}

