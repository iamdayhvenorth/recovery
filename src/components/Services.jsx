import React from "react";

export default function Services() {
  return (
    <section>
      <div className="w-full max-w-[1200px] py-16 md:py-32 mx-auto px-4 md:px-12">
        <div>
          <div className="text-center w-full  mx-auto  pb-6">
            <h2 className="font-prata text-2xl md:text-4xl text-black mb-5">
              Recovery Services
            </h2>
            <p className="text-base font-open-sans font-normal text-center w-full  lg:max-w-[640px] mx-auto">
              It’s time to get even! If you’ve lost money to scammers then our
              expert recovery team can help you get your money back!
            </p>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 py-4 px-2 gap-7">
            <div className="flex  ">
              <div className="">X</div>
              <div className="flex flex-col pb-6 border-b border-[#E5E5E5] hover:border-[#52c5b6] transition-colors duration-500">
                <h5 className="font-inter font-medium text-xl mb-3">
                  Funds Recovery
                </h5>
                <p>
                  We help you recover money that you might have lost to
                  fraudulent online schemes
                </p>
              </div>
            </div>
            <div className="flex  ">
              <div className="">X</div>
              <div className="flex flex-col pb-6 border-b border-[#E5E5E5] hover:border-[#52c5b6] transition-colors duration-500">
                <h5 className="font-inter font-medium text-xl mb-3">
                  Investment Advising
                </h5>
                <p>
                  We advise you on profitable investment portfolios so as to
                  ensure that you don't fall victim of investment scams again
                </p>
              </div>
            </div>
            <div className="flex  ">
              <div className="">X</div>
              <div className="flex flex-col pb-6 border-b border-[#E5E5E5] hover:border-[#52c5b6] transition-colors duration-500">
                <h5 className="font-inter font-medium text-xl mb-3">
                  Intelligence Gathering
                </h5>
                <p>
                  Benefit from a wealth of data gathered by us and also by our
                  associates. We can help you verify authenticity of investment
                  schemes.
                </p>
              </div>
            </div>
            <div className="flex  ">
              <div className="">X</div>
              <div className="flex flex-col pb-6 border-b border-[#E5E5E5] hover:border-[#52c5b6] transition-colors duration-500">
                <h5 className="font-inter font-medium text-xl mb-3">
                  Claims Assessment
                </h5>
                <p>
                  Our analysis of claims is through and carried out by some of
                  the best attorneys in the business. We are dedicated to
                  getting your money returned to you using result-oriented
                  strategies.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
