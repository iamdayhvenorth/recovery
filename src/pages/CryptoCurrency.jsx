import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function CryptoCurrency() {
  return (
    <>
      <section className="w-full h-[300px] md:h-[400px] bg-[url('/images/blog-header.jpg')] bg-no-repeat bg-cover  bg-center flex items-center">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-prata text-3xl md:text-[2.625rem] font-normal text-white flex-1">
              CryptoCurrency
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
                  CryptoCurrency
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1200px] mx-auto  py-16 md:py-24 px-6 md:px-12">
          <div>
            <h2>Crypto Currency</h2>
          </div>
        </div>
      </section>
    </>
  );
}
