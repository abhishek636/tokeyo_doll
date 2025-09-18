'use client';
 
import { useState, useEffect } from 'react';
import Loader from './Loader';
 
const LoaderWrapper = () => {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const handleLoad = () => {
      // Ensure loader shows for at least 5 seconds
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };
 
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    } else {
      window.addEventListener('load', handleLoad);
    }
 
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
 
  if (loading) {
    return <Loader />;
  }
 
  return null;
};
 
export default LoaderWrapper;
 
 