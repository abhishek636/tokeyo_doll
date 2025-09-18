'use client';
 
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 
gsap.registerPlugin(ScrollTrigger);
 
const bottomTabs = [
    'Construct Behavioral Architecture',
    'Fuse Personality with Digital Embodiment',
    'Deploy Agent into Immersive Ecosystems',
];
 
interface PillData {
    label: string;
    gif: string;
    top: string;
    mdTop: string;
    left?: string;
    mdLeft?: string;
    right?: string;
    mdRight?: string;
}
 
interface PillProps {
    label: string;
    gif: string;
    isRight?: boolean;
    className?: string;
}
 
const NewAiAnimate = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const leftPillsRef = useRef<HTMLDivElement>(null);
    const rightPillsRef = useRef<HTMLDivElement>(null);
    const gradientOverlayRef = useRef<HTMLDivElement>(null);
    const bottomTabsRef = useRef<HTMLDivElement>(null);
 
    const leftPills: PillData[] = [
        { label: 'Models', gif: '/assets/gifs/models.gif', top: 'top-[20%]', mdTop: 'md:top-[50%]', left: 'left-0', mdLeft: 'md:left-36' },
        { label: 'Scene', gif: '/assets/gifs/scene.gif', top: 'top-[45%]', mdTop: 'md:top-[35%]', left: 'left-0', mdLeft: 'md:left-51' },
        { label: 'Modules', gif: '/assets/gifs/modules.gif', top: 'top-[70%]', mdTop: 'md:top-[20%]', left: 'left-0', mdLeft: 'md:left-66' },
    ];
 
    const rightPills: PillData[] = [
        { label: 'Memory', gif: '/assets/gifs/memory.gif', top: 'top-[20%]', mdTop: 'md:top-[50%]', right: 'right-0', mdRight: 'md:right-36' },
        { label: 'Providers', gif: '/assets/gifs/providers.gif', top: 'top-[45%]', mdTop: 'md:top-[35%]', right: 'right-0', mdRight: 'md:right-51' },
        { label: 'System', gif: '/assets/gifs/system.gif', top: 'top-[70%]', mdTop: 'md:top-[20%]', right: 'right-0', mdRight: 'md:right-66' },
    ];
 
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set('.left-pill', { x: -200, scale: 0, opacity: 0 });
            gsap.set('.right-pill', { x: 200, scale: 0, opacity: 0 });
            gsap.set('.doll', { scale: 0, opacity: 0 });
            gsap.set('.bottom-tab', { y: 50, opacity: 0 });
            gsap.set('.gradient-overlay', { x: '-100%', opacity: 0 });
 
            // Create the main animation timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=1500",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    markers: true, // Set to true for debugging
                }
            });
 
            // Doll animation first
            tl.to('.doll', { scale: 1, opacity: 1, duration: 1 }, 0);
 
            // Bottom tabs appear
            tl.to('.bottom-tab', { y: 0, opacity: 1, stagger: 0.2, duration: 1 }, 0.5);
 
            // Pills animate in sequence
            tl.to('.left-pill', { x: 0, scale: 1, opacity: 1, stagger: 0.3, duration: 1 }, 1);
            tl.to('.right-pill', { x: 0, scale: 1, opacity: 1, stagger: 0.3, duration: 1 }, 1);
 
            // Gradient overlay
            tl.to('.gradient-overlay', { x: '100%', opacity: 1, duration: 1.5 }, 2);
        }, sectionRef);
 
        return () => ctx.revert();
    }, []);
 
    const Pill: React.FC<PillProps> = ({ label, gif, isRight = false, className = '' }) => (
        <div
            className={`pill ${isRight ? 'right-pill' : 'left-pill'} absolute flex items-center space-x-3 bg-[#FFFFFF1A] rounded-full px-4 py-2 backdrop-blur-sm ${className}`}
        >
            {!isRight && <span className="text-sm font-medium">{label}</span>}
            <span className="w-[42px] h-[42px] flex items-center justify-center bg-[#2388FF] rounded-full flex-shrink-0">
                <img src={gif} alt={label} width={28} height={28} className='w-7 h-7' />
            </span>
            {isRight && <span className="text-sm font-medium">{label}</span>}
        </div>
    );
 
    return (
        <section
            ref={sectionRef}
            className="relative max-w-[1300px] mx-auto text-white pt-16 mb-16 px-4 select-none bg-cover bg-no-repeat bg-center overflow-hidden h-screen sm:block hidden"
            style={{ backgroundImage: 'url(/bg-inte.png)' }}
            id='ai'
        >
            <h2 className="text-center text-white mb-12">Tokyo Intelligence</h2>
 
            <div className="relative flex justify-center items-center px-4 min-h-[500px]">
 
                {/* Left Pills Container (Desktop/Wide Screens) */}
                <div ref={leftPillsRef} className="absolute inset-0 hidden md:block">
                    {leftPills.map((pill, idx) => (
                        <Pill
                            key={idx}
                            label={pill.label}
                            gif={pill.gif}
                            className={`${pill.mdLeft} ${pill.mdTop}`}
                        />
                    ))}
                </div>
 
                {/* Right Pills Container (Desktop/Wide Screens) */}
                <div ref={rightPillsRef} className="absolute inset-0 hidden md:block">
                    {rightPills.map((pill, idx) => (
                        <Pill
                            key={idx}
                            label={pill.label}
                            gif={pill.gif}
                            isRight={true}
                            className={`${pill.mdRight} ${pill.mdTop}`}
                        />
                    ))}
                </div>
 
                {/* Mobile/Tablet Pills Container */}
                <div className="absolute inset-0 flex md:hidden justify-between items-center px-4">
                    <div className="flex flex-col space-y-4 pt-16 pb-16">
                        {leftPills.slice(0, 3).map((pill, idx) => (
                            <Pill key={idx} label={pill.label} gif={pill.gif} className="relative !left-0 !top-0 z-30" />
                        ))}
                    </div>
                    <div className="flex flex-col space-y-4 pt-16 pb-16">
                        {rightPills.slice(0, 3).map((pill, idx) => (
                            <Pill key={idx} label={pill.label} gif={pill.gif} isRight={true} className="relative !right-0 !top-0 z-30" />
                        ))}
                    </div>
                </div>
 
                {/* Doll Video */}
                <div className="relative z-20 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] mx-auto">
                    <img src="/videos/doll.gif" alt="doll" className='doll w-full' />
                </div>
            </div>
 
            {/* Bottom Tabs */}
            <div
                ref={bottomTabsRef}
                className="bottom-tabs mt-16 relative flex flex-wrap justify-center gap-3 md:gap-6 px-2 md:px-6 backdrop-blur-md overflow-hidden max-w-full mx-auto"
            >
                {/* Gradient Overlay */}
                {/* <div ref={gradientOverlayRef} className="gradient-overlay absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 z-10"></div> */}
                {bottomTabs.map((tab, idx) => (
                    <button
                        key={idx}
                        className={`bottom-tab
                            relative z-10 text-[10px] sm:text-xs text-white bg-[#FFFFFF1A]
                            px-4 py-3 sm:px-8 md:px-16 md:py-7
                            hover:bg-green-700 transition-colors flex-grow-0 min-w-0
                            ${idx === 0 ? "rounded-l-[100px]" : ""}
                            ${idx === 2 ? "rounded-r-[100px]" : ""}
                            ${bottomTabs.length === 3 ? (idx === 1 ? 'rounded-none' : '') : ''}
                            ${bottomTabs.length !== 3 ? 'rounded-full' : ''}
                            sm:rounded-none ${idx === 0 ? "sm:rounded-l-[100px]" : ""} ${idx === 2 ? "sm:rounded-r-[100px]" : ""}
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
 
export default NewAiAnimate;
 