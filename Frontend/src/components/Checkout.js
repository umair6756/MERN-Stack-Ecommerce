import React, { useContext, useState, useEffect } from 'react'
import './Checkout.css'
import { CartContext } from './CartContext'
import { HeroSection } from './Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Checkout = () => {

    const {showSuccess , showError} = useContext(CartContext)
    

    // const [ordersData, setOrdersData] = useState({
    //     custEmail: "",
    //     custPhone: "",
    //     custName: "",
    //     custAddress: "",
    //     custCity: "",
    //     custCountry: "",
    //     prodName: "",
    //     prodPrice: "",
    //     prodQuantity: "",
    //     TotalPrice: "",
    // })

    // const handleChange = (e) => {
    //     setOrdersData({ ...ordersData, [e.target.name]: e.target.value });
    //   };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
      
       
      
      
    //     fetch("http://localhost:5000/order", {
    //       method: 'POST',
    //       body: ordersData,
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         if (data.success) {
    //           alert("order Added Successfully");
    //         } else {
    //           alert("order notAdded Successfully");
    //         }
    //       })
    //       .catch((error) => {
    //         console.log("Error:", error);
    //       });
    //   };
    const { cart, calculateProductPrice, increament, decreament } = useContext(CartContext);


    const [orderData, setOrderData] = useState({
        customer: {
            name: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            country: "",
            postalCode: "",
        },
        products: [], // Cart ke products
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderData((prevData) => ({
            ...prevData,
            customer: {
                ...prevData.customer,
                [name]: value,
            },
        }));
    };

console.log(orderData)

    // useEffect(() => {
    //     setOrderData((prevData) => ({
    //         ...prevData,
    //         products: cart.map((prod) => ({
                
    //             productId: prod.id,
    //             productName: prod.productName,
    //             productPrice: prod.productPrice,
    //             quantity: prod.quantity,
    //             totalPrice: prod.productPrice * prod.quantity,
    //         })),
    //     }));
    // }, [cart]); // Jab bhi cart update ho, yeh effect chale
    

    useEffect(() => {
        setOrderData((prevData) => ({
            ...prevData,
            products: cart.map((prod) => {
                // ✅ Discounted price calculate karein
                const discountedPrice = prod.productSale
                    ? prod.productPrice - (prod.productPrice * prod.productSale / 100)
                    : prod.productPrice;
    
                return {
                    productId: prod.id,
                    productName: prod.productName,
                    productPrice: discountedPrice, // ✅ Sending discounted price
                    quantity: prod.quantity,
                    totalPrice: (discountedPrice * prod.quantity).toFixed(2), // ✅ Total price after discount
                };
            }),
            // ✅ Grand total calculate using discounted price
            totalPrice: cart.reduce((total, prod) => {
                const discountedPrice = prod.productSale
                    ? prod.productPrice - (prod.productPrice * prod.productSale / 100)
                    : prod.productPrice;
    
                return total + (discountedPrice * prod.quantity);
            }, 0).toFixed(2),
        }));
    }, [cart]);
    
    
      
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5000/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData), // Convert orderData to JSON
            });
    
            const data = await response.json();
            if (data.success) {
                showSuccess("Order placed successfully!");
            } else {
                showError("Failed to place order.");
            }
        } catch (error) {
            console.error("Error placing order:", error);
            showError("Something went wrong.");
        }
    };




    const [cupons, setCupons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
  useEffect(() => {
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
  
  }, [])

  const [discount, setDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(calculateProductPrice());

  const [couponCode, setCouponCode] = useState("");

 // Apply Coupon (Only in Frontend)
 const applyCoupon = (e) => {
  e.preventDefault(); // 👈 Prevents page refresh

  const appliedCoupon = cupons.find((c) => c.code === couponCode);

  if (!appliedCoupon) {
    alert("Invalid or expired coupon");
    return;
  }

  if (appliedCoupon.usedCount >= appliedCoupon.usageLimit) {
    alert("Coupon usage limit reached");
    return;
  }

  let discountAmount = (calculateProductPrice() * appliedCoupon.discountValue) / 100;

  setDiscount(discountAmount);
  setFinalTotal(calculateProductPrice() - discountAmount);
};
    

    return (
        <>
        <HeroSection heroBackground="checkout-hero"/>
        <div className='checkoutPage'>

            <h2 className='text-center my-5'>Checkout Form</h2>
           
            <div className='checkout-main w-100'>

                <section class="checkout-form">
                    <form action="#!" onSubmit={handleSubmit} >
                        <h6>Contact information</h6>
                        <div class="checkout-form-control " style={{border:"none"}}>
                            <label for="email">E-mail</label>
                            <div >
                                <span class="fa fa-envelope"></span>
                                <input type="email" id="checkout-email" name="email" placeholder="Enter your email..." onChange={handleChange} value={orderData.email} required="true"/>
                            </div>
                        </div>
                        <div class="checkout-form-control">
                            <label for="phone">Phone</label>
                            <div>
                                <span class="fa fa-phone"></span>
                                <input type="tel" name="phone" id="checkout-phone" placeholder="Enter you phone..." onChange={handleChange} value={orderData.phone} required="true"/>
                            </div>
                        </div>
                        <br></br>
                        <h6>Shipping address</h6>
                        <div class="checkout-form-control">
                            <label for="name">Full name</label>
                            <div>
                                <span class="fa fa-user-circle"></span>
                                <input type="text" id="checkout-name" name="name" placeholder="Enter you name..." onChange={handleChange} value={orderData.name} required="true"/>
                            </div>
                        </div>
                        <div class="checkout-form-control">
                            <label for="address">Address</label>
                            <div>
                                <span class="fa fa-home"></span>
                                <input type="text" name="address" id="checkout-address" placeholder="Your address..." onChange={handleChange} value={orderData.address} required="true"/>
                            </div>
                        </div>
                        <div class="checkout-form-control">
                            <label for="city">City</label>
                            <div>
                                <span class="fa fa-building"></span>
                                <input type="text" name="city" id="checkout-city" placeholder="Your city..." onChange={handleChange} value={orderData.city} required="true"/>
                            </div>
                        </div>
                        <div class="checkout-form-group">
                            <div class="checkout-form-control">
                                <label for="country">Country</label>
                                <div>
                                    <span class="fa fa-globe"></span>
                                    <input type="text" name="country" id="checkout-country" placeholder="Your country..." list="country-list" onChange={handleChange} value={orderData.country} required="true"/>
                                    <datalist id="country-list">
                                        <option value="India"></option>
                                        <option value="USA"></option>
                                        <option value="Russia"></option>
                                        <option value="Japan"></option>
                                        <option value="Egypt"></option>
                                    </datalist>
                                </div>
                            </div>
                            <div class="checkout-form-control">
                                <label for="postal">Postal code</label>
                                <div>
                                    <span class="fa fa-archive"></span>
                                    <input type="numeric" name="postal" id="checkout-postal" placeholder="Your postal code..." onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div class="checkout-form-control checkbox-control">
                            <input type="checkbox" name="checkout-checkbox" id="checkout-checkbox" />
                            <label for="checkout-checkbox">Save this information for next time</label>
                        </div>
                        <div class="checkout-form-control-btn">
                            <button type='submit'>Continue</button>
                        </div>
                    </form>
                </section>

                <section class="checkout-details">
                    <div class="checkout-details-inner">
                    {cart.map((prod, index) => (
                        <div key={index} class="checkout-lists">
                            
                            <div class="checkout-card d-flex flex-row">
                                <div class="checkout-card-image"><img src={prod.productImage} alt="" /></div>
                                <div class="checkout-card-details">
                                    <div class="checkout-card-name " style={{textDecoration:'line-through'}}>{prod.productPrice}</div>
                                    <div class="checkout-card-price">                                {prod.productSale ? (
                                       <>
                                      <span>{(prod.productPrice - (prod.productPrice * prod.productSale / 100))* (prod.quantity).toFixed(2)}</span>
                                      </>
                                ): prod.productPrice * prod.quantity}
                                </div>
                                    <div class="checkout-card-wheel">
                                        <button onClick={() => decreament(index)}>-</button>
                                        <span>{prod.quantity}</span>
                                        <button onClick={() => increament(index)}>+</button>
                                    </div>
                                </div>
                            </div>

                        </div>))}
                        <div class="checkout-shipping">
                            <h6>Shipping</h6>
                            <p>free</p>
                        </div>
                        <form style={{position:"relative"}}>
                        <input placeholder="Enter your code" className='cuppon-input'  value={couponCode} onChange={(e) => setCouponCode(e.target.value)}/> 
                        <span className='cuponBtn' onClick={applyCoupon}>k</span>
                        </form>
                        <div class="checkout-total">
                            <h6>Total</h6>
                            <p>{finalTotal}</p>
                        </div>
                    </div>
                </section>
            </div>


        </div>
        </>
    )
}

export default Checkout