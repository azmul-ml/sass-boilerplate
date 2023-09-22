import ProductHero from "../components/ProductHero/ProductHero";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";

export default function HomePage() {
  return (
    <main className="container-xxl">
       <BreadCrumbs />
       <ProductHero />
    </main>
  )
}
