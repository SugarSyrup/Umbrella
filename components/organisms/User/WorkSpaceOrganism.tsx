import { useEffect, useState, useRef } from "react";

import { useSelector } from "react-redux";
import { selectUserState } from "@/store/userSlice";

import { StyledLoginOrganism } from "./UserOragnism.styles";
import { LoginHeader } from "../../atoms/LoginHeader.styles";
import { WorkSpaceLinks } from "../../molecules/User/WorkSpaceLinks";
import { Button, Modal, Form, Input } from "antd";
import type { FormInstance } from 'antd/es/form';

import axios from "axios";

export function WorkSpaceOrganism() {
    const {nickname} = useSelector(selectUserState);

    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const formRef = useRef<FormInstance>(null);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = () => {
        setOpen(true);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
      
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    
    const handleOk = () => {
        axios.post(`workspace/create`, {title : formRef.current?.getFieldValue('title'), description : formRef.current?.getFieldValue('desc')})
        setConfirmLoading(true);
        setOpen(false);
        setConfirmLoading(false);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    return(
        <StyledLoginOrganism style={{height:'400px'}}>
            <LoginHeader>{nickname}&apos;s WorkSpace</LoginHeader>
            <WorkSpaceLinks />
            <Button onClick={() => {
                showModal();
            }}>
                워크스페이스 생성    
            </Button>    
            <Modal
                title="워크스페이스 생성"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    form={form}
                    layout='vertical'
                    initialValues={{requiredMarkValue: false}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    requiredMark={false}
                    ref={formRef}
                    style={{paddingTop:"20px"}}
                >
                    <Form.Item label="워크스페이스 명" name="title" required>
                        <Input placeholder="workspace의 명을 입력해주세요" />
                    </Form.Item>
                    <Form.Item label="설명" name="desc" required>
                        <Input placeholder="workspace에 대한 설명을 입력해주세요" />
                    </Form.Item>
                </Form>
            </Modal>
        </StyledLoginOrganism>
    )
}
