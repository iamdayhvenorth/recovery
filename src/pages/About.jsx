import React from "react";
import { Helmet } from "react-helmet";
import { RxCaretRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import image_1 from "/images/image1-about-us.jpg";
import assessment from "/images/features1-about-us.jpg";
import planning from "/images/features2-about-us.jpg";
import execution from "/images/features3-about-us.jpg";
import TestimonialCard from "../components/TestimonialCard";

export default function About() {
  return (
    <>
      <section className="w-full h-[300px] md:h-[400px] bg-[url('/images/about.jpg')] bg-no-repeat bg-cover  bg-center flex items-center">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-prata text-3xl md:text-[2.625rem] font-normal text-white flex-1">
              About Us
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
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <Helmet>
          <title> About</title>
        </Helmet>
        <div className="w-full max-w-[1200px] mx-auto  py-16 md:py-24 px-4 md:px-12">
          <div>
            <div className="flex gap-2 flex-col md:flex-row">
              <div className="w-full md:w-1/2 rounded-sm overflow-hidden ">
                <img src={image_1} alt="" className="object-cover w-full" />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <h2 className="font-prata text-2xl md:text-3xl font-normal mb-3">
                  Our Recovery Methods Makes Your Life Easier
                </h2>
                <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                  MAFG RIA Service offers a full range of asset recovery
                  services through specialized business intelligence gathering.
                  We offer the same level of experience and expertise as you
                  would expect to find at a large city law firm, with
                  state-of-the-art case management technology. We have worldwide
                  concentration and a universal customer base all through North
                  and South America, Europe, Africa, Asia, and Oceania
                </p>
                <div className=" flex flex-col gap-2">
                  <p className="font-open-sans text-base font-normal">
                    Peter Adams.
                  </p>
                  <img
                    src="/images/signature.png"
                    alt=""
                    className="w-[100px]"
                  />

                  <span className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                    Founder of company.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#30344d] text-white">
        <div className="w-full max-w-[1200px] mx-auto  py-16 md:py-24 px-6">
          <div>
            <div className="text-center">
              <h2 className="font-prata text-2xl md:text-3xl font-normal">
                How We Work
              </h2>
            </div>
            <div className="flex flex-col items-center gap-5 py-10">
              <div className="flex gap-3 flex-col items-center md:flex-row">
                <img
                  src={assessment}
                  alt=""
                  className=" w-full md:w-[300px] md:h-[300px] rounded-sm object-cover"
                />
                <div className="p-2">
                  <h3 className="font-inter font-semibold text-lg md:text-xl mb-2">
                    Assessment
                  </h3>
                  <p className="font-open-sans text-base font-normal w-full md:w-[500px]">
                    After reaching out to us, we assess your claim and adjudge
                    the possibility of a recovery. We promise to inform you of
                    the chances of recovery.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 flex-col items-center md:flex-row-reverse">
                <img
                  src={planning}
                  alt="Planning"
                  className="w-full md:w-[300px] md:h-[300px] rounded-sm object-cover"
                />
                <div className="p-2">
                  <h3 className="font-inter font-semibold text-lg md:text-xl mb-2">
                    Planning
                  </h3>
                  <p className="font-open-sans text-base font-normal w-full md:w-[500px]">
                    After deciding that it is a claim we would like to pursue,
                    we devise strategy that is specifically tailored to tackle
                    your issues . No two claims are the same.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 flex-col items-center md:flex-row">
                <img
                  src={assessment}
                  alt="Execution"
                  className="w-full md:w-[300px] md:h-[300px] rounded-sm object-cover"
                />
                <div className="p-2">
                  <h3 className="font-inter font-semibold text-lg md:text-xl mb-2">
                    Execution
                  </h3>
                  <p className="font-open-sans text-base font-normal w-full md:w-[500px]">
                    We execute our strategy to recover your money and we make
                    sure to carry you along with the whole process. Transparency
                    is very important to us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full max-w-[1200px] mx-auto  py-16 md:py-24 px-6">
          <div>
            <div className=" py-4">
              <h2 className="font-prata text-2xl md:text-3xl font-normal text-center">
                Our Mission
              </h2>
              <p className="font-open-sans text-base font-normal w-full my-3">
                Our mission is to help innocent people who have lost their
                monies online, to recover them in the shortest possible time and
                in the most cost effective way.
              </p>

              <ol className="list-decimal flex flex-col gap-4">
                <li className="font-open-sans text-base font-normal  ml-4">
                  <strong>Our Mission Statement for Scam Recovery.</strong> Our
                  mission is to provide support, guidance, and resources to
                  individuals and businesses who have fallen victim to fraud and
                  scams. We are dedicated to restoring financial stability,
                  ensuring justice, and creating awareness to prevent future
                  fraud incidents. By leveraging advanced recovery strategies
                  and collaborating with law enforcement agencies, we strive to
                  help victims reclaim their stolen assets and rebuild their
                  lives with renewed confidence.
                </li>
                <li className="font-open-sans text-base font-normal  ml-4">
                  <strong>Empowering Victims Through Scam Recovery.</strong> Our
                  mission is simple: to empower victims of fraud and scams by
                  helping them recover their losses and regain control of their
                  financial security. We believe that no one should suffer in
                  silence after being defrauded. That’s why we offer
                  compassionate support, expert financial advice, and a robust
                  recovery process. We aim to not only restore what was lost but
                  also to educate individuals and businesses on the dangers of
                  scams, equipping them with the tools they need to protect
                  themselves in the future.
                </li>
                <li className="font-open-sans text-base font-normal  ml-4">
                  <strong> Advocating for Fraud Victims.</strong> We advocate
                  for victims of scams by offering a path to recovery that is
                  transparent, reliable, and efficient. Our mission is to stand
                  by those affected by fraud, guide them through the legal and
                  financial challenges of recovery, and ensure that justice is
                  served. We work diligently to expose fraudsters and scammers,
                  using technology, expert networks, and legal frameworks to
                  return what was stolen. Beyond recovery, we focus on raising
                  awareness to prevent others from becoming victims.
                </li>
                <li className="font-open-sans text-base font-normal  ml-4">
                  <strong>Rebuilding Trust After a Scam.</strong> We are
                  committed to rebuilding trust and financial security for
                  individuals and organizations impacted by scams. Our mission
                  is to provide professional assistance in tracing, recovering,
                  and securing assets lost to fraud. We understand the emotional
                  and financial toll scams can take, and we are here to offer a
                  compassionate, thorough recovery process. Through education
                  and advocacy, we aim to foster a safer digital and financial
                  environment for everyone.
                </li>
                <li className="font-open-sans text-base font-normal  ml-4">
                  <strong>A Future Without Fraud</strong> Our vision is a future
                  where fraud is minimized, and victims are supported with the
                  highest level of care and expertise. Our mission is to help
                  scam victims reclaim their stolen assets, provide legal
                  support, and educate the public on how to recognize and avoid
                  scams. We collaborate with legal, financial, and cybersecurity
                  experts to ensure that recovery is swift, efficient, and
                  secure, creating a safer world for individuals and businesses
                  alike.
                </li>
              </ol>
            </div>

            <div className="text-black py-4">
              <div className="p-2 text-center mb-7">
                <h5 className="font-inter text-sm font-semibold text-[#52c5b6] mb-3">
                  Testimonials
                </h5>
                <h2 className="text-center font-prata font-normal text-2xl md:text-3xl   text-black">
                  What Clients Say About Us
                </h2>
              </div>
              <div className="w-full md:w-[700px] mx-auto">
                <TestimonialCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
