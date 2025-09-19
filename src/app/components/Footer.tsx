// components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-12 md:py-24">
            <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-12 lg:gap-16">

                    {/* Left Section: Brand and Copyright */}
                    <div className="md:col-span-2 lg:col-span-2 flex flex-col md:items-start text-left">
                        <Link href="/" className="text-[34px] font-bold text-white mb-4">
                            PROJECT TOKEYO
                        </Link>
                        <p className='md:w-55 text-base w-full leading-6'>Copyright © 2025 PlayOS, Inc. All rights reserved</p>
                    </div>

                    {/* Right Sections: Navigation Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 col-span-1 md:col-span-4 lg:col-span-4 gap-8 md:gap-12 lg:gap-16">

                        {/* Features Column */}
                        <div className="text-left">
                            <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
                            <ul className="sm:space-y-4 pa space-y-3">
                                <li><Link href="#home" className="hover:text-white text-[#BABABA] transition-colors duration-200">Home</Link></li>
                                <li><Link href="#features" className="hover:text-white text-[#BABABA] transition-colors duration-200">About</Link></li>
                                <li><Link href="#ai" className="hover:text-white text-[#BABABA] transition-colors duration-200">AI Characters</Link></li>
                            </ul>
                        </div>

                        {/* Resources Column */}
                        <div className="text-left">
                            <ul className="sm:space-y-5 space-y-3">
                                <li><Link href="#work" className="hover:text-white text-[#BABABA] transition-colors duration-200">How It Works</Link></li>
                                <li><Link href="#modules" className="hover:text-white transition-colors duration-200 text-[#BABABA]">Modules</Link></li>
                                <li><Link href="#faq" className="hover:text-white transition-colors duration-200 text-[#BABABA]">Faq</Link></li>
                            </ul>
                        </div>

                        {/* About Us Column */}
                        <div className="text-left">
                            <h4 className="text-lg font-semibold text-white mb-4">About Us</h4>
                            <ul className="sm:space-y-5 space-y-3">
                                <li><Link href="#" className="hover:text-white text-[#BABABA] transition-colors duration-200">Become an Affiliate</Link></li>
                                <li><Link href="#" className="hover:text-white text-[#BABABA] transition-colors duration-200">Careers</Link></li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div className="text-left">
                            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
                            <ul className="sm:space-y-5 space-y-3">
                                <li><Link href="#" className="hover:text-white text-[#BABABA] transition-colors duration-200">Help center</Link></li>
                                <li><Link href="#" className="hover:text-white text-[#BABABA] transition-colors duration-200">Contact</Link></li>
                                <li><Link href="#" className="hover:text-white text-[#BABABA] transition-colors duration-200">Plans and Payments</Link></li>
                                <li><Link href="#" className="hover:text-white text-[#BABABA] transition-colors duration-200">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}