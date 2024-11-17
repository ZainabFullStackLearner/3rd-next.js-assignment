
import React from "react";
import Hero from "./components/hero";
import ProjectManage from "./components/project";
import Work from "./components/work";
import Extenxion from "./components/extension";
import Cutomise from "./components/cutom";
import Yourwork from "./components/your";
import Sponsors from "./components/sponsor";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png"
export default function Home(){
  return (
<div className="grid grid-rows-[20px-1fr-20px] items-center justify-between min-h-screen">
<Hero/>


<ProjectManage/>
<Work/>
<Extenxion/>
<Cutomise/>
<Yourwork/>
<Sponsors/>
<div className="w-[1920px] h-[461px] top-[5195px] px-[220px] pt-[140px] pb-8 bg-[#043873]  text-white">
<div className="w-[1480px] h-[289px] gap-[100px] ">
<div className="w-[1480px] h-[169px] gap-[100px] flex justify-between ">
  <div className="w-[295px] h-[169px] gap-[15px] grid">
    <Image src={Logo} alt="Logo" width={191} height={34} />
      <div className="w-[240px] h-[120px]">
        <p className="text-[#F7F7EE] text-[18px] leading-[30px] font-normal hover:translate-x-2 hover:text-blue-600">
        whitepace was created for the new ways we 
        live and work. We make a better workspace around the world
        </p>
      </div>
 </div>
 <div className="w-[295px] h-[127px] gap-[15px] grid ">
<p className=" w-[69px] h-[22px] font-bold text-[18px] leading-[21.78px] text-white">
  Product</p>
  <p className=" w-[70px] h-5 font-normal text-[16px] leading-5 hover:text-blue-500 hover:translate-x-2">Overview</p>
 <p className="w-[50px] h-5 font-normal text-[16px] leading-5 hover:text-blue-500 hover:translate-x-2">Pricing</p>
 <p className="w-[177px] h-5 font-normal text-[16px] leading-5 hover:text-blue-500 hover:translate-x-2">Customer stories</p>


 </div>
 <div className="w-[295px] h-[130px] gap-4 grid ">
  <p className="w-[91px] h-[22px] font-bold  text-[18px] leading-[21.78px] text-white">
  Resources
  </p>
  <p className=" w-[33px] h-5 font-normal text-[16px] leading-5 hover:text-blue-500 hover:translate-x-2">Blog</p>
  <p className=" w-[128px] h-5 font-normal text-[16px] leading-5 hover:text-blue-500 hover:translate-x-2">Guides & tutorials</p>
  <p className=" w-[130px] h-5 font-normal text-[16px] leading-5 hover:text-blue-500 hover:translate-x-2">Help center</p>
 </div>
 <div className="w-[295px] h-[130px] gap-4 grid ">
  <p className="w-[83px] h-[22px] font-bold text-[18px] leading-[21.78px] text-white">
  Company
  </p>
  <p className=" w-[66px] h-5 font-normal text-[16px] leading-5 hover:text-blue-500 hover:translate-x-2">About us</p>
  <p className=" w-[62px] h-5 font-normal text-[16px] leading-5 hover:text-blue-500 hover:translate-x-2">Careers</p>
  <p className=" w-[99px] h-5 font-normal text-[16px] leading-5 hover:text-blue-500 hover:translate-x-2">Media kit</p>
 </div>
</div>
</div>
</div>














</div>
  )
}


