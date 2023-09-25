import ProductHero from "../components/ProductHero/ProductHero";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Carousal from "../components/Carousal/Carousal";


export default function HomePage() {
  return (
    <main className="container-xxl">
       <BreadCrumbs />
       <ProductHero />
       <Carousal title="Collection" />
       <Carousal title="Last Viewed" />
    </main>
  )
}
