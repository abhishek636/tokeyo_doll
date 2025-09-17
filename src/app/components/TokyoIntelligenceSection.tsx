'use client';
 
import React from 'react';
import { Cpu, Layers, FileText, Database, Server, Package } from 'lucide-react';
 
 
const bottomTabs = [
    'Construct Behavioral Architecture',
    'Fuse Personality with Digital Embodiment',
    'Deploy Agent into Immersive Ecosystems',
];
 
const TokyoIntelligenceSection = () => {
    return (
        <section
            className=" relative max-w[1300px]  mx-auto text-white pt-16 mb-16 px-4 select-none bg-cover bg-no-repeat bg-center sm:block hidden"
            style={{ backgroundImage: 'url(/bg-inte.png)', }}
 
        >
            <h2 className="text-center text-4xl font-semibold mb-12">Tokyo Intelligence</h2>
 
            <div className="relative flex justify-center items-center">
                {/* Left Pills */}
                <div
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-8"
                    style={{ zIndex: 10 }}
                >
                    {/* {leftPills.map(({ id, label, icon }) => (
                        <div key={id} className="flex items-center justify-between space-x-3 bg-[#FFFFFF1A] bg-opacity-50 rounded-full px-4 py-2 backdrop-blur-sm">
                            <span className="text-sm">{label}</span>
                            <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full">{icon}</span>
                        </div>
                    ))} */}
                </div>
 
                {/* Doll Video */}
                <div
                    className="relative z-20"
                    style={{ width: 580 }}
                >
                    <img src="/doll.gif" alt="doll" className='w-full' />
 
                </div>
 
                {/* Right Pills */}
                <div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-8"
                    style={{ zIndex: 10 }}
                >
                    {/* {rightPills.map(({ id, label, icon }) => (
                        <div key={id} className="flex items-center space-x-3 bg-[#FFFFFF1A] bg-opacity-50 rounded-full px-4 py-2 backdrop-blur-sm">
                            <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full">{icon}</span>
                            <span className="text-sm">{label}</span>
                        </div>
                    ))} */}
                </div>
            </div>
            {/* Left Pills */}
            <div className="absolute left-50 top-0 h-full flex flex-col justify-between py-20">
                <div className="absolute left-50 top-[30%] flex items-center space-x-3 bg-[#FFFFFF1A] rounded-full px-4 py-2 backdrop-blur-sm">
                    <span className="text-sm">Models</span>
                    <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full">
                        <img src="/assets/gifs/models.gif" alt="Models" width={28} height={28} />
                    </span>
                </div>
 
                <div className="absolute left-40 top-[45%] flex items-center space-x-3 bg-[#FFFFFF1A] rounded-full px-4 py-2 backdrop-blur-sm">
                    <span className="text-sm">Scene</span>
                    <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full">
                        <img src="/assets/gifs/scene.gif" alt="Scene" width={28} height={28} />
                    </span>
                </div>
 
                <div className="absolute left-30 top-[60%] flex items-center space-x-3 bg-[#FFFFFF1A] rounded-full px-4 py-2 backdrop-blur-sm">
                    <span className="text-sm">Modules</span>
                    <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full">
                        <img src="/assets/gifs/modules.gif" alt="Modules" width={28} height={28} />
                    </span>
                </div>
            </div>
 
            {/* Right Pills */}
            <div className="absolute right-50 top-0 h-full flex flex-col justify-between py-20">
                <div className="absolute right-50 top-[30%] flex items-center space-x-3 bg-[#FFFFFF1A] rounded-full px-4 py-2 backdrop-blur-sm">
                    <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full">
                        <img src="/assets/gifs/memory.gif" alt="Memory" width={28} height={28} />
                    </span>
                    <span className="text-sm">Memory</span>
                </div>
 
                <div className="absolute right-40 top-[45%] flex items-center space-x-3 bg-[#FFFFFF1A] rounded-full px-4 py-2 backdrop-blur-sm">
                    <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full">
                        <img src="/assets/gifs/providers.gif" alt="Providers" width={28} height={28} />
                    </span>
                    <span className="text-sm">Providers</span>
                </div>
 
                <div className="absolute right-30 top-[60%] flex items-center space-x-3 bg-[#FFFFFF1A] rounded-full px-4 py-2 backdrop-blur-sm">
                    <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full">
                        <img src="/assets/gifs/system.gif" alt="System" width={28} height={28} />
                    </span>
                    <span className="text-sm">System</span>
                </div>
            </div>
 
            {/* Bottom Tabs */}
            <div
                className="bottom-tabs mt-16 relative flex justify-center space-x-6  rounded-lg px-6  backdrop-blur-md overflow-hidden gap-5"
                style={{ margin: '0 auto' }}
            >
                {bottomTabs.map((tab, idx) => (
                    <button
                        key={idx}
                        className={`relative z-10 text-xs text-white bg-[#FFFFFF1A] px-16 py-7 hover:bg-green-700 transition-colors
                            ${idx === 0 ? "rounded-l-[100px]" : ""}
                            ${idx === 2 ? "rounded-r-[100px]" : ""}                          
                            `}
                    >
                        {tab}
                    </button>
                ))}
 
            </div>
 
            <div className="absolute inset-0 pointer-events-none z-1">
                <img src={"/assets/images/tech-mask.png"} alt="Particles" className="w-full h-full object-cover opacity-20 absolute top-0 bottom-0 start-0 end-0 z-2" />
            </div>
        </section>
 
    );
};
 
export default TokyoIntelligenceSection;
 
 