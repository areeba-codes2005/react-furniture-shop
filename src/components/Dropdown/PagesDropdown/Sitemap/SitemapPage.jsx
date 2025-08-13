import React from "react";
import Header from "../../../Header/Header";
import Navbar from "../../../Navbar/Navbar";
import { menuItems, socialIcons } from "../../../data/navItems";
import Carousel from "../../../Carousel/Carousel";
import Sitemap from "./Sitemap";
import Footer from "../../../Footer/Footer";

const SitemapPage = () => {
  return (
    <div>
      <Header />
      <Navbar
        brandLogo="/images/logo.jpg"
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
