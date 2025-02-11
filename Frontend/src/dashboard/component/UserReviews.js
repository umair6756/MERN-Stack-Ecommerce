import React from 'react'
import './Cupon.css'

const UserReviews = () => {
  return (
    <div>
        <div className="user-reviews">
  <header>
    <h1>User Reviews</h1>
  </header>
  <div className="reviews-container">
    <div className="review-card">
      <div className="user-info">
        <img
          src="https://i.pravatar.cc/60?img=1"
          alt="User Avatar"
          className="user-avatar"
        />
        <div>
          <div className="user-name">John Doe</div>
          <div className="review-date">January 20, 2025</div>
        </div>
      </div>
      <div className="user-review-rating">★★★★☆</div>
      <p className="review-text">
        Great product! Exactly what I needed. The quality is excellent and it
        arrived on time. I'm very satisfied with my purchase and would
        definitely recommend it to others.
      </p>
      <div className="review-actions">
        <button className="action-btn">Respond</button>
      </div>
    </div>
    <div className="review-card">
      <div className="user-info">
        <img
          src="https://i.pravatar.cc/60?img=2"
          alt="User Avatar"
          className="user-avatar"
        />
        <div>
          <div className="user-name">Jane Smith</div>
          <div className="review-date">January 22, 2025</div>
        </div>
      </div>
      <div className="review-rating">★★★★★</div>
      <p className="review-text">
        Absolutely love it! The customer service was top-notch and the product
        exceeded my expectations. I'll definitely be a returning customer. Thank
        you for such a great experience!
      </p>
      <div className="review-actions">
        <button className="action-btn">Respond</button>
      </div>
    </div>
    {/* Add more review cards as needed */}
  </div>
</div>

    </div>
  )
}

export default UserReviews