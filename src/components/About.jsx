import React from "react";
import line from "../assets/chart-project-home-5.png";
import Accordion from "./Accordion";

export default function About() {
  return (
    <section className="w-full bg-[#30344d]">
      <div className="w-full max-w-[1200px] border-2 border-red-900 mx-auto py-16 md:py-32 px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* left content */}
          <div className="p-2 h-full w-full lg:w-1/2 ">
            <div>
              <div className="mb-6">
                <h2 className="text-sm font-inter font-semibold text-[#52c5b6] mb-3 uppercase">
                  Mafg Ria Service
                </h2>
                <h2 className="text-3xl lg:text-4xl font-prata font-normal text-white">
                  About Us
                </h2>
              </div>
              <Accordion />
            </div>
          </div>
          {/* right content */}
          <div className="p-2 h-full w-full lg:w-1/2 ">
            <div>
              <img src={line} alt="Line Graph" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
