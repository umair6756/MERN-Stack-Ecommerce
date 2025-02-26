import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState} from 'react';
import { CartContext } from './CartContext';
import products from '../data/products-data.json'



const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { addToCart, addToWish, useScrollAnimation } = useContext(CartContext);

    useScrollAnimation()

    // const {searchTerm} = useContext(CartContext)

    // const filteredProducts = firstSixProducts.filter((product) =>{
    //     const matchesSearch = product.name
    //     .toLowerCase()
    //     .includes(searchTerm.toLowerCase())
        
    //     return matchesSearch
    // })


    
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

    const firstSixProducts = products.slice(0,8);



    return (
        <div className='product-container'>
            <div className='headings'>
                <h1 className='animationBox'>New Arrivals</h1>
                <p className='about animationBox'>Check out our new furniture collection! T-shirts, fancy watch, women bags, and many more. The new collection brings an informal elegance to your personality.</p>
            </div>

            <div className="product-grid">

                {firstSixProducts.map(product => (
                    <div key={product.id} className='product-card animationBox'>
                        <div className="product-image">
                            <Link to={`/product/${product._id}`} className="image">
                                <img src={product.productImage} alt={product.productName}></img>
                            </Link>
                            {product.productSale && (
                                <span className="product-discount-label">{product.productSale}%</span>
                            )}

                            <ul className="product-links">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-search" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={() => {addToWish(product);}}>
                                        <i className="fa fa-heart" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-random" />
                                    </a>
                                </li>
                            </ul>
                            <button className="add-to-cart" onClick={() => {addToCart(product);}}>
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

export default Products