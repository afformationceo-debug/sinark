const quickLinks = [
  { label: "서비스 소개", href: "#services" },
  { label: "파트너십", href: "#partnership" },
  { label: "시장 현황", href: "#market" },
  { label: "문의하기", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-bg">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-indigo/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold font-display gradient-text">
              Afformation &times; Sinarmas Group
            </span>
            <p className="text-sm text-text-tertiary">
              &copy; 2026 Afformation. All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
