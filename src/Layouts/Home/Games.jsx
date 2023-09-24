import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Games = () => {
  return (
    <div className="bg-black text-white py-10 px-10">
      <h1 className="pt-10 text-3xl text-center font-bold">One Stop HealN Shop</h1>
      <p className="text-xs text-center pt-2 animate-pulse">
        Join Our Forum
      </p>
      <div className="py-lg:32 py-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
          {/* 1st child */}
          <div className="rounded-lg p-[3px] bg-gradient-to-r from-emerald-400 via-pink-400 to-sky-400 lg:col-span-2 md:col-span-2">
            <div className="p-5 bg-black rounded-lg">
              <h1 className="text-2xl font-semibold">
               Gamified <br /> Healn
              </h1>
              <p className="text-sm py-4">
               At HealXYZ, we use our forum to help users Heal X, Y, and Z with 
               advice and knowledge. It&apos;s not just about marketing spirituality
               services; it&apos;s about creating a supportive tribe. We share insights,
               build trust, and empower our tribe to make informed choices on their
               healing journey. We&apos;re all about genuine healing services and shared
               wisdom. Leading with your purpose to help others will unlock the
               spiritual wealth you deserve.
              </p>
              <div className="my-4 border-2 border-[#171717] px-7 py-3 rounded-md text-semibold hover:bg-[#171717] animate-pulse">
                <a href="https://y.healxyz.com" className="flex items-center justify-center">
                  Join Our Forum
                  <Image
                    className="inline-block mx-1"
                    src={"/slash.png"}
                    alt="Slashing sword"
                    height={20}
                    width={20}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* 2nd child {group} */}
          <div className="flex flex-col gap-y-2">
            <Image
              className="rounded-lg"
              src={
                "https://i.imgur.com/RYjwxqs.jpg?resize=1024x768"
              }
              alt="Game Image"
              height={400}
              width={400}
            ></Image>
            <div className="rounded-lg py-2 px-4 bg-gradient-to-r from-emerald-400 via-pink-400 to-indigo-400 backdrop-blur-md h-full">
              <h1 className="text-md font-semibold">
                Marketplace For Heal®️s
                <Image
                  className="inline mx-3"
                  src={"/potion.png"}
                  alt="Potion"
                  height={20}
                  width={20}
                ></Image>
              </h1>
              <p className="text-xs py-2">
                Monetize your calling to do what you love for a 
                living in our upcoming marketplace for authentic
                HealN services.
              </p>
              <a href="https://getwaitlist.com/waitlist/10645">
                <button className="hover:font-bold font-semibold text-sm">
                  Join Waitlist<BsArrowRightShort className="inline-block text-xl" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center rounded-full mb-5">
        <Image
          className="bg-gradient-to-t from-amber-100 via-orange-200 to-red-300 rounded-full"
          src={"/spades.png"}
          height={50}
          width={50}
          alt="Spade"
        ></Image>
      </div>
    </div>
  );
};

export default Games;
