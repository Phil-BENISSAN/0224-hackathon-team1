/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link, useLoaderData } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";
import "./slider.css";

export default function Slider({ continent }) {
  return (
    <section className="lg:px-8">
      <h2 className="w-full text-center">{continent[0].continent}</h2>
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
            slidesPerView: 4,
            spaceBetween: 32,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        {continent.map((country) => (
          <SwiperSlide key={country.pays}>
            <Link
              to={`/country/${country.pays}`}
              className="flex flex-col text-center text-dark-color"
            >
              <img
                src={country.img_src}
                alt={`photo de ${country.pays} `}
                className="rounded-xl mb-4 aspect-[5/6] object-cover"
              />
              <span className="font-medium text-lg">{country.pays}</span>
            </Link>
            <p className="text-sm lg:text-base text-center">{`${country.description_pays.substring(0, 50)}...`}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
