import React from 'react'
import './Blog.css'
import image1 from '../banners-image/blogs/blog1.jpg'
import Buttons, { Button } from './Buttons'


const blogdata = [
    {
        src: image1,
        date: 'Nov 11, 2024',
        name: 'Latest T-shirts Trends',

    },
    {
        src: image1,
        date: 'Nov 11, 2024',
        name: 'Latest T-shirts Trends',

    },
    {
        src: image1,
        date: 'Nov 11, 2024',
        name: 'Latest T-shirts Trends',

    }
]


const BlogCard = () => {
    return (
        <div>
            <div className='headings'>
                <h1 className='animationBox'> Our Blog </h1>
                <p className='about animationBox'> Design your personality using latest trends!Here are the latest trends, tips and design tricks to help you out.</p>
            </div>

            <div className='blog-card'>
                {blogdata.map((data, index) => (
                    <div key={index} className='cards animationBox'>
                        <img src={data.src}></img>
                        <div className='blogCard-content'>
                            <p className='date'>{data.date}</p>
                            <h3 className='blogName'>{data.name}</h3>
                            <a href='#'  className='read'><h6>Read More</h6></a>
                        </div>
                    </div>
                ))}

            </div>
            <div className='animationBox'><Button label="View More"/></div>
        </div>
    )
}

export default BlogCard