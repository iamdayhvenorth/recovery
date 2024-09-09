import React from "react";
import Styles from "./Styles.module.css";

export default function Document() {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1200px] mx-auto p-2 ">
        <div className={`lg:bg-[url('/images/handshake-bg.png')] bg-center`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:divide-x-2 gap-2 lg:gap-0">
            <div
              className={` relative w-full h-[472px] overflow-hidden bg-[url('/images/money-bg.webp')] lg:bg-none bg-cover ${Styles.grid_transform} `}
            >
              {/* grid overlay */}
              <div
                className={`bg-black/65 absolute top-0 left-0 w-full h-full z-10 lg:opacity-0 transition-opacity duration-500 ease-out ${Styles.overlay}`}
              />
              <div
                className={`absolute left-0 w-full top-3 lg:top-[167px] text-white p-12  bottom-0 z-20 transition-all duration-500 ease-in-out ${Styles.position}`}
              >
                <span className="block font-inter font-normal text-2xl mb-5 text-[#ff8f3e] lg:text-white">
                  01
                </span>
                <h5 className="font-prata text-xl lg:text-2xl font-semibold">
                  Providing relevant documents
                </h5>
                <div className="">
                  <p
                    className={`text-base font-normal font-open-sans text-white mt-4 ${Styles.sample}`}
                  >
                    We have done this countless times and we know the documents
                    you need and the ones you need certified in order to submit
                    a claim for your funds successfully.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={` relative w-full h-[472px] overflow-hidden bg-[url('/images/environment-bg.webp')] lg:bg-none bg-cover ${Styles.grid_transform} `}
            >
              {/* grid overlay */}
              <div
                className={`bg-black/65 absolute top-0 left-0 w-full h-full z-10 lg:opacity-0 transition-opacity duration-500 ease-out ${Styles.overlay}`}
              />
              <div
                className={`absolute left-0 w-full top-3 lg:top-[167px] text-white p-12  bottom-0 z-20 transition-all duration-500 ease-in-out ${Styles.position}`}
              >
                <span className="block font-inter font-normal text-2xl mb-5 text-[#ff8f3e] lg:text-white">
                  02
                </span>
                <h5 className="font-prata text-xl lg:text-2xl font-semibold">
                  Finding the owners of lost funds
                </h5>
                <div className="">
                  <p
                    className={`text-base font-normal font-open-sans text-white mt-4 ${Styles.sample}`}
                  >
                    We are governed by law to ensure that we identify the
                    correct individuals that funds are owing to. We may require
                    a minimum of 100 points of ID.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={` relative w-full h-[472px] overflow-hidden bg-[url('/images/handshake-bg.png')] lg:bg-none bg-cover ${Styles.grid_transform} `}
            >
              {/* grid overlay */}
              <div
                className={`bg-black/65 absolute top-0 left-0 w-full h-full z-10 lg:opacity-0 transition-opacity duration-500 ease-out ${Styles.overlay}`}
              />
              <div
                className={`absolute left-0 w-full top-3 lg:top-[167px] text-white p-12  bottom-0 z-20 transition-all duration-500 ease-in-out ${Styles.position}`}
              >
                <span className="block font-inter font-normal text-2xl mb-5 text-[#ff8f3e] lg:text-white">
                  03
                </span>
                <h5 className="font-prata text-xl lg:text-2xl font-semibold">
                  Finding the owners of lost funds
                </h5>
                <div className="">
                  <p
                    className={`text-base font-normal font-open-sans text-white mt-4 ${Styles.sample}`}
                  >
                    We are governed by law to ensure that we identify the
                    correct individuals that funds are owing to. We may require
                    a minimum of 100 points of ID.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={` relative w-full h-[472px] overflow-hidden bg-[url('/images/fourth-bg.jpg')] lg:bg-none bg-cover ${Styles.grid_transform} `}
            >
              {/* grid overlay */}
              <div
                className={`bg-black/65 absolute top-0 left-0 w-full h-full z-10 lg:opacity-0 transition-opacity duration-500 ease-out ${Styles.overlay}`}
              />
              <div
                className={`absolute left-0 w-full top-3 lg:top-[167px] text-white p-12  bottom-0 z-20 transition-all duration-500 ease-in-out ${Styles.position}`}
              >
                <span className="block font-inter font-normal text-2xl mb-5 text-[#ff8f3e] lg:text-white">
                  04
                </span>
                <h5 className="font-prata text-xl lg:text-2xl font-semibold">
                  Finding the owners of lost funds
                </h5>
                <div className="">
                  <p
                    className={`text-base font-normal font-open-sans text-white mt-4 ${Styles.sample}`}
                  >
                    We are governed by law to ensure that we identify the
                    correct individuals that funds are owing to. We may require
                    a minimum of 100 points of ID.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
