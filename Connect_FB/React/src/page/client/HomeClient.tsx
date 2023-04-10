import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from "react-router-dom"
import { Data, Ipop } from '../layout/typeAll/type'
import { Input, Space,Avatar } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
// Show all products on web.

const HomeClient = (props: Ipop) => {
    const [getData, setData] = useState<Data[]>([]);
    const [OneData,setOneData]=useState({});
    const navigate=useNavigate();//chuyển hướng đến detail khi chọn tìm kiếm product
    useEffect(() => {
        setData(props.data);
    },[props]);
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    // Hàm tìm kiếm khu web (Error by: click x2 thì nhận dc data nhưng click x1 đã chạy !!!)
    function handleFound(){
        if(OneData!=undefined){
            navigate(`detailPr/${OneData?._id}`);
        }
    }

    const onSearch = (value: string) => {
        getData?.map((get)=>{
            if(get.name==value){
                setOneData({...get});
            }
        });
        console.log(OneData);
        handleFound();
    };
    

    return (
        <div className='AreaCL'>
            <Link to={'/'}><h2 className='text-4xl text-center text-green-400 animate__animated animate__pulse animate__delay-1s'>Plant World Store</h2></Link>

            <div className="flex justify-between mt-5">
                <div className="">
                    <Space direction="vertical">
                        <Search
                            placeholder="input search text"
                            enterButton="Search"
                            size="small"
                            suffix={suffix}
                            onSearch={onSearch}
                        />
                    </Space>
                </div>
                <div className="">
                    <marquee className="text-white" width="500px" behavior="scroll" bgcolor=""> Welcome !</marquee>
                </div>
                <div className="flex space-x-5 w-[200px] h-8 bg-white rounded-lg text-center text-gray-600">
                    <Space size={16} wrap>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Space>
                    <Link to={'/register'}><h2 className='text-md hover:text-orange-400 leading-8'>Sign-up</h2></Link>
                    <Link to={'/login'}><h2 className='text-md hover:text-orange-400 leading-8'>Sign-in</h2></Link>
                </div>
            </div>
            <div className="shellCL grid grid-cols-4 mt-4 rounded-lg">
                {getData.map((get, index) => {
                    return (
                        <Link to={`detailPr/${get._id}`} key={index}>
                            <div key={index} className="w-[240px] h-[180px] rounded-lg m-4 col-span-1 hover:scale-100 scale-75 text-white duration-200 border-x border-gray-2z00 text-center text-2xl">
                                <p className='text-lg'>{get.name}</p>
                                <img className='mx-auto rounded-xl w-[240px] h-[150px]' src={get.image} alt="" />
                            </div>
                        </Link>
                    );
                })};
            </div>
            {/* ================================================================================ */}
            {/* <div className="foundPR">{
                <img src={OneData.image} alt="" />
            }</div> */}
        </div>
    );
};

export default HomeClient
