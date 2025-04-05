




import React, { useContext, useState } from "react";
import "./ViewProducts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import { adminContext } from "./adminContext";

const ProductForm = () => {

  const {showSuccess, showError} = useContext(adminContext)
  const [product, setProduct] = useState({
    productName: "",
    productCatogary: "",
    productBrand: "",
    productStock: "",
    tagNumber: "",
    tags: "",
    description: "",
    productSize: [],
    productColor: [],
    productPrice: "",
    productSale: "",
    tax: "",
    productImage: null,
  });

  // const handleChange = (e) => {
  //   const { name, value, type, checked  } = e.target;
    


  //       if (type === "checkbox") {
  //         setProduct((prev) => ({
  //           ...prev,
  //           [name]: checked
  //             ? [...(prev[name] || []), value]
  //             : prev[name].filter((item) => item !== value),
  //         }));
  //       } else if (name === "productImage") {
  //         setProduct((prev) => ({ ...prev, productImage: URL.createObjectURL(e.target.files[0]) }));
  //       } else {
  //         setProduct((prev) => ({ ...prev, [name]: value }));
  //       }
  // };



  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
  
    if (type === "checkbox") {
      setProduct((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]  // Add value to array if checked
          : prev[name].filter((item) => item !== value),  // Remove value from array if unchecked
      }));
    } else if (name === "productImage" && files.length > 0) {
      // Handle image file change
      setProduct((prev) => ({ ...prev, productImage: files[0] }));
    } else {
      // Regular input fields (text, number, etc.)
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };
  



const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('productName', product.productName);
  formData.append('productCatogary', product.productCatogary);
  formData.append('productBrand', product.productBrand);
  formData.append('productStock', product.productStock);
  formData.append('description', product.description);
  formData.append('productPrice', product.productPrice);
  formData.append('productSale', product.productSale);
  formData.append('tax', product.tax);
  formData.append("productImage", product.productImage)
  formData.append("productSize", product.productSize); // If array, send as string
  formData.append("productColor", product.productColor); // If array, send as string



  fetch("http://localhost:5000/product", {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        showSuccess("Product Added Successfully");
      } else {
        showError("Product not added Successfully");
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};





  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  document.documentElement.setAttribute("data-theme", theme);

  return (
    <>
      <div className="product-add-container" style={{ paddingTop: "5rem" }}>
        <button className="mode-switch" title="Switch Theme" onClick={toggleTheme}>
          <FontAwesomeIcon icon={faMoon} className="fs-3" style={{ transform: "rotate(-25deg)" }} />
        </button>

        {/* Form Section */}
        <form className="product-add-form" onSubmit={handleSubmit} >
          {/* Image Upload Section */}
          <div className="form-section image-section">
            <h3>Upload Product Image</h3>
            <div className="border-span px-0 mx-0 w-100"></div>
            <div className="d-flex justify-content-center" style={{ marginBottom: "2rem" }}>
              <label htmlFor="productImage" className="imageLabel">
                Upload an Image
              </label>
              <input type="file" id="productImage" name="productImage" accept="image/*" onChange={handleChange}  />
            </div>
          </div>

          {/* Product Information Section */}
          <div className="form-section product-info-section">
            <h3>Product Information</h3>
            <div className="border-span px-0 mx-0 w-100"></div>
            <div className="form-group">
              <label>Product Name</label>
              <input type="text" name="productName" placeholder="Enter product name" onChange={handleChange} value={product.productName} required />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input type="text" name="productCatogary" placeholder="Enter category" onChange={handleChange} value={product.productCatogary} required/>
            </div>
            <div className="form-group">
              <label>Brand</label>
              <input type="text" name="productBrand" placeholder="Enter brand" onChange={handleChange} value={product.productBrand} required />
            </div>
            <div className="form-group">
              <label>Stock Quantity</label>
              <input type="number" name="productStock" placeholder="Enter stock quantity" onChange={handleChange} value={product.productStock} required/>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea name="description" rows="3" placeholder="Enter description" onChange={handleChange} value={product.description} required></textarea>
            </div>
          </div>

          {/* Size Selection */}
          <div className="form-group">
            <label>Size</label>
            <div className="size-picker">
              {["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"].map((size) => (
                <label key={size} className="size-option">
                  <input type="checkbox" name="productSize" value={size} onChange={handleChange} /> {size}
                </label>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="form-group">
            <label>Color</label>
            <div className="color-picker">
              {["Red", "Blue", "Green", "Black", "White"].map((color) => (
                <label key={color} className="color-option" style={{ background: color.toLowerCase() }}>
                  <input type="checkbox" name="productColor" value={color} onChange={handleChange} />
                </label>
              ))}
            </div>
          </div>

          {/* Price Information Section */}
          <div className="form-section price-info-section">
            <h3>Price Information</h3>
            <div className="border-span px-0 mx-0 w-100"></div>

            <div className="form-group">
              <label>Price (₹)</label>
              <input type="number" name="productPrice" placeholder="Enter price" onChange={handleChange} value={product.productPrice} required/>
            </div>
            <div className="form-group">
              <label>Discount (%)</label>
              <input type="number" name="productSale" placeholder="Enter discount percentage" onChange={handleChange} value={product.productSale} />
            </div>
            <div className="form-group">
              <label>Tax (%)</label>
              <input type="number" name="tax" placeholder="Enter tax percentage" onChange={handleChange} value={product.tax} />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="create-button">
            Create Product
          </button>
        </form>

        {/* Product Preview Card */}
        <div className="product-preview my-3">
          <div className="preview-card">
            {product.productImage && <img src={product.productImage} alt="Product" />}
            <h4>{product.productName || "Product Name"}</h4>
            <p>{product.description || "Product description will appear here."}</p>
            <p>
              <strong>Category:</strong> {product.productCategory || "N/A"}
            </p>
            <p>
              <strong>Brand:</strong> {product.productBrand || "N/A"}
            </p>
            <p>
              <strong>Price:</strong> ₹{product.productPrice || "0.00"} <small>(+{product.tax || "0"}% tax)</small>
            </p>
            <p>
              <strong>Discount:</strong> {product.productSale || "0"}%
            </p>
            <p>
              <strong>Sizes:</strong> {product.productSize.length ? product.productSize.join(", ") : "N/A"}
            </p>
            <p>
              <strong>Colors:</strong> {product.productColor.length ? product.productColor.join(", ") : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
