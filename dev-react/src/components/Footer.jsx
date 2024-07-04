function Footer() {
  return (
    <>
      <section className="bg-primaryColor text-center p-8">
        <img
          src="./src/assets/logo-roulard.svg"
          alt="logo-roulard"
          className="mx-auto h-24 w-24"
        />
        <h2 className="mt-4 text-whiteColor">Le Guide Du Roulard</h2>
        <div className="mt-4 text-whiteColor">
          <p>Adresse :</p>
          <p>123 rue des voyageurs</p>
          <p>89547 Tataouine les bains</p>
        </div>
        <div className="mt-4 text-whiteColor">
          <p>Tel: 01.23.45.67.89</p>
          <p>Email: guide-du-roulard@trip.com</p>
        </div>
        <h2 className="mt-8 text-whiteColor">Restons Connecté !</h2>
        <div className="flex justify-center space-x-4 my-4">
          <img src="./src/assets/youtube.svg" alt="youtube" />
          <img src="./src/assets/facebook.svg" alt="facebook" />
          <img src="./src/assets/twitter.svg" alt="twitter" />
          <img src="./src/assets/instagram.svg" alt="instagram" />
          <img src="./src/assets/linkedin.svg" alt="linkedin" />
        </div>
      </section>
    </>
  );
}

export default Footer;
