"use client"
import React from "react"; 
import Typewriter from 'typewriter-effect'; 
  
export default function TypingEffect() { 
  return ( 
    <h1 className="text-[36px] leading-normal capitalize"> 
      <Typewriter
  options={{
    strings: ['Discover | industry-focused courses', 'access expert-led podcasts',' explore universities and scholarships','and connect with peers for academic and career growth.',' StepUp empowers students to make informed decisions','acquire job-ready skills',' and collaborate meaningfully to build a successful future.'],
    autoStart: true,
    loop: true,
  }}
/>
    </h1> 
  ); 
}