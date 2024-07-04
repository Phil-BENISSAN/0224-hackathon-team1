import React from "react";

export default function InfoCardCity({ country, cityPic }) {
  return (
    <section className="w-full flex flex-col items-center justify-between gap-2 px-4 md:px-6 lg:self-end lg:w-[60%] lg:px-8">
      <h2>{country.nom_ville}</h2>
      <img
        src={cityPic}
        alt=""
        className="rounded-[80px] mb-10 max-w-[640px] max-h-[500px]"
      />
      <p className="text-left w-full">{country.description_ville}</p>
    </section>
  );
}
