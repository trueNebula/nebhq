import { Link } from 'react-scroll';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { RefObject, useEffect, useRef, useState } from 'react';
import { cubicBezier, motion, useScroll, useTransform } from 'framer-motion';
import "../styles/navBar.css";

type Anchor = {
  section: string;
  title: string;
  rotation: number;
  ref: RefObject<HTMLDivElement>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getElementRotation = (element: HTMLDivElement) => {
  const computedStyle = window.getComputedStyle(element);
  const transformationMatrix = computedStyle.transform;

  if (!transformationMatrix) return 0;

  const matrixValues = transformationMatrix
    .split('(')[1]
    .split(')')[0]
    .split(',');
  const scaleX = parseFloat(matrixValues[0]);
  const skewY = parseFloat(matrixValues[1]);
  const angle = Math.round(Math.atan2(skewY, scaleX) * (180 / Math.PI));

  return angle;
};

function NavBar() {
  const { scrollYProgress } = useScroll();
  const { width } = useWindowDimensions();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const anchors: Anchor[] = [
    {
      section: 'section1',
      title: 'About Me',
      rotation: 1,
      ref: useRef<HTMLDivElement>(null),
    },
    {
      section: 'section2',
      title: 'Work',
      rotation: -1,
      ref: useRef<HTMLDivElement>(null),
    },
    {
      section: 'section3',
      title: 'Timeline',
      rotation: 1,
      ref: useRef<HTMLDivElement>(null),
    },
    {
      section: 'section4',
      title: 'Contact',
      rotation: -1,
      ref: useRef<HTMLDivElement>(null),
    },
  ];

  let sizeScale = 1;
  let gapScale = 1;
  let xTransformScale = 1;
  let yTransformScale = 1;
  let scrollOffsetScale = 1;
  let heroHeight = 75;
  let disableMouseEffects = false;

  // Phone
  if (width < 768) {
    sizeScale = 0.25;
    gapScale = 0.05;
    xTransformScale = 0;
    yTransformScale = 5/6;
    scrollOffsetScale = 1/5;
    heroHeight = 85;
    disableMouseEffects = true; 
  }

  // Container Y position
  const posYContainer = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['7.5rem', '0rem']
  );
  // Font size transition from large to small
  const fontSize = useTransform(scrollYProgress, [0, 0.2], [`${18 * sizeScale}rem`, '1rem']);
  // Y Margin transition for the title
  const marginYDiv = useTransform(scrollYProgress, [0, 0.2], ['18rem', '0rem']);
  // Anchor Gap
  const anchorGap = useTransform(scrollYProgress, [0, 0.2], [`${26 * gapScale}rem`, '1rem']);
  // Translate X to move the anchors right
  const translateXAnchor = useTransform(
    scrollYProgress,
    [0, 0.2],
    [`${2 * xTransformScale}rem`, `${10 * xTransformScale}rem`],
    {ease: cubicBezier(0, 0.33, 0.33, 1)}

  );
  // Translate Y to move anchors up
  const translateYAnchor = useTransform(
    scrollYProgress,
    [0, 0.2],
    [`0rem`, `${-6 * yTransformScale}rem`],
    {ease: cubicBezier(0.66, 0, 1, 0.3)}
  );

  const rotationThreshold = 450;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    if(!disableMouseEffects) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if(!disableMouseEffects) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [disableMouseEffects]);

  const shouldPlayAnchorAnimation = (anchor: Anchor) => {
    if (!anchor.ref) return false;
    if (!anchor.ref.current) return false;
    if (width < 768) return false;
    if (scrollYProgress.get() > 0.15) return false;

    const rect = anchor.ref.current.getBoundingClientRect();
    const centerPos = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    const distance = Math.sqrt(
      Math.pow(mousePosition.x - centerPos.x, 2) +
        Math.pow(mousePosition.y - centerPos.y, 2)
    );
    return distance < rotationThreshold;
  };

  return (
    <motion.div
      className='sticky w-full h-[35rem] mb-[33rem]'
      style={{
        top: posYContainer,
      }}>
      <motion.div
        className={`z-50 h-[${heroHeight}px] bg-[rgb(3,7,7)] p-5`}
        style={{
          transition: 'all 0.3s ease-in-out',
        }}>
        <motion.div
          className='hero-bold inline-block cursor-pointer min-w-[75px] min-h-[75px]'
          style={{
            fontSize,
          }}>
          <Link to='hero' spy={true} smooth={true} duration={500}>
            Hi, I'm Daniel
          </Link>
        </motion.div>
        <motion.div
          className='flex gap-4 mt-4 mx-4'
          style={{
            gap: anchorGap,
            marginTop: marginYDiv,
            x: translateXAnchor,
            y: translateYAnchor,
          }}>
          {anchors.map((anchor: Anchor) => {
            return (
              <motion.div
                key={anchor.section}
                ref={anchor.ref}
                className='mx-2 cursor-pointer h-[75px] w-[75px] flex justify-center items-center'
                animate={
                  shouldPlayAnchorAnimation(anchor)
                    ? {
                        rotate: ['0deg', `${anchor.rotation * 360}deg`],
                        transition: {
                          repeat: Infinity,
                          duration: 5,
                          ease: 'linear',
                        },
                      }
                    : {
                        rotate: '0deg',
                        transition: {
                          duration: 0.5,
                          ease: 'easeOut',
                        },
                      }
                }
                whileHover={{
                  rotate: '0deg',
                  transition: {
                    duration: 0.3,
                    ease: 'backOut',
                  },
                }}>
                <Link
                  to={anchor.section}
                  spy={true}
                  smooth={true}
                  offset={-500 * scrollOffsetScale}
                  duration={500}>
                  {anchor.title}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default NavBar;
