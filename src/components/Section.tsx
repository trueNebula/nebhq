import { ReactNode } from "react"

type SectionProps = {
    id?: string,
    children: ReactNode,
};

function Section({ id, children }: SectionProps) {
    return (
        <section className='w-fit my-20' id={id}>
            {children}
        </section>
    );
}

export default Section;