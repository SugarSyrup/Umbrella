import React, {useEffect, useState} from 'react';
import { Button, Space, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

import useAxios from '@/components/businesses/useAxios';
import { useSelector } from 'react-redux';
import { selectBreadcrumbsState } from '@/store/breadCrumb';
import { useRouter } from 'next/router';

interface IBoardsProps {
    id: string,
}

interface ColumnsDataType {
    postId : number;
    title: string;
    writer: string;
    like_count : number;
}


export function Boards({id} : IBoardsProps) {
    const {response, error, loading} = useAxios({
        method: `GET`,
        url: `/${id}/posts`,
        headers : {
            "Content-Type" : "application/json",
        }
    })
    const [boards, setBoards] = useState<ColumnsDataType[]>([]);
    const breadCrumbs = useSelector(selectBreadcrumbsState);
    const router = useRouter();

    useEffect(() => { 
        setBoards(response?.data());
    }, [response]);

    
    const columns: ColumnsType<ColumnsDataType> =[
        {
            title: '제목',
            dataIndex: 'title',
            // sorter: (a, b) => a - b,
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
        <>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'95%', margin:'0 auto', marginBottom: '20px'}}>
            <h2 style={{fontSize:'20px', fontWeight:'bold', color:'#000'}}>{breadCrumbs && breadCrumbs[breadCrumbs.length - 1]}</h2>
            <Button type="primary" onClick={() => {
                router.push({
                    pathname: `board-editor`
                })
            }}>글 작성하기</Button>
        </div>
            <Table 
                columns={columns} 
                dataSource={boards} 
                onChange={onChange}
                onRow={(record, rowIndex) => {
                    return{
                        onClick: (event) => {
                            console.log(event);
                        },
                    }
                }}
            />
        </>
    )
}