import Header from "../../../Header/Header";
import Navbar from "../../../Navbar/Navbar";
import Carousel from "../../../Carousel/Carousel";
import Footer from "../../../Footer/Footer";
import { menuItems, socialIcons } from "../../../data/navItems";
import ProductFeatures from "./ProductFeatures";

function ProductFeaturesPage({ product }) {
  return (
    <>
      <Header />
      <Navbar
        brandLogo={`${process.env.PUBLIC_URL}/images/logo.jpg`}
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
