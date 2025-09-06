import React from "react";
import Header from "../../../Header/Header";
import Navbar from "../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../data/navItems";
import Carousel from "../../../Carousel/Carousel";
import OurStores from "./OurStores";
import Footer from "../../../Footer/Footer";
import logo from "../../../../assets/images/logo.jpg";

const OurStoresPage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo={logo}
        menuItems={menuItems}
        socialIcons={socialIcons}
      />
      <Carousel />
      <OurStores />
      <Footer />
    </div>
  );
};

export default OurStoresPage;
