import testimonials from "../assets/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialSwipper.css";

function TestimonialsSwipper() {
  return (
    <Swiper
      spaceBetween={0}
      loop
      centeredSlides
      speed={1500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        draggable: true,
      }}
      navigation
      modules={[Autoplay, Pagination, Navigation, A11y]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      }}
      className="mySwiper"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.name}>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-image"
          />
          <h2 className="testimonial-title">{testimonial.title}</h2>
          <p className="testimonial-text">{testimonial.testimonial}</p>
          <p className="testimonial-name">{testimonial.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonialsSwipper;
