//import Hero from "./components/Hero/Hero";
import HomeHero from "./components/HomeHero/HomeHero";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
//import Books from "./components/Books/Books";
import Benefits from "./components/Benefits/Benefits";
import ContactUs from "./components/ContactUs/ContactUs";
import Carousal from "./components/Carousal/Carousal";

export default function HomePage() {
  return (
    <main>
       <BreadCrumbs />
       {/* <Hero /> */}
       <HomeHero />
       {/* <Books /> */}
       <Benefits />
       <Carousal title="Selected for you" />
       <Carousal title="You must buy it now " />
       <ContactUs />
    </main>
  )
}
