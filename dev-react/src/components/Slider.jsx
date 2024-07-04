/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link, useLoaderData } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";
import "./slider.css";

export default function Slider() {
  const countries = useLoaderData();
  console.log(countries);
  return (
    <section>
      <h2 className="w-full text-center">Europe</h2>
      <Swiper
        className="my-2 md:my-6 lg:my-8"
        loop
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 32,
          },
          1280: {
            slidesPerView: 4.3,
            spaceBetween: 32,
          },
        }}
      >
        {countries.map((country) => (
          <SwiperSlide key={country.id}>
            <Link
              to={`/`}
              className="flex flex-col text-center text-dark-color"
            >
              <img
                src="https://www.lightstalking.com/wp-content/uploads/zdenek-machacek-HYTwWSE5ztw-unsplash-1024x809.jpg.webp"
                alt={country.name}
                className="rounded-xl mb-4 aspect-[5/6] object-cover"
              />
              {country.name}
            </Link>
            <p>{country.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
