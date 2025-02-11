import React from 'react'
import Navbar from '../components/Navbar'
import { HeroSection } from '../components/Buttons'
import Blog from '../components/Blog'
import Feactures from '../components/Feactures'
import Footer from '../components/Footer'

const BlogPage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection headingLabel="Our Blogs" heroBackground="blog-hero"/>
        <Blog/>
        <Feactures/>
        <Footer/>
    </div>
  )
}

export default BlogPage