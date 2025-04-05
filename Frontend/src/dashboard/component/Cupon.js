import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

const Cupon = () => {

   

    const [cuponForm, setCuponForm] = useState(false)

    const toggleForm = () => {
        setCuponForm(!cuponForm)
    }

    const [cuponData, setCuponData] = useState({
      code: "",
      description: "",
      discountValue: "",
      expiryDate: "",
      usageLimit: ""

    })

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCuponData({ ...cuponData, [name]: value });
  
    };

    console.log(cuponData)

    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const response = await fetch("http://localhost:5000/cupon", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(cuponData), // Convert orderData to JSON
          });
  
          const data = await response.json();
          if (data.success) {
              alert("Coupon Add successfully!");
          } else {
              alert(`Failed to add coupon: ${data.message}`);
          }
      } catch (error) {
          console.error("Error Adding coupon:", error);
          alert("Something went wrong.");
      }
  };
   const [cupons, setCupons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() =>{
    fetch("http://localhost:5000/cupon")
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching Cupons');
      }
      return response.json();
    })
    .then((data) => {
      setCupons(data);  // Set the fetched products
      setLoading(false);   // Stop loading
    })
    .catch((err) => {
      setError(err.message);  // Handle error
      setLoading(false);
    });
  
  })


if (loading) {
  return <div>Loading products...</div>;
}

// If error occurs, display an error message
if (error) {
  return <div>Error: {error}</div>;
}


  return (
    <>
    <Sidebar/>
    <div className='cupon-container py-5'>
    <div className="app-content-header py-5">
      <div className='d-flex flex-column'>
      <h1 className="app-content-headerText">Cupons</h1>
      <input className="search-bar my-3" placeholder="Search..." type="text" style={{border:'1px solid #222'}}/>
      </div>

      <button className="mode-switch" >
      </button>
    
      <button className="app-content-headerButton" onClick={toggleForm}>Add Cupon</button>


    </div>
        <div className="coupon-grid" id="couponGrid">
  {/* Static Coupons */}
  {cupons.map((cupon) => (
  <div className="coupon-card">
    <div className="coupon-header">{cupon.code}</div>
    <div className="coupon-body">
      <div className="coupon-code-div">{cupon.code}</div>
      <div className="coupon-detail">
        <i className="fas fa-tag" />
        <span className="coupon-discount">{cupon.discountValue}% OFF</span>
      </div>
      <div className="coupon-detail">
        <i className="far fa-calendar-alt" />
        <span className="coupon-expiry">Expires: {moment(cupon.expiryDate).format("DD MMMM YYYY")}</span>
      </div>
      <p className="coupon-description">
        {cupon.description}
      </p>
    </div>
    <span className="status-badge status-active">{cupon.status}</span>
  </div>))}
 
  


</div>

    </div>

    {cuponForm && (
        <div className='coupon-form'>
        <div className="coupon-form-container">
        <div className="coupon-form-header">
        

          <h1>Create Your Coupon Code</h1>
          <p>Fill out the details below to generate a coupon</p>
        </div>
        <div>
            <button className='fs-3 position-absolute ' style={{top:'10%', left:'85%', border:'none', background:'transparent'}} onClick={toggleForm}><FontAwesomeIcon icon={faRemove}/></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="couponCode" className="form-label">
              Coupon Code
            </label>
            <input
              type="text"
              className="form-control"
              id="couponCode"
              placeholder="Enter coupon code"
              required=""
              onChange={handleInputChange}
              value={cuponData.code}
              name='code'
            />
          </div>
          <div className="mb-3">
            <label htmlFor="discountValue" className="form-label">
              Discount (%)
            </label>
            <input
              type="number"
              className="form-control"
              id="discount"
              placeholder="Enter discount percentage"
              min={1}
              max={100}
              required=""
              onChange={handleInputChange}
              value={cuponData.discountValue}
              name='discountValue'
            />
          </div>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label htmlFor="usageLimit" className="form-label">
                Usage Limit
              </label>
              <input
                type="number"
                className="form-control"
                id="startDate"
                required=""
                onChange={handleInputChange}
                value={cuponData.usageLimit}
                name='usageLimit'
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="expiryDate" className="form-label">
                End Date
              </label>
              <input type="date" className="form-control" id="endDate" required="" onChange={handleInputChange} value={cuponData.expiryDate} name='expiryDate'/>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select className="form-select" id="status" required="">
              <option value="" disabled="" selected="">
                Select status
              </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows={3}
              placeholder="Add a brief description..."
              required=""
              defaultValue={""}
              onChange={handleInputChange}
              value={cuponData.description}
              name='description'
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Generate Coupon
          </button>
        </form>
      </div>
      </div>
    )}
    </>
  )
}

export default Cupon