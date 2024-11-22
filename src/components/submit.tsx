import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const stepUpData = [
  {
    id: 1,
    imageSrc: "/images/purpose.png",
    heading: "Learn with Purpose",
    text: "Access specialized courses designed to make you job-ready and equip you with the skills employers are looking for."
  },
  {
    id: 2,
    imageSrc: "/images/connect.png",
    heading: "Connect and Grow",
    text: "Find mentors, engage with peers, and network with professionals who can guide and support you on your career journey."
  },
  {
    id: 3,
    imageSrc: "/images/steps.png",
    heading: "Take the Next Step",
    text: "Elevate your career with the resources, opportunities, and knowledge you need to thrive in the professional world."
  },
];

function submit() {
  return (
    <section className='bg-[#073E8F] py-12 mt-10'>
      <div className='max-w-[1200px] mx-auto   px-4'>
        <h2 className='text-[30px] font-[600] text-white text-center'>Join the StepUp Initiative Today</h2>
        <p className='text-[18px]  text-white text-center p-4'>StepUp is not just a platform; it’s a transformative movement aimed at turning students into professionals. Empower your future with the right tools, industry insights, and connections to succeed in today’s job market.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
          {stepUpData.map((item) => (
            <div key={item.id} className="bg-white shadow-sm rounded-xl shadow-[] mt-5">
              <Image
                src={item.imageSrc}
                width={160}
                height={160}
                alt="Initiative Image"
                className="mx-auto rounded-t-xl"
              />
              <h2 className="text-center text-[20px] font-semibold text-[#6F6F6F] py-4 px-4">{item.heading}</h2>
              <p className="text-center text-[16px] font-normal text-[#6F6F6F] pb-8 px-4">{item.text}</p>
            </div>
          ))}
        </div>

        <p className='text-[18px]  text-white text-center pt-10 p-4'>StepUp is not just a platform; it’s a transformative movement aimed at turning students into professionals. Empower your future with the right tools, industry insights, and connections to succeed in today’s job market.</p>

        <Link href='https://getastepup.com/register' target='_blank'>
          <button className="flex justify-center mx-auto mt-8  items-center gap-2 bg-white text-[#073E8F] p-1 pl-5 rounded-full font-[500]">
          JOIN NOW
            <div className="bg-[#8ec63f] p-2 rounded-full">
              <FaArrowRight />
            </div>
          </button>
        </Link>
      </div>
    </section>
  )
}

export default submit