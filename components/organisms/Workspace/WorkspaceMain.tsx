import { workspaceAtom } from "@/atoms/workspace"
import CustomCalendar from "@/components/molecules/Workspace/CustomCalendar";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil"
import {Announcement } from '@/components/molecules/Workspace/Announcement'

export default function WorkSpaceMain() {
    const [workspace, setWorkspace] = useRecoilState(workspaceAtom);

    return (
        <div style={{
            width:"100%",
            height:"100%",
            position:"relative",

            display:'flex',
            justifyContent:"space-between",
        }}>
            <div style={{
                width:"45%",
                height:"100%",
                position:"relative",   
            }}>
                <Announcement />
            </div>
            <div style={{
                width:"45%",
                height:"100%",
                position:"relative",   
                
                display:'flex',
                flexDirection:'column',
                justifyContent:"space-between"
            }}>
                <div style={{
                    width: '100%',
                    height: '45%',
                    border: "1px solid rgb(240, 240, 240)",
                    borderRadius: "8px",
                    boxSizing: 'border-box',
                    padding:'20px',
                }}>
                    <span style={{
                        fontSize:"24px",
                        fontWeight:"bolder",
                    }}>접속 유저 리스트</span>
                    {workspace.data?.userListInWorkspace.map((user) => {
                        return (
                            <div style={{marginTop:"20px" ,display:"flex", alignItems:"center"}} key={user.userId}>
                                <Avatar size={40} icon={<UserOutlined rev={user.userId}/>} />
                                <span style={{marginLeft:10, fontSize:"24px"}}>{user.nickName}</span>
                            </div>
                        )
                    })}
                </div>
                <CustomCalendar />
            </div>
        </div>
    )
}