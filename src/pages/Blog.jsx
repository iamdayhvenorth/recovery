import React, { useState, useEffect, useRef } from "react";
import { RxCaretRight } from "react-icons/rx";
import { Link, useSearchParams } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { blogs as blogsData, recentPosts } from "../data";
import { Helmet } from "react-helmet";

export default function Blog() {
  const [blogs] = useState(blogsData);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("category");
  const sectionRef = useRef(null);

  const handleClick = (cat) => {
    setSearchParams({ category: cat });
  };

  const displayed =
    query === null
      ? blogs
      : blogs.filter((x) => x.category.toLowerCase() === query.toLowerCase());

  useEffect(() => {
    if (query) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const uniqueCat = new Set(blogsData.map((x) => x.category));
  const categories = [...uniqueCat];

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
                <Link className="block text-sm font-semibold font-inter text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full" ref={sectionRef}>
        <Helmet>
          <title>Blog</title>
        </Helmet>
        <div className="w-full max-w-[1200px] mx-auto py-16 lg:py-24 px-4 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-14 md:gap-0">
            <div className="flex-1 flex flex-col gap-14  p-4">
              <div className="pt-6 flex gap-2 flex-wrap">
                <button
                  onClick={() => setSearchParams("")}
                  className={`pt-[7px] pb-[6px]  px-3 rounded-xl uppercase  text-white hover:bg-black text-[0.6875rem] font-inter font-bold ${
                    query === null ? "bg-black" : "bg-[#52c5b6]"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`pt-[7px] pb-[6px]  px-3 rounded-xl uppercase  text-white hover:bg-black text-[0.6875rem] font-inter font-bold ${
                      query?.toLowerCase() === cat.toLowerCase()
                        ? "bg-black"
                        : "bg-[#52c5b6]"
                    }`}
                    onClick={() => handleClick(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              {displayed.map((blog) => (
                <div
                  className="rounded-md shadow-[0px_0px_19px_1px_rgba(0,0,0,0.10)]"
                  key={blog.id}
                >
                  <div className="border-b p-6">
                    <div className="mb-5">
                      <span
                        className={`pt-[7px] pb-[6px]  px-3 rounded-xl uppercase  text-white  text-[0.6875rem] font-inter font-bold ${
                          query?.toLowerCase() === blog.category.toLowerCase()
                            ? "bg-black"
                            : "bg-[#52c5b6]"
                        }`}
                      >
                        {blog.category}
                      </span>
                    </div>
                    <h4 className="mb-4">
                      <Link
                        to={`/blog/${blog.path}`}
                        className="font-prata text-xl md:text-3xl font-normal text-black hover:text-[#52c5b6]"
                      >
                        {blog.title}
                      </Link>
                    </h4>
                    <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f]">
                      {blog.desc}
                    </p>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <p className="font-inter text-[0.8125rem] font-semibold uppercase leading-6 text-[#818181] mr-2 md:mr-0">
                      <span>{blog.date}</span>
                      <span>{` / ${blog.author} `}</span>
                      <span>{`/ ${blog.comments} Comments`}</span>
                    </p>
                    <Link
                      className="font-inter text-[0.8125rem] font-semibold leading-7 block rounded-sm bg-[#ededed] text-[#1b1d21] p-2 border border-transparent transition-colors duration-300 ease-in-out hover:text-[#52c5b6] hover:border-[#52c5b6] hover:bg-[#edf9f8]"
                      to={`/blog/${blog.path}`}
                    >
                      <BsArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
                      <li key={post.id}>
                        <Link
                          to={`/blog/${post.path}`}
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
