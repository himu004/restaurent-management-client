import SectionTittle from "../../../components/SectionTittle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // console.log(reviews);

  return (
    <div className="py-10">
      <SectionTittle heading="Testimonials" subHeading="What Our Client Say" />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="container mx-auto flex flex-col items-center gap-5 bg-white p-8 rounded-lg shadow-md">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readonly
                />
                <p className="text-gray-600">{review.details}</p>
                <div className="flex items-center mt-4">
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
