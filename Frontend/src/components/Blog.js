import React, { useContext, useState } from 'react'
import './Products.css'


import blogData from '../data/blogs-data.json'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
const Blog = () => {
    // const [searchTerm, setSearchTerm] = useState("");
    const {searchTerm, setSearchTerm} = useContext(CartContext)
    const handleSearch = (e) => {
       setSearchTerm(e.target.value);
    }
    const filteredBlogs = blogData.filter((blogs) => {
    const matcheBlog = blogs.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

    return matcheBlog;
})

    return (

        <div className='blogPage d-flex flex-row ' style={{ background: '#f0f0f0' }}>
            <div className='blogPage-cards gap-3 d-flex flex-wrap  my-5  '>
                {filteredBlogs.map(blog => (

                    <div key={blog.id} className="blogPage-card ">
                        <div className='blogPage-img overflow-hidden '>
                            <Link to={`/blog/${blog.id}`}>
                            <img src={blog.image} className='w-100 ' style={{ height: "13rem", transition: '.6s' }} ></img>

                            </Link>
                        </div>
                        <div className='p-4'>
                            <button className='blogPage-btn px-3 my-2 text-uppercase text-white fw-bolder  '>Crerate</button>
                            <p className='blogPage-hover fs-5 fw-bold'>{blog.title}</p>
                            <p className='text-start ' style={{ textAlign: 'justify', opacity: '.7' }}>{blog.description}</p>
                        </div>

                        <div className='d-flex gap-5 border-top border-dark-subtle p-4'>
                            <a href='#' className='blogPage-hover fw-bold'>Read More</a>
                            <p className='opacity-50'>12-12-2024</p>
                        </div>
                    </div>



                ))}
            </div>




            <div className="blog-sidebar">
                {/* Search Box */}
                <div className="sidebar-box shadow">
                    <h4 className="box-title">Search</h4>
                    <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Search blog..."
                        onChange={handleSearch}
                        value={searchTerm}
                    />
                </div>

                {/* Categories Box */}
                <div className="sidebar-box shadow">
                    <h4 className="box-title ">Categories</h4>
                    <div className="category-list">
                        <label>
                        <span><i class="fa-solid fa-chevron-right"></i></span> Technology
                        </label>
                        <label>
                        <span><i class="fa-solid fa-chevron-right"></i></span> Health
                        </label>
                        <label>
                        <span><i class="fa-solid fa-chevron-right"></i></span> Travel
                        </label>
                        <label>
                            <span><i class="fa-solid fa-chevron-right"></i></span> Education
                        </label>
                    </div>
                </div>

                {/* Recent Posts Box */}
                <div className="sidebar-box shadow">
                    <h4 className="box-title">Recent Posts</h4>
                    <div className="recent-post">
                        <img src="https://via.placeholder.com/50" alt="Blog" />
                        <div className='recentPost-content d-flex  flex-column'>
                        <h5>How AI is Changing the World</h5>
                        
                        <p className='my-2 opacity-50' style={{fontSize:'13px'}}>24-10-2024</p>
                        </div>
                    </div>
                    <div className="recent-post">
                        <img src="https://via.placeholder.com/50" alt="Blog" />
                        <h5>Top 10 Travel Destinations</h5>
                    </div>
                    <div className="recent-post">
                        <img src="https://via.placeholder.com/50" alt="Blog" />
                        <h5>Benefits of Healthy Eating</h5>
                    </div>
                </div>

                {/* Social Icons Box */}
                <div className="sidebar-box shadow social-box">
                    <h4 className="box-title">Follow Us</h4>
                    {/* <div className="social-icons">
                        <a href="#" className="facebook">
                            f
                        </a>
                        <a href="#" className="twitter">
                            g
                        </a>
                        <a href="#" className="instagram">
                           gg 
                        </a>
                        <a href="#" className="linkedin">
                           g 
                        </a>
                    </div> */}
                </div>
            </div>
            {/* /.blog-card */}























        </div>
    )
}

export default Blog










