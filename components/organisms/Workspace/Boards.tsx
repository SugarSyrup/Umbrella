import React, {useEffect, useState} from 'react';
import { Button, Space, Table, Pagination } from 'antd';
import type { PaginationProps } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

import useAxios from '@/components/businesses/useAxios';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { breadcrumbsAtom } from '@/atoms/breadcrumbs';

interface IBoardsProps {
    id: string,
}

interface ColumnsDataType {
    post_id : number;
    title: string;
    writer: string;
    like_count : number;
}


export function Boards({id} : IBoardsProps) {
    const [current, setCurrent] = useState(1);
    const {response, error, loading} = useAxios({
        method: `GET`,
        url: `${id}/posts?page=${current-1}`,
        headers : {
            "Content-Type" : "application/json",
        }
    })

    const [boards, setBoards] = useState<ColumnsDataType[]>([]);
    const [breadcrumbs,setBreadcrumbs] = useRecoilState(breadcrumbsAtom);
    const router = useRouter();

    const onPageChange: PaginationProps['onChange'] = (page) => {
        console.log(page);
        setCurrent(page);
    }

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
        <>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'95%', margin:'0 auto', marginBottom: '20px'}}>
            <h2 style={{fontSize:'20px', fontWeight:'bold', color:'#000'}}>{breadcrumbs.breadcrumbs.length > 0 && breadcrumbs.breadcrumbs[breadcrumbs.breadcrumbs.length - 1]}</h2>
            <Button type="primary" onClick={() => {
                router.push({
                    pathname: `board-editor`
                })
                localStorage.setItem('boardId', id);
            }}>글 작성하기</Button>
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
        </>
    )
}