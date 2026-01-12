import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { Approach } from "@/components/approach"
import { CoreProducts } from "@/components/core-products"
import { EcosystemImpact } from "@/components/ecosystem-impact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Mission />
      <Approach />
      <CoreProducts />
      <EcosystemImpact />
      <Footer />
    </main>
  )
}
