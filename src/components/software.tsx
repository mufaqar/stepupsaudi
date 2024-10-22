import React from 'react';
import Image from "next/image";

const stepUpData = [
  {
    id: 1,
    imageSrc: "/images/icon-1.png",
    text: "Python Programming"
  },
  {
    id: 2,
    imageSrc: "/images/icon-2.png",
    text: "JS"
  },
  {
    id: 3,
    imageSrc: "/images/icon-3.png",
    text: "SQL language"
  },
  {
    id: 4,
    imageSrc: "/images/icon-4.png",
    text: "JavaScript development."
  },
  {
    id: 5,
    imageSrc: "/images/icon-5.png",
    text: "JAVA"
  },
  {
    id: 6,
    imageSrc: "/images/icon-6.png",
    text: "Php"
  },
  {
    id: 7,
    imageSrc: "/images/icon-7.png",
    text: "Database Management  Systems such as PostgreSQL"
  },
  {
    id: 8,
    imageSrc: "/images/icon-8.png",
    text: "Software Development  Agile environment"
  },
  
];
function software() {
  return (
    <section className="max-w-[1200px] mx-auto w-full px-4 mt-32 pb-32" id="training">
      <div>
        <h2 className="text-[#302E2E] text-[36px] font-[700] text-center">Software Development Initiative</h2>
        <p className='text-[16px] font-[500] text-center'>Practical Internship under leadership of experienced software engineers for following languages.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {stepUpData.map((item) => (
            <div key={item.id} className="bg-white shadow-sm rounded-xl shadow-[] mt-5">
              <Image
                src={item.imageSrc}
                width={500}
                height={500}
                alt="Initiative Image"
                className="w-28 mx-auto rounded-t-xl"
              />
              <h3 className="text-center text-[12px] font-[600] text-[#6F6F6F] pb-5 px-2">{item.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default software