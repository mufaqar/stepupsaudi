import React from "react";
import Image from "next/image";

function Fact() {
  return (
    <section className="mt-10 pb-20">
      <div className="max-w-[1200px] mx-auto w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Text Content */}
          <div>
            <h2 className="text-[2em] font-[600]">Fact</h2>
            <h4 className="py-4 text-[1.2em] tracking-[1.5px] ">
            Many students graduate with solid theoretical knowledge but lack the professional skills employers demand.
            </h4>
            <p className="text-[1em] font-normal leading-[1.8em]">
            This gap is felt across industries, leaving students unprepared for the job market. At StepUp, we’re dedicated to closing that gap by helping students not just learn, but gain hands-on experience and real-world skills. With industry insights, networking opportunities, and practical training, we guide students as they evolve into professionals ready to make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div>
            <div className="bg-white shadow-sm shadow-[] p-6 border-2 border-white rounded-xl lg:ml-7 ">
              <h3 className="text-lg  font-semibold text-[#565656]">Opportunities</h3>
              <div className="flex justify-end items-end">
                <Image
                  src="/images/Opportunities (2).png"
                  width={500}
                  height={500}
                  alt="Hero Image"
                  className="w-16 h-auto"
                />
              </div>
            </div>

            <div className="bg-white shadow-sm shadow-[] p-6 border-2 border-white rounded-xl mt-10 lg:ml-7">
              <h3 className="text-lg font-semibold text-[#565656]">Connect</h3>
              <div className="flex justify-end items-end">
                <Image
                  src="/images/Team.png"
                  width={500}
                  height={500}
                  alt="Hero Image"
                  className="w-16 h-auto" 
                />
              </div>
            </div>
            </div>
            <div>
            <div className="bg-white shadow-sm shadow-[] p-6 border-2 border-white rounded-xl mt-10 lg:ml-7">
              <h3 className="text-lg font-semibold text-[#565656]">Empower</h3>
              <div className="flex justify-end items-end">
                <Image
                  src="/images/empower.png"
                  width={500}
                  height={500}
                  alt="Hero Image"
                  className="w-16 h-auto"
                />
              </div>
            </div>

            <div className="bg-white shadow-sm shadow-[] p-6 border-2 border-white rounded-xl mt-10 lg:ml-7">
              <h3 className="text-lg font-semibold text-[#565656]">Transform</h3>
              <div className="flex justify-end items-end">
                <Image
                  src="/images/Transform.png"
                  width={500}
                  height={500}
                  alt="Hero Image"
                  className="w-16 h-auto"
                />
              </div>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fact;
