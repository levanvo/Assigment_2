import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { Data, Props } from '../layout/typeAll/type';
import { Pr_Ct_onUpdate } from '../layout/typeAll/type';
import axios from "axios"

const UpdatePr = (props: Pr_Ct_onUpdate) => {
  const DataCategory = props.dataCT;
  console.log(DataCategory);
  const { id } = useParams();
  const navigate = useNavigate();
  const [Category, setCategory] = useState('');
  const [CategoryImage, setCategoryImage] = useState('');

  async function HandleImage() {
    const getImage = document.querySelector("#image");
    const Image = getImage.files[0];
    const cloudName = "darnprw0q";
    const presetName = "vole_2k";
    const folderName = "assigment_TypeScript";
    const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const upImage = new FormData();

    upImage.append("upload_preset", presetName);
    upImage.append("folder", folderName);
    upImage.append("file", Image);
    const get_image = await axios.post(api, upImage, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setCategoryImage(get_image.data.secure_url);
  }
  function handleChange(value: any) {
    setCategory(value);
  };

  const onFinish = (values: any) => {
    const object = { ...values, categoryID: Category, id,image:CategoryImage };
    props.onUpdate(object);
    navigate("/layout/management");
    // console.log(CategoryImage);

  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Link to={`/layout/management`}><h1 className='crud_admin mb-10'>Area update product</h1></Link>
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
          rules={[{ required: true, message: 'Please input your username!' }]}
        ><Input placeholder='The name....!' />
        </Form.Item>

        {/* <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: 'Please input your image!' }]}
        ><Input placeholder='The image....!' />
        </Form.Item> */}
        <input className='ml-[198px] mb-5' type="file" id='image' required onChange={HandleImage} />

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input your price!' }]}
        ><Input placeholder='The price....!' />
        </Form.Item>

        <Form.Item
          label="Desc"
          name="desc"
          rules={[{ required: true, message: 'Please input your desc!' }]}
        ><Input placeholder='The desc....!' />
        </Form.Item>

        <Select
          defaultValue="Choose for category"
          style={{ width: 400, marginLeft: 126 }}
          onChange={handleChange}
          options={[
            {
              label: 'Choose for category',
              options: DataCategory.map((item: any) => ({ label: item.name, value: item._id })),
            }
          ]}
        />

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">Update</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UpdatePr
