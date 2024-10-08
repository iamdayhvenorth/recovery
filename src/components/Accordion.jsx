import { useState } from "react";
import { FaArrowUp, FaArrowRight } from "react-icons/fa6";
import { accordion } from "../data";

export default function () {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    // if (selected === index) {
    //   return setSelected(null);
    // }
    // return setSelected(index);
    setSelected(selected === index ? null : index);
  };
  return (
    <div>
      {accordion.map((item, idx) => (
        <div className="mb-2" key={idx}>
          <div
            className={`flex justify-between items-center py-2 px-5  text-white rounded text-base font-semibold font-inter cursor-pointer ${
              selected === idx
                ? "bg-[#52c5b6]"
                : "bg-[#a7a7a733] border border-[#ffffff4d]"
            }`}
            onClick={() => handleClick(idx)}
          >
            <h3 className="capitalize">{item.title}</h3>
            {selected === idx ? <FaArrowUp /> : <FaArrowRight />}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              selected === idx ? " max-h-[999px]  " : " max-h-0 "
            }`}
          >
            <div className="px-5 pt-5 pb-3">
              <p className="text-base text-white font-normal font-open-sans ">
                {item.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
