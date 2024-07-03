import React from "react";

export default function DataSection() {
  return (
    <section className="">
      <ul className="w-full flex flex-col gap-3">
        <li className="flex flex-col text-center font-bold text-3xl">
          24+
          <span className="w-full font-normal text-base">some infos</span>
        </li>
        <li className="flex flex-col text-center font-bold text-3xl">
          17M
          <span className="w-full font-normal text-base">some infos</span>
        </li>
        <li className="flex flex-col text-center font-bold text-3xl">
          +95%
          <span className="w-full font-normal text-base">some infos</span>
        </li>
      </ul>
    </section>
  );
}
