import { useEffect, useRef } from "react";
import type { Media } from "@/data/catalog";

type MediaFrameProps = {
  media?: Media | undefined;
  ratio?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  placeholderLabel?: string;
};

/**
 * Single place where all brand media is rendered.
 * Handles lazy loading, aspect ratios, casual right-click/drag
 * protection, and the elegant fallback used when the client has
 * not supplied media for a section yet.
 */
export function MediaFrame({
  media,
  ratio = "4 / 5",
  className = "",
  imgClassName = "",
  priority = false,
  placeholderLabel = "Waiting for Official Brand Media",
}: MediaFrameProps) {
  // "auto" is a request to size the box from the asset's own proportions
  // (used by the gallery masonry, where images are intentionally mixed
  // portrait/landscape/square). Resolve it to a real ratio from the known
  // dimensions so the box has a correct size on first paint — otherwise
  // the div has zero intrinsic height until the image decodes, and the
  // whole masonry grid reflows around it (a classic CLS trigger).
  const resolvedRatio =
    ratio === "auto" && media?.width && media?.height
      ? `${media.width} / ${media.height}`
      : ratio;

  return (
    <div
      className={`relative overflow-hidden bg-onyx ${className}`}
      style={{ aspectRatio: resolvedRatio }}
      onContextMenu={(event) => event.preventDefault()}
    >
      {!media ? (
        <MediaPlaceholder label={placeholderLabel} />
      ) : media.kind === "video" ? (
        <AutoplayVideo
          src={media.url}
          {...(media.poster !== undefined && { poster: media.poster })}
          alt={media.alt}
          priority={priority}
          className={`no-save h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <img
          className={`no-save h-full w-full object-cover ${imgClassName}`}
          src={media.url}
          alt={media.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          draggable={false}
        />
      )}
    </div>
  );
}

/**
 * Muted, looping background video that only decodes/plays while it is
 * actually on screen. The site can show several of these at once (gallery,
 * brand films), so pausing off-screen instances avoids burning battery and
 * CPU on video the visitor can't currently see — pure win, no visual change
 * for on-screen video.
 */
function AutoplayVideo({
  src,
  poster,
  alt,
  priority,
  className,
}: {
  src: string;
  poster?: string;
  alt: string;
  priority: boolean;
  className: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          void node.play().catch(() => {
            /* autoplay can be blocked by the browser; poster image still shows */
          });
        } else {
          node.pause();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      aria-label={alt}
      title={alt}
      muted
      loop
      playsInline
      preload={priority ? "auto" : "none"}
      disablePictureInPicture
      controlsList="nodownload"
    />
  );
}

export function MediaPlaceholder({ label }: { label: string }) {
  return (
    <div className="glass-panel absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
      <span aria-hidden className="text-2xl text-gold">
        ✦
      </span>
      <p className="eyebrow leading-relaxed">{label}</p>
      <div className="rule-gold w-16 opacity-60" />
    </div>
  );
}
