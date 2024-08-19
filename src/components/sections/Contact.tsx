import Section from './Section';
import CardFront from '@/components/CardFront';
import '@/styles/contact.less';
import { useState } from 'react';
import CardBack from '../CardBack';
import { motion } from 'framer-motion';
function Contact() {
  const [isFront, setIsFront] = useState(true);
  const rotationVariants = {
    front: { rotateY: '0deg' },
    back: { rotateY: '-180deg' },
  };
  const handleCardClick = () => {
    setIsFront(!isFront);
  };

  return (
    <Section idx={3} name="contact">
      <div className="card-wrapper h-[50%] w-[60%]">
        <motion.div
          className="front-wrapper"
          variants={rotationVariants}
          initial="front"
          animate={isFront ? 'front' : 'back'}>
          <CardFront handleCardClick={handleCardClick} />
        </motion.div>
        <motion.div
          className="back-wrapper"
          variants={rotationVariants}
          initial="back"
          animate={isFront ? 'back' : 'front'}>
          <CardBack handleCardClick={handleCardClick} />
        </motion.div>
      </div>
    </Section>
  );
}

export default Contact;
