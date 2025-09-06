import Header from "../../../Header/Header";
import Navbar from "../../../Navbar/Navbar";
import Carousel from "../../../Carousel/Carousel";
import Footer from "../../../Footer/Footer";
import { menuItems, socialIcons } from "../../../data/navItems";
import ProductFeatures from "./ProductFeatures";
import logo from "../../../../assets/images/logo.jpg"

function ProductFeaturesPage({ product }) {
  return (
    <>
      <Header />
      <Navbar
        brandLogo={logo}
        menuItems={menuItems}
        socialIcons={socialIcons}
      />

      <Carousel />
      <ProductFeatures product={product} />
      <Footer />
    </>
  );
}
export default ProductFeaturesPage;
