/* eslint-disable react/prop-types */
// Button.js

import Link from "next/link";

const Button = ({ text, onClick, bg, to }) => {
  // Define default background color as transparent if not provided
  const bgColor = bg || "bg-transparent";

  return (
    <>
      {to ? (
        <div
          className={`h-[40px] m-2 focus:border-blue-300 transition duration-300 hover:bg-gray-200 hover:border-gray-300 px-6 py-2 ${bgColor} rounded-3xl border border-white backdrop-blur-[400px] justify-center items-center gap-2 inline-flex`}
        >
          <Link
            href={to}
            className="text-white text-lg font-light font-['Sora'] hover:text-[#008148] leading-[41.50px]"
          >
            {text}
          </Link>
        </div>
      ) : (
        <button
          onClick={onClick}
          className={`h-[40px] m-2 focus:border-blue-300 transition duration-300 hover:bg-gray-200 hover:border-gray-300 px-6 py-2 ${bgColor} rounded-3xl border border-white backdrop-blur-[400px] justify-center items-center gap-2 inline-flex`}
        >
          <p className="text-white text-lg font-light font-['Sora'] hover:text-[#008148] leading-[41.50px]">
            {text}
          </p>
        </button>
      )}
    </>
  );
};

export default Button;
