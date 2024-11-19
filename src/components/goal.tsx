import React from 'react';

function Goal() {
  return (
    <section className="bg-[#073E8F] max-w-[1200px] mx-auto rounded-xl p-6 md:p-10 px-4" id="goal">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white px-4 ">
        {/* Left Section */}
        <div className='grid items-center'>
          <h2 className=" text-[32px] font-semibold">The Goal <br />of <br /> STEPUP</h2>
          <h4 className="text-[#8EC63F] text-xl md:text-[2em] font-normal tracking-[3px] leading-[40px] py-6">Enabling <br />transformation</h4>
        </div>

        {/* Middle Column */}
        <div className="grid grid-cols-1 mt-5">
          <div>
            <span className="text-[#8EC63F] bg-white rounded-lg px-5 py-2 text-3xl">1</span>
            <div className="py-5 text-[16px]">
              <p>Bridging the Gap Between Education and Employment</p>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-[#8EC63F] bg-white rounded-lg px-5 py-2 text-3xl">3</span>
            <div className="py-5 text-[16px]">
              <p>Empowering Students to Make Informed Career Choices.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 mt-5">
          <div>
            <span className="text-[#8EC63F] bg-white rounded-lg px-5 py-2 text-3xl">2</span>
            <div className="py-5 text-[16px]">
              <p>Real-World Learning Through Industry Connections</p>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-[#8EC63F] bg-white rounded-lg px-5 py-2 text-3xl">4</span>
            <div className="py-5 text-[16px]">
              <p>Creating Opportunities for Career Advancement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goal;
