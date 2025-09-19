"use client";

import React from "react";
import Image from "next/image";
import Starfield from "./Backgrounds/Starfield";

const HeroNew: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center bg-[#111111] text-center px-4 sm:py-20 py-8 h-screen" >
            {/* Sparkles Background */}
            <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="#111111"
            />
            <h2 className="text-white z-20 mb-3">Ready. Set. Stream.</h2>
            <p className="sm:mt-4 mt-2 text-[#A0A0A0] z-20 relative sm:px-0 px-2">
                This feature is currently under development. Join the waitlist to get early access.
            </p>
            <p className="sm:mt-4 mt-2 text-[#A0A0A0] z-20 relative sm:px-0 px-2">
                This feature is currently under development. Join the waitlist to get early access.
            </p>
            <p className="border border-[#2388FF] text-[#2388FF] z-20 relative px-6 py-1 mt-8.5 text-[14px] rounded-full ">COMING SOON</p>
            <Image src="/assets/images/ainew.png" alt="Animated GIF" className="z-10 object-contain mt-12" width={671} height={611} />
        </section>
    );
};

export default HeroNew;
