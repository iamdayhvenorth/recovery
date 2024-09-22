import React, { useEffect, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { testimonial } from "../data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function TestimonialCard() {
  return (
    <Splide
      options={{
        perPage: 1,
        pagination: false,
        arrows: false,
        autoplay: true,
        type: "fade",
        rewind: true,
        interval: 5000,
        speed: 2000,
      }}
      className="flex"
    >
      {testimonial.map((x, idx) => (
        <SplideSlide className={` py-4 select-none`} key={idx}>
          <div className="flex flex-col w-full items-center gap-6 p-2">
            <div className="relative w-[90px] h-[90px] rounded-full">
              <img src={x.image} alt="author" />
              <div className="w-11 h-11 rounded-full bg-[#52c5b6] absolute -top-4 -right-4 flex items-center justify-center text-white">
                <ImQuotesLeft />
              </div>
            </div>
            {/* testimonial desc */}
            <article className="text-center  font-light font-open-sans text-lg">
              {x.description}
            </article>
            <div className="text-center">
              <h5 className="font-prata font-normal  text-xl lg:text-2xl mb-[2px]">
                {x.name}
              </h5>
              <span className="text-center text-[#52c5bc] font-inter text-sm font-semibold">
                {x.amount_recovered}
              </span>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
