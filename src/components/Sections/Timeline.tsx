import Section from './Section';
import {
  TimelineElement,
  TimelineWrapper,
} from '@/components/TimelineBuilder.tsx';

function Timeline() {
  return (
    <Section idx={2} name="timeline">
      <TimelineWrapper>
        <TimelineElement
          date="August 2024"
          title="NebHQ Launch"
          connector
          icon="self">
          After a few weeks of on and off development, I finished this website
          as a first proper project fresh out of uni.
        </TimelineElement>
        <TimelineElement
          date="July 2024"
          title="Bachelor's Degree"
          connector
          icon="school">
          All the work on developing J.EVC and gathering data for it culminated
          in the presentation I held at my university. After 3 years along with
          their good (and bad) parts, I got my Bachelor of Science degree in CS.
          For the next two years, I'll be taking a Master's in distributed
          systems and after that, I'll be done with my formal education for
          good. Of course, learning only truly stops when we die.
        </TimelineElement>
        <TimelineElement
          date="September 2023"
          title="AirpotLabs Hire"
          connector
          icon="work">
          I was offered a full-time junior developer position after the
          internship which I proudly took, no questions asked. Working here has
          been fun and rewarding.
        </TimelineElement>
        <TimelineElement
          date="July 2023"
          title="AirportLabs Internship"
          connector
          icon="work">
          I started a Fullstack Developer Internship at AirportLabs, which
          lasted 2 months. During the internship, we were presented the
          technologies that the company used, as well as some Git, Linux and
          Agile fundamentals. During the first half, we learnt React, Express
          and MeteorJs, and during the second half, we worked on implementing a
          major feature on one of their projects.
        </TimelineElement>
        <TimelineElement
          date="October 2021"
          title="Started University"
          connector
          icon="school">
          I was accepted at Babes-Bolyai University's Computer Science
          programme. There, I studied many of the fundamentals of programming
          and found a passion for web development. We took classes teaching C++,
          Python, Java, x86 Assembly (young me was happy), JavaScript (React,
          Angular, JQuery, NodeJs), SQL, MongoDB, as well as courses on data
          structures and algorithms, database management, linear algebra and
          calculus, and software testing/optimization.
        </TimelineElement>
        <TimelineElement
          date="2015"
          title="Picked up Coding"
          connector
          icon="school">
          Right around 6th grade, I had the opportunity to be taught C++ basics
          by a family friend and test them using PBInfo (our version of
          LeetCode). This proved to be really helpful and consolidated my wish
          to go on a CS-focused programme in high-school and after.
        </TimelineElement>
        <TimelineElement
          date="2009"
          title="ROM Hacking at a young age?"
          icon="self">
          Back when I was little, I had an obsession with Super Mario World for
          the SNES, learning its ins and outs, how certain things worked, and I
          eventually got into ROM hacking because of this. Even though I didn't
          understand an ounce of Assembly, I still loved figuring out how things
          worked at a technical level. Later on, I picked up Scratch for a few
          years, making small, quirky games like any child would.
        </TimelineElement>
      </TimelineWrapper>
    </Section>
  );
}

export default Timeline;
