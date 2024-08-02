import '@/styles/sections.less';
import { ReactNode } from 'react';
import { sections, SectionType } from '@/src/utils/sections';

type SectionProps = {
  name?: string,
  idx: number;
  children: ReactNode;
};

function Section({ name = '', idx, children }: SectionProps) {
  const section: SectionType = sections[idx];

  return (
    <section
      className={`relative w-screen h-[64rem] flex items-center justify-center ${name} ${section.color}`}
      id={section.id}>
      {children}
    </section>
  );
}

export default Section;
