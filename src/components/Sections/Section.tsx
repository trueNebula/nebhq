import { sections, SectionType } from '@/src/utils/sections';
import { ReactNode } from 'react';

type SectionProps = {
  idx: number;
  children: ReactNode;
};

function Section({ idx, children }: SectionProps) {
  const section: SectionType = sections[idx];

  return (
    <section
      className={`w-screen h-[64rem] flex items-center justify-center ${section.color}`}
      id={section.id}>
      {children}
    </section>
  );
}

export default Section;
