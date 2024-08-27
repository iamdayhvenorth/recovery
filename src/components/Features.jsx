import { HiOutlineRocketLaunch } from "react-icons/hi2";

export default function Features() {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1200px] mx-auto py-14 md:py-32 px-4 md:px-12 border-2 border-red-900">
        {/* Grid Section */}
        <div>
          <div className="text-center py-2">
            <h2 className="text-sm font-semibold text-[#52c5b6] mb-3 font-inter">
              Improving Our Recovery Strategy
            </h2>
            <h2 className="font-prata text-4xl">How We Work</h2>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <div>
                <div className="bg-[#52c5b6] flex items-center justify-center w-[80px] h-[80px] rounded-full text-white text-3xl">
                  <HiOutlineRocketLaunch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
