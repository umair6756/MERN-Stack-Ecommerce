import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import reviewsData from '../data/reviews.json'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'

export const ReviewsForm = ({ isFormVisible, toggleForm, addReview   }) => {
  const [reviews, setReviews] = useState(reviewsData)
  // const [isFormVisible, setIsFormVisible] = useState(false);
const {id} = useParams()


  console.log("Id is ff", id)


  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 0,
    image: null,
  });

  // const [newReview, setNewReview] = useState({
  //   name: "",
  //   email:"",
  //   comment: "",
  //   stars: 0,
  //   image: null,
  // });

  const InputChange = (e) => {
    const { name, value } = e.target;
    // setNewReview({ ...newReview, [name]: value });
    setFormData({ ...formData, [name]: value });

  };

  const handleRating = (stars) => {
  // setNewReview({...newReview, stars})
  setFormData({ ...formData, rating: stars })
  }

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // setNewReview({ ...newReview, image: reader.result });
        setFormData({ ...formData, image: reader.result });

        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.rating) {
        alert("Name, email, and rating are required!");
        return;
    }

    console.log("Product ID:", id); // Debugging: Check if ID is correct
    console.log("Form Data:", formData); // Debugging: Check form data

    try {
        const response = await fetch(`http://localhost:5000/product/${id}/review`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        console.log("Response Status:", response.status); // Debugging: Check response status

        // Check if response is successful
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response Data:", data); // Debugging: Check response data

        if (data.success) {
            alert("Review added successfully!");
            toggleForm(); // Close the form after successful submission
        } else {
            alert(`Failed to add review: ${data.message}`);
        }
    } catch (error) {
        console.error("Error Adding Review:", error);
        alert(`Something went wrong. Please try again: ${error.message}`);
    }
};

// console.log(newReview)
console.log(formData)



 


  const handleClose = () => {
    // setIsFormVisible(false);
    // setNewReview({ name: "", email: "", comment: "", stars:0 ,image: null });

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
                    value={formData.name}
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
                    value={formData.email}
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
                  value={formData.comment}
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

  const [productsReview, setProductReview] = useState([])

  const {id} = useParams()

  useEffect(() => {
          // Fetch product data from the backend
          fetch(`http://localhost:5000/product/${id}`) // Change the URL based on your API endpoint
            .then((response) => {
              if (!response.ok) {
                throw new Error('Error fetching Reviews');
              }
              return response.json();
            })
            .then((data) => {
              setProductReview(data.reviews);
              console.log(data.reviews)  // Set the fetched products
                // Stop loading
            })
            .catch((err) => {
             console.log(err)
            });
        }, [id]); // Empty dependency array ensures this runs only once (on component mount)
      


  
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
      
        <div className="review-item my-3 " >
        <div  className="container">

          {/* Review 1 */}
          {productsReview.slice(0, visibleReviews).map((review) => (
            <div className="review-box row mx-4" key={review._id}>
              <div className="col-md-2 text-center">
                <img src={review.image} alt="User Image" className={`review-image ${imageSize}`}/>
              </div>
              <div className="product-review-content col-md-10">
                <div className="review-header  ">
                  <h3 className=''>{review.name}</h3>
                  <div className="review-date">{moment(review.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                </div>
                {showRating &&
                <div className='mx-2 my-0 py-0'>
                  {Array.from({ length: 5 }).map((value, idx) =>
                    idx < review.rating ? (
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
            </div>))}
          </div>

        </div>
      

      <div className='d-flex justify-content-center' style={{marginBottom:"2rem"}}>

       {visibleReviews < reviews.length &&(
        
        <button onClick={handleVisibleReviews} className='submit-button'>Load More</button>
      )} 
      </div>
    </div>

    <ReviewsForm isFormVisible={FormVisible} toggleForm={toggleForm}  />

  </div>
)
}
