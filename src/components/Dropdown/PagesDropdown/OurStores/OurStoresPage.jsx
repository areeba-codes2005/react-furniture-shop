import React from "react";
import Header from "../../../Header/Header";
import Navbar from "../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../data/navItems";
import Carousel from "../../../Carousel/Carousel";
import OurStores from "./OurStores";
import Footer from "../../../Footer/Footer";

const OurStoresPage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo={`${process.env.PUBLIC_URL}/images/logo.jpg`}
        socialIcons={socialIcons}
      />
      <Carousel />
      <OurStores />
      <Footer />
    </div>
  );
};

export default OurStoresPage;
