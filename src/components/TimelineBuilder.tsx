import '@/styles/timeline.less';
import { ReactNode } from 'react';
import { animated } from '@react-spring/web';
import useBoopable from '@/hooks/useBoopable';
import { BookBookmark, Briefcase, Desktop } from '@phosphor-icons/react';

type TmelineWrapperProps = {
  children: ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
export function TimelineWrapper({ children }: TmelineWrapperProps) {
  return (
    <div className="timeline-wrapper w-[90%] 2xl:w-3/4 h-4/5 flex flex-col px-12 py-20 gap-20">
      {children}
    </div>
  );
}

type TimelineElementProps = {
  date: string;
  icon: string;
  title?: string;
  connector?: boolean;
  children: ReactNode;
};

export function TimelineElement({
  date,
  icon,
  title,
  connector,
  children,
}: TimelineElementProps) {
  return (
    <>
      <div className="timeline-element w-full h-1/5 relative flex flex-row gap-8 justify-center items-start">
        <TimelineElementDate icon={icon} />
        <TimelineElementBox title={title} date={date}>
          {children}
        </TimelineElementBox>
        {connector && <div className="timeline-connector absolute" />}
      </div>
    </>
  );
}

type TimelineElementDateProps = {
  icon: string;
};

const timelineDateIcons: { name: string; component: ReactNode }[] = [
  {
    name: 'work',
    component: <Briefcase />,
  },
  {
    name: 'school',
    component: <BookBookmark />,
  },
  {
    name: 'self',
    component: <Desktop />,
  },
];

function TimelineElementDate({ icon }: TimelineElementDateProps) {
  const [trigger, style] = useBoopable({
    scale: 1.2,
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.div
      onMouseEnter={trigger}
      style={style}
      className="timeline-date relative w-[20%] md:w-[10%] aspect-square rounded-full flex justify-center items-center text-center font-bold text-xl">
      {
        timelineDateIcons.filter((obj) => {
          return obj.name === icon;
        })[0].component
      }
    </animated.div>
  );
}

type TimelineElementBoxProps = {
  date: string;
  title?: string;
  children: ReactNode;
};

function TimelineElementBox({
  date,
  title,
  children,
}: TimelineElementBoxProps) {
  const [trigger, style] = useBoopable({
    x: 10,
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.div
      onMouseEnter={trigger}
      style={style}
      className="timeline-box h-full min-h-28 w-[80%] md:w-[90%] flex flex-col p-4 justify-around gap-4">
      <div className="font-bold text-2xl text-gray-700">{title}</div>
      <div className="text-lg text-gray-600">{children}</div>
      <div className="text-gray-400">{date}</div>
    </animated.div>
  );
}
