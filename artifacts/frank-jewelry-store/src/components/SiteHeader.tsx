import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { brand, whatsappLink } from "@/data/catalog";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-[background-color,backdrop-filter,border-color,padding] duration-700 ${
        scrolled || open
          ? "border-b border-gold/15 bg-obsidian/88 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 lg:px-10">
        <Link to="/" className="group flex flex-col leading-none" aria-label={`${brand.name} — home`}>
          <span className="font-display text-xl tracking-[0.08em] text-ivory transition-colors duration-500 group-hover:text-gold sm:text-2xl">
            FRANK
          </span>
          <span className="mt-1 text-[0.55rem] uppercase tracking-[0.34em] text-gold/80">
            Jewelry Store
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active =
              link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-[0.68rem] uppercase tracking-[0.22em] transition-colors duration-500 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:text-gold hover:after:origin-left hover:after:scale-x-100 ${
                  active ? "text-gold after:origin-left after:scale-x-100" : "text-ivory/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/wishlist"
            aria-label="View saved pieces"
            className="hidden h-11 w-11 items-center justify-center border border-border/60 text-base text-ivory/80 transition-colors duration-500 hover:border-gold/60 hover:text-gold sm:flex"
          >
            <span aria-hidden>♡</span>
          </Link>
          <a
            href={whatsappLink("Hello Frank Jewelry Store, I'd like to place an order.")}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center border border-gold/50 px-5 text-[0.65rem] uppercase tracking-[0.22em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground md:flex"
          >
            Order Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-border/60 transition-colors duration-500 hover:border-gold/60 lg:hidden"
          >
            <span
              aria-hidden
              className={`h-px w-5 bg-ivory transition-transform duration-500 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              aria-hidden
              className={`h-px w-5 bg-ivory transition-transform duration-500 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-gold/10 bg-obsidian/95 backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-4">
          {links.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ animationDelay: `${index * 40}ms` }}
              className="animate-fade-up border-b border-border/40 py-4 text-sm uppercase tracking-[0.22em] text-ivory/85 transition-colors duration-500 last:border-0 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/wishlist"
            className="py-4 text-sm uppercase tracking-[0.22em] text-ivory/85 hover:text-gold"
          >
            Wishlist
          </Link>
          <a
            href={whatsappLink("Hello Frank Jewelry Store, I'd like to place an order.")}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex min-h-13 items-center justify-center bg-gold text-[0.68rem] uppercase tracking-[0.24em] text-primary-foreground"
          >
            Order on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
