import { useEffect, useRef, useState } from "react";

/** Premium loading curtain — shown once per session, skipped for reduced motion. */
export function LoadingScreen() {
  const [done, setDone] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem("fjs.loaded") === "1";
    } catch {
      seen = false;
    }
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) return;
    setMounted(true);
    setDone(false);
    const timer = window.setTimeout(() => {
      setDone(true);
      try {
        window.sessionStorage.setItem("fjs.loaded", "1");
      } catch {
        /* ignore */
      }
    }, 1100);
    const cleanup = window.setTimeout(() => setMounted(false), 1900);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(cleanup);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[120] flex flex-col items-center justify-center bg-obsidian transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <p className="font-display text-3xl tracking-[0.1em] text-ivory sm:text-4xl">
        Frank Jewelry Store
      </p>
      <span className="mt-6 animate-pulse text-xl text-gold">✦</span>
      <p className="mt-6 text-[0.62rem] uppercase tracking-[0.34em] text-gold/80">
        Fine Jewelry, Lagos
      </p>
      <div className="mt-8 h-px w-40 overflow-hidden bg-border">
        <span className="block h-full w-1/2 animate-[shimmer_1.6s_linear_infinite] bg-gold" />
      </div>
    </div>
  );
}

/** Counts up to a target once scrolled into view. */
export function Counter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }
    let frame: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const duration = 1600;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl text-gold-soft sm:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-3 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function EmptyState({
  title = "New pieces are arriving soon.",
  body = "This collection is being restocked. Message us on WhatsApp and we'll show you what's arriving next.",
  action,
}: {
  title?: string;
  body?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="glass-panel flex flex-col items-center gap-4 px-6 py-20 text-center">
      <span aria-hidden className="text-2xl text-gold">
        ✦
      </span>
      <h3 className="font-display text-3xl">{title}</h3>
      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{body}</p>
      {action}
    </div>
  );
}
