
import './ProductDetail.css'
import { useContext, useRef, useState } from 'react'
import products from '../data/products-data.json'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Buttons, { Button, HeroSection } from './Buttons'
import { CartContext } from './CartContext'
import reviewsData from '../data/reviews.json'
import { ReviewForm, Reviews, ReviewsForm } from './Reviews'


const ProductDetail = () => {

  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  // const navigate = useNavigate();

  const { addToCart, increament, decreament, count } = useContext(CartContext);

  const total = product.discountPrice * count;


  // for magnifying effects 

  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%')
  const [showMagnifier, setShowMagnifier] = useState(false)
  const containerRef = useRef(null)


  const zoomLevel = 3;

  const handleMouseMove = (e) => {
    const { top, left, width, height } = containerRef.current.getBoundingClientRect();
    const w = ((e.clientX - left) / width) * 100;
    const h = ((e.clientY - top) / height) * 100;
    setBackgroundPosition(`${w}% ${h}%`);

  }

  const handleMouseEnter = () => (setShowMagnifier(true));
  const handleMouseLeave = () => (setShowMagnifier(false));


  // product review 





  const [reviews, setReviews] = useState(reviewsData)



  // color and size picker 


  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // Color and Size options
  const colors = [
    { id: 1, color: '#FF5733' },
    { id: 2, color: '#33C1FF' },
    { id: 3, color: '#81C784' },
    { id: 4, color: '#FFEB3B' },
  ];

  const sizes = ['S', 'M', 'L', 'XL'];










  return (
    <div style={{paddingTop:"7rem"}}>
      {/* <HeroSection heroBackground="product-detail-hero"/> */}

      <div className='LinkProduct border-bottom mx-5 my-3 py-3'>
        <Link to='/product' style={{ color: '#C19A6B' }} >Products</Link>
        <span> <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '12px' }} /> {product.category}</span>
        <span> <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '12px' }} /> {product.name}</span>
      </div>
      <div className='product-detail mx-5 my-5 d-flex gap-5' >
        <div className='images w-40'
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={product.image} alt={product.name} ></img>

        </div>

        {showMagnifier && (<div className='magnifier-container w-40 d-flex flex-row'
          style={{
            background: `url(${product.image})`,
            backgroundSize: `${zoomLevel * 100}%`,
            backgroundPosition: backgroundPosition,
            width: '45%',
            height: '28rem',
            border: 'none',
            position: 'absolute',
            zIndex: 100,
            left: '45%',
            backgroundColor: '#f0f0f0',

          }}
        >

        </div>)}

        <div className='product-detail-content  w-50'>
          <p className='opacity-75'>{product.category}</p>
          <h3 className='my-3' >{product.name}</h3>
          <div className='reviews my-4'>
            <span className="fa fa-star fs-4" style={{ color: '#C19A6B' }}></span>
            <span className="fa fa-star fs-4" style={{ color: '#C19A6B' }}></span>
            <span className="fa fa-star fs-4" style={{ color: '#C19A6B' }}></span>
            <span className="fa fa-star fs-4" style={{ color: '#C19A6B' }}></span>
            <span className="fa fa-star fs-4" ></span>
            <span className='countReviews mx-4 fs-6' style={{ color: '#C19A6B' }}> {reviews.length} Reviews</span>
          </div>
          <p className='description my-3'>Here are some pro-level CSS tips and tricks that can elevate your styling and help you create professional, efficient, and visually stunning designs:

          </p>
          <div className='price-quantity d-flex gap-5'>


            <div className='d-flex flex-row gap-5'>
              <p className='quantity-heading text-uppercase fw-bold' style={{ color: '#333', opacity: '.7'}}>price</p>
              <div>
                {product.onSale ? (
                  <>
                    <span style={{ color: "#C19A6B", fontWeight: "600", marginLeft:'3rem' }}>{product.price - (product.price * product.sale / 100).toFixed(2)}</span>
                    <span className='mx-2' style={{ color: "#888", textDecoration: "line-through", fontWeight: "400" }}>{product.price}</span>
                  </>
                ) : product.price}
              </div>
            </div>

            

          </div>

          {/* Color Picker */}
         

          <div className='d-flex gap-5 my-3' >
          <p className='quantity-heading text-uppercase fw-bold' style={{ color: '#333', opacity: '.7'}}>color</p>

          <div className="color-picker">
            {product.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
          </div>
          {/* Size Picker */}
          <div className='d-flex gap-5 my-3' >
          <p className='quantity-heading text-uppercase fw-bold' style={{ color: '#333', opacity: '.7'}}>size</p>

          <div className="size-picker">
            {product.sizes.map((size, sizeIndex) => (
              <div
                key={sizeIndex}
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
         </div>
         </div>

          <div className='d-flex flex-row '>
            <div className='Buttons ' onClick={() => { addToCart(product); }}>{<Button label="Add to Cart" />}</div>
            <div className='Buttons mx-5 my-0'  ><Link to="/checkout" style={{ margin: "0", padding: "0" }}>{<Button label="BUY Now" />}</Link></div>
          </div>
        </div>
      </div>


      <Reviews label="Reviews" leaveBtn="Leave Reviews" showRating={true} imageSize="largeImage" />




      {/* comment form  */}




    </div>
  )
}

export default ProductDetail
















