import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { Data, Props } from '../layout/typeAll/type';
import { Image } from "antd"
import { getOne } from '../../api/instancePr';
const DetailPr = (props: Data) => {
  const { id } = useParams();
  const [getData, setData] = useState({});
  const [getAll_category, setAll_category] = useState([]);// Error: chỉ lấy dc sản phẩm liên quan bởi khi setAll_category chỉ lưu về 1 object mà k set thành 1 array chứa các object
  useEffect(() => {
    const see = props.data.filter((t: any) => t._id == id);
    setData(see);
  }, [props]);
  const lengthCategory = getData[0]?.categoryID?.products?.length;
  const ArrayIdProducts = getData[0]?.categoryID?.products;
  
  // ====>> set mục lieent quan vào mảng nhưng khi lấy chỉ dc 1 object => ko dùng dc map để show all products !
  useEffect(() => {
    for (let i = 0; i < lengthCategory; i++) {
      getOne(ArrayIdProducts[i]).then(({ data }) => setAll_category(data.data));
    };
  }, [ArrayIdProducts]);
// console.log(ArrayIdProducts);

  return (
    <div className='AreaCL'>
      <Link to={`/`}><h1 className='text-4xl text-center hover:text-gray-300 text-green-400 animate__animated animate__pulse animate__delay-1s'>Details Product</h1></Link><br />

      <div className="flex space-x-10 w-[1100px] h-96">
        <div className="w-[400px] h-96 rounded-xl overflow-hidden">
          <Image style={{ width: "400px", height: "400px" }} className='w-[400px] h-96 duration-200 rounded-lg' src={getData[0]?.image} />
        </div>
        <div className="w-[660px] h-96 border border-gray-400 rounded-lg">
          <p className='text-lg text-gray-400 ml-5 mt-5'>- Product: <span className='text-2xl text-gray-300'>{getData[0]?.name}</span></p>
          <p className='text-lg text-gray-400 ml-5 mt-5'>- Price: <span className='text-lg text-yellow-300'>{getData[0]?.price} <span className='text-sm text-gray-100'>VND</span></span></p>
          <p className='text-lg text-gray-400 ml-5 mt-5'>- Content:</p>
          <div className="w-[640px] mx-auto mt-3 rounded-lg text-sm h-44 text-gray-300 border border-gray-500"><span className='ml-3 mt-3'>{getData[0]?.desc}</span></div>
          <p className='text-sm text-gray-400 ml-5 mt-3'>- List: <span className=' text-gray-300'>{getData[0]?.categoryID.name}</span></p>
        </div>
      </div>
      <div className="">
        <h1>related items</h1>
        <div className="flex space-x-5 border-y border-gray-300">
          {/* {getAll_category?.map((get) => {
            return (
              <div key={get?.id} className="w-[200px] h-[170px] rounded-lg col-span-1 hover:scale-65 scale-75 text-white duration-200 border-x-2 border-gray-200 text-center text-2xl">
                <p className=''>{get?.name}</p>
                <img className='mx-auto rounded-xl w-[200px] h-[140px]' src={get?.image} alt="" />
              </div>
             )
          })} */}
          <Link to={`#`}>
            <div key={getAll_category?.id} className="w-[200px] h-[170px] rounded-lg col-span-1 hover:scale-[0.7] scale-75 text-white duration-100  text-center text-2xl">
              <p className=''>{getAll_category?.name}</p>
              <Image style={{ width: "200px", height: "140px" }} className=' duration-200 rounded-lg' src={getAll_category?.image} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailPr
