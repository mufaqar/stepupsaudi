import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const stepUpData = [
    {
      id: 1,
      imageSrc: "/images/Lack-of-office-space-.jpg",
      text: "Software development"
    },
    {
      id: 2,
      imageSrc: "/images/Required-Labs.jpg",
      text: "Enterprise applications"
    },
    {
      id: 3,
      imageSrc: "/images/Need-Sponsorship.jpg",
      text: "Networks and infrastructure support"
    },
];

function submit() {
  return (
    <section className='bg-[#073E8F] py-10'>
      <div className='max-w-[1200px] mx-auto   px-4'>
         <h2 className='text-[30px] font-[600] text-white text-center'>Submit Your Application</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
          {stepUpData.map((item) => (
            <div key={item.id} className="bg-white shadow-sm rounded-xl shadow-[] mt-5">
              <Image
                src={item.imageSrc}
                width={500}
                height={500}
                alt="Initiative Image"
                className="w-full mx-auto rounded-t-xl"
              />
              <p className="text-center text-[16px] font-[400] text-[#6F6F6F] py-8 px-2">{item.text}</p>
            </div>
          ))}
        </div>
        <Link href="/" className="">
              <button className="flex justify-center mx-auto mt-14  items-center gap-2 bg-white text-[#073E8F] p-1 pl-5 rounded-full font-[500]">
                APPLY ONLINE
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