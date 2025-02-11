import React from 'react'
import Sidebar from '../component/Sidebar'
import ViewProducts from '../component/ViewProducts'

const AdminProductPage = () => {
  return (
    <div>
        <Sidebar label="Products"/>
        <ViewProducts/>
    </div>
  )
}

export default AdminProductPage