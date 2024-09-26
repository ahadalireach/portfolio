import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Testimonial.css";
import { Pagination, Autoplay } from "swiper/modules";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";

const testimonialData = [
  {
    id: 1,
    name: "Waleed Ahmad",
    description:
      "The service was exceptional, exceeding my expectations in every way.",
    img: t4,
  },
  {
    id: 2,
    name: "Gaurav Jadhav",
    description:
      "Highly recommend this service to anyone seeking quality and excellence.",
    img: t2,
  },
  {
    id: 3,
    name: "Usama Malook",
    description:
      "Received excellent support, always prompt and incredibly helpful.",
    img: t1,
  },
  {
    id: 4,
    name: "Serena",
    description: "Great attention to detail and overall quality. Thank you",
    img: t3,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">Clients Feedback</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {testimonialData.map((testimonial) => {
          const { id, name, description, img } = testimonial;
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={img} alt={`${name} IMG`} className="testimonial__img" />
              <h3 className="testimonial__name">{name}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
