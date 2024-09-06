export default function Form() {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex gap-2 flex-col md:flex-row">
        <input type="text" placeholder="First Name" className="md:w-1/2" />
        <input type="text" placeholder="Last Name" className="md:w-1/2" />
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
          <option value="Investments & trade">Investments & trade</option>
          <option value="Investments & trade">Investments & trade</option>
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
  );
}
