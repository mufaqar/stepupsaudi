import React from 'react';
import Image from "next/image";

const stepUpData = [
  {
    id: 1,
    imageSrc: "/images/col-1.jpg",
    text: "Enterprise Applications and Information Systems Implementation Trainings and Engagement."
  },
  {
    id: 2,
    imageSrc: "/images/col-2.jpg",
    text: "Software development training and real-time engagement in various applications."
  },
  {
    id: 3,
    imageSrc: "/images/image_2021_09_12T08_00_08_018Z-pd1ntmbbh1bfno5q0sm7zuti3h38tofk8n79xn1ips.png",
    text: "Cloud Computing, Network and infrastructure."
  },
];

function Step() {
  return (
    <section className="max-w-[1200px] mx-auto w-full px-4 mt-32 pb-32" id="how-it-works">
      <div>
        <h2 className="text-[#302E2E] text-[32px] font-[600] text-center">STEP UP Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {stepUpData.map((item) => (
            <div key={item.id} className="bg-white shadow-sm rounded-xl shadow-[] mt-5">
              <Image
                src={item.imageSrc}
                width={500}
                height={500}
                alt="Initiative Image"
                className="w-full h-48  object-cover rounded-t-xl"
              />
              <p className="text-center py-4 px-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Step;
