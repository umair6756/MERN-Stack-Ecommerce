import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import './ViewProducts.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faArrowsUpDown, faBorderAll, faCross, faEllipsisVertical, faFilter, faList, faMoon, faPen, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import Sidebar from '../component/Sidebar';
import { adminContext } from '../component/adminContext'
import { Link, useParams } from 'react-router-dom';


const ViewProducts = () => {

  const {showSuccess, showError} = useContext(adminContext)

  const { 
    isGridView, 
    isFilterActive, 
    toggleFilterMenu, 
    toggleTheme, 
    switchToGridView, 
    switchToListView  // Assuming you have a 'switchToListView' function as well
  } = useContext(adminContext);
  




  // proudct Form  ==========

  const [imagePreview, setImagePreview] = useState(null);
  const [onSale, setOnSale] = useState(false);
  const [formVisible, setFormVisible] = useState(false)

  const [searchTerm, setSearchTerm] = useState("")

const [categories, setCategories] = useState({
        Watches: false,
        Clothes: false,
        Glases: false,
        Bags:false,
        Others:false

    });



    const {id} = useParams()




     const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
}, []);


  const fetchProducts = async () => {
    // Fetch product data from the backend
    fetch('http://localhost:5000/product') // Change the URL based on your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);  // Set the fetched products
        setLoading(false);   // Stop loading
      })
      .catch((err) => {
        setError(err.message);  // Handle error
        setLoading(false);
      });
    };
// Empty dependency array ensures this runs only once (on component mount)

// const deleteProduct = async (id) => {
//   try{
//   fetch(`http://localhost:5000/product/${id}`, {
//     method: "DELETE",
//   })
//   setProducts(products.filter((product) => product._id !== id))
//   alert("Product Deleted Successfully")
// }catch(error){
//   alert("Product Not Deleted")
//   console.log(error)
// }
// }

const deleteProduct = async (id) => {
  try {
    // Make the DELETE request and wait for the response
    const response = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Only update the state if the deletion was successful
      setProducts(products.filter((product) => product._id !== id));
      showSuccess("Product Deleted Successfully");
    } else {
      showError("Product Not Deleted");
    }
  } catch (error) {
    showError("Product Not Deleted", error.message);
    console.log(error);
  }
};









  // If loading, display a loading message
  if (loading) {
    return <div>Loading products...</div>;
  }

  // If error occurs, display an error message
  if (error) {
    return <div>Error: {error}</div>;
  }



  const filteredProducts = products.filter((product) => {
    // Search filtering
    const matchesSearch = searchTerm
      .toLowerCase()
      .replace(/\s+/g, "")
      .split("")
      .every((char) =>
        product.productName.toLowerCase().replace(/\s+/g, "").includes(char)
      );
  
    // Category filtering
    const matchesCategory =
      Object.keys(categories).some(
        (key) => categories[key] && product.productCatogary === key
      ) || !Object.values(categories).includes(true); // Show all if no category is selected
  
    return matchesSearch && matchesCategory;
  });
  




  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
  
    // If "All" is selected, reset the categories to show all
    if (selectedCategory === "All") {
      setCategories({
        Watches: false,
        Clothing: false,
        Glasses: false,
        Bags: false,
        Others: false,
      });
    } else {
      // Toggle the selected category
      setCategories({
        ...categories,
        [selectedCategory]: !categories[selectedCategory],
      });
    }
  };
  




const handleSearch = (e) => {
  setSearchTerm(e.target.value);
}



  return (
    <div>

<div className="app-container">


  <div className="app-content">
    <div className="app-content-header">
      <h1 className="app-content-headerText">Products</h1>
      <button className="mode-switch" title="Switch Theme" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faMoon} className='fs-3' style={{transform:"rotate(-25deg)"}}/>
      </button>
      <Link to='/productform'>
      <button className="app-content-headerButton">Add Product</button>

      </Link>
    </div>
    <div className="app-content-actions">
      <input className="search-bar" placeholder="Search..." type="text" onChange={handleSearch}/>
      <div className="app-content-actions-wrapper">
        <div className="filter-button-wrapper">
          <button className="action-button filter jsFilter" onClick={toggleFilterMenu}>
            <span>Filter</span>
            <FontAwesomeIcon icon={faFilter}/>
          </button>
          <div className={`filter-menu ${isFilterActive ? 'active' : ''}`}  style={{zIndex:'1000'}}>
            <label>Category</label>
           
            <select onChange={handleCategoryChange} >
            <option value="All">All</option> {/* Added "All" option */}
  {Object.keys(categories).map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
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
           <FontAwesomeIcon icon={faList} className='fs-4'/>
        </button>
        <button className={`action-button grid ${isGridView ? 'active' : ''}`} title="Grid View" onClick={switchToGridView}>
            <FontAwesomeIcon icon={faBorderAll} className='fs-4'/>
        </button>
      </div>
    </div>
    {filteredProducts.length > 0 ? (
    <div className={`products-area-wrapper ${isGridView ? 'gridView' : 'tableView'}`}>
      <div className="products-header">
        <div className="product-cell image">
          Items
          <button className="sort-button ">
           <FontAwesomeIcon icon={faArrowDown} className='fw-0 fs-6'/>
           <FontAwesomeIcon icon={faArrowUp} className='fw-0 fs-6'/>

          </button>
        </div>
        <div className="product-cell category">
          Category

        </div>
        <div className="product-cell status-cell">
          Status

        </div>
        <div className="product-cell sales">
          Sales

        </div>
        <div className="product-cell stock">
          Stock
 
        </div>
        <div className="product-cell price">
          Price

        </div>
      </div>
      {filteredProducts.map((product) => (
      <div className="products-row">
        <button className="cell-more-button">
          <FontAwesomeIcon icon={faEllipsisVertical}/>
        </button>
        <div className="product-cell image">
          <img
            src={product.productImage}
            alt={product.productName}
          />
          <span>{product.productName}</span>
        </div>
        <div className="product-cell category">
          <span className="cell-label">Category:</span>{product.productCatogary}
        </div>
        <div className="product-cell status-cell">
          <span className="cell-label">Status:</span>
          <span className="status active">Active</span>
        </div>
        <div className="product-cell sales">
          <span className="cell-label">Sales:</span>{product.productSale}
        </div>
        <div className="product-cell stock">
          <span className="cell-label">Stock:</span>{product.productStock}
        </div>
        <div className="product-cell price">
          <span className="cell-label">Price:</span>{product.productPrice}
        </div>
        <div className="product-cell price">
          <span className="cell-label">Action:</span><FontAwesomeIcon icon={faTrash} onClick={() => deleteProduct(product._id)}/>  
        </div>
      </div>
      ))}
    </div>
   ): (
      <div>No products available</div>
    )}
  </div>
</div>




{/* =============  Product Form    ============== */}





<adminProvider></adminProvider>
    </div>
  )
}

export default ViewProducts