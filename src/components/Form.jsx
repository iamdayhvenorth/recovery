import { countries, frauds } from "../data";

export default function Form() {
  const countryOptions = countries.map((country) => (
    <option
      key={country.name}
      value={country.name}
      className="text-[#5f5f5f] placeholder:text-[#5f5f5f] text-sm"
    >
      {country.name}
    </option>
  ));

  const fraudOptions = frauds.map((fraud, idx) => (
    <option
      key={fraud.type}
      value={fraud.type}
      className="text-[#5f5f5f] placeholder:text-[#5f5f5f] text-sm"
    >
      {fraud.type}
    </option>
  ));

  return (
    <form className="flex flex-col gap-2">
      <div className="flex gap-2 flex-col md:flex-row">
        <input
          type="text"
          placeholder="First Name"
          className="md:w-1/2"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="md:w-1/2"
          required
        />
      </div>
      <input type="number" placeholder="Phone" min={1} required />
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="Scam Company" required />
      <label className="flex flex-col gap-1">
        <span className="text-[#818a91] cursor-pointer text-[15px]">
          Country
        </span>
        <select className="focus:outline-none bg-transparent text-[#5f5f5f]">
          <option
            value=""
            className="text-[#5f5f5f] placeholder:text-[#5f5f5f] text-sm"
          >
            Select Country
          </option>
          {countryOptions}
        </select>
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-[#818a91] cursor-pointer text-[15px] ">
          Type of Fraud
        </span>
        <select className="focus:outline-none">
          <option
            value=""
            className="text-[#5f5f5f] placeholder:text-[#5f5f5f] text-sm"
          >
            Select Fraud
          </option>
          {fraudOptions}
        </select>
      </label>
      <textarea
        placeholder="Message"
        required
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
