import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

export type ContactItemData = {
  icon: ReactNode;
  altIcon?: ReactNode;
  link: string;
};

type ContactItemProps = {
  data: ContactItemData;
};

function ContactItem({ data }: ContactItemProps) {
  const { icon, altIcon, link } = data;
  const [isHovered, setIsHovered] = useState(false);
  const iconAnimatonVariants = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
  };
  const iconOpacityVariants = {
    visible: { opacity: 1 },
    invisible: { opacity: 0 },
  };

  const getIcon = (altIcon: ReactNode) => {
    if (altIcon) {
      return (
        <motion.div
          className="shrink-0 h-[4vw] aspect-square"
          initial="initial"
          variants={iconAnimatonVariants}
          transition={{
            duration: 0.4,
          }}
          animate={isHovered ? 'animate' : 'initial'}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}>
          <motion.div
            className="relative"
            variants={iconOpacityVariants}
            initial="visible"
            transition={{
              duration: 0.25,
            }}
            animate={isHovered ? 'invisible' : 'visible'}>
            {icon}
          </motion.div>
          <motion.div
            className="absolute top-0 left-0"
            variants={iconOpacityVariants}
            transition={{
              duration: 0.25,
            }}
            initial="invisible"
            animate={isHovered ? 'visible' : 'invisible'}>
            {altIcon}
          </motion.div>
        </motion.div>
      );
    }
    return <div className="shrink-0 h-[4vw] aspect-square">{icon}</div>;
  };

  return (
    <a
      href={link.includes('@') ? `mailto: ${link}` : `https://www.${link}`}
      className="contact-item w-1/2 h-full flex justify-start items-center gap-4 text-lg relative">
      {getIcon(altIcon)}
      <div className="text-ellipsis break-all whitespace-nowrap overflow-hidden">
        {link}
      </div>
    </a>
  );
}

export default ContactItem;
