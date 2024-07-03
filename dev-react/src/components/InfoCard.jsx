import React from "react";

export default function InfoCard() {
  return (
    <section className="w-full flex flex-col items-center justify-between gap-2">
      <h2>Titre</h2>
      <img
        src="https://www.lightstalking.com/wp-content/uploads/zdenek-machacek-HYTwWSE5ztw-unsplash-1024x809.jpg.webp"
        alt=""
        className="rounded-[80px] mb-10"
      />
      <h3 className="text-left w-full">titre zieheozaubguzagheargohzghpz</h3>
      <p className="text-left w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse eligendi
        consequuntur nostrum ad minima et at maiores quaerat omnis expedita?
        Aliquid blanditiis sequi quibusdam quae aut saepe, debitis non nisi.
      </p>
    </section>
  );
}
