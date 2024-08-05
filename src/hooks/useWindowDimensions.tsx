import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined';

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : 0;

    return {
      width,
      height,
      isMobile: width <= 768,
      isTalet: width <= 992,
    };
  }, [hasWindow]);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [hasWindow, getWindowDimensions]);

  return windowDimensions;
}

export default useWindowDimensions;
