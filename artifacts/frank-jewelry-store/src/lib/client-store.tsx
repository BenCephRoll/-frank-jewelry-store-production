import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const WISHLIST_KEY = "fjs.wishlist.v1";
const RECENT_KEY = "fjs.recentlyViewed.v1";
const MAX_RECENT = 8;

type StoreValue = {
  wishlist: string[];
  recentlyViewed: string[];
  toggleWishlist: (slug: string) => void;
  isSaved: (slug: string) => boolean;
  markViewed: (slug: string) => void;
  hydrated: boolean;
};

const StoreContext = createContext<StoreValue | null>(null);

const read = (key: string): string[] => {
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
  } catch {
    return [];
  }
};

const write = (key: string, value: string[]) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable — feature degrades silently */
  }
};

/**
 * Client-side wishlist + recently-viewed store.
 * Deliberately isolated behind this provider so it can be swapped
 * for authenticated, server-backed persistence later.
 */
export function ClientStoreProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setWishlist(read(WISHLIST_KEY));
    setRecentlyViewed(read(RECENT_KEY));
    setHydrated(true);
  }, []);

  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((current) => {
      const next = current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [slug, ...current];
      write(WISHLIST_KEY, next);
      return next;
    });
  }, []);

  const markViewed = useCallback((slug: string) => {
    setRecentlyViewed((current) => {
      const next = [slug, ...current.filter((item) => item !== slug)].slice(0, MAX_RECENT);
      write(RECENT_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<StoreValue>(
    () => ({
      wishlist,
      recentlyViewed,
      toggleWishlist,
      markViewed,
      hydrated,
      isSaved: (slug: string) => wishlist.includes(slug),
    }),
    [wishlist, recentlyViewed, toggleWishlist, markViewed, hydrated],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useClientStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useClientStore must be used inside ClientStoreProvider");
  }
  return context;
}
