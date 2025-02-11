import React from 'react'
import Sidebar from '../component/Sidebar'
import Orders from '../component/Orders'

const AdminOrdersPage = () => {
  return (
    <div>
        <Sidebar label="Orders" />
        <Orders/>
    </div>
  )
}

export default AdminOrdersPage