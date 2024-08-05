import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Separator from '@/components/Separator';
import Background from '@/components/Background';
import { AboutMe, Work, Timeline, Contact } from '@/components/sections/index';
import SectionSeparator from './components/sections/SectionSeparator';
import useWindowDimensions from './hooks/useWindowDimensions';

const separatorRanges = [
  {
    scrollRange: [0.25, 0.45],
    transformRange: ['0rem', '-64rem'],
  },
  {
    scrollRange: [0.45, 0.54],
    transformRange: ['100vw', '0vw'],
  },
];

const separatorRangesMobile = [
  {
    scrollRange: [0.35, 0.48],
    transformRange: ['0rem', '-64rem'],
  },
  {
    scrollRange: [0.6, 0.66],
    transformRange: ['100vw', '0vw'],
  },
];

function MainPage() {
  const { isMobile } = useWindowDimensions();
  const separators = isMobile ? separatorRangesMobile : separatorRanges;

  return (
    <>
      <div
        className="flex flex-col justify-center overflow-x-clip z-10 relative"
        id={'hero'}>
        <NavBar />
        <Separator />
        <main>
          <AboutMe />
          <SectionSeparator
            color="purple"
            scrollRange={separators[0].scrollRange}
            transformRange={separators[0].transformRange}
          />
          <Work />
          <SectionSeparator
            color="green"
            scrollRange={separators[1].scrollRange}
            transformRange={separatorRanges[1].transformRange}
            horizontal
          />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
      <Background />
    </>
  );
}

export default MainPage;
