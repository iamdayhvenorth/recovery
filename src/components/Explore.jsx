import { Link } from "react-router-dom";
import explore from "/images/explore.jpg";
import { FaCheck } from "react-icons/fa";

export default function Explore() {
  return (
    <section className="w-full">
      <div className=" w-full max-w-[1200px] mx-auto py-16 md:pt-32 px-4 md:px-12">
        <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-4">
          {/* left content */}
          <div className="p-2 h-full w-full lg:w-1/2 flex-shrink">
            <div className="overflow-hidden h-full w-full">
              <img
                src={explore}
                alt="explore"
                className="rounded-md w-full object-cover"
              />
            </div>
          </div>

          {/* right content */}
          <div className="p-4 w-full lg:w-1/2  lg:ml-4">
            <div className="flex flex-col gap-6">
              <div className="flex  text-left gap-2 font-raleway">
                {/* check */}
                <div className="mt-1 mr-3">
                  <FaCheck className="text-[#52c5b6] text-lg" />
                </div>
                {/* content */}
                <div>
                  <h5 className="text-[#52c5b6] text-lg mb-2">
                    Negotiation Power
                  </h5>
                  <p className="text-base font-open-sans font-normal">
                    We have the ability to negotiate with banks and credit card
                    companies professionally.
                  </p>
                </div>
              </div>
              <div className="flex  text-left gap-2 font-raleway">
                {/* check */}
                <div className="mt-1 mr-3">
                  <FaCheck className="text-[#52c5b6] text-lg" />
                </div>
                {/* content */}
                <div>
                  <h5 className="text-[#52c5b6] text-lg mb-2">
                    Quality Services
                  </h5>
                  <p className="text-base font-open-sans font-normal">
                    Every case we take is treated in a comprehensive, profound
                    manner.
                  </p>
                </div>
              </div>
              <div className="flex  text-left gap-2 font-raleway">
                {/* check */}
                <div className="mt-1 mr-3">
                  <FaCheck className="text-[#52c5b6] text-lg" />
                </div>
                {/* content */}
                <div>
                  <h5 className="text-[#52c5b6] text-lg mb-2">
                    Quick Retrieving
                  </h5>
                  <p className="text-base font-open-sans font-normal">
                    Time is a key in regards to whether or not we will
                    successfully retrieve the client’s money. The work is done
                    according to plans and on schedule.
                  </p>
                </div>
              </div>
              <div>
                <Link
                  to={"/"}
                  className="bg-[#52c5b6] uppercase text-white px-8 py-4 text-sm cursor-pointer rounded font-inter font-semibold hover:bg-black transition-colors duration-500 ease-in-out"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
