import '@/styles/aboutMe.less';
import '@/styles/sections.less';
import Section from './Section';
import { Link } from 'react-scroll';
import { animated } from '@react-spring/web';
import useBoopable from '@/src/hooks/useBoopable';
import LogoGroup, { LogoImageType } from '../LogoGroup';
import { CaretDown, FileArrowDown } from '@phosphor-icons/react';
import { SCROLL_SPEED } from '@/src/utils/globals';

const logos: LogoImageType[] = [
  { path: "/react_logo.png", alt: "React Logo" },
  { path: "/nodejs.png", alt: "NodeJs Logo" },
  { path: "/tailwindcss.png", alt: "Tailwind Logo" },
  { path: "/python.png", alt: "Python Logo" },
  { path: "/mongo.png", alt: "MongoDB Logo" },
  { path: "/postgresql.png", alt: "PostgreSQL Logo" },
  { path: "/nextjs.png", alt: "NextJs Logo" },
  { path: "/meteor.png", alt: "MeteorJs Logo" },

]

function AboutMe() {
  const [ linkTrigger, linkStyle ] = useBoopable({ y: 7 });
  const [ downloadTrigger, downloadStyle ] = useBoopable({ rotate: 30 });

  return (
    <Section idx={0} name='aboutMe'>
      <div className='card-underlay flex justify-center content-center'>
        <div className="card section-dark flex flex-col justify-center items-center gap-12">
        <div className="top-row flex justify-center items-center gap-16">
          <img
            className="image w-64 aspect-square object-none object-top"
            src="/about_me_image.jpg"
            alt="TODO: add some alt text here"
          />
          <div>
            <div className="mb-3 text-5xl">Hi there!</div>
            <div className="text-2xl">
              I'm a junior fullstack developer specialising in React, NodeJs and
              MongoDB with ~1 year of professional experience.
            </div>
          </div>
        </div>
        <div className="text-center text-3xl grow-[1] flex flex-col gap-2">
          <div className='z-[2]'>
            Based in Romania, passioned by art and <span>electronic</span>{' '}
            music.
            <br />I work fairly often with technologies such as:
          </div>
          <div className="flex gap-4 justify-center">
            <LogoGroup images={[logos[0], logos[1]]} offset={0} />
            <LogoGroup images={[logos[2], logos[3]]} offset={1.2} />
            <LogoGroup images={[logos[4], logos[5]]} offset={2.45} />
            <LogoGroup images={[logos[6], logos[7]]} offset={1.75} />
          </div> 
          <div>
            Welcome to my portfolio website!
          </div>
          <div className="bottom-row flex justify-center items-center gap-16">
            <a
              href='@assets/CV_Gulei_Daniel.pdf'
              download='CV_Gulei_Daniel.pdf'
              target='_blank'
              className='cv-download'
              onMouseEnter={downloadTrigger}
            >
              Grab My Resume
              <animated.span style={downloadStyle}>
                <FileArrowDown size={60} />
              </animated.span>
            </a>
            <Link
              to="work"
              spy={true}
              smooth={true}
              duration={SCROLL_SPEED * 1.5}
              onMouseEnter={linkTrigger}
            >
              Go Exploring!
              <animated.span style={linkStyle}>
                <CaretDown size={48} />
              </animated.span>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
