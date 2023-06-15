
import React, {useEffect, useState} from 'react';
import { Button, Space, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

import useAxios from '@/components/businesses/useAxios';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { breadcrumbsAtom } from '@/atoms/breadcrumbs';
import { workspaceAtom } from '@/atoms/workspace';

interface IBoardsProps {
    id: string,
}

interface ColumnsDataType {
    post_id : number;
    title: string;
    writer: string;
    like_count : number;
}

export function Announcement() {
    const [workspace, setWorkspace] = useRecoilState(workspaceAtom);
    const {response, error, loading} = useAxios({
        method: `GET`,
        url: `${workspace.data?.boards[0]}/posts?page=0`,
        headers : {
            "Content-Type" : "application/json",
        }
    })

    const [boards, setBoards] = useState<ColumnsDataType[]>([]);
    const [breadcrumbs,_] = useRecoilState(breadcrumbsAtom);
    const router = useRouter();

    useEffect(() => { 
        setBoards(response?.data.content);
    }, [response]);

    
    const columns: ColumnsType<ColumnsDataType> =[
        {
            title: '제목',
            dataIndex: 'title',
        },
        {
            title: '글쓴이',
            dataIndex: 'writer',
        },
        {
            title: '좋아요',
            dataIndex: 'like_count',
        }
    ]

    const onChange: TableProps<ColumnsDataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return(
        <div style={{
            width:'95%', 
            height:'100%',
            border: "1px solid rgb(240, 240, 240)",
            borderRadius: "8px",
            boxSizing: 'border-box',
            padding:'20px',
        }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'95%', margin:'0 auto', marginBottom: '20px'}}>
                <h2 style={{fontSize:'20px', fontWeight:'bold', color:'#000'}}>공지사항</h2>
            </div>
                <Table 
                    columns={columns} 
                    dataSource={boards} 
                    onChange={onChange}
                    onRow={(record, rowIndex) => {
                        return{
                            onClick: (event) => {
                                router.push({
                                    pathname:`/workspace/board/${record.post_id}`
                                })
                            },
                        }
                    }}
                />
        </div>
    )
}