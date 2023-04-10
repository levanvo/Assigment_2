import React from 'react'
import {Link} from "react-router-dom"

const DashBoard = () => {
  return (
    <div>
      <Link to={`#`}><h1 className='text-4xl text-center text-green-400 animate__animated animate__pulse animate__infinite'>Dashboard</h1></Link><br />
    </div>
  )
}

export default DashBoard
