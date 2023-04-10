import React from 'react'
import {Outlet,Link} from "react-router-dom"

const LayoutAdmin = () => {

  return (
    <div className='layoutAD'>
      <header className='outSide'>
        <Link to={``}><img className='rounded-full h-20 w-20 mt-5 mx-auto img_profile' src="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320" alt="" /></Link>
        <h3 className='text-center text-2xl font-bold text-blue-400 underline'>Le Van Vo</h3>
        <br /><br />
        <Link to={`./management/dashBoard`} className='flex component space-x-5 justify-center'>
          <img className='w-10 h-10 mr-3' src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="" />
          <p className='my-auto textChoose'>Dash Board</p>
        </Link>
        <div className="h-5"></div>
        <Link to={`./management`} className='flex component space-x-5 justify-center'>
          <img className='w-10 h-10 mr-[13px]' src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="" />
          <p className='my-auto textChoose'>Products</p>
          <div className="w-[2px]"></div>
        </Link>
        <div className="h-5"></div>
        <Link to={`./category`} className='flex component space-x-5 justify-center'>
          <img className='w-10 h-10 mr-[13px]' src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="" />
          <p className='my-auto textChoose'>Category</p>
          <div className="w-[2px]"></div>
        </Link>
        <div className="h-5"></div>
        <Link to={`./management/achieVement`} className='flex component space-x-5 justify-center'>
          <img className='w-10 h-10 -mr-[1px]' src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="" />
          <p className='my-auto textChoose'>Achievements</p>
        </Link>
        <div className="h-5"></div>
        <Link to={`./management/setUp`} className='flex component space-x-5 justify-center'>
          <img className='w-10 h-10 mr-[35px]' src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="" />
          <p className='my-auto textChoose'>Setup</p>
          <div className="w-[2px]"></div>
        </Link>
        <div className="h-5"></div>
      </header>
      <main className='inSide'><Outlet/></main>
    </div>
  )
}
export default LayoutAdmin
