import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Villages from "./components/Villages";
import History from "./components/History";
import HanulAncutei from "./components/HanulAncutei";
import Monuments from "./components/Monuments";
import Demographics from "./components/Demographics";
import Economy from "./components/Economy";
import Administration from "./components/Administration";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";
import { useReveal } from "./useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Villages />
        <History />
        <HanulAncutei />
        <Monuments />
        <Demographics />
        <Economy />
        <LocationMap />
        <Administration />
      </main>
      <Footer />
    </>
  );
}
