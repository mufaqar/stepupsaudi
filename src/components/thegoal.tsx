import React from 'react';
import Image from "next/image";

function TheGoal() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[26px] font-[600]">The Goal</h2>
          <div className="flex gap-6 mt-10">
            <Image
              src="/images/download (2).png"
              width={500}
              height={500}
              alt="Process Image"
              className="w-10 h-10"
            />
            <p className="text-[16px] font-[700] text-[#2A2A2A]">
              After completion of training the students must pass a practical exam and interview with the seniors’ independent consultants will get an experience certificate upon passing the exam.
            </p>
          </div>
          <div className="flex gap-6 mt-7">
            <Image
              src="/images/download (2).png"
              width={500}
              height={500}
              alt="Process Image"
              className="w-10 h-10"
            />
            <p className="text-[16px] font-[700] text-[#2A2A2A]">
              The successful candidates will be getting a chance for a job under a one-year extendable contract and their CVs will be published on the job listing portal of Step Up.
            </p>
          </div>
          <div className="flex gap-6 mt-7">
            <Image
              src="/images/download (2).png"
              width={500}
              height={500}
              alt="Process Image"
              className="w-10 h-10"
            />
            <p className="text-[16px] font-[700] text-[#2A2A2A]">
              Companies in Saudi Arabia can access these CVs database to hire the right candidates.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/CompositeLayer@1X.png"
            width={500}
            height={500}
            alt="Goal Image"
            className="w-80 lg:w-96 h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default TheGoal;
