import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BackToTop, FloatingWhatsApp } from "@/components/FloatingActions";
import { LoadingScreen } from "@/components/Atmosphere";
import { ClientStoreProvider } from "@/lib/client-store";
import { heroMedia } from "@/data/catalog";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <p className="eyebrow">Frank Jewelry Store</p>
        <h1 className="mt-4 font-display text-6xl text-ivory">404</h1>
        <h2 className="mt-4 font-display text-2xl">This piece has moved</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for is no longer on display. Our collection is waiting.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex min-h-13 items-center border border-gold/50 px-8 text-[0.65rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground"
        >
          Browse the Collection
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something interrupted the display. Please try again.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="min-h-13 bg-gold px-7 text-[0.65rem] uppercase tracking-[0.24em] text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="min-h-13 border border-gold/50 px-7 text-[0.65rem] uppercase leading-[3.25rem] tracking-[0.24em] text-gold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Frank Jewelry Store | Fine Gold, Diamond & Steel Jewelry" },
      {
        name: "description",
        content:
          "Frank Jewelry Store — elegant, high-quality gold, diamond, steel and fashion jewelry with worldwide delivery. Order on WhatsApp.",
      },
      { name: "author", content: "Frank Jewelry Store" },
      { property: "og:site_name", content: "Frank Jewelry Store" },
      { property: "og:type", content: "website" },
      // Default share-preview image, inherited by every route via TanStack
      // Router's meta dedupe (last-defined-per-property wins, root loses to
      // any route that sets its own og:image/twitter:image). Without this,
      // links shared to WhatsApp, iMessage, X, or Facebook render with no
      // preview image at all.
      ...(heroMedia.poster
        ? [
            { property: "og:image", content: heroMedia.poster },
            { name: "twitter:image", content: heroMedia.poster },
          ]
        : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#151312" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@200;300;400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ClientStoreProvider>
        <LoadingScreen />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-gold/60 focus:bg-obsidian focus:px-5 focus:py-3 focus:text-[0.65rem] focus:uppercase focus:tracking-[0.22em] focus:text-gold"
        >
          Skip to content
        </a>
        <SiteHeader />

        <main id="main" className="min-h-dvh pt-20">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <SiteFooter />
        <FloatingWhatsApp />
        <BackToTop />
      </ClientStoreProvider>
    </QueryClientProvider>
  );
}
