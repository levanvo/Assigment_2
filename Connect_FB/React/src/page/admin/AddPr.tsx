import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Button, Form, Input,Select,Upload } from 'antd';
import { AddPr_DataCT, Data ,PropsAdd} from '../layout/typeAll/type';
import { UploadOutlined } from '@ant-design/icons';
import axios from "axios"

const AddPr = (props: AddPr_DataCT) => {
    const DataCategory=props.dataCT;
    const navigate = useNavigate();
    const [CategoryImage, setCategoryImage] = useState('');
    const [Category, setCategory] = useState('');

    function handleChange (value: any) {
        setCategory(value);
    };
    // đẩy ảnh vào cloud và gửi kèm vs data gốc cho vào mongoose
    async function HandleImage(){
        const getImage=document.querySelector("#image");
        const Image=getImage?.files[0];
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

    // hàm thêm (data + image)
    const onFinish = (values: any) => { 
        const object={...values,categoryID:Category,image:CategoryImage};
        // console.log(object);
        props.onAdd(object);
        navigate("/layout/management")
        
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Link to={`/layout/management`}><h2 className='crud_admin mb-10'>Area add product</h2></Link>
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
{/*  */}
                {/* <Upload onChange={HandleImage}>
                    <Button>
                        <UploadOutlined /> Click to Upload
                    </Button>
                </Upload> */}
{/*  */}
                <input className='ml-[198px] mb-5' type="file" id='image' required onChange={HandleImage}/>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                ><Input  placeholder='The price....!' />
                </Form.Item>

                <Form.Item
                    label="Desc"
                    name="desc"
                    rules={[{ required: true, message: 'Please input your desc!' }]}
                ><Input  placeholder='The desc....!' />
                </Form.Item>
                <Select
                    defaultValue="Choose for category"
                    style={{ width: 400 ,marginLeft:200}}
                    onChange={handleChange}
                    options={[
                        {
                            label: 'Choose for category',
                            options: DataCategory.map((item:any) => ({ label: item.name, value: item._id })),
                        }
                    ]}
                />
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">Add</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default AddPr
