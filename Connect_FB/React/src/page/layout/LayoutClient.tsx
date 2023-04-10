import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutClient = () => {
  return (
    <div className='layoutCL'>
      {/* <header>
        <h1>Header Client</h1><hr />
      </header> */}
      <main>< Outlet/></main>
      {/* <footer>
        <h1>Footer Client</h1>
      </footer> */}
    </div>
  )
}

export default LayoutClient
