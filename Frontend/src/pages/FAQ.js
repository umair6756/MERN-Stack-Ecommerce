import React from 'react'
import Navbar from '../components/Navbar'
import FAQPage from '../components/FAQPage'
import Footer from '../components/Footer'
import { HeroSection } from '../components/Buttons'
import Feactures from '../components/Feactures'

const FAQ = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection heroBackground="faqBackground"/>
        <FAQPage/>
        <Feactures/>
        <Footer/>
    </div>
  )
}

export default FAQ