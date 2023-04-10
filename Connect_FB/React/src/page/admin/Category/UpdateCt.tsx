import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Button, Checkbox, Form, Input } from 'antd';
import { ArrayCT_add } from '../../layout/typeAll/type';

const UpdateCT = (props: ArrayCT_add) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [getData,setData]=useState({});
  // useEffect(()=>{
  //   const see=props.data.find(t=>t._id==id);
  //   setData(see);
  // },[props]); 
  // console.log(getData.name);
  
  const onFinish = (values: any) => { 
    props.onUpdateCT({...values,id});
    navigate("/layout/category");
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Link to={`/layout/category`}><h1 className='crud_admin mb-10'>Area update category</h1></Link>
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name category!' }]}
        ><Input placeholder='The name....!'/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">Update</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UpdateCT
