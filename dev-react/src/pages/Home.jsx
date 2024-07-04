import DataSection from "../components/DataSection";

import HeroSection from "../components/HeroSection"
import TestimonialsSwipper from "../components/TestimonialsSwipper";

function Home() {
  return (
    <main> 
      <HeroSection /> 
      <section className="px-4">
        <TestimonialsSwipper />
      </section>
      <DataSection />
    </main>
  );

}

export default Home;
