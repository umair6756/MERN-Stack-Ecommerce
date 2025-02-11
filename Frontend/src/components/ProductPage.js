import React, { useContext, useState } from "react";
import "./ProductPage.css";
import './Products.css'
import products from "../data/products-data.json";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ProductPage = () => {
    // const [searchTerm, setSearchTerm] = useState("");

    const {searchTerm, addToCart, addToWish} = useContext(CartContext)
      
  
    const [sortedOption, setSortedOption] = useState("")
    const [categories, setCategories] = useState({
        Watches: false,
        Clothing: false,
        Glases: false,
        Bags:false,
    });
    const [brands, setBrands] = useState({
        Nike: false,
        Samsung: false,
        Apple: false,
        GUCI: false,
    });

    //   const products = [
    //     { id: 1, name: "iPhone 14", brand: "Apple", category: "Electronics" },
    //     { id: 2, name: "Galaxy S22", brand: "Samsung", category: "Electronics" },
    //     { id: 3, name: "Nike Shoes", brand: "Nike", category: "Clothing" },
    //     // Add more products
    //   ];



    const handleCategoryChange = (e) => {
        setCategories({ ...categories, [e.target.name]: e.target.checked });
    };

    const handleBrandChange = (e) => {
        setBrands({ ...brands, [e.target.name]: e.target.checked });
    };

    const handleSort = (e) => {
        setSortedOption(e.target.value);
    };
    


    const filteredProducts = products.filter((product) => {
        const matchesSearch = searchTerm
        .toLowerCase()
        .replace(/\s+/g, "") // Search term se spaces hatao
        .split("") // Har character ko tod do
        .every((char, index) => 
          product.name.toLowerCase().replace(/\s+/g, "").includes(char)
        );
      
    
    
        const matchesCategory =
            Object.keys(categories).some((key) => categories[key] && product.category === key) || !Object.values(categories).includes(true);
        const matchesBrand =
            Object.keys(brands).some((key) => brands[key] && product.brand === key) || !Object.values(brands).includes(true);
        

        return matchesSearch && matchesCategory && matchesBrand;

    });

    // for sorted products from high to low and low to high 

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortedOption === "low-price") return a.discountPrice - b.discountPrice;
        if (sortedOption === "high-price") return b.discountPrice - a.discountPrice;
        return 0; // No sorting applied
    });
    

    



    return (
        <div className="product-page" style={{paddingTop:"7rem"}}>
            {/* Sidebar */}
            <div className="productPage-sidebar">
                <h3>Categories</h3>
                
                
                {Object.keys(categories).map((category) => (
                    <label key={category} className="productPage-checkbox my-5">
                        <input
                            type="checkbox"
                            name={category}
                            checked={categories[category]}
                            onChange={handleCategoryChange}
                            
                            
                        />
                        <span></span>
                        {category}
                    </label>
                ))}
               
              

                <h3>Brands</h3>
                
                {Object.keys(brands).map((brand) => (
                    <label key={brand} className="productPage-checkbox my-5">
                        <input
                            type="checkbox"
                            name={brand}
                            checked={brands[brand]}
                            onChange={handleBrandChange}
                            
                            
                        />
                        <span></span>
                        {brand}
                        
                    </label>
                ))}
                
            </div>

            {/* Main Section */}
            <div className="productPage-main">
                <div className="top-bar">
                    <div className="product-count">
                        Showing <span className="product-length">{filteredProducts.length}</span> of <span className="product-length">{products.length}</span> Products
                    </div>


                    <select value={sortedOption} onChange={handleSort} className=" product-select" >
                        <option value="">Sort by</option>
                        <option value="low-price">Price: Low to High</option>
                        <option value="high-price" >Price: High to Low</option>
                    </select>
                </div>

                {/* Product Cards */}
                <div className="product-grid">
                    {sortedProducts.map((product) => (
                        <div key={product.id} className='product-card detail-product'>
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
        </div>
    );
};

export default ProductPage;
