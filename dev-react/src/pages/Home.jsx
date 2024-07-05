import DataSection from "../components/DataSection";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router-dom";
import TestimonialsSwipper from "../components/TestimonialsSwipper";

function Home() {
  const countries = useLoaderData();
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
  const sudAmerique = countries.filter(
    (country) => country.continent === "Amérique du Sud"
  );

  return (
    <main
      className="flex flex-col gap-4 py-4 translate-y-[-2rem] rounded-t-3xl z-[1000] md:py-8 md:gap-6 lg:gap-8 
     bg-whiteColor md:rounded-t-[40px] md:translate-y-[-3rem] lg:py-8 lg:rounded-t-[55px]"
    >
      <Slider continent={europe} />
      <Slider continent={asie} />
      <Slider continent={afrique} />
      <Slider continent={amerique} />
      <Slider continent={sudAmerique} />
      <Slider continent={oceanie} />
      <section className="my-4 px-4">
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
