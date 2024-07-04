import DataSection from "../components/DataSection";

import TestimonialsSwipper from "../components/TestimonialsSwipper";

function Home() {
  return (
    <main>
      <section className="testimonials-section">
        <TestimonialsSwipper />
      </section>
      <DataSection />
    </main>
  );

}

export default Home;
