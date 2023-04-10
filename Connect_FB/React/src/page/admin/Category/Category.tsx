import React from 'react'
import {Link} from "react-router-dom"
import { ArrayCT_remove,DataCT } from '../../layout/typeAll/type'
import { Space, Table, Button,Image,Popconfirm  } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const Category = (props:ArrayCT_remove) => {
  // function Remove(id:string){
  //   const consider=window.confirm("Means that all products related to this category will be deleted");
  //   if(consider){
  //     props.onRemoveCT(id);
  //   }
  // }
  console.log(props?.dataCT);
  
  const confirm = (id:string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      props.onRemoveCT(id);
      resolve(null);
    }, 1000);
  });
    const columns: ColumnsType<DataCT> = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title:"SP-quantity",
          key: 'desc',
          render: (text, record:any) => {
            return <span>{record.products.length}</span>
        },
      },
      {
        title: 'Created-time',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
      {
        title: 'Updated-time',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
      },
      
      {
        title: 'Action',
        key: 'action',
        render: (info, record) => (
          <Space size="middle">
            {/* <Button style={{backgroundColor:"red", color:"white"}} onClick={()=>Remove(info._id)}>Remove</Button> */}
            <Popconfirm
              title="Title"
              description="Means that all products related to this category will be deleted, you sure ?"
              onConfirm={()=>confirm(info._id)}
              onOpenChange={() => console.log('open change')}
            >
              <Button style={{background:"red"}} type="primary">Remove</Button>
            </Popconfirm>
            <Link to={`updateCt/${info._id}`}><Button style={{backgroundColor:"green", color:"white"}}>Update</Button></Link>
          </Space>
        ),
      },
    ];
    const data: DataCT[] = props.dataCT.map((item: DataCT) => {
      return {
          key: item._id,
          ...item
      }
  })
  return (
    <div>
      <Link to={`#`}><h1 className='text-4xl text-center text-green-400 animate__animated animate__pulse animate__infinite'>Category</h1></Link><br />
      <Link to={`addCt`}><h2 className='crud_admin'>Add category</h2></Link>
      <p className='text-sm text-yellow-500'>Attention: avoid deleting categories with product links</p>
      <Table columns={columns} dataSource={data} pagination={{pageSize:7}} style={{background:"white",borderRadius:"11px"}}/>
    </div>
  )
}

export default Category
