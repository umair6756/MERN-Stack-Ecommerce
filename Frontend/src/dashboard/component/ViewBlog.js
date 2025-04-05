import React from 'react'
import { useState, useContext,useEffect } from 'react';
import './ViewProducts.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faCross, faEllipsisVertical, faFilter, faList, faMoon, faTrash, } from "@fortawesome/free-solid-svg-icons";
import Sidebar from '../component/Sidebar'
import { adminContext } from './adminContext';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

const ViewBlog = () => {

  const {showSuccess, shwoError} = useContext(adminContext)

  const [blogs, setblogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 



  useEffect(() => {
    fetchProducts();
}, []);





  const { 
    isGridView, 
    isFilterActive, 
    toggleFilterMenu, 
    toggleTheme, 
    switchToGridView, 
    switchToListView  // Assuming you have a 'switchToListView' function as well
  } = useContext(adminContext);


  const fetchProducts = async () => {
    // Fetch product data from the backend
    fetch('http://localhost:5000/blog') // Change the URL based on your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        return response.json();
      })
      .then((data) => {
        setblogs(data);  // Set the fetched products
        setLoading(false);   // Stop loading
      })
      .catch((err) => {
        setError(err.message);  // Handle error
        setLoading(false);
      });
  }; // Empty dependency array ensures this runs only once (on component mount)

  // If loading, display a loading message
  if (loading) {
    return <div>Loading products...</div>;
  }

  // If error occurs, display an error message
  if (error) {
    return <div>Error: {error}</div>;
  }





  const deleteblog = async (id) => {
    try {
      // Make the DELETE request and wait for the response
      const response = await fetch(`http://localhost:5000/blog/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        // Only update the state if the deletion was successful
        setblogs(blogs.filter((blogs) => blogs._id !== id));
        showSuccess("Blog Deleted Successfully");
      } else {
        shwoError("Blog Not Deleted");
      }
    } catch (error) {
      shwoError("Blog Not Deleted", error.message);
      console.log(error);
    }
  };
  

  return (
    <div>
      <div className="app-container">
        <div className="sidebar">
          <div className="sidebar-header">

          </div>


        </div>
        <div className="app-content">
          <div className="app-content-header">
            <h1 className="app-content-headerText">Products</h1>
            <button className="mode-switch" title="Switch Theme" onClick={toggleTheme}>
              <FontAwesomeIcon icon={faMoon} className='fs-3' style={{ transform: "rotate(-25deg)" }} />
            </button>
            <Link to='/blogform'>
            <button className="app-content-headerButton" >Add Blog</button>

            </Link>
          </div>
          <div className="app-content-actions">
            <input className="search-bar" placeholder="Search..." type="text" />
            <div className="app-content-actions-wrapper">
              <div className="filter-button-wrapper">
                <button className="action-button filter jsFilter" onClick={toggleFilterMenu}>
                  <span>Filter</span>
                  <FontAwesomeIcon icon={faFilter} />
                </button>
                <div className={`filter-menu ${isFilterActive ? 'active' : ''}`}>
                  <label>Category</label>
                  <select>
                    <option>All Categories</option>
                    <option>Furniture</option> <option>Decoration</option>
                    <option>Kitchen</option>
                    <option>Bathroom</option>
                  </select>
                  <label>Status</label>
                  <select>
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Disabled</option>
                  </select>
                  <div className="filter-menu-buttons">
                    <button className="filter-button reset">Reset</button>
                    <button className="filter-button apply">Apply</button>
                  </div>
                </div>
              </div>
              <button className={`action-button list ${!isGridView ? 'active' : ''}`} title="List View" onClick={switchToListView}>
                <FontAwesomeIcon icon={faList} className='fs-4' />
              </button>
              <button className={`action-button grid ${isGridView ? 'active' : ''}`} title="Grid View" onClick={switchToGridView}>
                <FontAwesomeIcon icon={faBorderAll} className='fs-4' />
              </button>
            </div>
          </div>
          <div className={`products-area-wrapper ${isGridView ? 'gridView' : 'tableView'}`}>
            <div className="products-header">
              <div className="product-cell image fw-bold">
                Title

              </div>
              <div className="product-cell category">
                Category

              </div>
              <div className="product-cell status-cell">
                Author

              </div>
              <div className="product-cell sales">
                Published

              </div>
              <div className="product-cell stock">
                Comments


              </div>
              <div className="product-cell price">
                Status

              </div>
              <div className="product-cell price">
                Action

              </div>
            </div>

            {blogs.map((blog) => (
            <div className="products-row">
              <button className="cell-more-button">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
              <div className="product-cell image">
                <img
                  src={blog.heroImage}
                  alt={blog.title}
                />
                <span>{blog.title}</span>
              </div>

              <div className="product-cell status-cell">
                <span className="cell-label">Status:</span>
                <span className="status active">Active</span>
              </div>
              <div className="product-cell sales">
                <span className="cell-label">Author:</span>{blog.author}
              </div>
              <div className="product-cell stock">
                <span className="cell-label">Published:</span>{moment(blog.date).format("DD MMMM YYYY")}
              </div>
              <div className="product-cell price">
                <span className="cell-label">Comments:</span>$560
              </div>

              <div className="product-cell price">
                <span className="cell-label">Action</span><FontAwesomeIcon icon={faTrash} onClick={() =>deleteblog(blog._id)}  />
              </div>

            </div>))}
           

          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewBlog