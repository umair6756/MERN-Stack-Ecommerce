







import React, { useState, useEffect } from 'react';
import './Carasole.css';
import { Link } from 'react-router-dom';
import image1 from '../banners-image/banner5.png';
import image2 from '../banners-image/banner2.png';
import image3 from '../banners-image/banner3.png';
import { Button } from './Buttons';


const items = [
  { image: image1},
  { image: image2 },
  { image: image3 },
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










