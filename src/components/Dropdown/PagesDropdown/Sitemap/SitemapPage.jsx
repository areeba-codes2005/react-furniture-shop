import React from "react";
import Header from "../../../Header/Header";
import Navbar from "../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../data/navItems";
import Carousel from "../../../Carousel/Carousel";
import Sitemap from "./Sitemap";
import Footer from "../../../Footer/Footer";
import logo from "../../../../assets/images/logo.jpg";

const SitemapPage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo={logo}
        menuItems={menuItems}
        socialIcons={socialIcons}
      />
      <Carousel />
      <Sitemap />
      <Footer />
    </div>
  );
};

export default SitemapPage;
