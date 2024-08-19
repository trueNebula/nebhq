import CardFlipper from '@/components/CardFlipper';

type CardBackProps = {
  handleCardClick: () => void;
};

function CardBack({ handleCardClick }: CardBackProps) {
  return (
    <div className="contact-card relative rounded-3xl text-[var(--bg-black)] overflow-hidden text-5xl">
      {/* Arrow */}
      <CardFlipper handleClick={handleCardClick} light />
      {/* Header */}
      <div className="back-top w-full h-1/2 rounded-t-3xl flex justify-center items-end pt-16 pb-4 px-8 xl:px-20 text-[var(--primary-color)]">
        Daniel Gulei
      </div>
      <div className="white-bg w-full h-1/2 flex justify-center items-start pb-16 pt-4 px-8 xl:px-20 ">
        trNebula
      </div>
      {/* Streaks */}
      {/* <CardStreaks /> */}
    </div>
  );
}

export default CardBack;
