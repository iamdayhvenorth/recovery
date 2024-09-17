import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RxCaretRight } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";

import author_img from "/images/author_avatar.png";
import { recentPosts } from "../data";

export default function BlogDetails() {
  const { blog_details } = useParams();

  return (
    <>
      <section className="w-full h-[300px] md:h-[400px] bg-[url('/images/blog-header.jpg')] bg-no-repeat bg-cover  bg-center flex items-center">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-prata text-3xl md:text-[2.625rem] font-normal text-white flex-1">
              Blog
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
                <Link
                  to={"/blog"}
                  className="block text-sm font-semibold font-inter text-white"
                >
                  Blog
                </Link>
              </li>
              <RxCaretRight className="text-white/60 text-xl" />
              <li>
                <Link className="block text-sm font-semibold font-inter text-white">
                  {blog_details}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="w-full max-w-[1200px] mx-auto py-16 lg:py-24 px-2 md:px-4">
          <div className="flex flex-col lg:flex-row gap-14 md:gap-0">
            <article className="flex-1 flex flex-col gap-14 p-4">
              <section>
                <div className=" p-2">
                  <div>
                    <div className="mb-5">
                      <Link className="pt-[7px] pb-[6px]  px-3 rounded-xl uppercase bg-[#52c5b6] text-white hover:bg-black text-[0.6875rem] font-inter font-bold">
                        Uncategorized
                      </Link>
                      <p className="font-inter text-[0.8125rem] font-semibold uppercase leading-6 text-[#818181] mt-3">
                        April 17, 2023 / Mafgrianic / 0 Comment
                      </p>
                    </div>
                    <h2 className="font-prata text-xl md:text-3xl font-normal text-black mb-4">
                      TrendinGap Scam: What You Need to Know About TrendinGap
                      and How to Recover from It
                    </h2>
                    <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] mb-5">
                      As the world becomes more digital, so do the ways we
                      conduct business and handle our finances. Online trading
                      platforms like TrendinGap have emerged as a popular way
                      for people to invest and make money from the comfort of
                      their homes. Unfortunately, with the rise of these
                      platforms also comes the rise of scam artists looking to
                      take advantage of unsuspecting investors. In this article,
                      we’ll dive into the TrendinGap scam, how it works, and
                      what you can do to protect yourself and recover from it.
                    </p>
                  </div>
                  <div>
                    <h2 className="font-prata text-xl md:text-3xl font-normal text-black mb-4">
                      Introduction to TrendinGap and TrendinGap Scam
                    </h2>
                    <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] mb-5">
                      TrendinGap is an online trading platform that allows users
                      to trade a wide range of assets, including stocks,
                      commodities, and currencies. The platform is
                      user-friendly, with a simple interface that makes it easy
                      for beginners to start trading. However, in recent years,
                      there have been reports of TrendinGap scam, where users
                      have lost their money to fraudulent activities.
                    </p>
                    <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] mb-5">
                      The TrendinGap scam typically involves fake brokers who
                      promise high returns on investment, only to disappear with
                      the investor’s money. These brokers use various tactics to
                      gain the trust of their victims, such as offering free
                      courses or investment advice. Once they have gained the
                      victim’s trust, they convince them to invest more money,
                      promising even higher returns. Eventually, the broker
                      disappears, and the victim is left with nothing.
                      TrendinGap reviews trendingap.com scam
                    </p>
                  </div>
                  <div>
                    <h2 className="font-prata text-xl md:text-3xl font-normal text-black mb-4">
                      How TrendinGap Scam Works
                    </h2>
                    <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] mb-5">
                      The TrendinGap scam works by targeting vulnerable
                      investors who are looking to make a quick profit. Scammers
                      use social media, email, and other online channels to
                      reach out to potential victims. They often use fake
                      profiles and aliases to avoid detection. Once they have
                      made contact with a victim, they will use various tactics
                      to gain their trust, such as promising high returns on
                      investment or offering free investment advice.
                    </p>
                    <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] mb-5">
                      Once the victim has invested their money, the broker will
                      disappear, leaving the victim with nothing. In some cases,
                      the scammer may continue to contact the victim, attempting
                      to convince them to invest even more money. Victims of
                      TrendinGap scam often feel embarrassed and ashamed of
                      falling for the scam, which makes it difficult for them to
                      report it.
                    </p>
                    <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] mb-5">
                      TrendinGap reviews are fake and doctored my the scam
                      artistes perpetrating this trading scam, do not believe
                      it. Trendingap.com scams types are rampant in the
                      investment world.
                    </p>
                  </div>
                  <div className="mb-5">
                    <h2 className="font-prata text-xl md:text-3xl font-normal text-black mb-4">
                      Steps to Take if You Have Been Scammed by TrendinGap
                    </h2>
                    <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] mb-5">
                      If you have fallen victim to the TrendinGap scam, it is
                      essential to take immediate action to minimize your
                      losses. Here are the steps you should take:
                    </p>
                    <ol className="list-decimal flex flex-col gap-4">
                      <li className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] ml-4">
                        <strong>
                          Stop all communication with the scammer.
                        </strong>{" "}
                        If you are still in contact with the scammer, stop all
                        communication immediately. Do not respond to their
                        messages or calls.
                      </li>
                      <li className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] ml-4">
                        <strong>Gather all evidence.</strong> Collect all
                        evidence related to the scam, including emails, text
                        messages, and transaction receipts.
                      </li>
                      <li className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] ml-4">
                        <strong>
                          Contact your bank or credit card company.
                        </strong>{" "}
                        Notify your bank or credit card company of the scam and
                        ask them to freeze your account.
                      </li>
                      <li className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] ml-4">
                        <strong>Seek legal advice.</strong> Consider hiring MAFG
                        RIA SERVICE to recover your funds.
                      </li>
                    </ol>
                  </div>
                  <div className="mb-5">
                    <h2 className="font-prata text-xl md:text-3xl font-normal text-black mb-4">
                      How to Report TrendinGap Scam
                    </h2>
                    <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] mb-5">
                      Reporting the TrendinGap scam is crucial to prevent other
                      people from falling victim to the same scam. Here are the
                      steps you should take to report the scam:
                    </p>
                    <ol className="list-decimal flex flex-col gap-4">
                      <li className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] ml-4">
                        <strong>
                          Contact the TrendinGap customer support team.
                        </strong>{" "}
                        Notify TrendinGap of the scam by contacting their
                        customer support team. They may be able to help you
                        recover your money or provide information on how to
                        report the scam.
                      </li>

                      <li className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] ml-4">
                        <strong>File a report with the us.</strong> Send us an
                        EMAIL
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h2 className="font-prata text-xl md:text-3xl font-normal text-black mb-4">
                      How to Recover Your Money from TrendinGap Scam
                    </h2>
                    <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] mb-5">
                      Recovering your money from the TrendinGap scam can be a
                      daunting task, but it is possible. Send us an EMAIL to
                      inquire and begin your recovery process.
                    </p>
                  </div>
                  <div className="mb-5">
                    <h2 className="font-prata text-xl md:text-3xl font-normal text-black mb-4">
                      Tips to Avoid Falling Victim to TrendinGap Scam
                    </h2>
                    <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] mb-5">
                      Prevention is always better than cure. Here are some tips
                      to help you avoid falling victim to the TrendinGap scam:
                    </p>
                    <ol className="list-decimal flex flex-col gap-4">
                      <li className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] ml-4">
                        <strong>Do your research.</strong> Before investing in
                        any platform, do your research and read reviews from
                        other users.
                      </li>

                      <li className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] ml-4">
                        <strong>Be wary of unsolicited offers.</strong> If
                        someone you don’t know offers you an investment
                        opportunity, be cautious.
                      </li>

                      <li className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] ml-4">
                        <strong>
                          Never give out your personal information.
                        </strong>{" "}
                        Scammers often ask for personal information such as your
                        social security number or bank account details. Never
                        give out this information.
                      </li>

                      <li className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] ml-4">
                        <strong>Use a regulated platform.</strong> Only invest
                        in platforms that are regulated by the relevant
                        authorities.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h2 className="font-prata text-xl md:text-3xl font-normal text-black mb-4">
                      Conclusion
                    </h2>
                    <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] mb-5">
                      The scam is a growing concern for investors looking to
                      make money online. Scammers use various tactics to gain
                      the trust of their victims and convince them to invest
                      their money. If you have been scammed, it is essential to
                      take immediate action to minimize your losses and report
                      the scam to MAFG RIA SERVICE. By following the tips
                      outlined in this article, you can protect yourself from
                      falling victim to the TrendinGap scam and other fraudulent
                      activities. Remember, prevention is always better than
                      cure.
                    </p>
                  </div>
                </div>
                <div className="p-8 bg-[#f5f5f5] rounded">
                  <div className="flex gap-6">
                    <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] ">
                      <img
                        src={author_img}
                        alt="author"
                        className="w-full rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-inter font-semibold uppercase text-[#52c5b6] text-sm">
                        Author
                      </h4>
                      <p className="font-prata text-lg font-normal">
                        mafgriainc
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <CommentForm />
            </article>
            <aside className="w-full lg:w-[300px] p-4">
              <form className="w-full mb-8">
                <label
                  htmlFor="search"
                  className="text-sm font-open-sans font-normal block w-full text-[#5f5f5f] mb-1"
                >
                  Search
                </label>
                <div className="w-full flex items-center text-[#5f5f5f] gap-3">
                  <input
                    type="text"
                    id="search"
                    autoComplete="off"
                    required
                    className="py-[11px] px-4 border rounded-[3px] grow  text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-[10px] bg-[#f0f0f0] py-[9px] rounded-[3px] border"
                  >
                    Search
                  </button>
                </div>
              </form>
              <section>
                <div>
                  <h2 className="font-prata font-normal text-4xl mb-5">
                    Recent Post
                  </h2>
                  <ul className="w-full flex flex-col gap-3">
                    {recentPosts.map((post) => (
                      <li>
                        <Link
                          to={`/blog/${post.path}`}
                          key={post.id}
                          className="text-[#1b1d21] text-sm font-semibold font-open-sans transition-colors duration-200 ease-linear hover:text-[#52c5b6] block lowercase"
                        >
                          {post.title}
                        </Link>
                        <span className="block text-xs font-open-sans font-normal mt-1 capitalize text-[#9f9e9e]">
                          {post.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
