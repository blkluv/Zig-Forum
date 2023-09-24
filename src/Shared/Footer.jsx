import FooterItems from "@/app/components/FooterItems";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { BsApple, BsGooglePlay } from "react-icons/bs";

const Footer = () => {
  const footerItems = [
    { label: "Forum", url: "https://y.healxyz.com" },
    { label: "Features", url: "/features" },
    { label: "Pricing", url: "/pricing" },
    { label: "Careers", url: "/careers" },
    { label: "Help", url: "/help" },
    { label: "Privacy", url: "/privacy" },
  ];

  return (
    <div className="bg-black text-white h-2/5">
      <div className="h-1 bg-sky-400"></div>
      <div className="py-8 lg:px-10 mt-3 grid lg:grid-cols-2 sm:grid-cols-1 sm:gap-y-10 px-10">
        {/* parent div for upper footer section */}
        {/* left side */}
        <div>
          <h1 className="text-lg font-semibold">
            HealXYZ
          </h1>
          <p className="text-xs py-3">
            Connect with authentic <br />
            HealRs around the world
          </p>
          <div className="lg:mt-4">
            <FooterItems items={footerItems} />
          </div>
        </div>
        {/* right side */}
        <div className="lg:place-self-end w-fit">
          <h1 className="text-sm">Coming Soon </h1>

          <div className="flex gap-4">
            {/* google play */}
            <div className="border my-3 px-2 py-1 flex items-center gap-3">
              <BsGooglePlay className="inline-block text-lg" />
              <div>
                <h1 className="text-[7px] lg:text-right">Get the app from</h1>
                <h1 className="text-[10px]">Google Play</h1>
              </div>
            </div>

            {/* app store */}
            <div className="border my-3 px-4 py-2 flex items-center gap-3">
              <BsApple className="inline-block text-lg" />
              <div>
                <h1 className="text-[7px] text-right">Get the app from</h1>
                <h1 className="text-[10px]">App Store</h1>
              </div>
            </div>
          </div>

          <h1 className="text-xs">
            Made With <FaHeart className="inline-block text-2xl" />
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
