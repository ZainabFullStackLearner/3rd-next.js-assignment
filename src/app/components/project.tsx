import React from "react";
export default function ProjectManage(){
    return (
        <div className="w-[1920px] h-[829px] top-[92px] py-[140px] px-[220px] flex items-center justify-between">
        <div className="w-[1480px] h-[547px] gap-[60px] ">
            <div className="w-[672px] h-[411px] gap-[60px]">
                <div className="w-[672px] h-[288px] gap-[24px]">
                    <div className="w-[672px] h-[174px]">
                    <h1 className="text-[72px] font-bold leading-[87.14px] ">
                    Project Management
                    </h1>
                    </div>
                    <div className="w-[672px] h-[90px]">
                    <p className="font-sans font-normal text-[18px] leading-[30px] tracking-[-2%]">
                    Images, videos, PDFs and audio files are supported. Create math expressions and 
                    diagrams directly from the app. Take photos with the mobile app and save them to a note.
                    </p></div>
                </div>
                <div className="w-[201px] h-[63px]"></div>
                   <button className="text-white  rounded-lg px-10 py-5 gap-[10px] bg-[#4F9CF9] flex 
                   justify-between items-center hover:bg-blue-600 "> 
                    <p className="w-[97px] h-[23px] font-medium text-lg leading-[23px] tracking-[-2%]">Get started</p>
                    <span className="text-white text-lg">  &#8594;</span>
                    </button>
                    
            </div>
            </div>
 <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
             </div>


    )
}