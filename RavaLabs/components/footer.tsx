import Link from "next/link"

const footerLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#mission" },
  { label: "Docs", href: "#" },
  { label: "Contact", href: "#" },
]

export function Footer() {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-muted-foreground">Rava Labs © {new Date().getFullYear()}</p>

          <nav className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
