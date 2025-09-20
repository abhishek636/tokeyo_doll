// components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-12 md:py-19 z-30">
            <div className="border-b border-white/20 pb-7.5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Left Section: Brand and Copyright */}
                    <div className="md:col-span-1 flex flex-col md:items-start text-left">
                        <Link href="/" className="text-[34px] font-bold text-white mb-4">
                            PROJECT TOKYO
                        </Link>
                        <p className="md:w-55 text-base w-full leading-6">
                            Copyright © 2025 PlayOS, Inc. All rights reserved
                        </p>
                    </div>

                    {/* Right Sections: Navigation Links */}
                    <div className="md:col-span-2">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 text-left">

                            {/* Features Column */}
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
                                <ul className="sm:space-y-4 space-y-3">
                                    <li><Link href="#home" className="hover:text-white text-[#BABABA] transition-colors duration-200">Home</Link></li>
                                    <li><Link href="#about" className="hover:text-white text-[#BABABA] transition-colors duration-200">About</Link></li>
                                    <li><Link href="#ai" className="hover:text-white text-[#BABABA] transition-colors duration-200">AI Characters</Link></li>
                                </ul>
                            </div>

                            {/* Resources Column */}
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
                                <ul className="sm:space-y-5 space-y-3">
                                    <li><Link href="#work" className="hover:text-white text-[#BABABA] transition-colors duration-200">How It Works</Link></li>
                                    <li><Link href="#modules" className="hover:text-white text-[#BABABA] transition-colors duration-200">Modules</Link></li>
                                    <li><Link href="#faq" className="hover:text-white text-[#BABABA] transition-colors duration-200">Faq</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Disclaimer Section */}
            <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-[24px] font-medium text-white sm:mt-10 mt-5 sm:mb-4 mb-2">Disclaimer</p>
                <p className="sm:text-[20px] text-base font-normal text-[#a0a0a0] leading-5">
                    Tokyo is an independent project and is not affiliated with, endorsed by, or officially connected to the city of Tokyo or any of its governing bodies.
                </p>
            </div>
        </footer>
    );
}
