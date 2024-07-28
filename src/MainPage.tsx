import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Separator from '@/components/Separator';
import Background from '@/components/Background';
import { AboutMe, Work, Timeline, Contact } from '@/components/sections/index';
import SectionSeparator from './components/sections/SectionSeparator';

function MainPage() {
  return (
    <>
      <div className='flex flex-col justify-center overflow-x-clip z-10 relative' id={'hero'}>
        <NavBar />
        <Separator />
        <main>
          <AboutMe />
          <SectionSeparator color='white' z={2} />
          <Work />
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
