import React from 'react'
import { Link } from "react-router-dom"

const HomeAdmin = () => {
    return (
        <div>
            <Link to={'/'}><h2 className='text-4xl text-center hover:text-gray-300 text-yellow-400 animate__animated animate__pulse animate__infinite'>Home Page Admin</h2></Link>
        </div>
    )
}

export default HomeAdmin
