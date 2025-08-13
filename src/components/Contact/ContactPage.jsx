import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import { menuItems, socialIcons } from '../data/navItems'
import Carousel from '../Carousel/Carousel'
import Contact from './Contact'
import Footer from '../Footer/Footer'

const ContactPage = () => {
  return (
    <div>
       <Header />
       <Navbar brandLogo="/images/logo.jpg" menuItems={menuItems} socialIcons={socialIcons} />
       <Carousel />
       <Contact />
       <Footer />
    </div>
  )
}

export default ContactPage
