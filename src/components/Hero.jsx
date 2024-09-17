import { Link } from "react-router-dom";
import Form from "./Form";
import Styles from "./Styles.module.css";

export default function Hero() {
  return (
    <>
      <section className="w-full bg-hero bg-no-repeat bg-cover bg-center  py-14 md:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-12 flex items-center justify-center h-full">
          <div className="flex flex-col lg:flex-row items-center ">
            {/* left content */}

            <div className="flex flex-col space-y-7 flex-wrap p-4 text-white w-full lg:w-[638px]">
              <div>
                <h2 className="text-base font-semibold font-inter">
                  MAFG RIA Service, Inc
                </h2>
              </div>
              <h2 className="text-4xl md:text-6xl font-prata">
                Best Recovery & Forensic Services
              </h2>
              <p className="text-base md:text-lg font-normal">
                Having troubles recovering your lost funds? You have come to the
                right place. We apply global best practices to ensure we get
                your money back.
              </p>
              <Link
                to={"/about"}
                className="bg-[#61ce70] py-3 px-4 text-xs rounded-sm w-fit font-semibold"
              >
                About Us
              </Link>
            </div>

            {/* Form section */}
            <section className={`p-4 w-full lg:w-[45%] ${Styles.my_form}`}>
              <div className="py-11 px-8 bg-white rounded-md">
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Consultation Form
                </h2>
                <p className="text-center text-sm mb-4">
                  It’s our pleasure to have a chance to cooperate.
                </p>
                <Form />
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
