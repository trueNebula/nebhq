import Background from "./components/Background";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import Separator from "./components/Separator";

function MainPage() {
  return (
    <>
      <div className='flex flex-col justify-center items-center overflow-x-clip z-10' id={'hero'}>
        <NavBar />
        <Separator />
        <main>
          <Section id='section1'>
            {" "}
            SECTION 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat, deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id
            quia esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section id='section2'>
            {" "}
            SECTION 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat, deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id
            quia esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section id='section3'>
            {" "}
            SECTION 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat, deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id
            quia esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section id='section4'>
            {" "}
            SECTION 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat, deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id
            quia esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
          <Section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            deserunt hic. Vitae, quis. Quaerat sapiente ad pariatur id quia
            esse, explicabo possimus mollitia quo rem ipsa! Nostrum numquam
            debitis neque?
          </Section>
        </main>
        <Footer />
      </div>
      <Background />
    </>
  );
}

export default MainPage;
