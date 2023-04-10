import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { Space, Table, Button,Image } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Data ,IProps} from '../layout/typeAll/type';
import { getOne_CT } from '../../api/instanceCt';

const Management = (props: IProps) => {
    // const nameCT=props.data.map((t:any)=>t.categoryID.name);
    // console.log(nameCT);
    function Remove(id:string){
      const consider=window.confirm("Do you want remove it ?");
      if(consider){
        props.onRemove(id);
      }
    }
      const columns: ColumnsType<Data> = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Image',
          // dataIndex: 'image',
          render:(text,record)=>(
            <Image style={{width:"110px",height:"55px"}} src={record.image}/>
          ),
          key: 'image',
        },
        {
          title: 'Desc',
          key: 'desc',
          render: (text, record:any) => {
            return <span>{record.desc.slice(0,80)+" ..."}</span>
         }
        },
        {
          title: 'Category',
          // dataIndex: categoryID,
          key: 'categoryID',
          render: (text, record:any) => {
            return <span>{record.categoryID.name}</span>
         }
        },
        {
          title: 'Action',
          key: 'action',
          render: (info, record) => (
            <Space size="middle">
              <Button style={{backgroundColor:"red", color:"white"}} onClick={()=>Remove(info._id)}>Remove</Button>
              <Link to={`update/${info._id}`}><Button style={{backgroundColor:"green", color:"white"}}>Update</Button></Link>
            </Space>
          ),
        },
      ];
      const data: Data[] = props.data.map((item: Data) => {
        return {
            key: item._id,
            ...item
        }
    })
    return (
        <div>
            <Link to={`#`}><h1 className='text-4xl text-center text-green-400 animate__animated animate__pulse animate__infinite'>Products</h1></Link><br />
            <Link to={"/layout/management/add"}><h1 className='crud_admin'>Add Product</h1></Link>
            <Table columns={columns} dataSource={data} pagination={{pageSize:5}} style={{background:"white",borderRadius:"11px"}}/>
        </div>
    )
}

export default Management