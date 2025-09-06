import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { menuItems, socialIcons } from "../data/navItems";
import Carousel from "../Carousel/Carousel";
import ProductPage from "../Product/ProductPage";
import NewsletterForm from "../Newsletter/NewsletterForm";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo=`${process.env.PUBLIC_URL}/images/logo.jpg`        menuItems={menuItems}
        socialIcons={socialIcons}
      />
      <Carousel />
      <ProductPage />
      <NewsletterForm />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomePage;
