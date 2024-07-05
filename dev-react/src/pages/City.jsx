import InfoCardCountry from "../components/InfoCardCountry";
import InfoCardCity from "../components/InfoCardCity";
import { useLoaderData, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function City() {
  const { id } = useParams();
  const countries = useLoaderData();
  const country = countries.find((country) => country.id == id);
  const [cityPic, setCityPic] = useState(null);

  useEffect(() => {
    const API_KEY = "44763211-5e3493390bb8057d5e507affa";
    const query = country.nom_ville;
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`;

    async function fetchCityPic() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        if (data.totalHits > 0) {
          setCityPic(data.hits[0].webformatURL);
        } else {
          setCityPic(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setCityPic(null);
      }
    }

    fetchCityPic();
  }, [country.nom_ville]);

  return (
    <main className="flex flex-col m-auto p-4 gap-8 md:p-6 translate-y-[-1rem] rounded-t-xl">
      <InfoCardCountry country={country} />
      <InfoCardCity country={country} cityPic={cityPic} />
    </main>
  );
}

export default City;
