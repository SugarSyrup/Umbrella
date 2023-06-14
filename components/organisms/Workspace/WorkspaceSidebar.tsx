import React, { useRef } from 'react';

import { useRouter } from 'next/router';


import { Layout, Menu, theme, Button, Modal, Form, Radio, Input } from 'antd';
import { HomeOutlined, NotificationOutlined, CalendarOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import axios from 'axios';

import type { FormInstance } from 'antd/es/form';
import { useDispatch } from 'react-redux';
import { useRecoilState } from 'recoil';
import { workspaceAtom } from '@/atoms/workspace';
import { breadcrumbsAtom } from '@/atoms/breadcrumbs';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  onClick?: () => void,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    onClick,
  } as MenuItem;
}

type featuresType = "board" | "event";

export function WorkspaceSidebar() {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const [workspace, setWorkspaceAtom] = useRecoilState(workspaceAtom);
    const [breadcrumbs, setBreadcrumbs] = useRecoilState(breadcrumbsAtom);
    const router = useRouter();
    const formRef = React.useRef<FormInstance>(null);

    const [form] = Form.useForm();
    const [featureType, setFeatureType] = React.useState<featuresType>('board');

    const onFeatureTypeChange = ({ featureType }: { featureType: featuresType }) => {
        setFeatureType(featureType);
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    const [open, setOpen] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    
    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        axios.post(`http://ec2-3-39-93-217.ap-northeast-2.compute.amazonaws.com:8800/${workspace.id}/create`, {title : formRef.current?.getFieldValue('title')})
        setConfirmLoading(true);
        setOpen(false);
        setConfirmLoading(false);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const [items, setItems] = React.useState<MenuItem[]>([]);

    React.useEffect(() => {
        const items: MenuProps['items'] = [
            getItem('Home', '/', <HomeOutlined rev={1}/> ),
          
            getItem('Boards', '/boards', <NotificationOutlined rev={3}/>, workspace.data?.boards.map((event, index) => {
                return getItem(event.title, `/boards/${event.board_id}`,);
            })),
          
            getItem('Events', '/event', <CalendarOutlined rev={2}/>, workspace.data?.events.map((event, index) => {
                return getItem(event.title, `/event/${event.event_id}`,);
            })),
        ];
        setItems(items);
    }, [workspace])
    

    const onClick: MenuProps['onClick'] = (e) => {
        const linkArray = e.key.split("/");
        console.log(linkArray);
        setBreadcrumbs({breadcrumbs : ["Home", linkArray[0],linkArray[1]]});
        router.push({pathname:"/workspace"+e.key})
    };

    return(
        <Layout.Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ borderRight: 0, width:"200px" }}
                items={items}
                onClick={onClick}
            />
            <Button 
                style={{width:"140px", height:"40px", marginLeft:"30px", marginTop:"30px"}}
                onClick={() => {
                    showModal();
                }}
            >
                기능 추가하기
            </Button>
            <Modal
                title="기능 추가하기"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    form={form}
                    layout='vertical'
                    initialValues={{requiredMarkValue: false}}
                    onValuesChange={onFeatureTypeChange}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    requiredMark={false}
                    ref={formRef}
                >
                    <Form.Item label="추가할 기능 타입" name="featureType">
                        <Radio.Group>
                            <Radio.Button value="board">Board</Radio.Button>
                            <Radio.Button value="event">Event</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="title" name="title" required tooltip="This is a required field">
                        <Input placeholder="board 제목을 입력해주세요" />
                    </Form.Item>
                </Form>
            </Modal>
        </Layout.Sider>
    )
}