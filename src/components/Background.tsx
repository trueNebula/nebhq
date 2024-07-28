import { motion, useScroll, useTransform } from 'framer-motion';

function Background() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.35], ['100%', '0%']);

    const commonStyle = 'w-screen overflow-y-clip h-screen fixed top-0 left-0 bottom-0 right-0';

    return (
      <div>
        <motion.div
          className={`${commonStyle + ' -z-10 black'}`}
          style={{ opacity }}
        ></motion.div>
        <div className={`${commonStyle + ' -z-20 black'}`}></div>
      </div>
    );
}

export default Background;