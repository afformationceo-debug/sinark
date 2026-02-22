"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "서비스", href: "#services" },
  { label: "파이프라인", href: "#pipeline" },
  { label: "시장현황", href: "#market" },
  { label: "파트너십", href: "#partnership" },
  { label: "문의", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 px-4
        transition-all duration-300
        border-b
        ${
          scrolled
            ? "border-dark-border"
            : "border-white/[0.06]"
        }
      `}
      style={{ backgroundColor: scrolled ? "rgba(3,7,18,0.9)" : "rgba(3,7,18,0.8)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-lg font-bold font-display gradient-text pl-1">
            Afformation
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-brand-indigo to-brand-cyan text-white shadow-lg shadow-brand-indigo/25 hover:shadow-brand-indigo/40 transition-all duration-300"
            >
              무료 상담
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <span
              className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`
          md:hidden fixed inset-0 top-16 z-40
          transition-all duration-300 ease-in-out
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        style={{ backgroundColor: "rgba(3,7,18,0.95)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
      >
        <div
          className={`
            flex flex-col items-center gap-6 pt-12
            transition-transform duration-300
            ${mobileOpen ? "translate-y-0" : "-translate-y-4"}
          `}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-brand-indigo to-brand-cyan text-white shadow-lg shadow-brand-indigo/25"
          >
            무료 상담
          </a>
        </div>
      </div>
    </nav>
  );
}
