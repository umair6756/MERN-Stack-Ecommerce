import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';


import products from '../data/products-data.json'
import { CartContext } from './CartContext';



const TopProducts = () => {


      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    


    const {addToCart, useScrollAnimation} = useContext(CartContext);
    useScrollAnimation();



    useEffect(() => {
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
      }, []); // Empty dependency array ensures this runs only once (on component mount)
    
      // If loading, display a loading message
      if (loading) {
        return <div>Loading products...</div>;
      }
    
      // If error occurs, display an error message
      if (error) {
        return <div>Error: {error}</div>;
      }
  


      const lastEightProducts = products.slice(-8);

    return (
        <div className='product-container'>
            <div className='headings'>
                <h1 className='animationBox'>Top Selling Products</h1>
                <p className='about animationBox'>Check out our new furniture collection! T-shirts, fancy watch, women bags, and many more. The new collection brings an informal elegance to your personality.</p>
            </div>

            <div className="product-grid">

                {lastEightProducts.map(product => (
                    <div key={product.id} className='product-card animationBox'>
                        <div className="product-image">
                        <Link to={`/product/${product.id}`} className="image">
                                <img src={product.productImage} alt={product.productName}></img>
                        </Link>
                            {product.productSale && (
                                <span className="product-discount-label">{product.productSale}</span>
                            )}

                            <ul className="product-links">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-search" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-heart" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-random" />
                                    </a>
                                </li>
                            </ul>
                            <button  onClick={() => {addToCart(product);}} className="add-to-cart">
                                Add to Cart
                            </button>
                        </div>
                        <div className="product-content">
                            <h3 className="title">
                                <a href="#">{product.productName}</a>
                            </h3>
                            <div className="price">
                            {product.productSale ? (
                                       <>
                                      <span>{product.productPrice - (product.productPrice * product.productSale / 100).toFixed(2)}</span>
                                      <span className='mx-1' style={{color: "#888", textDecoration:"line-through", fontWeight: "400"}}>{product.productPrice}</span>
                                      </>
                                ): product.productPrice}
                            </div>
                        </div>

                    </div>

                ))}

            </div>


        </div>
    )
}

export default TopProducts