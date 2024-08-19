import NavBar from '@/components/NavBar';
import Separator from '@/components/Separator';
import Background from '@/components/Background';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import SectionSeparator from '@/components/sections/SectionSeparator';
import { AboutMe, Contact, Timeline, Work } from '@/components/sections/index';
import { separatorRanges, separatorTransfoms } from './utils/resolution';

function MainPage() {
  const { resolution } = useWindowDimensions();
  const separators = separatorRanges[resolution];
  const transforms = separatorTransfoms;

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
            scrollRange={separators[0]}
            transformRange={transforms[0]}
          />
          <Work />
          <SectionSeparator
            color="green"
            scrollRange={separators[1]}
            transformRange={transforms[1]}
            horizontal
          />
          <Timeline />
          <Contact />
        </main>
        {/* Footer coming soon */}
        {/* <Footer /> */}
      </div>
      <Background />
    </>
  );
}

export default MainPage;
