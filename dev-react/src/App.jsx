import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <HeroSection />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
