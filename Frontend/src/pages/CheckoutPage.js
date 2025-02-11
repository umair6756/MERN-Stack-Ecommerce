import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Checkout from '../components/Checkout';
import Feactures from '../components/Feactures'

const CheckoutPage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Checkout></Checkout>
        <Feactures></Feactures>
        <Footer></Footer>
    </div>
  )
}

export default CheckoutPage