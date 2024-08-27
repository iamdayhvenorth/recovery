import React from "react";

export default function Experience() {
  return (
    <section className="w-full bg-exp md:bg-fixed bg-no-repeat bg-center bg-cover">
      <div className="w-full max-w-[1200px] pt-16 md:pt-32 mx-auto px-4 md:px-12">
        <div>
          <div className="pb-16">
            <div className="text-center p-3 max-w-[630px] mx-auto">
              <h2 className="text-sm font-semibold text-white mb-3 font-inter">
                MAFG RIA Service
              </h2>
              <h2 className="font-prata text-3xl md:text-4xl text-white font-normal">
                Worldwide Campaign Against Online Trading Scammers
              </h2>
            </div>
          </div>
        </div>
        <div className="py-4 flex justify-center px-4 w-full">
          <a
            href="#"
            className="text-black w-full md:w-fit text-center uppercase rounded-tl-sm rounded-tr-sm font-inter text-sm font-semibold p-4 bg-[#fefefe] opacity-100 hover:opacity-80"
          >
            Our Experience
          </a>
        </div>
      </div>
    </section>
  );
}
