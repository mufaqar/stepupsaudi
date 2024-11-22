"use client"
import React from "react"; 
import Typewriter from 'typewriter-effect'; 
  
export default function TypingEffect() { 
  return ( 
    <h1 className="text-[36px] leading-normal capitalize text-[#8ec63f] font-[700] pb-6"> 
      <Typewriter
  options={{
    strings: ['Make informed decisions', 'Acquire job-ready skills','Industry-focused courses','Access expert-led podcasts','Explore universities and scholarships','Connect peers, grow careers','Collaborate for future success'],
    autoStart: true,
    loop: true,
  }}
/>
    </h1> 
  ); 
}