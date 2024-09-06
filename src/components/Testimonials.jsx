import React from "react";
import image from "/images/image1.jpg";
import avatar_1 from "/images/testi1.png";
import { ImQuotesLeft } from "react-icons/im";
import { FaAward } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section>
      <div className="w-full max-w-[1200px] mx-auto">
        <div>
          <div className="flex flex-col lg:flex-row items-center">
            {/* left content */}
            <section className="w-full lg:w-1/2">
              <img src={image} alt="Worker" className="w-full object-cover" />
            </section>
            {/* right content */}
            <section className="px-4 py-10 lg:p-0 w-full lg:w-1/2  bg-[#30344d] ">
              <div className="w-full px-2 md:px-[60px] lg:px-[100px]">
                <div className="w-full lg:max-w-[442px] ">
                  <div className="p-2 text-center mb-7">
                    <h5 className="font-inter text-sm font-semibold text-[#52c5b6] mb-3">
                      Testimonials
                    </h5>
                    <h2 className="text-center font-prata font-normal text-2xl md:text-3xl lg:text-[2.625rem] lg:leading-[1] text-white">
                      What Clients Say About Us
                    </h2>
                  </div>
                  {/* testimonial card content */}
                  <div className="flex flex-col w-full items-center gap-6 p-2">
                    {/* profile avatar */}
                    <div className="relative w-[90px] h-[90px] rounded-full">
                      <img src={avatar_1} alt="author" />
                      <div className="w-11 h-11 rounded-full bg-[#52c5b6] absolute -top-4 -right-4 flex items-center justify-center text-white">
                        <ImQuotesLeft />
                      </div>
                    </div>
                    {/* testimonial desc */}
                    <article className="text-center text-white font-light font-open-sans text-lg">
                      "I’m so grateful I came in contact with MAFG RIA Service,
                      they were able to recover my money . I highly recommend
                      them. Done in time. I really appreciate the timely help.
                      You should try them too."
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
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className=" px-20 py-11 bg-[#52c5b6]">
        <div className="w-full max-w-[1200px] mx-aut0 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-white place-items-center">
          <div className="flex flex-col p-4 items-center space-y-4 h-full w-full">
            <div className="text-6xl">
              <FaAward />
            </div>
            <span className="font-prata text-5xl font-normal block">4653</span>
            <p className="font-open-sans text-base font-normal text-center">
              <span className="block">Happy</span>
              <span className="block">Clients</span>
            </p>
          </div>
          <div className="flex flex-col p-4 items-center space-y-4  h-full w-full">
            <div className="text-6xl">
              <FaAward />
            </div>
            <span className="font-prata text-5xl font-normal block">4245</span>
            <p className="font-open-sans text-base font-normal text-center">
              <span className="block">Successful</span>
              <span className="block">Cases</span>
            </p>
          </div>
          <div className="flex flex-col p-4 items-center space-y-4 h-full w-full">
            <div className="text-6xl">
              <FaAward />
            </div>
            <span className="font-prata text-5xl font-normal block">10+</span>
            <p className="font-open-sans text-base font-normal text-center">
              <span>Years of Experience</span>
            </p>
          </div>
          <div className="flex flex-col p-4 items-center space-y-4  h-full w-full">
            <div className="text-6xl">
              <FaAward />
            </div>
            <span className="font-prata text-5xl font-normal block">20+</span>
            <p className="font-open-sans text-base font-normal text-center">
              <span className="block">Team</span>
              <span className="block">Members</span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
