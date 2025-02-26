import ContactSection from "../ContactUs/ContactUs";
import ContractorSection from "../Contracter/Contracter";
// import CounterAnimation from "../CountUp/CountUp";
// import ExperienceSection from "../Experiences/Experiences";
import FAQSection from "../Faq/Faq";
import Hero from "../Hero/Hero";
import ProjectSection from "../Projects/Projects";
import OurServices from "../Services/Services";
// import TestimonialsSection from "../TestiMonial/TestiMonial";
import ProjectStepsHorizontalLine from "../WorkFlow/WorkFlow";

const Home = () => {
  return (
    <>
      <div>
        <section id="home">
          <Hero />
        </section>
        <section id="contracter">
          <ContractorSection />
        </section>
        {/* <section id="about">
          <AboutUs />
        </section> */}
           <section id="project">
          <ProjectSection />
        </section>
        <section id="services">
          <OurServices />
        </section>
        {/* <section id="countup">
          <CounterAnimation />
        </section> */}
        {/* <section id="experience">
          <ExperienceSection />
        </section> */}
        <section id="workflow">
          <ProjectStepsHorizontalLine />
        </section>
        {/* <section id="testiMonial">
          <TestimonialsSection />
        </section> */}
        <section id="contact">
          <ContactSection />
        </section>
        {/* <section id='blog'>
        <Blog/>
      </section> */}
        <section id="faq">
          <FAQSection />
        </section>
      </div>
    </>
  );
};

export default Home;
