import "./Product.css";
import secbacimg1 from "../../assets/images/secbacimg1.webp";
import secbacimg2 from "../../assets/images/secbacimg2.webp";
import secbacimg3 from "../../assets/images/secbacimg3.webp";
import secbacimg4 from "../../assets/images/secbacimg4.webp";
import secbacimg5 from "../../assets/images/secbacimg5.webp";
import sec3banner from "../../assets/images/sec3banner.webp";

const Product = () => {
  return (
    <div>
      <section className="sec2">
        <div className="container-fluid">
          <div className="row mt-5">
            <div
              className="col-12 col-md-6 col-lg-6"
              data-aos="fade-right"
              data-aos-offset="700"
            >
              <div
                className="box1 decorative-box m-3"
                style={{
                  backgroundImage: `url(${secbacimg1})`,
                }}
              >
                <span className="bor">
                  <div></div>
                </span>
                <div className="con con1">
                  <h5>
                    Quick parcel delivery, <span>from $25</span>
                  </h5>
                  <h2>
                    Up to 70% Off
                    <br /> Interior Home Decor
                  </h2>
                  <p>Class aptent taciti sociosqu ad litora</p>
                  <button type="button">
                    Shop Collection <span>&gt;</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-6"
              data-aos="fade-left"
              data-aos-offset="700"
            >
              <div
                className="box2 decorative-box m-3"
                style={{
                  backgroundImage: `url(${secbacimg2})`,
                }}
              >
                <span className="bor">
                  <div></div>
                </span>
                <div className="con con2">
                  <h5>
                    Quick parcel delivery, <span>from $25</span>
                  </h5>
                  <h2>
                    Up to 70% Sale Off
                    <br /> Pendent Lamp
                  </h2>
                  <p>Class aptent taciti sociosqu ad litora torquent per</p>
                  <button type="button">
                    Shop Collection <span>&gt;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row gx-4 mt-3">
            <div
              className="col-12 col-md-6 col-lg-3"
              data-aos="fade-right"
              data-aos-offset="700"
            >
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
            <div
              className="col-12 col-md-6 col-lg-3"
              data-aos="fade-right"
              data-aos-offset="700"
            >
              <div
                className="box4 decor-box"
                style={{
                  backgroundImage: `url(${secbacimg4})`,
                }}
              >
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
            <div
              className="col-12 col-md-12 col-lg-6"
              data-aos="fade-left"
              data-aos-offset="700"
            >
              <div
                className="box5 decor-box"
                style={{
                  backgroundImage: `url(${secbacimg5})`,
                }}
              >
                <span className="bor">
                  <div></div>
                </span>
                <div className="cont">
                  <h4>Modern Nutshell Lounge Chair</h4>
                  <p>Class aptent taciti sociosqu ad litora torquent per</p>
                  <a href="#">Extra 20% off</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="sec3"
        style={{
          backgroundImage: `url(${sec3banner})`,
        }}
        data-aos="zoom-in"
        data-aos-offset="700"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="d-none d-md-block col-md-5 col-lg-6"></div>
            <div className="col-12 col-md-7 col-lg-6 content">
              <h5>
                Quick parcel delivery, <span>from $25</span>
              </h5>
              <h2>
                Shop The New Brands
                <br /> Up to 40% off now.
              </h2>
              <p>Class aptent taciti sociosqu ad litora torquent per</p>
              <button type="button">
                Shop Collection <span>&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
