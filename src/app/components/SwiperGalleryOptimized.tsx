'use client';
import { useEffect, useState, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load Swiper to reduce initial bundle size
const SwiperComponent = dynamic(() => import('./SwiperComponentFixed'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-900 animate-pulse rounded-lg" />
});

export default function SwiperGalleryOptimized() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only load when component is near viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('swiper-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className='md:py-20 py-10 bg-[#111111] max-h-screen' id="ai">
      <h2 className='text-center block sm:mb-16 mb-8'>Meet Your AI Characters</h2>
      <div id="swiper-section" className="relative w-full mx-auto 2xl:h-[785px] xl:h-[810px] lg:h-[745px] sm:h-[856px] h-[567px] flex items-center">
        {isVisible ? (
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white">Loading characters...</div>
            </div>
          }>
            <SwiperComponent />
          </Suspense>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white">Scroll to load characters</div>
          </div>
        )}
      </div>
      <div className='flex justify-center'>
        <button className="px-9 py-3 rounded-full text-center bg-[#0071E3] hover:bg-blue-700 text-white text-sm md:text-base transition sm:mt-16 mt-12">
          Pick one to start, then make it truly yours
        </button>
      </div>
    </section>
  );
}
