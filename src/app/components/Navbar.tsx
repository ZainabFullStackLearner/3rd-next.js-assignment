import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";

export default function Navbar() {
  return (
    <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
      <div className="w-[191px] h-[34px]">
<Image  src={Logo} alt="logo" width={191} height={34}/>
      </div>
      <div className="w-[737.5px]  h-[60px] flex justify-between items-center">
<div className="w-[549px] h-[23px]">

  <ul className="flex flex-row justify-between text-white">
    <li className="hover:text-blue-500 cursor-pointer font-sans">Products</li>
    <li className="hover:text-blue-500 cursor-pointer font-sans">Solutions</li>
    <li className="hover:text-blue-500 cursor-pointer font-sans">Resources</li>
    <li className="hover:text-blue-500 cursor-pointer font-sans">Pricing</li>
    <button className="px-10 py-4 text-[#043873]  font-sans rounded-lg bg-[#FFE492] hover:bg-slate-500 -mt-4">Login</button>
    </ul>
 
</div>

      </div>
     
    </div>
  );
}