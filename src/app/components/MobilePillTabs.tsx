'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PillData {
    label: string;
    gif: string;
}

interface PillProps {
    label: string;
    gif: string;
    className?: string;
}

interface PillTabProps {
  pills: PillData[];
  bottomTabs: string[];
}

const MobilePillTabs: React.FC<PillTabProps> = ({ pills, bottomTabs }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [activePillIndex, setActivePillIndex] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set('.pill-single', { opacity: 0, y: 50, scale: 0.8 });
            gsap.set('.bottom-tab', { y: 50, opacity: 0 });
            gsap.set('.gradient-overlay', { x: '-100%', opacity: 0 });

            const totalDuration = (pills.length + bottomTabs.length) * 1 + 1;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=" + totalDuration * 1000,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    onUpdate: self => {
                        // Calculate active pill index based on scroll progress
                        const progress = self.progress;
                        const currentIndex = Math.min(
                            pills.length - 1,
                            Math.floor(progress * pills.length)
                        );
                        setActivePillIndex(currentIndex);
                    }
                }
            });

            // Animate bottom tabs sequentially
            bottomTabs.forEach((tab, index) => {
                tl.to(`.bottom-tab:nth-child(${index + 1})`, { y: 0, opacity: 1, duration: 1 }, (pills.length + index) * 1);
            });

            // Animate gradient overlay
            tl.to('.gradient-overlay', { x: '100%', opacity: 1, duration: 1.5 }, totalDuration - 1);
        }, sectionRef);

        return () => ctx.revert();
    }, [pills, bottomTabs]);

    const Pill: React.FC<PillProps> = ({ label, gif, className = '' }) => (
        <div
            className={`pill-single absolute flex items-center space-x-3 bg-[#FFFFFF1A] rounded-full px-4 py-2 backdrop-blur-sm ${className}`}
            style={{ transition: 'opacity 0.3s ease, transform 0.3s ease' }}
        >
            <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full flex-shrink-0">
                <img src={gif} alt={label} width={28} height={28} className='w-7 h-7' />
            </span>
            <span className="text-sm font-medium">{label}</span>
        </div>
    );

    return (
        <section
            ref={sectionRef}
            className="relative max-w-[1300px] mx-auto text-white pt-16 mb-16 px-4 select-none bg-cover bg-no-repeat bg-center overflow-hidden h-screen sm:hidden block"
            style={{ backgroundImage: 'url(/bg-inte.png)' }}
            id='ai'
        >
            <h2 className="text-center text-white mb-12">Tokyo Intelligence</h2>

            <div className="relative flex justify-center items-center px-4 min-h-[500px]">
                {/* Show only one active pill on top of doll */}
                {pills.map((pill, idx) => (
                    <Pill
                        key={idx}
                        label={pill.label}
                        gif={pill.gif}
                        className={`absolute top-[0%] left-1/2 transform -translate-x-1/2 z-30 ${
                            idx === activePillIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
                        }`}
                    />
                ))}

                {/* Doll Video */}
                <div className="relative z-20 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] mx-auto">
                    <img src="/videos/doll.gif" alt="doll" className='doll w-full' />
                </div>
            </div>

            {/* Bottom Tabs */}
            <div
                className="bottom-tabs mt-16 relative flex flex-wrap justify-center gap-3 md:gap-6 px-2 md:px-6 backdrop-blur-md overflow-hidden max-w-full mx-auto"
            >
                {/* Gradient Overlay */}
                <div className="gradient-overlay absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 z-10"></div>
                {bottomTabs.map((tab, idx) => (
                    <button
                        key={idx}
                        className={`bottom-tab
                            relative z-10 text-[10px] sm:text-xs text-white bg-[#FFFFFF1A]
                            px-4 py-3 sm:px-8 md:px-16 md:py-7
                            hover:bg-green-700 transition-colors flex-grow-0 min-w-0
                            ${idx === 0 ? "rounded-l-[100px]" : ""}
                            ${idx === bottomTabs.length - 1 ? "rounded-r-[100px]" : ""}
                            ${bottomTabs.length === 3 ? (idx === 1 ? 'rounded-none' : '') : ''}
                            ${bottomTabs.length !== 3 ? 'rounded-full' : ''}
                            sm:rounded-none ${idx === 0 ? "sm:rounded-l-[100px]" : ""} ${idx === bottomTabs.length - 1 ? "sm:rounded-r-[100px]" : ""}
                        `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Background Mask/Particles */}
            <div className="absolute inset-0 pointer-events-none z-1">
                <img
                    src={"/assets/images/tech-mask.png"}
                    alt="Particles"
                    className="w-full h-full object-cover opacity-20 absolute top-0 bottom-0 start-0 end-0 z-2"
                />
            </div>
        </section>
    );
};

export default MobilePillTabs;
