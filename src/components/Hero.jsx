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
              <a
                href="#"
                className="bg-[#61ce70] py-3 px-4 text-xs rounded-sm w-fit font-semibold"
              >
                About Us
              </a>
            </div>

            {/* Form section */}

            <div className={`p-4 w-full lg:w-[45%] ${Styles.my_form}`}>
              <div className="py-11 px-8 bg-white rounded-md">
                <h2 className="text-center text-2xl font-semibold mb-4">
                  Consultation Form
                </h2>
                <p className="text-center text-sm mb-4">
                  It’s our pleasure to have a chance to cooperate.
                </p>
                <form className="flex flex-col gap-2">
                  <div className="flex gap-2 flex-col md:flex-row">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="md:w-1/2"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="md:w-1/2"
                    />
                  </div>
                  <input type="number" placeholder="Phone" min={1} />
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Scam Company" />
                  <label className="flex flex-col gap-1">
                    <span className="text-[#818a91] cursor-pointer text-[15px]">
                      Country
                    </span>
                    <select className="focus:outline-none">
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-[#818a91] cursor-pointer text-[15px] ">
                      Type of Fraud
                    </span>
                    <select className="focus:outline-none">
                      <option value="Investments & trade">
                        Investments & trade
                      </option>
                      <option value="Investments & trade">
                        Investments & trade
                      </option>
                    </select>
                  </label>
                  <textarea
                    placeholder="Message"
                    className="border border-[#818a91] py-1 px-6 rounded focus:outline-none text-sm h-[120px]"
                  />
                  <button
                    type="submit"
                    className="uppercase font-semibold bg-[#61ce70] rounded text-sm text-white py-2 w-full px-4 hover:bg-black transition-colors duration-200 ease-in-out"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
