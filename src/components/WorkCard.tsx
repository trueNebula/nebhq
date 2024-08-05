import { MouseEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export type WorkCardInfo = {
  img: string;
  alt: string;
  title: string;
  description: string;
  url: string;
};

type WorkCardProps = {
  cardInfo: WorkCardInfo;
};

const tooltipVariants = {
  invisible: { opacity: 0 },
  visible: { opacity: 100 },
};

function WorkCard({ cardInfo }: WorkCardProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const tooltipTimeout = setTimeout(() => setIsTooltipVisible(false), 2500);

    return () => clearTimeout(tooltipTimeout);
  });

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardInfo.url) {
      e.preventDefault();
      setIsTooltipVisible(true);
    }
  };

  return (
    <>
      <a
        className="work-card w-[26rem] md:w-[32rem] h-[26rem]"
        href={cardInfo.url}
        onClick={handleClick}>
        <div className="work-card-content">
          <img src={cardInfo.img} alt={cardInfo.alt} />
          <div className="absolute bottom-0 min-h-[10rem] flex flex-col flex-1 m-4">
            <div className="text-3xl md:text-5xl font-bold">
              {cardInfo.title}
            </div>
            <div className="pt-4 text-sm leading-6">{cardInfo.description}</div>
          </div>
        </div>
        <motion.div
          className={`absolute h-18 w-fit p-2 rounded-xl text-sm text-center z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/2 black opacity-0`}
          variants={tooltipVariants}
          animate={isTooltipVisible ? 'visible' : 'invisible'}>
          This project doesn't have a public webpage yet. Come back soon for
          updates!
        </motion.div>
      </a>
    </>
  );
}

export default WorkCard;
