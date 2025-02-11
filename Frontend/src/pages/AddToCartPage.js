import React from 'react'
import Navbar from '../components/Navbar'
import AddToCart from '../components/AddToCart'
import Footer from '../components/Footer'
import { HeroSection } from '../components/Buttons'
import Feactures from '../components/Feactures'

const AddToCartPage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection headingLabel="Review Your Picks" heroBackground="addCart-background"/>
        <AddToCart/>
        <Feactures/>
        <Footer/>
    </div>
  )
}

export default AddToCartPage