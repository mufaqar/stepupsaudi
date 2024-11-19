import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-[#EAF6FE] py-16">
      <div className="max-w-[1200px] mx-auto w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-20">
          {/* Logo and tagline */}
          <div>
            <Link href="/">
              <Image
                src="/images/footer.logo.png"
                width={250}
                height={50}
                alt="Logo"
                className="w-40 h-auto"
              />
            </Link>
            <p className="text-[14px] py-3">Transforming Students into Professionals</p>
            <p className="text-[18px] text-center lg:text-left">Copyright © 2021-2024 stepup.<br/> All rights reserved.</p>
          </div>
          
          
          
          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-2 font-[500] text-center lg:text-left">
            
            <Link href="#goad">
                <span>Terms & Conditions</span>
            </Link>
            <Link href="#training">
                <span>Training Initiatives</span>
            </Link>
            <Link href="#work">
                <span>Privacy Policy</span>
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="mx-auto">
            <h2 className="text-[24px] font-[700] text-[#172735] text-center">Follow Us</h2>
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

          
        </div>
      </div>

     
    </section>
  );
}

export default Footer;
