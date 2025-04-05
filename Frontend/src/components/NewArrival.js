import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Buttons.css'; // Import your CSS for advanced styles
import image from '../banners-image/new-arrival.png'
import Buttons from './Buttons';

const NewArrival = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // Countdown starting from 1 hour (3600 seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setTimeLeft(3600); // Reset countdown to 1 hour
      }
    }, 1000); // Update countdown every second
    return () => clearInterval(interval);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const bannerContainer = {
    /* Background gradient ko comment kiya gaya hai */
    // background: "linear-gradient(135deg, #C19A6B, #D1A77C, #C19A6B)",
    
    background: `url(${image}) no-repeat center center/cover`,
    /* Alternative background color ko comment kiya gaya hai */
    // backgroundColor: "#C19A6B",
    width: "100%",
    height: "auto", // Units ko string mein dena zaroori hai
    padding: "40px 20px", // Padding bhi string mein
    borderRadius: "0px", // border-radius => borderRadius
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // box-shadow => boxShadow
    animation: "infiniteMove 3s ease-in-out infinite", // animation property
  };
  

  return (
    <div className="banner-container" style={bannerContainer}>
      <Container>
        <Row className="justify-content-center align-items-center ">
          <Col lg={6} md={12} className="text-center text-light">
          <h1 className="banner-title"> Limited-Time Offer!</h1>
          <h1 className='text-center my-3 fw-bolder' style={{color:'#f0f0f0', fontFamily:'cursive'}}>  25% OFF</h1>
       <p className="banner-description">
         <span className="apply-coupon mx-3 text-center" style={{color:'black'}}>SAVE50</span>
        </p>
            <div className="countdown-boxes">
              <div className="countdown-box">
                <div className="time-box">{hours < 10 ? `0${hours}` : hours}</div>
                <div className="time-label">Hours</div>
              </div>
              <div className="countdown-box">
                <div className="time-box">{minutes < 10 ? `0${minutes}` : minutes}</div>
                <div className="time-label">Minutes</div>
              </div>
              <div className="countdown-box">
                <div className="time-box">{seconds < 10 ? `0${seconds}` : seconds}</div>
                <div className="time-label">Seconds</div>
              </div>
            </div>
            {/* <Button variant="primary" className="banner-button">
              Shop Now
            </Button> */}

            {/* <Buttons/> */}
          </Col>
          {/* <Col lg={6} md={12} className="text-center">
            <img
              src={image} // Replace with your image URL
              alt="Banner"
              className="banner-image"
            />
          </Col> */}
        

     
        </Row>
      </Container>
    </div>
  );
};







export default NewArrival










// import React, { useState, useEffect } from "react";


// const NewArrival = () => {
//   const [timeLeft, setTimeLeft] = useState({});

//   // Countdown target date (5 days from now)
//   const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       if (distance < 0) {
//         clearInterval(countdown);
//         return;
//       }

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, [targetDate]);

//   return (
//     <div className="coupon-banner">
//       <div className="coupon-content">
//         <h1 className="banner-title">🎉 Limited-Time Offer: Save 50% 🎉</h1>
//         <p className="banner-description">
//           Use code <span className="coupon-code">SAVE50</span> at checkout before the offer expires!
//         </p>
//         <div className="countdown-timer">
//           <div className="time-box">
//             <span className="time-value">{timeLeft.days || 0}</span>
//             <span className="time-label">Days</span>
//           </div>
//           <div className="time-box">
//             <span className="time-value">{timeLeft.hours || 0}</span>
//             <span className="time-label">Hours</span>
//           </div>
//           <div className="time-box">
//             <span className="time-value">{timeLeft.minutes || 0}</span>
//             <span className="time-label">Minutes</span>
//           </div>
//           <div className="time-box">
//             <span className="time-value">{timeLeft.seconds || 0}</span>
//             <span className="time-label">Seconds</span>
//           </div>
//         </div>
//         <button className="cta-button">Shop Now</button>
//       </div>
//     </div>
//   );
// };

// export default NewArrival;
