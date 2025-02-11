import React, { useState,useContext } from 'react';
import '../component/Sidebar.css';
import './ViewProducts.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faCross, faEllipsisVertical, faEye, faFilter, faList, faMoon, faPrint, } from "@fortawesome/free-solid-svg-icons";
import { adminContext } from './adminContext';
const Orders = () => {
  const { 
    isGridView, 
    isFilterActive, 
    toggleFilterMenu, 
    toggleTheme, 
    switchToGridView, 
    switchToListView  // Assuming you have a 'switchToListView' function as well
  } = useContext(adminContext);

  return (
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
        <button className="app-content-headerButton" >Add Product</button>
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
            Invoice Id

          </div>
          <div className="product-cell category fw-bold">
            customer

          </div>
          <div className="product-cell status-cell fw-bold">
            
            Status

          </div>

          <div className="product-cell stock fw-bold">
            Quantity


          </div>
          <div className="product-cell price fw-bold">
          Price

          </div>
          <div className="product-cell price fw-bold">
            Action

          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">

            <span>#12345</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Customer:</span>Furniture
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Delivered</span>
          </div>

          <div className="product-cell stock">
            <span className="cell-label">Quantity:</span>36
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$560
          </div>
          <div className="product-cell action">
            <span className="cell-label">Action:</span> <FontAwesomeIcon icon={faPrint}/> <Link to="/invoice"><FontAwesomeIcon icon={faEye} className='mx-3'/></Link>  
          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="product"
            />
            <span>Lou</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Category:</span>Kitchen
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status disabled">Disabled</span>
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Sales:</span>6
          </div>
          <div className="product-cell stock">
            <span className="cell-label">Stock:</span>46
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$710
          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
              alt="product"
            />
            <span>Yellow</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Category:</span>Decoration
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Sales:</span>61
          </div>
          <div className="product-cell stock">
            <span className="cell-label">Stock:</span>56
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$360
          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">
            <img
              src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="product"
            />
            <span>Dreamy</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Category:</span>Bedroom
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status disabled">Disabled</span>
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Sales:</span>41
          </div>
          <div className="product-cell stock">
            <span className="cell-label">Stock:</span>66
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$260
          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">
            <img
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="product"
            />
            <span>Boheme</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Category:</span>Furniture
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Sales:</span>32
          </div>
          <div className="product-cell stock">
            <span className="cell-label">Stock:</span>40
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$350
          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">
            <img
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="product"
            />
            <span>Sky</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Category:</span>Bathroom
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status disabled">Disabled</span>
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Sales:</span>22
          </div>
          <div className="product-cell stock">
            <span className="cell-label">Stock:</span>44
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$160
          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">
            <img
              src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="product"
            />
            <span>Midnight</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Category:</span>Furniture
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Sales:</span>23
          </div>
          <div className="product-cell stock">
            <span className="cell-label">Stock:</span>45
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$340
          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">
            <img
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="product"
            />
            <span>Boheme</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Category:</span>Furniture
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Sales:</span>32
          </div>
          <div className="product-cell stock">
            <span className="cell-label">Stock:</span>40
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$350
          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">
            <img
              src="https://images.unsplash.com/photo-1511389026070-a14ae610a1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
              alt="product"
            />
            <span>Palm</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Category:</span>Decoration
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Sales:</span>24
          </div>
          <div className="product-cell stock">
            <span className="cell-label">Stock:</span>46
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$60
          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">
            <img
              src="https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="product"
            />
            <span>Forest</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Category:</span>Living Room
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Sales:</span>41
          </div>
          <div className="product-cell stock">
            <span className="cell-label">Stock:</span>16
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$270
          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">
            <img
              src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
              alt="product"
            />
            <span>Sand</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Category:</span>Living Room
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status disabled">Disabled</span>
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Sales:</span>52
          </div>
          <div className="product-cell stock">
            <span className="cell-label">Stock:</span>16
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$230
          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">
            <img
              src="https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="product"
            />
            <span>Autumn</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Category:</span>Decoration
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Sales:</span>21
          </div>
          <div className="product-cell stock">
            <span className="cell-label">Stock:</span>46
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$252
          </div>
        </div>
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">
            <img
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="product"
            />
            <span>Boheme</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Category:</span>Furniture
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">Active</span>
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Sales:</span>32
          </div>
          <div className="product-cell stock">
            <span className="cell-label">Stock:</span>40
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>$350
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Orders;
