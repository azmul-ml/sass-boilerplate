import Hero from "./components/Hero/Hero";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";

export default function Home() {
  return (
    <main className="container-xxl">
       <BreadCrumbs />
       <Hero />
    </main>
  )
}
