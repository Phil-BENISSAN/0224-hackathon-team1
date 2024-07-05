import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <header className="relative p-4 bg-primaryColor">
      <details className="relative group">
        <summary className="relative cursor-pointer flex items-center justify-end">
          <img
            src="../src/assets/logo-roulard.svg"
            alt="Logo"
            className="absolute top-0 left-0 w-12 h-12"
          />
          <svg
            className="w-6 h-6 text-blackColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </summary>
        <div className="absolute top-20 left-0 w-full rounded-2xl bg-whiteColor shadow-lg p-4 mt-4 z-10 hidden group-open:block">
          <h2 className="text-center rounded-2xl flex items-center justify-center text-xl bg-primaryLight text-whiteColor font-semibold mb-4 h-28 px-20">
            Menu
          </h2>
          <nav className="flex flex-col items-center space-y-2 mb-4">
            <Link
              to="/"
              className="bg-primaryColor rounded-2xl text-whiteColor flex items-center justify-center w-60 h-12"
            >
              Accueil
            </Link>
            <Link
              to="/Analytics"
              className="bg-primaryColor rounded-2xl text-whiteColor flex items-center justify-center w-60 h-12"
            >
              A propos
            </Link>
            <Link
              to="/Contact"
              className="bg-primaryColor rounded-2xl text-whiteColor   flex items-center justify-center w-60 h-12"
            >
              Nous contacter
            </Link>
          </nav>
          <form className="flex-col item-center space-y-2">
            <fieldset className="flex items-center space-x-2">
              <label className="flex-1" tabIndex="0" htmlFor="cécité">
                Cécité
              </label>
              <ToggleSwitch id="cécité" />
            </fieldset>
            <div className="flex items-center space-x-2">
              <label className="flex-1" tabIndex="0" htmlFor="Daltonisme">
                Daltonisme
              </label>
              <ToggleSwitch id="Daltonisme" />
            </div>
            <div className="flex items-center space-x-2">
              <label className="flex-1" tabIndex="0" htmlFor="TDAH">
                TDAH
              </label>
              <ToggleSwitch id="TDAH" />
            </div>
            <div className="flex items-center space-x-2">
              <label className="flex-1" tabIndex="0" htmlFor="Ainé">
                Ainé
              </label>
              <ToggleSwitch id="Ainé" />
            </div>
            <div className="flex items-center space-x-2">
              <label className="flex-1" tabIndex="0" htmlFor="Dyslexie">
                Dyslexie
              </label>
              <ToggleSwitch id="Dyslexie" />
            </div>
          </form>
        </div>
      </details>
      <hgroup className="mt-20 flex flex-col items-center justify-center text-center h-full bg-primaryLight rounded-2xl p-8">
        <img
          src="../src/assets/Tatou01 1.png"
          alt="roulard"
          className="absolute top-16 left-50 mb-12"
        />
        <h1 className="text-3xl font-bold mb-4 ">Le guide du Roulard</h1>
        <p className="text-lg text-blackColor">
          Faites de vos voyages une expérience sans barrières ! "Le Guide du
          Roulard" est là pour vous accompagner vers des destinations où tout le
          monde est le bienvenu, pour un monde plus ouvert et accessible à tous.
        </p>
      </hgroup>
    </header>
  );
}

export default HeroSection;
