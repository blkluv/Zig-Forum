import React from "react";
import { FaStarOfLife, FaAtlassian } from "react-icons/fa";
import { BsGoogle, BsDiscord } from "react-icons/bs";
import { SiNasa } from "react-icons/si";
import Marquee from "react-fast-marquee";

const commonStyles = `flex items-center gap-1 text-xl`;

const Partners = () => {
  return (
    <div className="px-10 py-20 bg-[#fafafa]  border-y border-slate-950">
      <div className="text-center mb-10">
        <FaStarOfLife className="inline-block font-3xl animate-spin text-indigo-400" />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <h1 className="text-3xl font-semibold text-slate-800 lg:col-span-2 lg:py-5 py-4">
        Authentic Heal®️
        </h1>
        <p className="text-xs lg:py-5 py-4">
        HealXYZ takes the safety and authenticity of its healing services 
        seriously. Through a meticulous screening process, in combination
        of our forum feedback we ensure that only genuine healers are 
        granted our coveted ® trademark emoji. This rigorous authentication
        procedure offers peace of mind to individuals seeking healing, as 
        they can confidently identify and engage with accredited practitioners. 
        By proudly displaying the ® trademark emoji, our healers symbolize 
        their commitment to ethical and effective healing practices, safeguarding
        our tribe against potential scams and untrusted services. At HealXYZ, 
        trust and transparency are at the core of our mission, empowering 
        individuals to embark on their healing journeys with confidence. 
        <br />
        <br />
        Dr. Candy Terry (Ph.D. in Metaphysics)
        </p>
      </div>
      {/* React Marquee */}
    </div>
  );
};

export default Partners;
