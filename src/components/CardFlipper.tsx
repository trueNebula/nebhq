import { ArrowArcLeft } from '@phosphor-icons/react';

type CardFliperProps = {
  handleClick: () => void;
  light?: boolean;
};

function CardFlipper({ handleClick, light }: CardFliperProps) {
  return (
    <div
      className="absolute min-h-8 h-[2vw] aspect-square flex justify-center items-center top-[7%] right-[10%] xl:right-[5%] cursor-pointer"
      onClick={handleClick}>
      <ArrowArcLeft size="100%" color={light ? '#f8fafc' : '#070a14'} />
    </div>
  );
}

export default CardFlipper;
