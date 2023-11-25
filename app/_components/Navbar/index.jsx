import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full h-[60px] flex  md:flex-row justify-between items-center bg-primary-dark pl-8 pr-8">
      {/* Left side of the Navbar */}
      <div className="flex items-center gap-1.5 md:items-left">
        <div className="w-8 h-8 relative">
          <Image src="/logo.svg" layout="fill" alt="farm insight logo" />
        </div>
        <div className="text-white text-lg font-normal font-['Sora']">
          Farminsight
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      {isDropdownOpen && (
        <ul className="md:hidden pl-8 absolute left-0 top-[3rem] z-20 w-full h-fit flex flex-col mt-2 gap-2 items- bg-primary-dark">
          <li className="cursor-pointer pb-2">
            <Link
              href="/"
              className="text-white text-base font-light font-['Sora'] leading-normal"
            >
              Explore AI Guidance
            </Link>
          </li>
          <li className="cursor-pointer pb-2">
            <Link
              href="/"
              className="text-white text-base font-light font-['Sora'] leading-normal"
            >
              Read Knowledge Updates
            </Link>
          </li>
          <li className="cursor-pointer pb-2">
            <Link
              href="/"
              className="text-white text-base font-light font-['Sora'] leading-normal"
            >
              Join Community
            </Link>
          </li>
        </ul>
      )}

      {/* Right side of the Navbar */}
      <ul className="hidden md:flex gap-4 items-center">
        <li className="cursor-pointer">
          <Link
            href="/"
            className="text-white text-base font-light font-['Sora'] leading-normal"
          >
            Explore AI Guidance
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            href="/"
            className="text-white text-base font-light font-['Sora'] leading-normal"
          >
            Read Knowledge Updates
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            href="/"
            className="text-white text-base font-light font-['Sora'] leading-normal"
          >
            Join Community
          </Link>
        </li>
        <div>
          <Button text="Login to start" />
        </div>
      </ul>

      {/* Hamburger menu for smaller screens */}
      <div className="md:hidden cursor-pointer" onClick={toggleDropdown}>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
