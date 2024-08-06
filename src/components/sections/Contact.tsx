import Section from './Section';

function Contact() {
  return (
    <Section idx={3}>
        <div className='h-64 w-96 parent'>
          <div className='h-12 w-full bg-slate-400 child'></div>
        </div>
    </Section>
  );
}

export default Contact;