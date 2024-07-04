import DataSection from "../components/DataSection";

import TestimonialsSwipper from "../components/TestimonialsSwipper";

function Home() {
  return (
    <main>  
      <section className="px-4">
        <TestimonialsSwipper />
      </section>
      <DataSection />
    </main>
  );

}

export default Home;
