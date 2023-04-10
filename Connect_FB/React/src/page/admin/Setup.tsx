import React from 'react'
import { Link } from "react-router-dom"
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const Setup = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <a>Invite {}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  
  return (
    <div>
      <Link to={`#`}><h1 className='text-4xl text-center text-green-400 animate__animated animate__pulse animate__infinite'>Setup</h1></Link><br />

      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Setup
