import { ArrowLeftRight, Wallet, Blocks, TrendingUp, ShieldCheck } from "lucide-react"

const products = [
  {
    icon: ArrowLeftRight,
    title: "Decentralized Exchanges",
    description:
      "High-performance trading infrastructure with deep liquidity and seamless capital flow across markets.",
  },
  {
    icon: Wallet,
    title: "Wallets & Secure Storage",
    description: "Institutional-grade self-custody solutions with advanced security and multi-signature capabilities.",
  },
  {
    icon: Blocks,
    title: "Blockchain Infrastructure & Protocols",
    description: "Foundational layers for scalable, secure, and interoperable blockchain networks.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Financial Systems",
    description: "Next-generation DeFi protocols engineered for capital efficiency and enterprise-grade performance.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Tools",
    description: "AI-powered threat detection, real-time analytics, and compliance-aware security infrastructure.",
  },
]

export function CoreProducts() {
  return (
    <section id="products" className="py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">03 — What We Build</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-xl">Core Products</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="bg-background p-8 md:p-10 group hover:bg-card transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-xs text-muted-foreground font-mono">0{index + 1}</span>
                <product.icon className="h-5 w-5 text-accent-emerald" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-3">{product.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
            </div>
          ))}
          {/* Empty cell for grid balance */}
          <div className="bg-background p-8 md:p-10 hidden lg:flex items-center justify-center">
            <p className="text-muted-foreground text-sm">More products coming soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}
