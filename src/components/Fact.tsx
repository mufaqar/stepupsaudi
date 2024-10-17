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
            <h4 className="py-4 text-[1.2em] tracking-[1.5px] font-[600]">
              As the technology changes all around us,
            </h4>
            <p className="text-[1em] font-normal leading-[1.4em]">
              Acquiring technical skills is what brings opportunities.
            </p>
            <br />
            <p className="text-[1em] font-normal leading-[1.4em]">
              But accruing such skills is not easy. 90% of the time, technology students require further training and certifications to find an appropriate job.
            </p>
            <br />
            <p className="text-[1em] font-normal leading-[1.4em]">
              Together with our experienced professional team in different areas of information technology, we have a vision to develop the workforce of the future.
            </p>
            <br />
            <p className="text-[1em] font-normal leading-[1.4em]">
              So join Step Up as we transform the student into a professional.
            </p>
          </div>

          {/* Image Content */}
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
              <h3 className="text-lg font-semibold text-[#565656]">Team</h3>
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
              <h3 className="text-lg font-semibold text-[#565656]">Technology</h3>
              <div className="flex justify-end items-end">
                <Image
                  src="/images/Technology.png"
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
