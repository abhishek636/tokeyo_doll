'use client';

import { useState, useEffect, Suspense } from 'react';
import Loader from './Loader';

// Critical videos that should load first (above the fold)
const CRITICAL_VIDEOS = [
  '/videos/doll.mp4',
  '/videos/doll2.mp4',
  '/videos/doll3.mp4'
];

// Non-critical videos (lazy loaded)
const LAZY_VIDEOS = [
  '/videos/step3.mp4',
  '/videos/AICharactor.mp4',
  '/videos/Aiagent.mp4'
];

const LoaderWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalItems = CRITICAL_VIDEOS.length + 2; // videos + fonts + critical resources

    const updateProgress = () => {
      loadedCount++;
      setProgress((loadedCount / totalItems) * 100);
    };

    const preloadCriticalVideos = async () => {
      const promises = CRITICAL_VIDEOS.map((src, index) => {
        return new Promise<void>((resolve) => {
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.src = src;

          video.onloadedmetadata = () => {
            updateProgress();
            resolve();
          };

          video.onerror = () => {
            console.warn(`Failed to preload ${src}`);
            updateProgress();
            resolve();
          };

          video.load();
        });
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        console.warn('Some critical videos failed to preload:', error);
      }
    };

    const preloadCriticalResources = async () => {
      // Preload critical fonts
      const fontPromises = [
        document.fonts.load('16px Inter'),
        document.fonts.load('bold 16px Inter')
      ];

      try {
        await Promise.all(fontPromises);
        updateProgress();
      } catch (error) {
        console.warn('Font loading failed:', error);
        updateProgress();
      }
    };

    const handleLoad = async () => {
      // Wait for DOM to be ready
      await new Promise(resolve => {
        if (document.readyState === 'complete') {
          resolve(void 0);
        } else {
          window.addEventListener('load', resolve, { once: true });
        }
      });

      // Start preloading critical resources
      await Promise.all([
        preloadCriticalVideos(),
        preloadCriticalResources()
      ]);

      // Minimum display time for smooth UX (reduced from 2s to 1s)
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    handleLoad();

    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  if (loading) {
    return <Loader progress={progress} />;
  }

  return null;
};

export default LoaderWrapper;
