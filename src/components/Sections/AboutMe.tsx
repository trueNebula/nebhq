import '@/styles/aboutMe.less';
import '@/styles/sections.less';
import Section from '@/components/sections/Section.tsx';
import { Link } from 'react-scroll';
import { animated } from '@react-spring/web';
import useBoopable from '@/src/hooks/useBoopable';
import { SCROLL_SPEED } from '@/src/utils/globals';
import LogoGroup, { LogoImageType } from '@/components/LogoGroup.tsx';
import { CaretDown, FileArrowDown } from '@phosphor-icons/react';
import useWindowDimensions from '@/src/hooks/useWindowDimensions';

const logos: LogoImageType[] = [
  { path: 'technologies/react_logo.png', alt: 'React Logo' },
  { path: 'technologies/nodejs.png', alt: 'NodeJs Logo' },
  { path: 'technologies/tailwindcss.png', alt: 'Tailwind Logo' },
  { path: 'technologies/python.png', alt: 'Python Logo' },
  { path: 'technologies/mongo.png', alt: 'MongoDB Logo' },
  { path: 'technologies/postgresql.png', alt: 'PostgreSQL Logo' },
  { path: 'technologies/nextjs.png', alt: 'NextJs Logo' },
  { path: 'technologies/meteor.png', alt: 'MeteorJs Logo' },
];

const logoGroupOffsets = [0, 1.2, 2.45, 1.75];
const logoGroupOffsetsMobile = [0, 1, 2, 3];

function AboutMe() {
  const [linkTrigger, linkStyle] = useBoopable({ y: 7 });
  const [downloadTrigger, downloadStyle] = useBoopable({ rotate: 30 });
  const { isTablet } = useWindowDimensions();

  let caretSize = 48;
  let fileArrowSize = 60;
  let groupOffsets = logoGroupOffsets;

  if (isTablet) {
    caretSize = 24;
    fileArrowSize = 24;
    groupOffsets = logoGroupOffsetsMobile;
  }

  return (
    <Section idx={0} name="aboutMe">
      <div className="card-underlay w-[95%] lg:w-[75%] h-full lg:h-[80%] flex justify-center content-center">
        <div className="card section-dark max-w-full flex flex-col justify-center items-center gap-12">
          <div className="top-row flex-col lg:flex-row flex justify-center items-center gap-16">
            <img
              className="image w-64 aspect-square objectobject-top"
              src="about_me_image.jpg"
              alt="TODO: add some alt text here"
            />
            <div className="text-center lg:text-left">
              <div className="mb-3 text-5xl">Hi there!</div>
              <div className="text-2xl">
                I'm a junior fullstack developer specialising in React, NodeJs
                and MongoDB with ~1 year of professional experience.
              </div>
            </div>
          </div>
          <div className="text-center text-3xl grow-[1] flex flex-col gap-2 max-w-full">
            <div className="z-[2]">
              Based in Romania, passioned by art and <span>electronic</span>{' '}
              music.
              <br />I work fairly often with technologies such as:
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <LogoGroup
                images={[logos[0], logos[1]]}
                offset={groupOffsets[0]}
              />
              <LogoGroup
                images={[logos[2], logos[3]]}
                offset={groupOffsets[1]}
              />
              <LogoGroup
                images={[logos[4], logos[5]]}
                offset={groupOffsets[2]}
              />
              <LogoGroup
                images={[logos[6], logos[7]]}
                offset={groupOffsets[3]}
              />
            </div>
            <div>Welcome to my portfolio website!</div>
            <div className="bottom-row flex justify-center items-center gap-16">
              <a
                href="@assets/CV_Gulei_Daniel.pdf"
                download="CV_Gulei_Daniel.pdf"
                target="_blank"
                className="cv-download"
                onMouseEnter={downloadTrigger}>
                Grab My Resume
                <animated.span style={downloadStyle}>
                  <FileArrowDown size={fileArrowSize} />
                </animated.span>
              </a>
              <Link
                to="work"
                spy={true}
                smooth={true}
                duration={SCROLL_SPEED * 1.5}
                onMouseEnter={linkTrigger}>
                Go Exploring!
                <animated.span style={linkStyle}>
                  <CaretDown size={caretSize} />
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
