 import Navbar from "@/components/navbar";
import Hero from '@/components/hero'
import Fact from '@/components/Fact'
import Goal from "@/components/goal";
import Step from '@/components/step'
import Enterprise from '@/components/Enterprise'
import Software from "@/components/software";
import Boarding from '@/components/Boarding'
import Thegoal from "@/components/thegoal";
import Submit from "@/components/submit";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
   <div className="border-b-2 border-gray-500">
   <Navbar />
   </div>
    <Hero/>
    <Fact/>
    <Goal/>
    <Step/>
    <Enterprise/>
    <Software/>
    <Boarding/>
    <Thegoal/>
    <Submit/>
    <Footer/>


    </>
  );
}
