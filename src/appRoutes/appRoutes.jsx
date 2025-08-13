import HomePage from "../components/HomePage/HomePage";
import ShopLayoutPage from "../components/Dropdown/ShopDropdown/CollectionLayout/ShopLayoutPage";
import {
  shopcollay1,
  shopcollay2,
  shopcollay3,
  shopcollay4,
} from "../components/data/shopcollay";
import ProductFeaturesPage from "../components/Dropdown/ShopDropdown/ProductFeatures/ProductFeaturesPage";
import ShopFeat from "../components/data/ShopFeat";
import AboutUsPage from "../components/Dropdown/PagesDropdown/AboutUs/AboutUsPage";
import TermsAndConPage from "../components/Dropdown/PagesDropdown/TermsAndCon/TermsAndConPage";
import TermsAndConditions from "../components/data/TermsAndConditions";
import Delivery from "../components/data/Delivery";
import LegalNotice from "../components/data/LegalNotice";
import SecurePayment from "../components/data/SecurePayment";
import FAQsPage from "../components/Dropdown/PagesDropdown/FAQs/FAQsPage";
import OurStoresPage from "../components/Dropdown/PagesDropdown/OurStores/OurStoresPage";
import ContactPage from "../components/Contact/ContactPage";
import SitemapPage from "../components/Dropdown/PagesDropdown/Sitemap/SitemapPage";
import LoginPage from "../components/Dropdown/PagesDropdown/Sitemap/Login/LoginPage";
import AccountPage from "../components/Dropdown/PagesDropdown/Sitemap/Account/AccountPage";

