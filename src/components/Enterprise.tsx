import React from 'react'
import Image from "next/image";

const stepUpData = [
    {
      id: 1,
      imageSrc: "/images/1 (2).png",
      text: "Enterprise Resource Planning  (ERP) Fundamentals"
    },
    {
        id: 2,
        imageSrc: "/images/2 (1).png",
        text: "Business Processes Analysis"
      },
      {
        id: 3,
        imageSrc: "/images/3 (1).png",
        text: "BRD Phase Documentation  & Diagrams"
      },
      {
        id: 4,
        imageSrc: "/images/4 (1).png",
        text: "Data Computational  Techniques and Platforms"
      },
      {
        id: 5,
        imageSrc: "/images/5 (1).png",
        text: "Project Planning "
      },
      {
        id: 6,
        imageSrc: "/images/6 (1).png",
        text: "Kick Start Developments "
      },
      {
        id: 7,
        imageSrc: "/images/7.png",
        text: "Business Process Testing"
      },
      {
        id: 8,
        imageSrc: "/images/8.png",
        text: "Build Deployments "
      },
      {
        id: 9,
        imageSrc: "/images/9.png",
        text: "Users Acceptance Test "
      },
      {
        id: 10,
        imageSrc: "/images/10.png",
        text: "Go Alive and Support "
      },
   
  ];

function Enterprise() {
  return (
    <section className='max-w-[1200px] mx-auto w-full px-4 pb-10'>
      <div>
        <h2 className="text-[#302E2E] text-[37px] font-[700] text-center">Enterprise Applications Initiative</h2>
        <p className='text-center max-w-[900px] mx-auto font-[500] text-[16px]'>Practical engagement under the supervision of certified project managers and information system experts.
Will be working on the following areas.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
          {stepUpData.map((item) => (
            <div key={item.id} className="bg-white shadow-sm rounded-xl shadow-[] mt-5 py-3">
              <Image
                src={item.imageSrc}
                width={500}
                height={500}
                alt="Initiative Image"
                className="w-20 mx-auto rounded-t-xl"
              />
              <p className="text-center py-4 px-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Enterprise