import { Link2, Shield, Zap } from "lucide-react"

const pillars = [
  {
    icon: Link2,
    title: "Seamless Integration",
    description:
      "Our products are designed to work together, creating a unified ecosystem where wallets, exchanges, and infrastructure communicate effortlessly.",
  },
  {
    icon: Zap,
    title: "Maximum Efficiency",
    description:
      "Every component is optimized for performance, enabling fast transactions, low latency, and minimal overhead across the entire stack.",
  },
  {
    icon: Shield,
    title: "Uncompromising Security",
    description:
      "Security is built into every layer—from protocol design to user interfaces—ensuring institutional-grade protection throughout.",
  },
]

export function EcosystemImpact() {
  return (
    <section id="ecosystem" className="py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-16">
          <div className="lg:col-span-4">
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">04 — Ecosystem Impact</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How It All Connects</h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Rava Labs products work together to enable complete decentralized financial systems. Our integrated
              approach ensures seamless capital flow, unified security, and operational efficiency across every
              touchpoint.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 border border-border hover:border-accent-emerald/50 transition-colors duration-300"
            >
              <pillar.icon className="h-6 w-6 text-accent-emerald mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-medium mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
