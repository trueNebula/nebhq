import { easeInOut, motion } from 'framer-motion';

export type LogoImageType = {
  path: string;
  alt: string;
};

type ImageGroupPropsType = {
  images: LogoImageType[];
  offset: number;
};

function LogoGroup({ images, offset }: ImageGroupPropsType) {
  const [first, second] = images;
  return (
    <div className="logo-group">
      <div className="logo-wrapper">
        <motion.img
          src={first.path}
          alt={first.alt}
          transition={{
            y: {
              ease: easeInOut,
              duration: 6,
              repeat: Infinity,
              times: [0, 0.15, 0.45, 0.5, 0.50001, 0.55, 0.85, 1],
              delay: offset,
            },
            opacity: {
              ease: [0.42, 0, 0.58, 1],
              duration: 6,
              repeat: Infinity,
              times: [0, 0.05, 0.25, 0.75, 0.95, 1],
              delay: offset,
            },
          }}
          animate={{
            y: [
              '0rem',
              '0rem',
              '-7rem',
              '-7rem',
              '7rem',
              '7rem',
              '0rem',
              '0rem',
            ],
            opacity: [1, 1, 0, 0, 1, 1],
          }}
        />
        <motion.img
          src={second.path}
          alt={second.alt}
          transition={{
            y: {
              ease: easeInOut,
              duration: 6,
              repeat: Infinity,
              times: [0, 0.15, 0.45, 0.5, 0.50001, 0.55, 0.85, 1],
              delay: offset,
            },
            opacity: {
              ease: [0.42, 0, 0.58, 1],
              duration: 6,
              repeat: Infinity,
              times: [0, 0.15, 0.4, 0.6, 0.85, 1],
              delay: offset,
            },
          }}
          animate={{
            y: [
              '7rem',
              '7rem',
              '0rem',
              '0rem',
              '0rem',
              '0rem',
              '-7rem',
              '-7rem',
            ],
            opacity: [0, 0, 1, 1, 0, 0],
          }}
        />
      </div>
    </div>
  );
}

export default LogoGroup;
