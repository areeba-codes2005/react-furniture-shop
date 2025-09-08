import React from "react";
import Header from "../../../Header/Header";
import Navbar from "../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../data/navItems";
import Carousel from "../../../Carousel/Carousel";
import AboutUs from "./AboutUs";
import Footer from "../../../Footer/Footer";
import logo from "../../../../assets/images/logo.jpg"

const AboutUsPage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo={logo}
        menuItems={menuItems}
        socialIcons={socialIcons}
      />

      <Carousel />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
