import React from "react";
import { Link } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";
import { IoIosCall, IoIosSend } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <section className="w-full h-[300px] md:h-[400px] bg-[url('/images/contacts.jpg')] bg-no-repeat bg-cover  bg-center flex items-center">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-prata text-3xl md:text-[2.625rem] font-normal text-white flex-1">
              Contacts
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
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1200px] mx-auto p-4 md:px-12">
          <div className="p-2 flex flex-col gap-4">
            <div>
              <h2 className="font-prata font-normal text-4xl py-5">
                Our Contacts
              </h2>
              <p className="block font-open-sans font-normal text-base text-[#5f5f5f]">
                Give us a call or drop by anytime, we endeavour to answer all
                enquiries within 24 hours on business days.
              </p>
            </div>
            <div>
              <div className="mt-3 flex flex-col gap-4">
                <div className="flex gap-3">
                  <MdLocationOn className="text-[#52c5b6] text-3xl" />
                  <div>
                    <Link
                      to={"/"}
                      className="font-open-sans font-normal text-base text-black/80 transition-colors duration-300 ease-linear hover:text-[#52c5b6]"
                    >
                      Visit Us Daily
                    </Link>
                    <p className="mt-2 font-inter text-base font-medium">
                      102 Gaither Dr, Mt Laurel Township, NJ 08054, USA.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <IoIosCall className="text-[#52c5b6] text-2xl" />
                  <div>
                    <Link
                      to={"/"}
                      className="font-open-sans font-normal text-base text-black/80 transition-colors duration-300 ease-linear hover:text-[#52c5b6]"
                    >
                      Have Any Questions?
                    </Link>
                    <p className="mt-2 font-inter text-base font-medium">
                      +1 (201) 298-3873
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <IoIosSend className="text-[#52c5b6] text-2xl" />
                  <div>
                    <Link
                      to={"/"}
                      className="font-open-sans font-normal text-base text-black/80 transition-colors duration-300 ease-linear hover:text-[#52c5b6]"
                    >
                      Mail Us
                    </Link>
                    <p className="mt-2 font-inter text-base font-medium">
                      contact@mafgriainc.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.9662767450855!2d-74.94306808543254!3d39.94214399229088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c13517045b91b3%3A0xefbf5eeb1b3f93f1!2s102%20Gaither%20Dr%2C%20Mt%20Laurel%20Township%2C%20NJ%2008054%2C%20USA!5e0!3m2!1sen!2sng!4v1662251200765!5m2!1sen!2sng"
              frameBorder="0"
              className="w-full h-[450px]"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
