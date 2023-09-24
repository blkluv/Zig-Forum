import Image from "next/image";
import React from "react";

// custom component for space sections
const CustomSection = ({
  customStyle,
  sectionHeader,
  sectionDesc,
  imageURL,
  headerText,
  order,
}) => {
  return (
    <div className="py-5">
      <div className={customStyle}>
        <div>
          <h1 className="my-10 font-semibold text-sm">{headerText}</h1>
          <h1 className="text-2xl w-3/4 font-bold my-2">{sectionHeader}</h1>
          <p className="my-4 text-sm text-slate-400">{sectionDesc}</p>
        </div>
        <div
          className={`${order} place-self-center border-2 border-indigo-400 rounded-md p-1`}
        >
          <Image
            className="rounded-lg"
            src={imageURL}
            alt="Image"
            height={400}
            width={400}
          ></Image>
        </div>
      </div>
    </div>
  );
};

const Space = () => {
  const commonStyels = `grid lg:grid-cols-2 grid-cols-1 gap-4`;
  return (
    <div className="px-10 lg:py-32 py-20 bg-black text-white">
      <div className="flex lg:justify-between flex-col items-center mb-10">
        {/* <Image
          className="my-3"
          src="/contract.png"
          alt="forum image"
          height={100}
          width={100}
        ></Image> */}
        <h1 className="lg:text-4xl text-3xl font-semibold text-center">
          ❤️ A sacred <span className="border-b-2 border-red-400">space</span> for <br />{" "}
          <span className="text-red-500">HealN</span>
        </h1>
        <p className="text-[12px] text-center py-4">
          No judgement zone, we all learning the same lessons. 
        </p>
      </div>

      <div className="my-5">
        {/* Proximity and visibility */}
        <CustomSection
          customStyle={commonStyels}
          headerText={"❌"}
          sectionHeader={"Monetize your purpose: Join our marketplace waitlist today"}
          sectionDesc={
            "Join our marketplace waitlist, refer your friends and enter to a $2500 crystal lamp."
          }
          imageURL={
            "https://i.imgur.com/IlhK4is.jpg?w=740&t=st=1693723425~exp=1693724025~hmac=15664315d9d5a91c2c4a8b3c2df2ee86f0f7d4789bb63b65043992e95f9ef96e"
          }
        ></CustomSection>

        {/* SERENDIPITOUS MOMENTS */}
        <CustomSection
          customStyle={commonStyels}
          order={"lg:order-first"}
          headerText={"✌️"}
          sectionHeader={
            "Our Purpose Is To Connect Those Who Need To Heal With Authentic Heal®️s"
          }
          sectionDesc={
            "Ask Y in our forum, Book a HealR in our upcoming marketplace, or monetize your calling on HealXYZ! Join a thriving tribe of passionate HealRs, gain spiritual insights, and embark on a transformative HealN journey."
          }
          imageURL={
            "https://i.imgur.com/iYssete.png?w=996&t=st=1693724371~exp=1693724971~hmac=bc92f5d4e00c6ee6859f7ef8343ed41b13e8822a4504b23d185102cd123d32f0"
          }
        ></CustomSection>

        {/*Productive coversations */}
        <CustomSection
          customStyle={commonStyels}
          headerText={"⚡️"}
          sectionHeader={"For HealRs, By HealRs"}
          sectionDesc={
            "We're not a traditional marketplace trying to tap into trending spirituality communities for profit. We're a nonprofit empowering the for-purpose economy, founded by a married couple who self-funded HealXYZ to empower HealRs."
          }
          imageURL={
            "https://i.imgur.com/aGYBYAf.png?w=740&t=st=1693724657~exp=1693725257~hmac=5b47743a876161c9666169a8ab8ec689d62be02ad63206e841c1ea904b5c4c97"
          }
        ></CustomSection>
      </div>
    </div>
  );
};

export default Space;
