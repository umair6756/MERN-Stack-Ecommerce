import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import reviewsData from '../data/reviews.json'
import { useState } from 'react'


export const ReviewsForm = ({ isFormVisible, toggleForm, addReview   }) => {
  const [reviews, setReviews] = useState(reviewsData)
  // const [isFormVisible, setIsFormVisible] = useState(false);



  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
    rating: 0,
    image: null,
  });

  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
    stars: 0,
    image: null,
  });

  const InputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
    setFormData({ ...formData, [name]: value });

  };

  const handleRating = (stars) => {
  setNewReview({...newReview, stars})
  setFormData({ ...formData, rating: stars })
  }

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewReview({ ...newReview, image: reader.result });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // setIsFormVisible(false); // Close form on submit
    if (newReview.name.trim() && newReview.comment.trim()) {


      addReview(newReview);
      setNewReview({ name: "", email: "", comment: "", stars: 0 ,image: null });
      setImagePreview(null);
      setFormData({ name: "", email: "", review: "", rating: 0, image: null });
      toggleForm();

    } else {
      alert("Name and comment are required!");
    }
   
  }



  const handleClose = () => {
    // setIsFormVisible(false);
    setFormData({ name: "", email: "", review: "", rating: 0, image: null });
    setNewReview({ name: "", email: "", comment: "", stars:0 ,image: null });

    setImagePreview(null);

    toggleForm();

  }
 return(
  <div>
    {isFormVisible ? (
        <div className="modal">
          <div className="review-form-container">
            <button className="close-button" onClick={handleClose}>
              &times;
            </button>
            <h2 className="fs-1">Leave Your Feedback</h2>
            <form onSubmit={handleReviewSubmit}>
              <div className="name-email d-flex " style={{ gap: "3rem" }}>
                <div className="form-group">
                  {/* <label htmlFor="name">Name:</label> */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newReview.name}
                    onChange={InputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  {/* <label htmlFor="email">Email:</label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newReview.email}
                    onChange={InputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                {/* <label htmlFor="review">Your Review:</label> */}
                <textarea
                  id="review"
                  name="comment"
                  value={newReview.comment}
                  onChange={InputChange}
                  placeholder="Write your review here..."
                  rows="4"
                  required
                ></textarea>
              </div>

        

              <div className="form-group star-rating d-flex" style={{ gap: "2rem" }}>
                <label className="rate-product fs-3 " style={{ marginTop: ".8rem" }}>Rate Product</label>
                <div className="star-rating flex-row">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${formData.rating >= star ? "selected" : ""}`}
                      onClick={() => handleRating(star)}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
         

              <div className="form-group">
                <label htmlFor="image" className="imageLabel">Upload an Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleChangeImage}

                />

              </div>

              {imagePreview && (
                <div className="imagePrevies-box">
                  <img src={imagePreview}></img>
                </div>
              )}

              <button type="submit" className="submit-button">
                Submit Feedback
              </button>


            </form>
          </div>
        </div>
      ):null}
  </div>
 )
}





export const Reviews = ({leaveBtn, label, showRating = true , imageSize}) => {
  // close comment form function 




  
    const [FormVisible, setFormVisible] = useState(false);
  
  
  
    const [reviews, setReviews] = useState(reviewsData)
  
  
  
    const [visibleReviews, setVisibleReviews] = useState(3);

    const addReview = (newReview) => {
      // Add the new review to the reviews array
      setReviews((prevReviews) => [
        ...prevReviews,
        {
          id: prevReviews.length + 1,
          name: newReview.name,
          image: newReview.image || "https://via.placeholder.com/50",
          comment: newReview.comment,
          stars: newReview.stars,
        },
      ]);
    };
  
  
  


    const handleVisibleReviews = () => {
      setVisibleReviews((prevReview) => prevReview + 3);
    }

    const toggleForm = () => {
      console.log("Button clicked");
      setFormVisible((prev) => !prev);
    };
  



  // handle visible reviews 



return (
  <div>
     <div className='product-review-box'>
      <div className='comment-leave-box d-flex justify-content-between py-5' style={{margin:"2rem"}}>
        <h3>{label}</h3>
        <button className='comment-leave-btn border border-0 bg-transparent' onClick={toggleForm} style={{transition:".5s"}}>
          &#x27A6; {leaveBtn}
          
          </button>
        
      </div>
      {reviews.slice(0, visibleReviews).map((review) => (
        <div className="review-item my-3 ">
        <div key={review.id} className="container">

          {/* Review 1 */}
          
            <div className="review-box row mx-4">
              <div className="col-md-2 text-center">
                <img src={review.image} alt="User Image" className={`review-image ${imageSize}`}/>
              </div>
              <div className="product-review-content col-md-10">
                <div className="review-header  ">
                  <h3 className=''>{review.name}</h3>
                  <div className="review-date">{new Date().toLocaleDateString()}</div>
                </div>
                {showRating &&
                <div className='mx-2 my-0 py-0'>
                  {Array.from({ length: 5 }).map((value, idx) =>
                    idx < review.stars ? (
                      <span key={idx} style={{ color: "#C19A6B", fontSize: "34px" }}>&#9733;</span>
                    ) : (
                      <span key={idx} style={{ color: "gray", fontSize: "34px" }}>&#9734;</span>
                    )
                  )}


                </div>}
                <div className="review-comment">
                 {review.comment}
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}

      <div className='d-flex justify-content-center' style={{marginBottom:"2rem"}}>

      {visibleReviews < reviews.length &&(
        
        <button onClick={handleVisibleReviews} className='submit-button'>Load More</button>
      )}
      </div>
    </div>

    <ReviewsForm isFormVisible={FormVisible} toggleForm={toggleForm} addReview={addReview}/>

  </div>
)
}
