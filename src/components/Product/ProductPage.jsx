import Product from "./Product";
import ProductGrid from "./ProductGrid";
import ProductData from "../data/ProductData";
import TopsaleData from "../data/TopsaleData";

const ProductPage = () => {
  return (
    <div>
      <ProductGrid
        title="Trending Products"
        subtitle="Top view in this week"
        data={ProductData}
      />
      <Product />
      <ProductGrid
        title="Best Seller Products"
        subtitle="Top sale in this week"
        data={TopsaleData}
      />
    </div>
  );
};

export default ProductPage;
