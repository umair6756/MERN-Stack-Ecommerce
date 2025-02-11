import React from 'react'
import Navbar from '../components/Navbar'
import BlogDetail from '../components/BlogDetail'
import { Reviews } from '../components/Reviews'
import Feactures from '../components/Feactures'
import Footer from '../components/Footer'

const BlogDetailPage = () => {
  return (
    <div>
        <Navbar/>
        <BlogDetail/>
        <div className='' style={{width:"89%", margin: "20px auto"}}>
        <Reviews label="Comments" leaveBtn="Leave comment" showRating={false} imageSize="smallImage"/>

        </div>
        <Feactures/>
        <Footer/> 
    </div>
  )
}

export default BlogDetailPage