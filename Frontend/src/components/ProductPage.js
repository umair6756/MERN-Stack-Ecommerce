import React, { useContext, useState, useEffect } from "react";
import "./ProductPage.css";
import "./Products.css";
import products from "../data/products-data.json";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  const { searchTerm, addToCart, addToWish } = useContext(CartContext);

  const [sortedOption, setSortedOption] = useState("");
  const [categories, setCategories] = useState({
    Watches: false,
    Clothes: false,
    Glases: false,
    Bags: false,
    Others: false,
  });
  const [brands, setBrands] = useState({
    Nike: false,
    Samsung: false,
    Apple: false,
    GUCI: false,
    KWC: false,
    Others: false,
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product data from the backend
    fetch("http://localhost:5000/product") // Change the URL based on your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data); // Set the fetched products
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError(err.message); // Handle error
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

 
  const productsPerPage = 2;

  // Calculate indexes for slicing products
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  // Total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle pagination
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };



  const filteredProducts = displayedProducts.filter((product) => {
    const matchesSearch = searchTerm
      .toLowerCase()
      .replace(/\s+/g, "") // Search term se spaces hatao
      .split("") // Har character ko tod do
      .every((char, index) =>
        product.productName.toLowerCase().replace(/\s+/g, "").includes(char)
      );

    const matchesCategory =
      Object.keys(categories).some(
        (key) => categories[key] && product.productCatogary === key
      ) || !Object.values(categories).includes(true);
    const matchesBrand =
      Object.keys(brands).some(
        (key) => brands[key] && product.productBrand === key
      ) || !Object.values(brands).includes(true);

    return matchesSearch && matchesCategory && matchesBrand;
  });

  // for sorted products from high to low and low to high

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortedOption === "low-price") return a.productPrice - b.productPrice;
    if (sortedOption === "high-price") return b.productPrice - a.productPrice;
    return 0; // No sorting applied
  });


  return (
    <div className="product-page" style={{ paddingTop: "7rem" }}>
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
            Showing{" "}
            <span className="product-length">{sortedProducts.length}</span> of{" "}
            <span className="product-length">{products.length}</span> Products
          </div>

          <select
            value={sortedOption}
            onChange={handleSort}
            className=" product-select"
          >
            <option value="">Sort by</option>
            <option value="low-price">Price: Low to High</option>
            <option value="high-price">Price: High to Low</option>
          </select>
        </div>

        {/* Product Cards */}
        <div className="product-grid">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-card detail-product">
              <div className="product-image">
                <Link to={`/product/${product._id}`} className="image">
                  <img
                    src={product.productImage}
                    alt={product.productName}
                  ></img>
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
                    <a
                      href="#"
                      onClick={() => {
                        addToWish(product);
                      }}
                    >
                      <i className="fa fa-heart" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-random" />
                    </a>
                  </li>
                </ul>
                <button
                  className="add-to-cart"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
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
                      <span>
                        {product.productPrice -
                          (
                            (product.productPrice * product.productSale) /
                            100
                          ).toFixed(2)}
                      </span>
                      <span
                        className="mx-1"
                        style={{
                          color: "#888",
                          textDecoration: "line-through",
                          fontWeight: "400",
                        }}
                      >
                        {product.productPrice}
                      </span>
                    </>
                  ) : (
                    product.productPrice
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="pagination">
            {/* Previous */}
            <button
              className="page-btn"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => goToPage(pageNumber + 1)}
                className={`page-btn ${
                  currentPage === pageNumber + 1 ? "target" : ""
                }`}
              >
                {pageNumber + 1}
              </button>
            ))}

            <button
              className="page-btn"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            {/* Page numbers */}
            {/* Next */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
