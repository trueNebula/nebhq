import '@/styles/sections.less';
import { ReactNode } from 'react';
import { varHeightNames, sections, SectionType } from '@/utils/sections';
import useWindowDimensions from '@/hooks/useWindowDimensions';

type SectionProps = {
  name?: string;
  idx: number;
  children: ReactNode;
};

function Section({ name = '', idx, children }: SectionProps) {
  const { isMobile } = useWindowDimensions();
  const section: SectionType = sections[idx];
  const isVarHeight = varHeightNames.includes(name) || isMobile;

  return (
    <section
      className={`relative block w-screen ${
        isVarHeight ? 'h-fit' : 'h-[84rem] md:h-[64rem]'
      } flex items-center justify-center ${name} ${section.color}`}
      id={section.id}>
      {children}
    </section>
  );
}

export default Section;
