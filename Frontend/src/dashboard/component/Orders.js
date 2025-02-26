import React, { useState,useContext, useEffect } from 'react';
import '../component/Sidebar.css';
import './ViewProducts.css'
import { Link, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();


   const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetchProducts();
  }, []);
  
  
    const fetchProducts = async () => {
      // Fetch product data from the backend
      fetch('http://localhost:5000/order') // Change the URL based on your API endpoint
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error fetching products');
          }
          return response.json();
        })
        .then((data) => {
          setOrders(data);  // Set the fetched products
          setLoading(false);   // Stop loading
        })
        .catch((err) => {
          setError(err.message);  // Handle error
          setLoading(false);
        });
      };

      if (loading) {
        return <div>Loading products...</div>;
      }
    
      // If error occurs, display an error message
      if (error) {
        return <div>Error: {error}</div>;
      }
    

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

        {orders.map((order) => (
        <div className="products-row">
          <button className="cell-more-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div className="product-cell image">

            <span>{order.invoiceNumber}</span>
          </div>
          <div className="product-cell category">
            <span className="cell-label">Customer:</span>{order.customer.name}
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">{order.orderStatus}</span>
          </div>

          <div className="product-cell stock">
            <span className="cell-label">Quantity:</span>7
          </div>
          <div className="product-cell price">
            <span className="cell-label">Price:</span>{order.totalPrice}
          </div>
          <div className="product-cell action">
            <span className="cell-label">Action:</span> <FontAwesomeIcon icon={faPrint}/> <FontAwesomeIcon icon={faEye} className='mx-3' onClick={() => navigate(`/order/${order.invoiceNumber}`)}/>
          </div>
        </div>
        ))}
       
   

      </div>
    </div>
  </div>

  );
};

export default Orders;
