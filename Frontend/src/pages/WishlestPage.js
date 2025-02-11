import React from 'react'
import Navbar from '../components/Navbar'
import Wishlest from '../components/Wishlest'
import Footer from '../components/Footer'
import Feactures from '../components/Feactures'

const WishlestPage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Wishlest></Wishlest>
        <Feactures></Feactures>
        <Footer></Footer>
    </div>
  )
}

export default WishlestPage