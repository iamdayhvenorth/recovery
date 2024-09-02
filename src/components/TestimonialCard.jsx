import React, { useEffect, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { testimonial } from "../data";
import avatar_1 from "/images/testi1.png";

export default function TestimonialCard() {
  const [currSlide, setCurrSlide] = useState(2);

  const handlePrev = () => {
    if (currSlide > 0) {
      setCurrSlide(currSlide - 1);
    }
  };

  const handleNext = () => {
    // console.log("clicked");
    setCurrSlide(currSlide + 1);
    if (currSlide === testimonial.length - 1) {
      setCurrSlide(0);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 4000);

    return () => clearInterval(timer);
  }, [currSlide]);
  console.log(currSlide);

  return (
    // testimonial card container
    <div className=" flex w-full">
      {testimonial.map((item, idx) => (
        <div
          className={`flex flex-col w-full items-center gap-6 p-4 border-2 border-red-900 flex-1  absolute  bg-[#30344d] overflow-hidden   pointer-events-none ] transition duration-[2000ms] ${
            idx === currSlide
              ? "opacity-100 0 pointer-events-auto  "
              : " opacity-0"
          }`}
          key={idx}
        >
          {/* profile avatar */}
          <div className="relative w-[90px] h-[90px] rounded-full">
            <img src={item.image} alt="author" />
            <div className="w-11 h-11 rounded-full bg-[#52c5b6] absolute -top-4 -right-4 flex items-center justify-center text-white">
              <ImQuotesLeft />
            </div>
          </div>
          {/* testimonial desc */}
          <article className="text-center text-white font-light font-open-sans text-lg">
            {item.description}
          </article>
          <div className="text-center">
            <h5 className="font-prata font-normal text-white text-xl lg:text-2xl mb-[2px]">
              Oliver Simson
            </h5>
            <span className="text-center text-[#52c5bc] font-inter text-sm font-semibold">
              $162K Recovered
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
