import { useSpring } from '@react-spring/web';
import { useCallback, useEffect, useState } from 'react';

function useBoopable({
  x = 0,
  y = 0,
  rotate = 0,
  scale = 1,
  timing = 150,
  config = {
    tension: 300,
    friction: 10,
  }
}) {
  const [ isBooped, setIsBooped ] = useState(false);

  const style = useSpring({
    transform: isBooped
      ? `translate(${x}px, ${y}px)
        rotate(${rotate}deg)
        scale(${scale})`
      : `translate(0px, 0px)
        rotate(0deg)
        scale(1)`,
      config,
  });

  useEffect(() => {
    if (!isBooped) {
      return;
    }

    console.log('hiii')

    const timeout = setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => clearTimeout(timeout); 
  }, [isBooped, timing]);

  const trigger = useCallback(() => {
    setIsBooped(true);
  }, [])

  return [ trigger, style ] as const;

}

export default useBoopable;