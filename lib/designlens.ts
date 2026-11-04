/**
 * Single source of truth for the separately hosted DesignLens application.
 *
 * The portfolio never imports DesignLens code, proxies it, or frames it — it
 * only ever links out to this URL. When the variable is absent we refuse to
 * guess a production address: development falls back to localhost, production
 * surfaces a configuration message instead of a broken link.
 */

export const DESIGNLENS_DEV_FALLBACK = "http://localhost:8080";

export type DesignLensLinkSource = "env" | "dev-fallback" | "missing" | "invalid";

export type DesignLensLink = {
  /** Resolved absolute URL, or null when it must not be linked. */
  url: string | null;
  source: DesignLensLinkSource;
  /** Hostname for display, e.g. "audit.prasanth.design". */
  host: string | null;
  /** True when a link can be rendered safely. */
  configured: boolean;
};

function normalizeUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const parsed = new URL(withScheme);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
    if (!parsed.hostname.includes(".") && parsed.hostname !== "localhost") return null;
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

export function getDesignLensLink(): DesignLensLink {
  const raw = process.env.NEXT_PUBLIC_DESIGNLENS_URL;
  const normalized = raw ? normalizeUrl(raw) : null;

  if (normalized) {
    return { url: normalized, source: "env", host: new URL(normalized).hostname, configured: true };
  }

  if (raw && !normalized) {
    // A value was provided but is not a usable absolute URL — never link it.
    return { url: null, source: "invalid", host: null, configured: false };
  }

  if (process.env.NODE_ENV !== "production") {
    return {
      url: DESIGNLENS_DEV_FALLBACK,
      source: "dev-fallback",
      host: new URL(DESIGNLENS_DEV_FALLBACK).hostname,
      configured: false
    };
  }

  return { url: null, source: "missing", host: null, configured: false };
}

/** Human-readable explanation shown only when a link cannot be rendered. */
export function designLensConfigMessage(link: DesignLensLink): string | null {
  if (link.source === "env") return null;
  if (link.source === "dev-fallback") {
    return "Development fallback — set NEXT_PUBLIC_DESIGNLENS_URL to point at the deployed audit app.";
  }
  if (link.source === "invalid") {
    return "NEXT_PUBLIC_DESIGNLENS_URL is not a valid absolute URL, so the live product is not linked.";
  }
  return "The live product link is not configured for this deployment.";
}
