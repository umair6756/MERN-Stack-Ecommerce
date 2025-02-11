import React from 'react'
import Navbar from '../components/Navbar'
import ProductPage from '../components/ProductPage'
import Footer from '../components/Footer'
import Feactures from '../components/Feactures'


const Product = () => {
  return (
    <div>
        <Navbar/>
        <ProductPage></ProductPage>
        
        <Feactures/>
        <Footer></Footer>
    </div>
  )
}

export default Product