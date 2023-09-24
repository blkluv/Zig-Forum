import Link from "next/link";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import React from "react";

const NavItems = ({ instagramLink, tiktokLink, twitterLink, forumLink }) => {
  const commonStyles = `hover:border-b pb-1 hover:font-semibold`;
  return (
    <ul className="text-white text-xs flex gap-4">
      <li className={commonStyles}>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </li>
      <li className={commonStyles}>
        <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </li>
      <li className={commonStyles}>
        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </li>
      <li className={commonStyles}>
        <Link href={forumLink}>Forum</Link>
      </li>
    </ul>
  );
};

const NavBar = () => {
  return (
    <div className="border">
      <div className="flex justify-between items-center text-white py-5 px-10 bg-[#100c08]">
        {/* main nav contents */}
        <h1 className="text-lg font-bold">HealXYZ</h1>
        {/* listed nav items */}
        <NavItems
          instagramLink="https://www.instagram.com/healxyz"
          tiktokLink="https://www.tiktok.com/@healxyz"
          twitterLink="https://twitter.com/healxyz"
          forumLink="https://y.healxyz.com" // Replace with your actual Forum route path
        />
      </div>
      {/* gradient border */}
      <div className="h-1 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-300"></div>
    </div>
  );
};

export default NavBar;
