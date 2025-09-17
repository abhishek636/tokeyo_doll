'use client';
 
import React from 'react';
// Note: The imports below are not used in the final JSX structure, but are kept in case they are intended for future use.
import { Cpu, Layers, FileText, Database, Server, Package } from 'lucide-react';
 
const bottomTabs = [
    'Construct Behavioral Architecture',
    'Fuse Personality with Digital Embodiment',
    'Deploy Agent into Immersive Ecosystems',
];
 
// 1. Define the Interface for the Pill Data
interface PillData {
    label: string;
    gif: string;
    top: string;
    mdTop: string;
    left?: string; // Optional for left-side pills
    mdLeft?: string; // Optional for left-side pills
    right?: string; // Optional for right-side pills
    mdRight?: string; // Optional for right-side pills
}
 
// 2. Define the Interface for the Pill Component Props
interface PillProps {
    label: string;
    gif: string;
    isRight?: boolean;
    className?: string;
}
 
const TokyoIntelligenceSection = () => {
    // Left Pills Data for clearer structure
    const leftPills: PillData[] = [
        { label: 'Models', gif: '/assets/gifs/models.gif', top: 'top-[20%]', mdTop: 'md:top-[50%]', left: 'left-0', mdLeft: 'md:left-30' },
        { label: 'Scene', gif: '/assets/gifs/scene.gif', top: 'top-[45%]', mdTop: 'md:top-[40%]', left: 'left-0', mdLeft: 'md:left-45' },
        { label: 'Modules', gif: '/assets/gifs/modules.gif', top: 'top-[70%]', mdTop: 'md:top-[30%]', left: 'left-0', mdLeft: 'md:left-60' },
    ];
 
    // Right Pills Data for clearer structure
    const rightPills: PillData[] = [
        { label: 'Memory', gif: '/assets/gifs/memory.gif', top: 'top-[20%]', mdTop: 'md:top-[50%]', right: 'right-0', mdRight: 'md:right-30' },
        { label: 'Providers', gif: '/assets/gifs/providers.gif', top: 'top-[45%]', mdTop: 'md:top-[40%]', right: 'right-0', mdRight: 'md:right-45' },
        { label: 'System', gif: '/assets/gifs/system.gif', top: 'top-[70%]', mdTop: 'md:top-[30%]', right: 'right-0', mdRight: 'md:right-60' },
    ];
 
 
    // Component for a single Pill element (using the defined interface)
    const Pill: React.FC<PillProps> = ({ label, gif, isRight = false, className = '' }) => (
        <div
            className={`absolute flex items-center space-x-3 bg-[#FFFFFF1A] rounded-full px-4 py-2 backdrop-blur-sm ${className}`}
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
            className="relative max-w-[1300px] mx-auto text-white pt-16 mb-16 px-4 select-none bg-cover bg-no-repeat bg-center overflow-hidden"
            style={{ backgroundImage: 'url(/bg-inte.png)' }}
            id='ai'
        >
            <h2 className="text-center text-white mb-12">Tokyo Intelligence</h2>
 
            <div className="relative flex justify-center items-center px-4">
               
                {/* Left Pills Container (Desktop/Wide Screens) */}
                <div className="absolute inset-0 hidden md:block">
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
                <div className="absolute inset-0 hidden md:block">
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
 
                {/* Mobile/Tablet Pills Container (Simplified positioning for smaller screens) */}
                <div className="absolute inset-0 flex md:hidden justify-between items-center px-4">
                    <div className="flex flex-col space-y-4 pt-16 pb-16">
                        {leftPills.slice(0, 3).map((pill, idx) => (
                            <Pill key={idx} label={pill.label} gif={pill.gif} className="relative !left-0 !top-0" />
                        ))}
                    </div>
                    <div className="flex flex-col space-y-4 pt-16 pb-16">
                        {rightPills.slice(0, 3).map((pill, idx) => (
                            <Pill key={idx} label={pill.label} gif={pill.gif} isRight={true} className="relative !right-0 !top-0" />
                        ))}
                    </div>
                </div>
 
                {/* Doll Video - Responsive width and margin adjustment for smaller screens */}
                {/* NOTE: Changed path from /doll.gif to /videos/doll.gif based on a reference in your original code. Adjust if necessary. */}
                <div className="relative z-20 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[580px] mx-auto">
                    <img src="/videos/doll.gif" alt="doll" className='w-full' />
                </div>
            </div>
 
            {/* Bottom Tabs - Responsive Layout */}
            <div
                className="bottom-tabs mt-16 relative flex flex-wrap justify-center gap-3 md:gap-6 px-2 md:px-6 backdrop-blur-md overflow-hidden max-w-full mx-auto"
            >
                {bottomTabs.map((tab, idx) => (
                    <button
                        key={idx}
                        className={`
                            relative z-10 text-[10px] sm:text-xs text-white bg-[#FFFFFF1A]
                            px-4 py-3 sm:px-8 md:px-16 md:py-7
                            hover:bg-green-700 transition-colors flex-grow-0 min-w-0
                            ${idx === 0 ? "rounded-l-[100px]" : ""}
                            ${idx === 2 ? "rounded-r-[100px]" : ""}
                            ${bottomTabs.length === 3 ? (idx === 1 ? 'rounded-none' : '') : ''}
                            ${bottomTabs.length !== 3 ? 'rounded-full' : ''}
                            // Fallback for smaller screens to ensure rounded ends still apply when wrapping
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
 
export default TokyoIntelligenceSection;
 
 