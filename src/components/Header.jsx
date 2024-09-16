import logo from "/images/mlogo.png";
import { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Clock3,
  Menu,
  Search as SearchIcon,
  ChevronDown,
} from "lucide-react";
import Styles from "./Styles.module.css";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { links } from "../data";
import { BsArrowUp } from "react-icons/bs";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [scrollToTop, setScrollToTop] = useState(false);

  const { pathname } = useLocation();
  console.log(pathname);

  function handleToggle() {
    setShowSideBar(true);
  }

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

      if (window.scrollY >= 200) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }

      return () => window.removeEventListener("scroll", () => {});
    });
  }, []);

  return (
    <>
      <header className="w-full">
        {/* header */}
        <div className="w-full max-w-[1200px] mx-auto py-1 md:px-6">
          <div className="p-6 flex items-center md:justify-evenly justify-between w-full h-[90px] gap-6">
            <div className="w-[161px]">
              <Link to={"/"}>
                <img src={logo} alt="Logo" className="object-cover w-[161px]" />
              </Link>
            </div>
            <div className="md:flex items-start justify-evenly w-[80%] py-2 gap-6 hidden">
              <div className="flex items-center gap-2">
                <div>
                  <Phone color="#50c5b5" />
                </div>
                <div className="flex flex-col">
                  <Link
                    to={"/"}
                    className="text-sm opacity-60 text-nowrap font-sans"
                  >
                    Have any question
                  </Link>
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
              <SearchIcon className="cursor-pointer" />
              <Menu className="cursor-pointer" onClick={handleToggle} />
            </div>
          </div>
        </div>

        {/* overlay */}
        {showSideBar && (
          <div
            className="fixed top-0 left-0 w-full h-screen bg-black/60 z-40 md:hidden cursor-pointer"
            onClick={() => setShowSideBar(false)}
          />
        )}

        {/* mobile view sidebar */}
        <aside
          className={`fixed top-0  w-[310px] bg-white z-50 h-full md:hidden transition-[right] duration-500 ease-in-out p-5 ${
            showSideBar ? "right-0 " : "right-[-1000px]"
          }`}
        >
          <div>
            <span className="block mb-3">
              <FaArrowRightLong
                className="cursor-pointer transition-colors duration-300 hover:text-[#52c5b6]"
                onClick={() => setShowSideBar(false)}
              />
            </span>
            <ul className="w-full flex flex-col">
              {links.map((link, idx) => (
                <li
                  className="list-item border-b border-black/10 font-inter text-sm font-medium"
                  key={idx}
                  onClick={() => setShowSideBar(false)}
                >
                  <Link
                    to={link.path}
                    className={`w-full block py-3 transition-colors duration-300 hover:text-[#52c5b6] ${
                      pathname.includes(link.path)
                        ? "text-[#52c5b6]"
                        : "text-black"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* navbar */}
        <nav
          className={`w-full bg-[#30344d] h-[70px] hidden md:block transition-all duration-300 delay-300 shadow-md ${
            scroll ? "top-0  h-[70px]" : ""
          } ${menuOpen ? Styles.navbar : ""}`}
        >
          <div className="w-full h-full max-w-[1200px] mx-auto   px-6">
            <div className="w-full h-full  px-6  flex items-center justify-between">
              <ul className="flex items-center space-x-12 ">
                {links.map((link, idx) => (
                  <li
                    className={`${
                      link.title.toLowerCase() === "recovery services"
                        ? "flex items-center text-white gap-3"
                        : ""
                    } ${Styles.nav_list}`}
                    key={idx}
                  >
                    <Link
                      to={link.path}
                      className={`text-sm font-semibold transition-colors duration-300 ease-in-out py-3 h-full block ${
                        pathname === link.path
                          ? "text-[#52c5b6] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#52c5b6]"
                          : "text-white"
                      }`}
                    >
                      {link.title}
                    </Link>
                    {link.title.toLowerCase() === "recovery services" && (
                      <ChevronDown size={14} className="mt-1" />
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-white gap-4">
                <SearchIcon className="cursor-pointer" />
                <Menu className="cursor-pointer" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed  right-5 bg-[#52c5b6] rounded-md h-[46px] w-[46px] flex items-center justify-center text-xl cursor-pointer text-white z-[999] transition-all duration-300 ease-linear hover:-translate-y-2 ${
          scrollToTop ? "opacity-1 bottom-7" : "opacity-0 bottom-0"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <BsArrowUp />
      </div>
    </>
  );
}
