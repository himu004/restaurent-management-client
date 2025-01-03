import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionTittle from "./SectionTittle";

const Categories = () => {
  return (
    <section className="py-10">
      <div className="py-10">
        <SectionTittle heading="Order Online" subHeading="From 11.00am to 10.00pm" />
      </div>
      {/* Swiper */}
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-20"
        >
          <SwiperSlide>
            <img className="w-full mb-10" src={slide1} alt="slide1" />
            <h1 className="text-4xl uppercase text-center md:-mt-56 text-white">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="slide1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
