import React from 'react'
import { Link,useNavigate } from "react-router-dom"
import { Button, Checkbox, Form, Input } from 'antd';
import { dataAccount_Register } from './layout/typeAll/type';

const Register_Admin = (props:dataAccount_Register) => {
  const navigate=useNavigate();
  // ==================== Hàm đăng kí
  const onFinish = (values: any) => {
    // kiểm tra khớp pass và pass phải trên 2 kí tự
    if(values.pass==values.repass && values.pass.length>2){
      props.onRegister(values);
      navigate("/");
    }else{
      alert("Không khớp password hoặc pass cần nhập trên 3 kí tự !!")
    }
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Link to={"/"}><h2 className='text-4xl text-center text-sky-400 mb-5  animate__animated  animate__infinite'>Register an account</h2></Link>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 370 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        ><Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        ><Input type='email'/>
        </Form.Item>
        
        <Form.Item
          label="Password"
          name="pass"
          rules={[{ required: true, message: 'Please input your password!' }]}
        ><Input.Password />
        </Form.Item>

        <Form.Item
            label="Re-Password"
            name="repass"
            rules={[{ required: true, message: 'Please input your repassword!' }]}
        ><Input.Password/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign-up
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register_Admin;
