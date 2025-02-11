



// import React from 'react';
// // import Carousel from 'react-bootstrap/Carousel';
// import image1 from '../banners-image/banner1.jpg';
// import image2 from '../banners-image/banner2.jpg';
// import image3 from '../banners-image/banner3.jpg';
// import './Carasole.css'
// import './Buttons.js'
// import Buttons, { Button } from './Buttons.js';
// import { useState, useEffect } from 'react';




// const slides = [
//   {
//     src: image1,
//     alt: "First Slide",
//     title: "First slide label",
//     caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
//     buttons: "Learn More",
//   },
//   {
//     src: image2,
//     alt: "Second Slide",
//     title: "Second slide label",
//     caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     buttons: "Learn More",
//   },
//   {
//     src: image3,
//     alt: "Third Slide",
//     title: "Third slide label",
//     caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
//     buttons: "Learn More",
//   },
// ];

// function Carasole() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-slide logic using useEffect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 1000); // Change slide every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);
//   return (
//     <div>

//       {/* <Carousel>
      

//       {slides.map((slide, index) => (
//         <Carousel.Item key={index}>
//           <img src={slide.src} alt={slide.alt} className="carousel-image" loading="lazy"/>
//           <Carousel.Caption className='carasole-caption '>
//             <h3>{slide.title}</h3>
//             <p>{slide.caption}</p>
//             <Button label="View More"/>
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel> */}


//       <div className=''>
//         <div className="carousel ">
//           <ul className="slides ">
//             {slides.map((slide, index) => (
//               <div key={index} className='w-100'>
//                 {/* Radio Button */}
//                 <input
//                   type="radio"
//                   name="radio-buttons"
//                   id={`img-${index + 1}`}
//                   defaultChecked={index === 0}
//                 />

//                 {/* Slide Container */}
//                 <li className={`slide-container ${
//               index === currentSlide ? "active" : ""
//             }`}>
//                   <div className="slide-image">
//                     <img src={slide.src} alt={slide.alt} />
//                   </div>

//                   {/* Carousel Controls */}
//                   <div className="carousel-controls">
//                     <label
//                       htmlFor={`img-${index === 0 ? slides.length : index}`}
//                       className="prev-slide"
//                     >
//                       <span>‹</span>
//                     </label>
//                     <label
//                       htmlFor={`img-${(index + 1) % slides.length + 1}`}
//                       className="next-slide"
//                     >
//                       <span>›</span>
//                     </label>




//                   </div>



//                 </li>

//                 <div className='carasole-caption' id={`caption-${index + 1}`} >
                
//                 <h1 className="carasole-caption-heading">{slide.title}</h1>
//                 <div className='carasole-caption-button' style={{}}><a href='#'><Button label={slide.buttons} /></a></div>
                
//                 </div>

//               </div>
//             ))}

//             {/* {slides.map((slide, index) => (

//             ))} */}

//             {/* Carousel Dots */}
//             <div className="carousel-dots ">
//               {slides.map((_, index) => (
//                 <label
//                   key={index}
//                   htmlFor={`img-${index + 1}`}
//                   className="carousel-dot"
//                   id={`img-dot-${index + 1}`}
//                 />
//               ))}
//             </div>
//           </ul>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default Carasole;



// import React, { useState, useEffect } from 'react';
// import image1 from '../banners-image/banner1.jpg';
// import image2 from '../banners-image/banner2.jpg';
// import image3 from '../banners-image/banner3.jpg';
// import Buttons, { Button } from './Buttons.js';
// import './Carasole.css';

// const slides = [
//   {
//     src: image1,
//     alt: "First Slide",
//     title: "First slide label",
//     caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
//     buttons: "Learn More",
//   },
//   {
//     src: image2,
//     alt: "Second Slide",
//     title: "Second slide label",
//     caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     buttons: "Learn More",
//   },
//   {
//     src: image3,
//     alt: "Third Slide",
//     title: "Third slide label",
//     caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
//     buttons: "Learn More",
//   },
// ];

// function Carasole() {
//   const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

//   // Auto-slide logic using useEffect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length); // Go to the next slide
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div>
//       <div className="carousel">
//         <ul className="slides">
//           {slides.map((slide, index) => (
//             <div key={index} className="w-100">
//               {/* Radio Button */}
//               <input
//                 type="radio"
//                 name="radio-buttons"
//                 id={`img-${index + 1}`}
//                 defaultChecked={index === currentSlide} // Match with currentSlide
//               />

//               {/* Slide Container */}
//               <li className="slide-container">
                
//                 <div className="slide-image">
//                   <img src={slide.src} alt={slide.alt} />
//                 </div>

//                 {/* Carousel Controls */}
//                 <div className="carousel-controls">
//                   <label
//                     htmlFor={`img-${index === 0 ? slides.length : index}`}
//                     className="prev-slide"
//                   >
//                     <span>‹</span>
//                   </label>
//                   <label
//                     htmlFor={`img-${(index + 1) % slides.length + 1}`}
//                     className="next-slide"
//                   >
//                     <span>›</span>
//                   </label>
//                 </div>
//               </li>

//               <div
//                 className="carasole-caption"
//                 id={`caption-${index + 1}`}
//                 style={{
//                   display: index === currentSlide ? "block" : "none", // Show only active slide's caption
//                 }}
//               >
//                 <h1 className="carasole-caption-heading">{slide.title}</h1>
//                 <div className="carasole-caption-button" style={{ zIndex: "1000" }}>
//                   <a href="#">
//                     <Button label="View More" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Carousel Dots */}
//           <div className="carousel-dots">
//             {slides.map((_, index) => (
//               <label
//                 key={index}
//                 htmlFor={`img-${index + 1}`}
//                 className={`carousel-dot ${
//                   index === currentSlide ? "active-dot" : ""
//                 }`}
//               />
//             ))}
//           </div>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Carasole;









import React, { useState, useEffect } from 'react';
import './Carasole.css';
import { Link } from 'react-router-dom';
import image1 from '../banners-image/banner5.jpg';
import image2 from '../banners-image/banner2.jpg';
import image3 from '../banners-image/banner3.jpg';
import { Button } from './Buttons';


const items = [
  { image: image1, title: 'Biggest Discounts of the Year!', sale:"60%" ,description: 'Up to 70% Off on All Categories!'},
  { image: image2, title: 'Boult Audio AirBass FX1', description: 'Stylish earbuds with deep bass and sweat resistance.' },
  { image: image3, title: 'Your Perfect Timepiece is Here', description: 'Explore Our Exclusive Collection of Premium Watches' },
];

const Carasole = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [items.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={item.image} alt={item.title} className="carousel-image" />
            <div className="carousel-text">
              <h2>{item.title}</h2>
              {/* <h1>{item.sale}</h1> */}
              <p>{item.description}</p>
              <div className='shop-button'><Link to="/product"><Button label="Shop Now"></Button></Link></div>
              
            </div>
            
          </div>
        ))}
        
      </div>
      <button className="carousel-button prev" onClick={handlePrev}>
        ❮
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        ❯
      </button>




    </div>
  );
};

export default Carasole;

// Usage Example:
// const items = [
//   { image: 'image1.jpg', title: 'Title 1', description: 'Description 1' },
//   { image: 'image2.jpg', title: 'Title 2', description: 'Description 2' },
//   { image: 'image3.jpg', title: 'Title 3', description: 'Description 3' },
// ];
// <Carousel items={items} />;

// CSS (Carousel.css)










