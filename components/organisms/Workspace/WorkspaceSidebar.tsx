import React, { useRef } from 'react';

import { useRouter } from 'next/router';

import { Layout, Menu, theme, Button, Modal, Form, Radio, Input } from 'antd';
import { HomeOutlined, NotificationOutlined, WechatOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import axios from 'axios';

import type { FormInstance } from 'antd/es/form';
import useAxios from '@/components/businesses/useAxios';
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

type featuresType = "board" | "chatting";

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

    const [chatting, setChatting] = React.useState<{
        chatRoomId: number,
        roomName: string,
        createdBy: string}[]>();
    const {response:response2, error:error2, loading:loading2} = useAxios({
        method:"GET",
        url: `/workspace/${workspace.id}/chatRooms`,
        headers:{
          "Content-Type" : "application/json"
        }
      })
    React.useEffect(() => {
        if(response2) {
            const workspacedata = response2.data;
            // console.log(workspacedata);
            setChatting(workspacedata);
        }
        else if(error2){
              
        }
    }, [response2, error2])


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

    const handleOk = async () => {
        console.log(formRef.current?.getFieldValue('featureType'))
        if(formRef.current?.getFieldValue('featureType') == 'board'){
            console.log('1');
            await axios.post(`https://umbrellaapp.net/${workspace.id}/create`, {'title' : formRef.current?.getFieldValue('title')})
        }
        else if(formRef.current?.getFieldValue('featureType') == 'chatting'){
            console.log('123');
            await axios.post(`https://umbrellaapp.net/workspace/${workspace.id}/createChatRoom`, {'roomName' : formRef.current?.getFieldValue('title')})
        }
        setConfirmLoading(true);
        setOpen(false);
        setConfirmLoading(false);
        window.location.reload();
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
          
            getItem('chatting', '/chatting', <WechatOutlined  rev={2}/>, chatting?.map((event, index) => {
                return getItem(event.roomName, `/event/${event.chatRoomId}`,);
            })),
        ];
        setItems(items);
    }, [workspace])
    

    const onClick: MenuProps['onClick'] = (e) => {
        const linkArray = e.key.split("/");
        setBreadcrumbs({breadcrumbs : ["Home", linkArray[1],e.domEvent.currentTarget?.innerText]});
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
                            <Radio.Button value="chatting">Chatting</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="title" name="title" required tooltip="This is a required field">
                        <Input placeholder={featureType === "board" ? "board 제목을 입력해주세요" : "chattingRoom 제목을 입력해주세요"} />
                    </Form.Item>
                </Form>
            </Modal>
        </Layout.Sider>
    )
}