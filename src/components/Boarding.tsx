import React from 'react';
import Image from "next/image";

function Boarding() {
  return (
    <section className="bg-[#EAF6FE] py-10">
      <div className="max-w-[1200px] mx-auto w-full px-4">
        <div>
          <h2 className="text-[36px] font-[700] text-[#302E2E] text-center">On Boarding Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-7 gap-6">
          <div>
            <Image src="/images/a.png" width={500} height={500} alt="Process Image 1" className="w-52 h-auto mx-auto" />
            <div className="border border-gray-500 mt-2 mb-3"></div>
            <span className="bg-[#8EC63F] rounded-full text-white px-3 py-1 text-xl">1</span>
            <p className="text-[16px] font-[300] text-[#7a7a7a] py-2 text-center">Submit Online application about area of your interest.</p>
          </div>
          <div>
            <p className="text-[16px] font-[300] text-[#7a7a7a] py-6 mb-5 text-center">Initial Interview & assessment.</p>
            <span className="bg-[#8EC63F] rounded-full text-white px-3 py-1 text-xl">2</span>
            <div className="border border-gray-500 mt-[21px] mb-2"></div>
            <Image src="/images/c.png" width={500} height={500} alt="Process Image 2" className="w-52 h-auto mx-auto" />
          </div>
          <div>
            <Image src="/images/b.png" width={500} height={500} alt="Process Image 3" className="w-52 h-auto mx-auto" />
            <div className="border border-gray-500 mt-2 mb-3"></div>
            <span className="bg-[#8EC63F] rounded-full text-white px-3 py-1 text-xl">3</span>
            <p className="text-[16px] font-[300] text-[#7a7a7a] py-2 text-center">Link a team leader with a senior professional.</p>
          </div>
          <div>
            <p className="text-[16px] font-[300] text-[#7a7a7a] py-4 mb-5 text-center">Make Pool ready for companies to hire Saudi Professionals.</p>
            <span className="bg-[#8EC63F] rounded-full text-white px-3 py-1 text-xl">4</span>
            <div className="border border-gray-500 mt-[13px] mb-2"></div>
            <Image src="/images/d.png" width={500} height={500} alt="Process Image 4" className="w-52 h-auto mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Boarding;
