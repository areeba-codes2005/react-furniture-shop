import ProductCard from "./ProductCard";

const ProductGrid = ({ title, subtitle, data }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-5">
          <h1
            className="section-title text-center fw-bold"
            data-aos="fade-up"
            data-aos-offset="500"
          >
            {title}
          </h1>
          <p
            className="section-subtitle text-center pb-5"
            data-aos="fade-up"
            data-aos-offset="500"
          >
            {subtitle}
          </p>
          {data.map((item, index) => (
            <div
              className="col-12 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-offset="500"
              key={index}
            >
              <ProductCard
                image={item.image}
                name={item.name}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
