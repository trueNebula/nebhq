import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Separator from '@/components/Separator';
import Background from '@/components/Background';
import { AboutMe, Work, Timeline, Contact } from '@/components/sections/index';
import SectionSeparator from './components/sections/SectionSeparator';

function MainPage() {
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
            scrollRange={[0.25, 0.45]}
            transformRange={['0rem', '-64rem']}
          />
          <Work />
          <SectionSeparator
            color="green"
            scrollRange={[0.45, 0.54]}
            transformRange={['100vw', '0vw']}
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
