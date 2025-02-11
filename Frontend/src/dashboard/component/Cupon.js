import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'

const Cupon = () => {

    const [cuponForm, setCuponForm] = useState(false)

    const toggleForm = () => {
        setCuponForm(!cuponForm)
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
  <div className="coupon-card">
    <div className="coupon-header">SUMMER25</div>
    <div className="coupon-body">
      <div className="coupon-code">SUMMER25</div>
      <div className="coupon-detail">
        <i className="fas fa-tag" />
        <span className="coupon-discount">25% OFF</span>
      </div>
      <div className="coupon-detail">
        <i className="far fa-calendar-alt" />
        <span className="coupon-expiry">Expires: 2025-08-31</span>
      </div>
      <p className="coupon-description">
        Enjoy a cool 25% off on all summer collections. Perfect for updating
        your wardrobe!
      </p>
    </div>
    <span className="status-badge status-active">active</span>
  </div>
  <div className="coupon-card">
    <div className="coupon-header">WELCOME10</div>
    <div className="coupon-body">
      <div className="coupon-code">WELCOME10</div>
      <div className="coupon-detail">
        <i className="fas fa-tag" />
        <span className="coupon-discount">10% OFF</span>
      </div>
      <div className="coupon-detail">
        <i className="far fa-calendar-alt" />
        <span className="coupon-expiry">Expires: 2025-12-31</span>
      </div>
      <p className="coupon-description">
        New customer? Get 10% off on your first purchase. Start your journey
        with us today!
      </p>
    </div>
    <span className="status-badge status-active">active</span>
  </div>
  <div className="coupon-card">
    <div className="coupon-header">FLASH50</div>
    <div className="coupon-body">
      <div className="coupon-code">FLASH50</div>
      <div className="coupon-detail">
        <i className="fas fa-tag" />
        <span className="coupon-discount">50% OFF</span>
      </div>
      <div className="coupon-detail">
        <i className="far fa-calendar-alt" />
        <span className="coupon-expiry">Expires: 2025-02-14</span>
      </div>
      <p className="coupon-description">
        Flash sale alert! Grab your favorites at half price. Limited time offer!
      </p>
    </div>
    <span className="status-badge status-active">active</span>
  </div>
  <div className="coupon-card">
    <div className="coupon-header">LOYALTY20</div>
    <div className="coupon-body">
      <div className="coupon-code">LOYALTY20</div>
      <div className="coupon-detail">
        <i className="fas fa-tag" />
        <span className="coupon-discount">20% OFF</span>
      </div>
      <div className="coupon-detail">
        <i className="far fa-calendar-alt" />
        <span className="coupon-expiry">Expires: 2024-06-30</span>
      </div>
      <p className="coupon-description">
        As a thank you to our loyal customers, enjoy 20% off on all products.
      </p>
    </div>
    <span className="status-badge status-expired">expired</span>
  </div>
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
        <form>
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="discount" className="form-label">
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
            />
          </div>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label htmlFor="startDate" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                required=""
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="endDate" className="form-label">
                End Date
              </label>
              <input type="date" className="form-control" id="endDate" required="" />
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