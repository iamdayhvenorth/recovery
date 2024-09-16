import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="w-full h-[300px] md:h-[400px] bg-[url('/images/contacts.jpg')] bg-no-repeat bg-cover  bg-center flex items-center">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-prata text-3xl md:text-[2.625rem] font-normal text-white flex-1">
              About Us
            </h1>
            <ul className="flex items-center gap-2 uppercase ">
              <li>
                <Link
                  to={"/"}
                  className="block text-sm font-semibold font-inter text-white/60 transition-colors duration-300 ease-linear hover:text-white"
                >
                  Home
                </Link>
              </li>
              <RxCaretRight className="text-white/60 text-xl" />
              <li>
                <Link className="block text-sm font-semibold font-inter text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full max-w-[1200px] mx-auto border-2 border-red-900 py-16 md:py-24 px-4 md:px-12">
          <div>
            <h2 className="font-prata text-4xl md:text-4xl text-center font-normal">
              About Company
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
