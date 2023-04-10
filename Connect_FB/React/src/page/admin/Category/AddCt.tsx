import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Button, Form, Input } from 'antd';
import { ArrayCT_add } from '../../layout/typeAll/type';

const AddCt = (props: ArrayCT_add) => {
    const navigate = useNavigate();
    const onFinish = (values: any) => { 
        props.onAddCT(values);
        navigate("/layout/category")
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Link to={`/layout/category`}><h2 className='crud_admin mb-10'>Area add category</h2></Link>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
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
                    rules={[{ required: true, message: 'Please input your username!' }]}
                ><Input  placeholder='The name....!' />
                </Form.Item>
                
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">Add</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default AddCt
