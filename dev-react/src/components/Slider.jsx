/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Ally } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider({ countries }) {
  return (
    <Swiper
      spaceBetween={30}
      loop
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, Ally]}
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
    >
      {countries.map((country) => (
        <SwiperSlide key={country.id}>
          <Link
            to={`country/${country.name}`}
            className="flex flex-col text-center text-dark-color"
          >
            <img
              src={country.imgSrc}
              alt={country.name}
              className="img-shadow w-[calc(100%-15px)] mr-auto rounded-xl mb-4 h-60 object-cover"
            />
            {country.name}
          </Link>
          <p>{country.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
