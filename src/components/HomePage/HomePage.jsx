import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { menuItems, socialIcons } from "../data/navItems";
import Carousel from "../Carousel/Carousel";
import ProductPage from "../Product/ProductPage";
import NewsletterForm from "../Newsletter/NewsletterForm";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import logo from "../../assets/images/logo.jpg";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo={logo}
        menuItems={menuItems}
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
