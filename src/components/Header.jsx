import logo from "/images/mlogo.png";
import { useState, useEffect } from "react";
import { Phone, MapPin, Clock3, Menu, Search, ChevronDown } from "lucide-react";
import Styles from "./Styles.module.css";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 150) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }

      if (window.scrollY >= 167) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      return () => window.removeEventListener("scroll", () => {});
    });
  }, []);

  return (
    <header className="w-full">
      {/* header */}
      <div className="w-full max-w-[1200px] mx-auto py-1 md:px-6 my_name">
        <div className="p-6 flex items-center md:justify-evenly justify-between w-full h-[90px] gap-6">
          <div className="w-[161px]">
            <a href="#">
              <img src={logo} alt="Logo" className="object-cover w-[161px]" />
            </a>
          </div>
          <div className="md:flex items-start justify-evenly w-[80%] py-2 gap-6 hidden">
            <div className="flex items-center gap-2">
              <div>
                <Phone color="#50c5b5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm opacity-60 text-nowrap font-sans">
                  Have any question
                </span>
                <p className="font-semibold text-sm text-wrap">
                  +1 (201) 298-3873
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <MapPin color="#50c5b5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm opacity-60 text-nowrap">
                  Visit Us Daily
                </span>
                <p className="font-semibold text-sm text-wrap">
                  102 Gaither Dr, Mt Laurel Township, NJ 08054, USA.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <Clock3 color="#50c5b5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm opacity-60 text-nowrap">
                  Our Working Hours
                </span>
                <p className="font-semibold text-sm text-wrap">
                  Mon - Sat: 8.00 - 18.00
                </p>
              </div>
            </div>
          </div>

          <div className=" p-1  md:hidden flex items-center gap-3">
            <Search className="cursor-pointer" />
            <Menu className="cursor-pointer" />
          </div>
        </div>
      </div>
      {/* navbar */}
      <nav
        className={`w-full bg-[#30344d] h-[70px] hidden md:block transition-all duration-1000 delay-300 shadow-md ${
          scroll ? "top-0  h-[70px]" : ""
        } ${menuOpen ? Styles.my_name : ""}`}
      >
        <div className="w-full h-full max-w-[1200px] mx-auto   px-6">
          <div className="w-full h-full  px-6  flex items-center justify-between">
            <ul className="flex items-center space-x-12 ">
              <li className={`${Styles.nav_list}`}>
                <a
                  href="#"
                  className={`text-white text-sm font-semibold transition-colors duration-300 ease-in-out py-3 h-full block`}
                >
                  Home
                </a>
              </li>
              <li
                className={`flex items-center text-white gap-3 ${Styles.nav_list}`}
              >
                <a
                  href="#"
                  className={`text-white text-sm font-semibold transition-colors duration-300 ease-in-out py-3 h-full block`}
                >
                  Recovery Services
                </a>

                <ChevronDown size={14} className="mt-1" />
              </li>
              <li className={`${Styles.nav_list}`}>
                <a
                  href="#"
                  className={`text-white text-sm font-semibold transition-colors duration-300 ease-in-out py-3 h-full block`}
                >
                  About Us
                </a>
              </li>
              <li className={`${Styles.nav_list}`}>
                <a
                  href="#"
                  className={`text-white text-sm font-semibold transition-colors duration-300 ease-in-out py-3 h-full block`}
                >
                  Blog
                </a>
              </li>
              <li className={`${Styles.nav_list}`}>
                <a
                  href="#"
                  className={`text-white text-sm font-semibold transition-colors duration-300 ease-in-out py-3 h-full block`}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex items-center text-white gap-4">
              <Search className="cursor-pointer" />
              <Menu className="cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
