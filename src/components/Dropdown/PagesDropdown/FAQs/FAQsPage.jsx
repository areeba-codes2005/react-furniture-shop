import React from "react";
import Header from "../../../Header/Header";
import Navbar from "../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../data/navItems";
import Carousel from "../../../Carousel/Carousel";
import FAQs from "./FAQs";
import FAQsData from "../../../data/FAQsData";
import Footer from "../../../Footer/Footer";

const FAQsPage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo="/images/logo.jpg"
        menuItems={menuItems}
        socialIcons={socialIcons}
      />
      <Carousel />
      <FAQs faqs={FAQsData} />
      <Footer />
    </div>
  );
};

export default FAQsPage;
