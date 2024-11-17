import React from "react";
import Image from "next/image";
import project from "@/app/assets/Work Together Image.png"
export default function Work() {
    return(
        <div className="w-[1920px] h-[829px] top-[92px] py-[140px] px-[220px] flex items-center justify-between">
            <div className="w-[1480px] h-[661px] gap-[100px]">
            <Image src={project} alt="mindmap" width={710} height={661} className="hover:-translate-x-2" />
            </div>
            <div className="w-[670px] h-[294px] gap-[60px]">
                <div className="w-[670px] h-[171px] gap-6">
                    <div className="w-[670px] h-[87px]">
                    <h1 className="font-bold text-7xl leading-[87.14px]">
                        Work Together
                    </h1>
                    </div>
                    <div className="w-[670px] h-[60px]">
                        <p className="font-sans text-[18px] font-normal leading-[30px] ">
                        With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
 </p>
                    </div>
<br />
                    <div className="w-[186px] h-[63px]">
                   <button className="text-white rounded-lg px-10 py-5 gap-[10px] bg-[#4F9CF9] flex 
                   justify-between items-center hover:bg-blue-600 "> 
                    <p className="w-[82px] h-[23px] font-medium text-lg leading-[23px] tracking-[-2%]">Try it now</p>
                    <span className="text-white text-lg">  &#8594;</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}