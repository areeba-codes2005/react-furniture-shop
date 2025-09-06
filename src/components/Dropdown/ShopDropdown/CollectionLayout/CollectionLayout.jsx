import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ProductCard from "../../../Product/ProductCard";
import "./CollectionLayout.css";
import { Tooltip } from "bootstrap";
import shopcollectionLayout1img1 from "../../../../assets/images/shop-collectionLayout1img1.jpg";
import shopcollectionLayout1img2 from "../../../../assets/images/shop-collectionLayout1img2.jpg";
import shopcollectionLayout1img3 from "../../../../assets/images/shop-collectionLayout1img3.jpg";
import shopcollectionLayout1img4 from "../../../../assets/images/shop-collectionLayout1img4.jpg";
import secbacimg3 from "../../../../assets/images/secbacimg3.webp";
import secbacimg4 from "../../../../assets/images/secbacimg4.webp";

const CollectionLayout = ({ data, heading }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  const finalData = Array.isArray(data) ? data : shopcollay1;

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((el) => new Tooltip(el));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row colleclayou1-row">
          <div className="col-12 col-md-4 offset-md-4 offset-lg-4">
            <h4 className="collection1-home-heading">{heading}</h4>
            <hr className="custom-hr-alt" />
            <h5 className="collection1-subc-heading">Subcategories</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            {/* Category Section */}
            <div className="mb-4">
              <h5 className="coll1-side-home">Home</h5>
              <ul className="list-unstyled ps-2 side-listone">
                {/* Furniture with submenu */}
                <li>
                  <a
                    href="#"
                    className="text-decoration-none d-flex justify-content-between align-items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("furniture");
                    }}
                  >
                    Furniture
                    <span>
                      {openDropdown === "furniture" ? (
                        <IoIosArrowUp className="arrow-icon" />
                      ) : (
                        <IoIosArrowDown className="arrow-icon" />
                      )}
                    </span>
                  </a>
                  {openDropdown === "furniture" && (
                    <ul className="list-unstyled ms-3 mt-2">
                      <li>
                        <a href="#" className="text-decoration-none text-muted">
                          Lighting Lamp
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none text-muted">
                          Decor Art
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Chairs with submenu */}
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-decoration-none d-flex justify-content-between align-items-center pb-2"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("chairs");
                    }}
                  >
                    Chairs
                    <span>
                      {openDropdown === "chairs" ? (
                        <IoIosArrowUp className="arrow-icon" />
                      ) : (
                        <IoIosArrowDown className="arrow-icon" />
                      )}
                    </span>
                  </a>
                  {openDropdown === "chairs" && (
                    <ul className="list-unstyled ms-3 mt-2">
                      <li>
                        <a href="#" className="text-decoration-none">
                          Artisan Appeal
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          Boho Bliss
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a href="#" className="text-decoration-none d-block pb-2">
                    Sofas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Construction
                  </a>
                </li>
              </ul>
            </div>
            <hr className="custom-hr-alt" />
            {/* Filter By Section */}
            <div className="mb-4">
              <h6 className="heading-six mt-4 mb-4">Filter By</h6>

              {/* Availability */}
              <div className="mb-3">
                <h6 className="heading-six pb-2">Availability</h6>
                <div className="d-flex flex-wrap gap-2">
                  <button className="my-custom-btn">In Stock (18)</button>
                  <button className="my-custom-btn">Not available (1)</button>
                </div>
              </div>

              {/* Selections */}
              <div className="mb-3">
                <h6 className="heading-six mt-4 mb-2">Selections</h6>
                <button className="my-custom-btn">Discounted (2)</button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img
              src={shopcollectionLayout1img1}
              alt="Furniture"
              className="shop-layout-img img-fluid"
            />
            <h6 className="h-six-layimg text-center">Furniture</h6>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img
              src={shopcollectionLayout1img2}
              alt="Chairs"
              className="shop-layout-img img-fluid"
            />
            <h6 className="h-six-layimg text-center">Chairs</h6>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mx-md-auto">
            <img
              src={shopcollectionLayout1img3}
              alt="Sofas"
              className="shop-layout-img img-fluid"
            />
            <h6 className="h-six-layimg text-center">Sofas</h6>
          </div>
          <div className="col-6 col-md-4 col-lg-2 justify-md-content-center">
            <img
              src={shopcollectionLayout1img4}
              alt="Construction"
              className="shop-layout-img img-fluid"
            />
            <h6 className="h-six-layimg text-center">Construction</h6>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-12 col-md-4 col-lg-4">
            {/* Price */}
            <div className="mb-3">
              <h6 className="heading-six">Price</h6>
              <div className="mb-1 price-range-label">$9.00 - $36.00</div>
              <input
                type="range"
                className="form-range price-range-slider"
                min="9"
                max="36"
              />
            </div>

            {/* Categories */}
            <div className="mb-3">
              <h6 className="heading-six">Categories</h6>
              <div className="d-flex flex-wrap gap-2">
                <button className="my-custom-btn">Chairs (11)</button>
                <button className="my-custom-btn">Furniture (2)</button>
                <button className="my-custom-btn">Sofas (7)</button>
              </div>
            </div>

            {/* Size */}
            <div className="mb-3">
              <h6 className="heading-six">Size</h6>
              <div className="d-flex flex-wrap gap-2">
                <button className="my-custom-btn">S (2)</button>
                <button className="my-custom-btn">M (2)</button>
                <button className="my-custom-btn">L (2)</button>
                <button className="my-custom-btn">XL (2)</button>
              </div>
            </div>

            {/* Color */}
            <div className="mb-3">
              <h6 className="heading-six">Color</h6>
              <div className="d-flex gap-2">
                <div
                  className="rounded-circle border my-rounded-circle"
                  data-bs-toggle="tooltip"
                  title="White (4)"
                ></div>
                <div
                  className="rounded-circle border my-rounded-circle my-rounded-circle-two"
                  data-bs-toggle="tooltip"
                  title="Black (4)"
                ></div>
              </div>
            </div>

            {/* Composition */}
            <div className="mb-3">
              <h6 className="heading-six">Composition</h6>
              <div className="d-flex flex-wrap gap-2">
                <button className="my-custom-btn">Ceramic (4)</button>
                <button className="my-custom-btn">Cotton (2)</button>
                <button className="my-custom-btn">Matt paper (3)</button>
                <button className="my-custom-btn">Polyester (3)</button>
                <button className="my-custom-btn">
                  Recycled cardboard (3)
                </button>
              </div>
            </div>
          </div>
          {finalData.slice(0, 2).map((item, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-3" key={index}>
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
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-12- col-md-4 col-md-6 col-lg-4">
            {/* ✅ Property */}
            <div className="mb-3">
              <h6 className="heading-six">Property</h6>
              <div className="d-flex flex-wrap gap-2">
                <button className="my-custom-btn">120 pages (3)</button>
                <button className="my-custom-btn">Long sleeves (1)</button>
                <button className="my-custom-btn">Removable cover (3)</button>
                <button className="my-custom-btn">Short sleeves (1)</button>
              </div>
            </div>

            {/* ✅ Brand */}
            <div className="mb-3">
              <h6 className="heading-six">Brand</h6>
              <div className="d-flex flex-wrap gap-2">
                <button className="my-custom-btn">Graphic Corner (9)</button>
                <button className="my-custom-btn">Studio Design (9)</button>
              </div>
            </div>

            {/* ✅ Dimension */}
            <div className="mb-3">
              <h6 className="heading-six">Dimension</h6>
              <div className="d-flex flex-wrap gap-2">
                <button className="my-custom-btn">40x60cm (3)</button>
                <button className="my-custom-btn">60x90cm (3)</button>
                <button className="my-custom-btn">80x120cm (3)</button>
              </div>
            </div>

            {/* ✅ Paper Type */}
            <div className="mb-3">
              <h6 className="heading-six">Paper Type</h6>
              <div className="d-flex flex-wrap gap-2">
                <button className="my-custom-btn">Ruled (3)</button>
                <button className="my-custom-btn">Plain (3)</button>
                <button className="my-custom-btn">Squarred (3)</button>
                <button className="my-custom-btn">Doted (3)</button>
              </div>
              <hr className="custom-hr-alt" />
            </div>
          </div>
          {/* ✅ Manually render product3 (finalData[2]) */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <ProductCard
              image={finalData[2].image}
              name={finalData[2].name}
              oldPrice={finalData[2].oldPrice}
              newPrice={finalData[2].newPrice}
            />
          </div>

          {/* ✅ Manually render product4 (finalData[3]) */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <ProductCard
              image={finalData[3].image}
              name={finalData[3].name}
              oldPrice={finalData[3].oldPrice}
              newPrice={finalData[3].newPrice}
            />
          </div>

          {/* ✅ Insert box3 */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div
              className="box3 decor-box"
              style={{
                backgroundImage: `url(${secbacimg3})`,
              }}
            >
              <span className="bor">
                <div></div>
              </span>
              <div className="cont">
                <h4>Turning Table</h4>
                <p>Class aptent taciti sociosqu</p>
                <a href="#">From $49.59</a>
              </div>
            </div>
          </div>

          {/* ✅ Manually render product5 (finalData[4]) */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <ProductCard
              image={finalData[4].image}
              name={finalData[4].name}
              oldPrice={finalData[4].oldPrice}
              newPrice={finalData[4].newPrice}
            />
          </div>

          {/* ✅ Manually render product6 (finalData[5]) */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <ProductCard
              image={finalData[5].image}
              name={finalData[5].name}
              oldPrice={finalData[5].oldPrice}
              newPrice={finalData[5].newPrice}
            />
          </div>

          {/* ✅ Manually render product7 (finalData[6]) */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <ProductCard
              image={finalData[6].image}
              name={finalData[6].name}
              oldPrice={finalData[6].oldPrice}
              newPrice={finalData[6].newPrice}
            />
          </div>

          {/* ✅ Insert box4 */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="box4 decor-box" style={{
                backgroundImage: `url(${secbacimg4})`,
              }}>
              <span className="bor">
                <div></div>
              </span>
              <div className="cont">
                <h4>Wood Chair</h4>
                <p>Class aptent taciti sociosqu</p>
                <a href="#">Extra 40% off</a>
              </div>
            </div>
          </div>

          {/* ✅ Manually render product8 (finalDatafinalData */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <ProductCard
              image={finalData[7].image}
              name={finalData[7].name}
              oldPrice={finalData[7].oldPrice}
              newPrice={finalData[7].newPrice}
            />
          </div>

          {/* ✅ Continue with remaining products (finalData[8] and onward) */}
          {finalData.slice(8).map((item, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={index + 8}>
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
    </>
  );
};

export default CollectionLayout;
