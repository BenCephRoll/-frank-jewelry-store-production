import { useEffect, useState } from "react";
import { brand, whatsappLink } from "@/data/catalog";

export function FloatingWhatsApp({ message }: { message?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappLink(
        message ?? `Hello ${brand.name}, I'd like to enquire about your jewelry.`,
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Frank Jewelry Store on WhatsApp"
      className={`fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-gold shadow-[var(--shadow-gold)] transition-[opacity,transform] duration-700 hover:scale-105 ${
        visible ? "opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7 fill-primary-foreground">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.46.13-.61.15-.15.32-.37.48-.57.16-.2.2-.33.3-.53.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.34 5.08 4.56.71.29 1.26.46 1.69.59.71.22 1.36.19 1.87.12.56-.09 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5A9.44 9.44 0 0 1 18.72 5.3a9.32 9.32 0 0 1 2.77 6.65c0 5.2-4.25 9.45-9.45 9.55zM12.05 2.5A11.44 11.44 0 0 0 .6 13.94c0 2.02.53 3.99 1.53 5.73L.5 25.5l5.99-1.57a11.4 11.4 0 0 0 5.55 1.42h.01c6.31 0 11.45-5.14 11.45-11.45a11.4 11.4 0 0 0-3.35-8.1 11.36 11.36 0 0 0-8.1-3.3z" />
      </svg>
    </a>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`glass-panel fixed bottom-24 right-5 z-[70] flex h-12 w-12 items-center justify-center text-sm text-gold transition-[opacity,transform] duration-500 hover:border-gold/60 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span aria-hidden>↑</span>
    </button>
  );
}
