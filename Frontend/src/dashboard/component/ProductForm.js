import React, { useState } from "react";
import "./ViewProducts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";


const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
    quantity: "",
    tagNumber: "",
    tags: "",
    description: "",
    size: [],
    color: [],
    price: "",
    discount: "",
    tax: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setProduct((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : prev[name].filter((item) => item !== value),
      }));
    } else if (name === "image") {
      setProduct((prev) => ({ ...prev, image: URL.createObjectURL(e.target.files[0]) }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };


  const [theme, setTheme] = useState("light")


  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
};

  // Apply the theme to the 'html' element
document.documentElement.setAttribute('data-theme', theme);


  return (
    <>
    
    <div className="product-add-container" style={{paddingTop:'5rem'}}>

<button className="mode-switch" title="Switch Theme" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faMoon} className='fs-3' style={{transform:"rotate(-25deg)"}}/>
      </button>


      {/* Form Section */}
      <form className="product-add-form">
        {/* Image Upload Section */}
        <div className="form-section image-section">
          <h3>Upload Product Image</h3>
          <div className="border-span px-0 mx-0 w-100"></div>
          <div className="d-flex justify-content-center" style={{marginBottom:'2rem'}}>
                <label htmlFor="image" className="imageLabel ">Upload an Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}

                />
                </div>
        </div>

        {/* Product Information Section */}
        <div className="form-section product-info-section">
          <h3>Product Information</h3>
          <div className="border-span px-0 mx-0 w-100"></div>
          <div className="form-group">
            <label>Product Name</label>
            <input type="text" name="name" placeholder="Enter product name" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input type="text" name="category" placeholder="Enter category" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Brand</label>
            <input type="text" name="brand" placeholder="Enter brand" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input type="number" name="quantity" placeholder="Enter quantity" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Tag Number</label>
            <input type="text" name="tagNumber" placeholder="Enter tag number" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Tags</label>
            <input type="text" name="tags" placeholder="Enter tags (comma separated)" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" rows="3" placeholder="Enter description" onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label>Size</label>
            <div className="size-picker">
            <label  className="size-option"><input type="checkbox" name="size" value="XS" onChange={handleChange} /> XS</label>
              <label className="size-option"><input type="checkbox" name="size" value="S" onChange={handleChange} /> S</label>
              <label  className="size-option"><input type="checkbox" name="size" value="M" onChange={handleChange} /> M</label>
              <label  className="size-option"><input type="checkbox" name="size" value="L" onChange={handleChange} /> L</label>
              <label  className="size-option"><input type="checkbox" name="size" value="XL" onChange={handleChange} /> XL</label>
              <label  className="size-option"><input type="checkbox" name="size" value="XXL" onChange={handleChange} /> XXL</label>
              <label  className="size-option"><input type="checkbox" name="size" value="3XL" onChange={handleChange} /> 3XL</label>
              <label  className="size-option"><input type="checkbox" name="size" value="4XL" onChange={handleChange} /> 4XL</label>
              <label  className="size-option"><input type="checkbox" name="size" value="5XL" onChange={handleChange} /> 5XL</label>


            </div>
          </div>
          <div className="form-group">
            <label>Color</label>
            <div className="color-picker">
              <label className="color-option" style={{background:"red"}}><input type="checkbox" name="color" value="Red" onChange={handleChange} /> </label>
              <label className="color-option" style={{background:"blue"}}><input type="checkbox" name="color" value="Blue" onChange={handleChange} /> </label>
              <label className="color-option" style={{background:"green"}}><input type="checkbox" name="color" value="Green" onChange={handleChange} /> </label>
              <label className="color-option" style={{background:"black"}}><input type="checkbox" name="color" value="Black" onChange={handleChange} /> </label>
              
              <label className="color-option" style={{background:"white"}}><input type="checkbox" name="color" value="White" onChange={handleChange} /> </label>

            </div>
          </div>
        </div>

        {/* Price Information Section */}
        <div className="form-section price-info-section">
          <h3>Price Information</h3>
          <div className="border-span px-0 mx-0 w-100"></div>

          <div className="form-group">
            <label>Price (₹)</label>
            <input type="number" name="price" placeholder="Enter price" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Discount (%)</label>
            <input type="number" name="discount" placeholder="Enter discount percentage" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Tax (%)</label>
            <input type="number" name="tax" placeholder="Enter tax percentage" onChange={handleChange} />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="create-button">Create Product</button>
      </form>

      {/* Product Preview Card */}
      <div className="product-preview my-3">
        <div className="preview-card">
          {product.image && <img src={product.image} alt="Product" />}
          <h4>{product.name || "Product Name"}</h4>
          <p>{product.description || "Product description will appear here."}</p>
          <p><strong>Category:</strong> {product.category || "N/A"}</p>
          <p><strong>Brand:</strong> {product.brand || "N/A"}</p>
          <p><strong>Price:</strong> ₹{product.price || "0.00"} <small>(+{product.tax || "0"}% tax)</small></p>
          <p><strong>Discount:</strong> {product.discount || "0"}%</p>
          <p><strong>Sizes:</strong> {product.size.length ? product.size.join(", ") : "N/A"}</p>
          <p><strong>Colors:</strong> {product.color.length ? product.color.join(", ") : "N/A"}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductForm;
