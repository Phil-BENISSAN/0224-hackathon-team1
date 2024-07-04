import DataSection from "../components/DataSection";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router-dom";
import TestimonialsSwipper from "../components/TestimonialsSwipper";

function Home() {
  const countries = Object.values(useLoaderData());
  const europe = countries.filter((country) => country.continent === "Europe");
  const afrique = countries.filter(
    (country) => country.continent === "Afrique"
  );
  const asie = countries.filter((country) => country.continent === "Asie");
  const amerique = countries.filter(
    (country) => country.continent === "Amérique du Nord"
  );
  const oceanie = countries.filter(
    (country) => country.continent === "Océan Indien"
  );

  return (
    <main className="flex flex-col gap-4 md:gap-6 lg:gap-8">
      <Slider continent={europe} />
      <Slider continent={asie} />
      <Slider continent={afrique} />
      <Slider continent={amerique} />
      <Slider continent={oceanie} />
      <section className="my-4 ">
        <h2 className="text-center mb-4 md:mb-6 lg:mb-8">
          Ce qu'on pense de nous !
        </h2>
        <TestimonialsSwipper />
      </section>
      <DataSection />
    </main>
  );
}

export default Home;
