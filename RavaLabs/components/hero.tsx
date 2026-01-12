"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div
            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-8 text-balance">
              Building Decentralized
              <br />
              <span className="text-accent-emerald">Financial Infrastructure</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-14 leading-relaxed">
              Rava Labs develops decentralized products and infrastructure powering the next generation of financial
              systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="text-sm bg-foreground text-background px-8 py-4 hover:bg-accent-emerald transition-colors duration-300 text-center font-medium"
              >
                Explore Our Products
              </a>
              <a
                href="#mission"
                className="text-sm border border-border px-8 py-4 hover:border-foreground transition-colors duration-300 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
