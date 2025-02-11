import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom';
import { useContext, useEffect} from 'react';
import { CartContext } from './CartContext';
import products from '../data/products-data.json'
const firstSixProducts = products.slice(0,8);


const Products = () => {

    const { addToCart, addToWish, useScrollAnimation } = useContext(CartContext);

    useScrollAnimation()

    const {searchTerm} = useContext(CartContext)

    const filteredProducts = firstSixProducts.filter((product) =>{
        const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        
        return matchesSearch
    })


    return (
        <div className='product-container'>
            <div className='headings'>
                <h1 className='animationBox'>New Arrivals</h1>
                <p className='about animationBox'>Check out our new furniture collection! T-shirts, fancy watch, women bags, and many more. The new collection brings an informal elegance to your personality.</p>
            </div>

            <div className="product-grid">

                {filteredProducts.map(product => (
                    <div key={product.id} className='product-card animationBox'>
                        <div className="product-image">
                            <Link to={`/product/${product.id}`} className="image">
                                <img src={product.image} alt={product.name}></img>
                            </Link>
                            {product.onSale && (
                                <span className="product-discount-label">{product.sale}%</span>
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

export default Products