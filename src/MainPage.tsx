import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Separator from '@/components/Separator';
import Background from '@/components/Background';
import { AboutMe, Work, Timeline, Contact } from '@/components/Sections/index';

function MainPage() {
  return (
    <>
      <div className='flex flex-col justify-center items-center overflow-x-clip z-10' id={'hero'}>
        <NavBar />
        <Separator />
        <main>
          <AboutMe />
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
