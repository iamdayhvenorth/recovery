import React from "react";
import logo from "/images/mlogo.png";
import { IoIosSend } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import map from "/images/map-footer.png";

export default function Footer() {
  return (
    <footer className="bg-[#1f2238]">
      <div className=" w-full max-w-[1200px] mx-auto pt-16 md:pt-16 px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 pb-16 border-b border-[#e5e7eb]">
          <div>
            <div className="w-[252px]">
              <img src={logo} alt="Logo" className="w-full object-cover" />
            </div>
            <p className="font-open-sans text-base font-normal text-[#AFC1CE] mt-3">
              We are a recovery intelligence firm committed to helping you
              recover your money at the shortest possible time frame and with
              the most cost effective approach.
            </p>
          </div>

          <div className="text-white">
            <h6 className="font-inter text-base font-semibold text-white">
              Head Office
            </h6>
            <div className="mt-3 flex flex-col gap-4">
              <div className="flex gap-3">
                <MdLocationOn className="text-[#52c5b6] text-3xl" />
                <div>
                  <a
                    href="#"
                    className="font-open-sans font-normal text-base text-[#c0c1c2]"
                  >
                    Visit Us Daily
                  </a>
                  <p className="mt-2 font-inter text-base font-medium">
                    102 Gaither Dr, Mt Laurel Township, NJ 08054, USA.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <IoIosCall className="text-[#52c5b6] text-3xl" />
                <div>
                  <a
                    href="#"
                    className="font-open-sans font-normal text-base text-[#c0c1c2]"
                  >
                    Have Any Questions?
                  </a>
                  <p className="mt-2 font-inter text-base font-medium">
                    +1 (201) 298-3873
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <IoIosSend className="text-[#52c5b6] text-3xl" />
                <div>
                  <a
                    href="#"
                    className="font-open-sans font-normal text-base text-[#c0c1c2]"
                  >
                    Mail Us
                  </a>
                  <p className="mt-2 font-inter text-base font-medium">
                    contact@mafgriainc.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h6 className="font-inter text-base font-semibold text-white">
              Our Location
            </h6>
            <img src={map} alt="map" />
          </div>
        </div>
        <div className="py-6">
          <p className="font-open-sans font-normal text-sm text-[#879DAD] text-center">
            Copyright 2022 MAFG RIA Service, Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
