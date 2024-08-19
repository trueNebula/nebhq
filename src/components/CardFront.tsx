import CardStreaks from '@/components/CardStreaks';
import ContactItem, { ContactItemData } from '@/components/ContactItem';
import {
  EnvelopeOpen,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  XLogo,
} from '@phosphor-icons/react';
import CardFlipper from './CardFlipper';
import useWindowDimensions from '../hooks/useWindowDimensions';

const contactItems: ContactItemData[] = [
  {
    icon: <EnvelopeOpen size="100%" />,
    link: 'daniel.ggradinaru@gmail.com',
  },
  {
    icon: <InstagramLogo size="100%" />,
    link: 'instagram.com/trnebula',
  },
  {
    icon: <LinkedinLogo size="100%" />,
    link: 'linkedin.com/in/daniel-gulei',
  },
  {
    icon: <TwitterLogo size="100%" />,
    altIcon: <XLogo size="100%" />,
    link: 'x.com/trueNebula',
  },
];

type CardFrontProps = {
  handleCardClick: () => void;
};

function CardFront({ handleCardClick }: CardFrontProps) {
  const { width } = useWindowDimensions();
  const widthThreshold = 1280;

  return (
    <div className="contact-card white-bg relative rounded-3xl py-16 px-8 xl:px-20 text-[var(--bg-black)] overflow-hidden">
      {/* Arrow */}
      <CardFlipper handleClick={handleCardClick} />
      {/* Header */}
      <div className="w-full h-2/3 xl:h-1/2 flex xl:py-4 items-center justify-between flex-col xl:flex-row">
        <img
          src="logo.jpg"
          className="rounded-full h-[32vw] max-h-32 xl:h-[calc(100%-2rem)] aspect-square mb-6"
        />
        <div className="w-3/4 xl:w-1/2 h-full flex flex-col text-center justify-center items-center">
          <div className="w-full h-1/4">
            Let's get in contact: grab a business card!
          </div>
          <div className="w-full h-3/4 xl:h-1/2 text-5xl hero-bold flex justify-center items-center">
            Daniel Gulei
          </div>
          {width >= widthThreshold && <div className="w-full h-1/4" />}
        </div>
        {width >= widthThreshold && (
          <div className="h-[calc(100%-2rem)] aspect-square" />
        )}
      </div>
      {/* Links */}
      <div className="w-full h-1/3 xl:h-1/2 p-2 flex flex-col flex-wrap">
        <div className="flex w-full h-1/2 p-2 pb-1 gap-2">
          <ContactItem data={contactItems[0]} />
          <ContactItem data={contactItems[1]} />
        </div>
        <div className="flex w-full h-1/2 p-2 pt-1 gap-2">
          <ContactItem data={contactItems[2]} />
          <ContactItem data={contactItems[3]} />
        </div>
      </div>
      {/* Streaks */}
      <CardStreaks />
    </div>
  );
}

export default CardFront;
