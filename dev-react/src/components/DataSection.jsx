import React from "react";

export default function DataSection() {
  return (
    <section className="w-full flex flex-col justify-center p-4 min-h-96 gap-8 md:gap-10 lg:gap-12">
      <h2 className="text-center mb-4 md:mb-6 lg:mb-8">Quelques Chiffres</h2>
      <ul className="w-full flex flex-col gap-3 items-center justify-evenly md:flex-row ">
        <li className="flex flex-col text-center font-bold text-3xl gap-1 md:gap-2 md:text-4xl lg:gap-3 lg:text-[56px]">
          24+
          <span className="w-full font-normal text-base lg:text-lg">
            agences de voyages offrant des assistances
          </span>
        </li>
        <li className="flex flex-col text-center font-bold text-3xl gap-1 md:gap-2 md:text-4xl lg:gap-3 lg:text-[56px]">
          +7M
          <span className="w-full font-normal text-base lg:text-lg">
            de voyageurs français en situation de handicap chaques années
          </span>
        </li>
        <li className="flex flex-col text-center font-bold text-3xl gap-1 md:gap-2 md:text-4xl lg:gap-3 lg:text-[56px]">
          +30 000
          <span className="w-full font-normal text-base lg:text-lg">
            logement adaptées aux personnes à mobilité réduites dans le monde
          </span>
        </li>
      </ul>
    </section>
  );
}