const appRoutes = [
  // Home
  { path: "/", element: <HomePage /> },

  // Collection Layouts
  {
    path: "/collection-layout-01",
    element: <ShopLayoutPage data={shopcollay1} heading="HOME" />,
  },
  {
    path: "/collection-layout-02",
    element: <ShopLayoutPage data={shopcollay2} heading="HOME" />,
  },
  {
    path: "/collection-layout-03",
    element: <ShopLayoutPage data={shopcollay3} heading="HOME" />,
  },
  {
    path: "/collection-layout-04",
    element: <ShopLayoutPage data={shopcollay4} heading="HOME" />,
  },

  // Product Styles
  {
    path: "/product-style-01",
    element: <ShopLayoutPage data={shopcollay1} heading="HOME" />,
  },
  {
    path: "/product-style-02",
    element: <ShopLayoutPage data={shopcollay2} heading="HOME" />,
  },
  {
    path: "/product-style-03",
    element: <ShopLayoutPage data={shopcollay3} heading="HOME" />,
  },
  {
    path: "/product-style-04",
    element: <ShopLayoutPage data={shopcollay2} heading="HOME" />,
  },
  {
    path: "/product-style-05",
    element: <ShopLayoutPage data={shopcollay3} heading="HOME" />,
  },

  // Product Feature
  {
    path: "/product-default",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },
  {
    path: "/Product-variable",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },
  {
    path: "/Product-countdown",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },
  {
    path: "/Product-grouped",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },
  {
    path: "/Product-out-of-stock",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },

  // Product Layout
  {
    path: "/layout-01-bottom-thumb",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },
  {
    path: "/layout-02-left-thumb",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },
  {
    path: "/layout-03-right-thumb",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },
  {
    path: "/layout-04-no-thumb",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },
  {
    path: "/layout-05-no-thumb-center",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },
  {
    path: "/layout-06-no-thumb-fullwidth",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },
  {
    path: "/layout-07-gallery",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },

  //Popular Product
  {
    path: "/hanging-egg-chair",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },
  {
    path: "/objects-cushion-yellow",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },
  {
    path: "/victo-pedant-lamp",
    element: <ProductFeaturesPage product={ShopFeat} />,
  },

  //Pages
  { path: "/about-us", element: <AboutUsPage /> },
  {
    path: "/terms-and-conditions-of-use",
    element: <TermsAndConPage data={TermsAndConditions} />,
  },
  { path: "/faqs", element: <FAQsPage /> },
  { path: "/our-stores", element: <OurStoresPage /> },
  { path: "/contact-us", element: <ContactPage /> },
  { path: "/sitemap", element: <SitemapPage /> },
  //Inside sitemap link
  {
    path: "/new-products",
    element: <ShopLayoutPage data={shopcollay1} heading="NEW PRODUCTS" />,
  },
  {
    path: "/best-sellers",
    element: <ShopLayoutPage data={shopcollay2} heading="BEST SELLERS" />,
  },
  {
    path: "/price-drop",
    element: <ShopLayoutPage data={shopcollay3} heading="PRICE DROP" />,
  },
  {
    path: "/graphic-corner",
    element: <ShopLayoutPage data={shopcollay4} heading="GRAPHIC CORNER" />,
  },
  {
    path: "/studio-design",
    element: <ShopLayoutPage data={shopcollay1} heading="STUDIO DESIGN" />,
  },
  {
    path: "/home",
    element: <ShopLayoutPage data={shopcollay2} heading="HOME" />,
  },
  {
    path: "/furniture",
    element: <ShopLayoutPage data={shopcollay3} heading="FURNITURE" />,
  },
  {
    path: "/lighting-lamp",
    element: <ShopLayoutPage data={shopcollay4} heading="LIGHTING LAMP" />,
  },
  {
    path: "/decor-art",
    element: <ShopLayoutPage data={shopcollay1} heading="DECOR ART" />,
  },
  {
    path: "/chairs",
    element: <ShopLayoutPage data={shopcollay2} heading="CHAIRS" />,
  },
  {
    path: "/artisan-appeal",
    element: <ShopLayoutPage data={shopcollay3} heading="ARTISAN APPEAL" />,
  },
  {
    path: "/boho-bliss",
    element: <ShopLayoutPage data={shopcollay4} heading="BOHO BLISS" />,
  },
  {
    path: "/sofas",
    element: <ShopLayoutPage data={shopcollay1} heading="SOFAS" />,
  },
  {
    path: "/construction",
    element: <ShopLayoutPage data={shopcollay2} heading="CONSTRUCTION" />,
  },
  {
    path: "/log-in",
    element: <LoginPage />,
  },
  {
    path: "/create-new-account",
    element: <AccountPage />,
  },
  {
    path: "/delivery",
    element: <TermsAndConPage data={Delivery} />,
  },
  {
    path: "/legal-notice",
    element: <TermsAndConPage data={LegalNotice} />,
  },
  {
    path: "/terms-and-conditions-of-use",
    element: <TermsAndConPage data={TermsAndConditions} />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "/secure-payment",
    element: <TermsAndConPage data={SecurePayment} />,
  },
  {
    path: "/faqs",
    element: <FAQsPage />,
  },
  {
    path: "/our-stores",
    element: <OurStoresPage />,
  },
  {
    path: "/contact-us",
    element: <ContactPage />,
  },
  {
    path: "/sitemap",
    element: <SitemapPage />,
  },
  //Collections
  {
    path: "/furniture",
    element: <ShopLayoutPage data={shopcollay1} heading="FURNITURE" />,
  },
  {
    path: "/lighting-lamp",
    element: <ShopLayoutPage data={shopcollay2} heading="LIGHTING LAMP" />,
  },
  {
    path: "/decor-art",
    element: <ShopLayoutPage data={shopcollay3} heading="DECOR ART" />,
  },
  {
    path: "/chairs",
    element: <ShopLayoutPage data={shopcollay4} heading="CHAIRS" />,
  },
  {
    path: "/artisan-appeal",
    element: <ShopLayoutPage data={shopcollay1} heading="Artisan Appeal" />,
  },
  {
    path: "/boho-bliss",
    element: <ShopLayoutPage data={shopcollay2} heading="BOHO BLISS" />,
  },
  //Blog
  {
    path: "/blog-grid",
    element: <ShopLayoutPage data={shopcollay1} heading="BLOG GRID" />,
  },
  {
    path: "/blog-category",
    element: <ShopLayoutPage data={shopcollay2} heading="BLOG CATEGORY" />,
  },
  {
    path: "/blog-details",
    element: <ShopLayoutPage data={shopcollay3} heading="BLOG DETAILS" />,
  },
];

export default appRoutes;
