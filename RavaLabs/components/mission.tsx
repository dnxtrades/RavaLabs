export function Mission() {
  return (
    <section id="mission" className="py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">01 — Mission</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Purpose</h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
              To build secure, scalable, and decentralized financial infrastructure that empowers the next generation of
              digital finance. We develop wallets, exchanges, and blockchain platforms designed for trust, efficiency,
              and long-term adoption.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
