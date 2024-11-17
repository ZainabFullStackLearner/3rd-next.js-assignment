import React from "react";
import Image from "next/image";
import Apple from "@/app/assets/Apple.png";
import Micro from "@/app/assets/microsoft 1.png";
import Slack from "@/app/assets/Slack_Technologies_Logo 1.png";
import Google from "@/app/assets/Google.png";
export default function Sponsors(){
    return (
        <div className="w-[1922px] h-[538px] top-[4654px] px-[220px] py-[120px] gap-[100px]">
            <div className="w-[1482px] h-[87px] text-center mb-28">
                <h1 className="font-bold text-7xl leading-[87.14px] text-center;">
                Our sponsors
                </h1>
            </div>
            <div className="flex justify-between w-[1482px] h-[71px]">
      <Image src={Apple} alt="logo" width={55.47} height={68}className="hover:translate-x-2" />
      <Image src={Micro} alt="logo" width={287} height={62} className="gap-1 hover:translate-x-2" />
      <Image src={Slack} alt="logo" width={280} height={71} className="hover:translate-x-2"/> 
      <Image  src={Google} alt="logo" width={211} height={69.81} className="hover:translate-x-2"/>

            </div>
        </div>
    )
}