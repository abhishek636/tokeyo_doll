'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader';

const LoaderWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const videoSources = [
      '/videos/doll.mp4',
      '/videos/doll2.mp4',
      '/videos/doll3.mp4',
      '/videos/step3.mp4',
      '/videos/AICharactor.mp4',
      '/videos/Aiagent.mp4'
    ];

    const preloadVideos = async () => {
      const promises = videoSources.map(src => {
        return new Promise<void>((resolve, reject) => {
          const video = document.createElement('video');
          video.preload = 'metadata'; // Only load metadata first
          video.src = src;
          video.onloadedmetadata = () => resolve();
          video.onerror = () => resolve(); // Continue even if one fails
          video.load();
        });
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        console.warn('Some videos failed to preload:', error);
      }
    };

    const handleLoad = async () => {
      // Wait for initial load
      await new Promise(resolve => {
        if (document.readyState === 'complete') {
          resolve(void 0);
        } else {
          window.addEventListener('load', resolve);
        }
      });

      // Preload videos
      await preloadVideos();

      // Minimum display time for smooth UX
      setTimeout(() => {
        setLoading(false);
      }, 2000); // 2 seconds minimum
    };

    handleLoad();

    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return null;
};

export default LoaderWrapper;
 
 