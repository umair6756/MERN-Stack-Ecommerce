import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Carasole from '../components/Carasole'
import Products from '../components/Products'
import Buttons, { Button } from '../components/Buttons'
import NewArrival from '../components/NewArrival'
import TopProducts from '../components/TopProducts'
import Feactures from '../components/Feactures'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'
import BrandAnimation from '../components/brandAnimation'

import '../components/Footer.css'
import { CartContext} from '../components/CartContext'

const Home = () => {

  const { useScrollAnimation } = useContext(CartContext)


    useScrollAnimation()
    

  
  
    
  return (
    <div className='homePage'> 
        <Navbar/>
        <Carasole />
        <div className='animationBox'><BrandAnimation /></div>
        
        <div className='animationBox'><Products/></div>
        <div className='animationBox'><Button label="View More"></Button></div>
        <div className='animationBox'><NewArrival/></div>
        <div className='animationBox'><TopProducts/></div>
        <div className='animationBox'><Feactures/></div>
        <div className='animationBox'><BlogCard/></div>
       
        <Footer/>
    </div>
  )
}

export default Home