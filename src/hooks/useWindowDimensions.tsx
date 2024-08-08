import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined';

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : 0;
    const isSmall = width < 768;
    const isMobile = width < 1024;
    const isTablet = width < 1280;
    const isSmallDesktop = width < 1920;
    const isDesktop = width < 2560;
    const is2K = width < 3840;
    const is4K = width === 3840;
    const canHover = hasWindow
      ? window.matchMedia('(hover: hover)').matches
      : false;

    let resolution;

    // console.log('width', width);
    // console.log('height', height);

    if (isSmall) resolution = 'small';
    else if (isMobile) resolution = 'mobile';
    else if (isTablet) resolution = 'tablet';
    else if (isSmallDesktop) resolution = 'smallDesktop';
    else if (isDesktop) resolution = 'desktop';
    else if (is2K) resolution = 'twoK';
    else resolution = 'fourK';

    return {
      width,
      height,
      isSmall,
      isMobile,
      isTablet,
      isSmallDesktop,
      isDesktop,
      is2K,
      is4K,
      resolution,
      canHover,
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
