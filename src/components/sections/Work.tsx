import '@/styles/work.less';
import Section from '@/components/sections/Section';
import WorkCard, { WorkCardInfo } from '@/components/WorkCard';
import { useEffect } from 'react';

const cards: WorkCardInfo[] = [
  {
    img: 'work/airportlabs.jpg',
    alt: 'AirportLabs logo over a background image of a grounded plane at an airport during the night.',
    title: 'AirportLabs',
    description:
      'I currently work as a Fullstack Software Engineer at AirportLabs. The project I work on is an ACDM tool used in various airports around the globe.',
    url: 'https://www.airportlabs.com/',
  },
  {
    img: 'work/jevc.jpg',
    alt: 'J.EVC logo over a blurred image of its Java source code.',
    title: 'J.EVC',
    description:
      "J.EVC is a custom video encoder developed for my bachleor's thesis. It's an exploration of the techniques that power modern video coding, as well as parallel computing and multithreading as a means of optimization.",
    url: 'https://github.com/trueNebula/J.EVC',
  },
  {
    img: 'work/budgetlog.jpg',
    alt: 'An image of the design skeleton made for BudgetLog in Figma.',
    title: 'BudgetLog',
    description:
      "This is an upcoming finance management platform that I'm currently working on. Its main purpose is to help the users balance their weekly/montly/annual budget, as well as see their incoming and outgoing streams and investments.",
    url: '',
  },
  {
    img: 'work/github.jpg',
    alt: 'An image of the @trueNebula profile on GitHub.',
    title: 'More coming soon...',
    description:
      "I'm constantly working on things (new and old), so feel free to stalk my GitHub and see if you find anything cool!",
    url: 'https://github.com/trueNebula',
  },
];

function Work() {
  useEffect(() => {
    (document.getElementById('work-cards-wrapper') as HTMLElement).onmousemove =
      (e) => {
        for (const card of document.querySelectorAll('.work-card')) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
          (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
        }
      };
  }, []);

  return (
    <Section idx={1} name="work">
      <div
        id="work-cards-wrapper"
        className="work-cards-wrapper my-32 w-[80%] flex flex-wrap gap-12 lg:gap-2 justify-center items-center text-2xl">
        <WorkCard cardInfo={cards[0]} />
        <WorkCard cardInfo={cards[1]} />
        <WorkCard cardInfo={cards[2]} />
        <WorkCard cardInfo={cards[3]} />
      </div>
    </Section>
  );
}

export default Work;
