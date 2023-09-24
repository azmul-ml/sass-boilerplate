//import Hero from "./components/Hero/Hero";
import HomeHero from "./components/HomeHero/HomeHero";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
//import Books from "./components/Books/Books";
import Benefits from "./components/Benefits/Benefits";

export default function HomePage() {
  return (
    <main>
       <BreadCrumbs />
       {/* <Hero /> */}
       <HomeHero />
       {/* <Books /> */}
       <Benefits />
    </main>
  )
}
