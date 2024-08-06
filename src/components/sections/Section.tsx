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
  const section: SectionType = sections[idx];
  const { isTablet } = useWindowDimensions();
  const isVarHeight = varHeightNames.includes(name) || isTablet;

  return (
    <section
      className={`relative block w-screen ${
        isVarHeight ? 'h-full' : 'h-[64rem]'
      } flex items-center justify-center ${name} ${section.color}`}
      id={section.id}>
      {children}
    </section>
  );
}

export default Section;
