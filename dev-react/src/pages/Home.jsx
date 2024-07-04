import DataSection from "../components/DataSection";
import Slider from "../components/Slider";

import TestimonialsSwipper from "../components/TestimonialsSwipper";

function Home() {
  return (
    <main>  
    <Slider />
      <section className="px-4">
        <TestimonialsSwipper />
      </section>
      <DataSection />
    </main>
  );

}

export default Home;
