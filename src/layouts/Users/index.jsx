import React, {useEffect, useState} from 'react';
import {Table} from "antd"
import {getAllPosts} from "../../services/PostServices";

const Users = () => {
    const [users, setUsers] = useState([])

    const columns = [
        {
            title: 'Book Name',
            dataIndex: 'bookName',
            key: 'bookName',
            render: (text, record, index) => {
              return <span>{record?.bookName}</span>
            }
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Name author',
            dataIndex: 'author',
            key: 'author',
            render: (text, record, index) => {
                return <span>{record?.author?.name}</span>
            }
        },
    ];

    useEffect(() => {
        onGetAllPosts();
    }, []);

    const onGetAllPosts = async () => {
        try {
            const resp = await getAllPosts();
            setUsers(resp.data || []);
            console.log("resp", resp.data)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div style={{marginTop: "100px"}}>
            <Table dataSource={users} columns={columns}/>;
        </div>
    );
};

export default Users;
