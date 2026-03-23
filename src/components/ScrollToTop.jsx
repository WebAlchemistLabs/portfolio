import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on route change.
 * - If there's a hash (#id), scrolls that element into view.
 * - If targetSelector is provided and that element is scrollable, scrolls it.
 * - Always also forces the window/document to top (covers all cases).
 */
export default function ScrollToTop({
  behavior = "smooth",
  targetSelector = null, // e.g. ".site-main" if that element scrolls
}) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1) If navigating to a hash, prefer that element
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior, block: "start" });
        return;
      }
    }

    // 2) If a specific scroll container is provided, try it
    const container = targetSelector
      ? document.querySelector(targetSelector)
      : null;

    // Wait a tick so new route content is in the DOM
    requestAnimationFrame(() => {
      if (container && typeof container.scrollTo === "function") {
        container.scrollTo({ top: 0, left: 0, behavior });
      }

      // 3) Always also force the window/document to top
      window.scrollTo({ top: 0, left: 0, behavior });
      // Hard set for browsers that ignore scrollTo with smooth
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [pathname, hash, behavior, targetSelector]);

  return null;
}
