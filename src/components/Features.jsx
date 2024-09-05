import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { FaHourglass } from "react-icons/fa6";
import { BsBarChartLine } from "react-icons/bs";

export default function Features() {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1200px] mx-auto py-14 md:py-32 px-4 md:px-12">
        {/* Grid Section */}
        <div>
          <div className="text-center pb-6">
            <h2 className="text-sm font-semibold text-[#52c5b6] mb-4 font-inter">
              Improving Our Recovery Strategy
            </h2>
            <h2 className="font-prata text-4xl">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-4">
            <div className="bg-[#30344d] rounded-md px-9 py-10 flex-1">
              <div className="flex flex-col items-center">
                <div className="h-[119px] w-[119px] bg-transparent flex items-center justify-center border-2 relative rounded-full after:absolute after:h-[15px] after:w-[15px] after:bg-[#52c5b6] after:rounded-full after:left-[-10px] hover:animate-spin ">
                  <div className="bg-[#52c5b6] flex items-center justify-center w-[80px] h-[80px] rounded-full text-white text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <BsBarChartLine />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h5 className="block font-prata font-normal text-2xl mb-4 text-white">
                    Assessment
                  </h5>
                  <p className="font-open-sans text-base font-normal text-white">
                    After reaching out to us, we assess your claim and adjudge
                    the possibility of a recovery. We promise to inform you of
                    the chances of recovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f5f5] rounded-md px-9 py-10 flex-1">
              <div className="flex flex-col items-center">
                <div>
                  <div className="bg-[#30344d] flex items-center justify-center w-[80px] h-[80px] rounded-full text-white text-3xl">
                    <FaHourglass />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h5 className="block font-prata font-normal text-2xl mb-4">
                    Planning
                  </h5>
                  <p className="font-open-sans text-base font-normal">
                    After deciding that it is a claim we would like to pursue,
                    we devise strategy that is specifically tailored to tackle
                    your issues . No two claims are the same.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#52c5b6] rounded-md px-9 py-10 flex-1">
              <div className="flex flex-col items-center">
                <div>
                  <div className="bg-[#ffffff] flex items-center text-black justify-center w-[80px] h-[80px] rounded-full text-3xl">
                    <HiOutlineRocketLaunch />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h5 className="block font-prata font-normal text-2xl mb-4 text-white">
                    Execution
                  </h5>
                  <p className="font-open-sans text-base font-normal text-white">
                    We execute our strategy to recover your money and we make
                    sure to carry you along with the whole process. Transparency
                    is very important to us.
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
