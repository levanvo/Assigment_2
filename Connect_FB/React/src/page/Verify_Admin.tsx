import React from 'react'
import { Link,useNavigate } from "react-router-dom"
import { Button, Checkbox, Form, Input } from 'antd';
import { Signin, getAllAccount, getOneAccount } from '../api/instanceAt';
import { Account } from './layout/typeAll/type';

const Verify_Admin = () => {
  const navigate=useNavigate();
  // bộ nhớ tạm
  let check:any={};
  //============================Hàm check quyền và account, admin sẽ vào khu quản lí <===> client sẽ chuyển về trang web .
  const onFinish = (values: any) => {
    // lưu trữ account vào bộ nhớ tạm
    check={email:values.email,pass:values.pass,};

    // buộc đăng nhập trên 3 kí tự và nếu ổn mới check account.
    values.pass.length<3?
    alert("Nhập 3 kí tự trở lên")
    :
    Signin(values).then(({data})=>data=="Không trùng mật khẩu"?alert("Sai email hoặc pass !!"):data.checkEmail.role=="admin"?navigate("/layout"):navigate("/"));
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
//============================ Hàm lấy lại pass
  const HandleFogot=async ()=>{
    // kiểm tra bộ nhớ tạm nếu không giá trị buộc nhập account để có info email lấy password
    if(check.email==undefined){
        alert("Cần đăng nhập trước để xác thực account có vào được hay không ? !");
      }
      const {data}:any=await getAllAccount();
      data.data.map((get:Account)=>get?.email==check?.email?alert(`Your pass is: ${get.pass}`):console.log("Email không tồn tại !"));
  }
  return (
    <div>
      <Link to={"/"}><h2 className='text-4xl text-center text-sky-400 mb-5 animate__animated  animate__infinite'>Sign-in</h2></Link>
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
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        ><Input type='email'/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="pass"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Link onClick={()=>HandleFogot()} className='text-yellow-400 ml-[65px]' to={`#`}>Forgot your password ?</Link>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className='mt-5' type="primary" htmlType="submit">
            Sign-in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Verify_Admin;
