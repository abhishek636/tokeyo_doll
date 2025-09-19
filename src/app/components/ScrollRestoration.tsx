'use client';

import { useEffect } from 'react';

export default function ScrollRestoration() {
  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Ensure we start at top on page load/refresh
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    // Handle browser back/forward navigation
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };

    // Handle page show (for bfcache)
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.scrollTo(0, 0);
      }
    };

    // Add event listeners
    window.addEventListener('load', handleLoad);
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('pageshow', handlePageShow);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return null; // This component doesn't render anything
}
