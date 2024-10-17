"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#073E8F] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src="/images/Logo:stepup.png"
                width={200}
                height={50}
                alt="Logo"
                className="p-[15px]"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ml-6 md:ml-10 text-white items-center">
            <Link href="/" className="hover:underline font-[500] ">
             <span>Home</span> 
            </Link>
            <Link href="/goal" className="hover:underline font-[500]">
             <span>The Goal</span> 
            </Link>
            <Link href="/training" className="hover:underline font-[500]">
              <span>Training Initiatives</span>
            </Link>
            <Link href="/how-it-works" className="hover:underline font-[500]">
              <span>How it works?</span>
            </Link>

            {/* Sign In Button */}
            <Link href="/" className="hidden lg:block">
              <button className="flex justify-center items-center gap-2 bg-white text-[#073E8F] p-1 pl-5 rounded-full font-[500]">
                APPLY NOW
                <div className="bg-[#8ec63f] p-2 rounded-full">
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for mobile menu */}
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#073E8F]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block text-white px-3 py-2 rounded-md text-base font-medium">
             <span> Home</span>
            </Link>
            <Link href="/goal" className="block text-white px-3 py-2 rounded-md text-base font-medium">
              <span>The Goal</span>
            </Link>
            <Link href="/training" className="block text-white px-3 py-2 rounded-md text-base font-medium">
             <span> Training Initiatives</span>
            </Link>
            <Link href="/how-it-works" className="block text-white px-3 py-2 rounded-md text-base font-medium">
              <span>How it works?</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
