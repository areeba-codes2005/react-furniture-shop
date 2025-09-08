import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import homeSlide1 from "../../assets/images/homeSlide1.webp";
import homeSlide2 from "../../assets/images/homeSlide2.webp";
import homeSlide3 from "../../assets/images/homeSlide3.webp";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Swiper
      speed={2000}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      rewind={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="slide-content">
          <img src={homeSlide1} alt="slide1" />
          <div className="text-overlay">
            <p className="slide-heading" data-aos="fade-right">
              Quick parcel delivery,<span>from $25</span>
            </p>

            <p className="slide-description" data-aos="fade-left">
              Normann Copenhagen - <br /> Craft salt and pepper grinder
            </p>
            <button data-aos="fade-up">
              Start Shopping <span>&gt;</span>
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={homeSlide2} alt="slide2" />
          <div className="text-overlay">
            <p className="slide-heading">
              Quick parcel delivery,<span>from $25</span>
            </p>

            <p className="slide-description">
              Wood Minimal Office Chair <br />
              Extra 40% off now.
            </p>
            <button>
              Start Shopping <span>&gt;</span>
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={homeSlide3} alt="slide3" />
          <div className="text-overlay">
            <p className="slide-heading">
              Quick parcel delivery,<span>from $25</span>
            </p>

            <p className="slide-description">
              Everyone’s Talking About <br />
              Sweeper and funnel.
            </p>
            <button>
              Start Shopping <span>&gt;</span>
            </button>
          </div>
        </div>
      </SwiperSlide>

      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Carousel;
