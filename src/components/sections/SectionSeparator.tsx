import '@/styles/sections.less';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';

type SectionSeparatorProps = {
  color: string;
  scrollRange: number[];
  transformRange: string[];
  horizontal?: boolean;
};

function SectionSeparator({
  color,
  scrollRange,
  transformRange,
  horizontal,
}: SectionSeparatorProps) {
  const { scrollYProgress } = useScroll();
  const separatorPosition = useTransform(
    scrollYProgress,
    scrollRange,
    transformRange
  );
  const style = horizontal
    ? { x: separatorPosition, y: '-64rem', transition: 'ease-in-out' }
    : { y: separatorPosition, transition: 'ease-in-out' };

  // useMotionValueEvent(scrollYProgress, 'change', (latest) =>
  //   console.log(latest)
  // );

  return (
    <motion.div
      className={`absolute inline-block w-full h-[64rem] separator-${color}`}
      style={style}></motion.div>
  );
}

export default SectionSeparator;
