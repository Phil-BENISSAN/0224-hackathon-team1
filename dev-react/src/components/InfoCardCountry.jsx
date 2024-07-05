import React from "react";

export default function InfoCardCountry({ country }) {
  return (
    <section className="w-full flex flex-col items-center justify-between gap-2 px-4 md:px-6 lg:self-start lg:w-[60%] lg:px-8">
      <h2>{country.pays}</h2>
      <img
        src={country.img_src}
        alt=""
        className="rounded-[80px] mb-10 max-w-[640px]"
      />
      <p className="font-semibold text-base lg:text-lg">
        Rang d'accessibilité (sur 180 pays):{" "}
        <span className="font-bold text">{country.score}</span>
      </p>
      <p className="text-left w-full">{country.description_pays}</p>
    </section>
  );
}