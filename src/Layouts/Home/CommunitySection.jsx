import Servers from "@/components/Servers";
import { dcServers } from "@/constants";
import { Inter, Roboto } from 'next/font/google';
import Image from "next/image";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400"] });

const CommunitySection = () => {
  return (
    <div className="bg-[#0f0f0f] py-20 text-white px-10">
      <h1 className="lg:text-3xl text-2xl font-semibold text-center">
        🏁 Start Your Healn Journey
      </h1>
      <div className="flex justify-center">
        {dcServers.map((item, index) => (
          <Servers key={index} {...item}></Servers>
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;
