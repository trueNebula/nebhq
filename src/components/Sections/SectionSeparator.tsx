import '@/styles/sections.less';
import { motion, useScroll, useTransform } from 'framer-motion';

type SectionSeparatorProps = {
  color: string,
  z: number,
};

function SectionSeparator({ color, z = 0 }: SectionSeparatorProps) {
  const { scrollYProgress } = useScroll();
  const separatorPosition = useTransform(scrollYProgress, [0.25, 0.45], ['0rem', '-64rem']);
  
  return (
    <motion.div className={`absolute inline-block w-full h-[64rem] separator-${color} z-[${z}]`} style={{ y: separatorPosition, transition: 'ease-in-out' }}></motion.div>
  );
}

export default SectionSeparator;