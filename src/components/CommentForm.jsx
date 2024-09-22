import React from "react";

export default function CommentForm() {
  return (
    <section className="shadow-[0px_0px_19px_1px_rgba(0,0,0,0.10)] p-7 md:p-14 rounded">
      <h4 className="font-prata block font-normal text-2xl md:text-4xl mb-3">
        Leave a comment
      </h4>
      <p className="font-open-sans text-sm md:text-base font-normal text-[#5f5f5f] mb-5">
        Your email address will not be published. Required fields are marked{" "}
        <span className="text-red-600">*</span>
      </p>
      <form className="w-full flex flex-col gap-4">
        <textarea
          name="comment"
          id="comment"
          placeholder="comment*"
          className="py-[18px] px-6 border rounded block h-[120px] focus:outline-none font-open-sans text-sm font-normal"
          required
        />
        <div className="w-full flex flex-col md:flex-row gap-4">
          <input
            type="text"
            className="font-open-sans text-sm py-[11px] px-6 font-normal border rounded focus:outline-none w-full md:w-1/2 text-black"
            placeholder="Name*"
            required
          />
          <input
            type="email"
            className="font-open-sans text-sm py-[11px] px-6 font-normal border rounded focus:outline-none w-full md:w-1/2 text-black"
            placeholder="Email*"
            required
          />
        </div>
        <div className="flex items-start gap-4 mb-3">
          <input type="checkbox" name="save" id="save" className="mt-2" />
          <label
            htmlFor="save"
            className="font-open-sans text-sm font-normal text-[#5f5f5f]"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <button
          type="submit"
          className="bg-[#52c5b6] text-white uppercase py-[14px] px-[30px] rounded transition-colors duration-300 ease-linear hover:bg-black"
        >
          Post Comment
        </button>
      </form>
    </section>
  );
}
