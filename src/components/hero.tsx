
import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image'
import TypingEffect from './typewriter';


function Hero() {
  return (
    <section className='bg-[#073E8F] pt-10'>
      <div className='max-w-[1200px] mx-auto w-full px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 h-auto md:h-[500px] items-center'>
          <div className='text-white md:text-left col-span-2'>
            <h1 className='text-[35px] md:text-[35px] font-[500] pb-4 '>
              Transforming
              Students Into <br />
              Professionals
            </h1>
            <TypingEffect />
            <p className='text-[16px] md:text-[16px] tracking-[2px] leading-7'>
              Welcome to StepUp, a platform designed to bridge the gap between students and the professional world.
            </p>
            <div className='pt-6  font-[Axiforma]'>
              <Link href='https://getastepup.com/register' target='_blank'>
                <button className='flex justify-center md:justify-start items-center gap-2 bg-white text-[#073E8F] p-2 pl-5 rounded-full font-[500]'>
                JOIN NOW
                  <div className='bg-[#8ec63f] p-2 rounded-full pl-5 pr-5'>
                    <FaArrowRight />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className='mt-3 md:mt-0'>
            <Image src="/images/pic (1).png" width={500} height={500} alt="Hero Image" className='w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
