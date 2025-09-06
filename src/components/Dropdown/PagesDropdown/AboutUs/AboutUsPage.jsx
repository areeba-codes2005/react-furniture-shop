import React from "react";
import Header from "../../../Header/Header";
import Navbar from "../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../data/navItems";
import Carousel from "../../../Carousel/Carousel";
import AboutUs from "./AboutUs";
import Footer from "../../../Footer/Footer";

const AboutUsPage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo=`${process.env.PUBLIC_URL}/images/logo.jpg`        menuItems={menuItems}
        socialIcons={socialIcons}
      />
      <Carousel />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
