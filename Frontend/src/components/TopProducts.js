import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';


import products from '../data/products-data.json'
import { CartContext } from './CartContext';

const firstEightProducts = products.slice(0,8);

const TopProducts = () => {

    const {addToCart, useScrollAnimation} = useContext(CartContext);
    useScrollAnimation();
    return (
        <div className='product-container'>
            <div className='headings'>
                <h1 className='animationBox'>Top Selling Products</h1>
                <p className='about animationBox'>Check out our new furniture collection! T-shirts, fancy watch, women bags, and many more. The new collection brings an informal elegance to your personality.</p>
            </div>

            <div className="product-grid">

                {firstEightProducts .map(product => (
                    <div key={product.id} className='product-card animationBox'>
                        <div className="product-image">
                        <Link to={`/product/${product.id}`} className="image">
                                <img src={product.image} alt={product.name}></img>
                        </Link>
                            {product.onSale && (
                                <span className="product-discount-label">{product.sale}</span>
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
                                <a href="#">{product.name}</a>
                            </h3>
                            <div className="price">
                            {product.onSale ? (
                                       <>
                                      <span>{product.price - (product.price * product.sale / 100).toFixed(2)}</span>
                                      <span className='mx-1' style={{color: "#888", textDecoration:"line-through", fontWeight: "400"}}>{product.price}</span>
                                      </>
                                ): product.price}
                            </div>
                        </div>

                    </div>

                ))}

            </div>


        </div>
    )
}

export default TopProducts