import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject,  useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

type Anchor = {
    section: string,
    title: string,
    rotation: number,
    ref: RefObject<HTMLDivElement>
}

const getElementRotation = (element: HTMLDivElement) => {
    const computedStyle = window.getComputedStyle(element);
    const transformationMatrix = computedStyle.transform;
    
    if (!transformationMatrix) return 0;
    
    const matrixValues = transformationMatrix.split('(')[1].split(')')[0].split(',');
    const scaleX = parseFloat(matrixValues[0]);
    const skewY = parseFloat(matrixValues[1]);
    const angle = Math.round(Math.atan2(skewY, scaleX) * (180 / Math.PI));

    return angle;
}

function NavBar() {
    const { scrollYProgress } = useScroll();
    const anchors: Anchor[] = [
    {
        section: "section1",
        title: "About Me",
        rotation: -117,
        ref: useRef<HTMLDivElement>(null),
    },
    {
        section: "section2",
        title: "Work",
        rotation: 43,
        ref: useRef<HTMLDivElement>(null),
    },
    {
        section: "section3",
        title: "Timeline",
        rotation: -72,
        ref: useRef<HTMLDivElement>(null),
    },
    {
        section: "section4",
        title: "Contact",
        rotation: -128,
        ref: useRef<HTMLDivElement>(null),
    },
    ];

    const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
    const [anchorRotations, setAnchorRotations] = useState([
      anchors[0].rotation,
      anchors[1].rotation,
      anchors[2].rotation,
      anchors[3].rotation,
    ]);
    // Container Y position
    const posYContainer = useTransform(scrollYProgress, [0, 0.2], ["7.5rem", "0rem"]);
    // Font size transition from large to small
    const fontSize = useTransform(scrollYProgress, [0, 0.2], ["18rem", "1rem"]);
    // Y Margin transition for the title
    const marginYDiv = useTransform(scrollYProgress, [0, 0.2], ["18rem", "0rem"]);
    // Anchor Gap
    const anchorGap = useTransform(scrollYProgress, [0, 0.2], ["26rem", "1rem"]);
    // Translate X to move the anchors right
    const translateXAnchor = useTransform(scrollYProgress, [0, 0.2], ["2rem", "7.5rem"]);
    // Translate Y to move anchors up
    const translateYAnchor = useTransform(scrollYProgress, [0, 0.2], ["0rem", "-1.455rem"]);

    const rotationScale = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const rotationThreshold = 450;

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY })
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const shouldPlayAnchorAnimation = (anchor: Anchor) => {
        if (!anchor.ref) return false;
        if (!anchor.ref.current) return false;
        
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
    }

    return (
      <motion.div
        className='sticky w-full h-[35rem] mb-[33rem]'
        style={{
          top: posYContainer,
        }}
      >
        <motion.div
          className='z-50 bg-[rgb(3,7,7)] p-5'
          style={{
            transition: "all 0.3s ease-in-out",
          }}
        >
          <motion.div
            className='flex-shrink-0 inline cursor-pointer'
            style={{
              fontSize,
            }}
          >
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
            }}
          >
            {anchors.map((anchor: Anchor, index: number) => {
                return (
                  <motion.div
                    key={anchor.section}
                    ref={anchor.ref}
                    className='mx-2 cursor-pointer h-[75px] w-[75px] flex justify-center items-center'
                    initial={{ rotate: anchorRotations[index] }}
                    animate={ 
                      shouldPlayAnchorAnimation(anchor)
                        ? {
                            rotate: [
                              `${anchorRotations[index]}deg`,
                              `${360 + anchorRotations[index]}deg`,
                            ],
                            transition: {
                              repeat: Infinity,
                              duration: 5,
                              ease: "linear",
                            },
                          }
                        : {}
                    }
                    whileHover={{
                      rotate: "0deg",
                      transition: {
                        duration: 0.3,
                        ease: "backOut",
                      },
                    }}
                    onHoverStart={() => {
                      const rotations = [...anchorRotations];
                      if (anchor.ref.current) {
                        rotations[index] = getElementRotation(
                          anchor.ref.current
                        );
                        setAnchorRotations(rotations);
                      }
                    }}
                    onHoverEnd={() => {
                        setAnchorRotations((prevRotations) => {
                            const updatedRotations = [...prevRotations];
                            if (anchor.ref.current) {
                                updatedRotations[index] = getElementRotation(anchor.ref.current);
                            }
                            return updatedRotations;
                        });
                    }}
                  >
                    <Link
                      to={anchor.section}
                      spy={true}
                      smooth={true}
                      offset={-500}
                      duration={500}
                    >
                      {anchor.title}
                    </Link>
                  </motion.div>
                );})
            }
          </motion.div>
        </motion.div>
      </motion.div>
    );
}

export default NavBar;
