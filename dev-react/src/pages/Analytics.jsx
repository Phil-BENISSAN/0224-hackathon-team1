function Analyse() {
  return (
    <main className="flex flex-col gap-4 p-6 md:p-8 lg:p-12">
      <h1 className="text-center">À Propos</h1>{" "}
      <figure className="flex flex-col items-center justify-center mb-9">
        <img
          src="./src/assets/Accessibilité par Pays pour les Personnes en Situation de Handicap.png"
          alt="graphique accéssibilité par pays par handicap"
          className="w-full md:w-[60%] lg:w-[40%]"
        />
        <figcaption className="md:w-[50%] lg:w-[40%]">
          Cet histogramme montre les scores d'accessibilité pour les personnes
          en situation de handicap dans différents pays, selon trois critères :
          infrastructures, sensibilisation sociale, et transport accessible. Les
          États-Unis, le Canada et Singapour se démarquent par des scores élevés
          en infrastructures et transport accessible. La Norvège et la Suède
          obtiennent des scores élevés en sensibilisation sociale, reflétant
          leurs efforts pour l'inclusion et la sensibilisation.
        </figcaption>
      </figure>
      <p className="text-center md:text-lg lg:text-xl">
        Bienvenue dans notre application révolutionnaire dédiée à faciliter les
        voyages pour les personnes en situation de handicap ! Notre mission est
        de rendre le monde plus accessible en fournissant des informations
        complètes et fiables sur l'accessibilité des différentes destinations.
        Grâce à notre interface intuitive, les utilisateurs peuvent rapidement
        trouver des détails sur l'accessibilité des infrastructures, les
        politiques inclusives locales, et les options de transport adaptées. En
        collaborant avec des experts et des communautés locales, nous
        garantissons des données précises et à jour.
        <br /> Que vous planifiez un voyage d'affaires ou des vacances, notre
        application est votre compagnon idéal pour explorer le monde sans
        barrières. Ensemble, nous bâtissons un avenir où chaque destination est
        accessible à tous. Bon voyage !
      </p>
    </main>
  );
}

export default Analyse