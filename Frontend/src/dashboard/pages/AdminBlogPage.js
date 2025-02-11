import React from 'react'
import Sidebar from '../component/Sidebar'
import ViewBlog from '../component/ViewBlog'

const AdminBlogPage = () => {
  return (
    <div>
        <Sidebar label="Blogs" />
        <ViewBlog/>
    </div>
  )
}

export default AdminBlogPage