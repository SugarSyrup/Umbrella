import React, {useEffect, useState} from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

import useAxios from '@/components/businesses/useAxios';

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
        <Table columns={columns} dataSource={boards} onChange={onChange} />
    )
}