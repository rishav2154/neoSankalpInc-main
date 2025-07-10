import React from "react";
import Hero from "../../components/Hero/Hero";
import Vision from "../../components/Vision/Vison";
import Services from "../../components/Services/Services";
import Work from "../../components/Work/Work";
import Benefits from "../../components/Benefits/Benefits";
import FAQSection from "../../components/Faq/Faq";
import ConsultCall from "../../components/Consultcall/Consult";
import TeamSlider from "../../components/Team/TeamSlider";
import Partners from "../../components/partners/Partners";

const Home = () => {
  return (
    <div className="container space-y-20 w-full h-auto bg-white">
      <Hero />
      <Vision />
      <Services />
      <Work />
      <Benefits />
      <ConsultCall />
      <FAQSection />
      <TeamSlider />
      <Partners />
    </div>
  );
};

export default Home;
