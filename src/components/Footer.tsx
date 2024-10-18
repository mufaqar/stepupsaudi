import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-[#EAF6FE] pt-20">
      <div className="max-w-[1200px] mx-auto w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Logo and tagline */}
          <div>
            <Link href="/">
              <Image
                src="/images/footer.logo.png"
                width={500}
                height={500}
                alt="Logo"
                className="w-62 h-auto"
              />
            </Link>
            <p className="text-[12px] py-3">Transforming Students into Professionals</p>
          </div>
          
          {/* Social Media Section */}
          <div className="mx-auto">
            <h2 className="text-[24px] font-[700] text-[#172735] text-center">Support Us</h2>
            <div className="grid grid-cols-4 gap-3 mt-3">
              <Link href="https://www.facebook.com/StepUp-225847192775973" className="bg-[#8EC63F] mx-auto px-2 py-2 rounded-full">
                <FaFacebook className="text-lg hover:text-white" />
              </Link>
              <Link href="https://twitter.com/SteupSf" className="bg-[#8EC63F] mx-auto px-2 py-2 rounded-full">
                <FaTwitter className="text-lg hover:text-white" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCB5pr4E-tfYgNiOaGHbXl0Q" className="bg-[#8EC63F] mx-auto px-2 py-2 rounded-full">
                <FaYoutube className="text-lg hover:text-white" />
              </Link>
              <Link href="https://www.linkedin.com/company/stepup-teams/about/" className="bg-[#8EC63F] mx-auto px-2 py-2 rounded-full">
                <FaLinkedin className="text-lg hover:text-white" />
              </Link>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-2 font-[500] text-center lg:text-left">
            <Link href="/">
                <span>Home</span>
            </Link>
            <Link href="#goad">
                <span>The Goal</span>
            </Link>
            <Link href="#training">
                <span>Training Initiatives</span>
            </Link>
            <Link href="#work">
                <span>How it works?</span>
            </Link>
          </div>

          {/* Powered By */}
          <div className="text-center">
            <h2 className="text-[26px] font-[600] py-3">Powered By</h2>
            <Link href="/">
              <Image
                src="/images/sf-logo-new-pmg.png"
                width={500}
                height={500}
                alt="Powered By Logo"
                className="w-full h-auto mx-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border border-gray-300 mt-20"></div>

      {/* Footer Bottom Section */}
      <div className="max-w-[1200px] mx-auto w-full px-4 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-center lg:text-left">Copyright © 2021-2024 stepup. All rights reserved.</p>
          <div className="flex gap-4 text-center lg:text-right mt-4 lg:mt-0">
            <p>Terms & Conditions</p>
            <span>-</span>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
