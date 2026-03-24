import { useCallback, useEffect, useRef, useState } from "react";

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const BUTTON_ZOOM_STEP = 0.24;
const DOUBLE_CLICK_SCALE = 2.2;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default function useImagePanZoom({ isOpen, activeImageKey }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const rafRef = useRef(null);
  const dragRef = useRef({ startX: 0, startY: 0, originX: 0, originY: 0 });
  const pendingRef = useRef(null);
  const timeoutRef = useRef(null);
  const transformRef = useRef({ scale: 1, x: 0, y: 0 });

  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function getBounds(scale) {
    if (!containerRef.current || !imageRef.current) {
      return { maxX: 0, maxY: 0 };
    }

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    const imageWidth = imageRef.current.offsetWidth;
    const imageHeight = imageRef.current.offsetHeight;

    const scaledWidth = imageWidth * scale;
    const scaledHeight = imageHeight * scale;

    return {
      maxX: Math.max(0, (scaledWidth - containerWidth) / 2),
      maxY: Math.max(0, (scaledHeight - containerHeight) / 2),
    };
  }

  function clampTransform(next) {
    const bounds = getBounds(next.scale);
    return {
      scale: next.scale,
      x: clamp(next.x, -bounds.maxX, bounds.maxX),
      y: clamp(next.y, -bounds.maxY, bounds.maxY),
    };
  }

  const setAnimatedFlag = useCallback((enabled) => {
    if (!enabled) {
      setIsAnimating(false);
      return;
    }

    setIsAnimating(true);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, 220);
  }, []);

  const commitTransform = useCallback(
    (next, options = {}) => {
      const clamped = clampTransform(next);
      transformRef.current = clamped;
      setTransform(clamped);
      setAnimatedFlag(Boolean(options.animate));
    },
    [setAnimatedFlag]
  );

  const zoomAtPoint = useCallback(
    (targetScale, clientX, clientY, options = {}) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const cursorX = clientX - rect.left - rect.width / 2;
      const cursorY = clientY - rect.top - rect.height / 2;
      const current = transformRef.current;
      const nextScale = clamp(targetScale, MIN_SCALE, MAX_SCALE);

      if (nextScale === current.scale) return;

      const imagePointX = (cursorX - current.x) / current.scale;
      const imagePointY = (cursorY - current.y) / current.scale;
      const nextX = cursorX - imagePointX * nextScale;
      const nextY = cursorY - imagePointY * nextScale;

      commitTransform(
        { scale: nextScale, x: nextX, y: nextY },
        { animate: options.animate }
      );
    },
    [commitTransform]
  );

  const zoomByButtons = useCallback(
    (delta) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      zoomAtPoint(
        transformRef.current.scale + delta,
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        { animate: true }
      );
    },
    [zoomAtPoint]
  );

  const zoomIn = useCallback(() => {
    zoomByButtons(BUTTON_ZOOM_STEP);
  }, [zoomByButtons]);

  const zoomOut = useCallback(() => {
    zoomByButtons(-BUTTON_ZOOM_STEP);
  }, [zoomByButtons]);

  const resetZoom = useCallback(() => {
    commitTransform({ scale: 1, x: 0, y: 0 }, { animate: true });
    setIsDragging(false);
  }, [commitTransform]);

  const handleWheel = useCallback(
    (event) => {
      event.preventDefault();
      const scaleFactor = Math.exp(-event.deltaY * 0.0015);
      zoomAtPoint(transformRef.current.scale * scaleFactor, event.clientX, event.clientY);
    },
    [zoomAtPoint]
  );

  const startDrag = useCallback(
    (clientX, clientY) => {
      if (transformRef.current.scale <= 1) return;

      dragRef.current = {
        startX: clientX,
        startY: clientY,
        originX: transformRef.current.x,
        originY: transformRef.current.y,
      };
      setIsDragging(true);
    },
    []
  );

  const schedulePan = useCallback(
    (nextX, nextY) => {
      pendingRef.current = { x: nextX, y: nextY };
      if (rafRef.current) return;

      rafRef.current = window.requestAnimationFrame(() => {
        const pending = pendingRef.current;
        rafRef.current = null;
        if (!pending) return;

        commitTransform({
          scale: transformRef.current.scale,
          x: pending.x,
          y: pending.y,
        });
      });
    },
    [commitTransform]
  );

  const handlePointerDown = useCallback(
    (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (transformRef.current.scale <= 1) return;

      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      startDrag(event.clientX, event.clientY);
    },
    [startDrag]
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (!isDragging) return;
      event.preventDefault();

      const deltaX = event.clientX - dragRef.current.startX;
      const deltaY = event.clientY - dragRef.current.startY;
      const nextX = dragRef.current.originX + deltaX;
      const nextY = dragRef.current.originY + deltaY;

      schedulePan(nextX, nextY);
    },
    [isDragging, schedulePan]
  );

  const endDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handlePointerUp = useCallback(
    (event) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
      endDrag();
    },
    [endDrag]
  );

  const handlePointerCancel = useCallback(() => {
    endDrag();
  }, [endDrag]);

  const handleDoubleClick = useCallback(
    (event) => {
      event.preventDefault();
      const currentScale = transformRef.current.scale;
      const targetScale = currentScale > 1 ? 1 : DOUBLE_CLICK_SCALE;
      zoomAtPoint(targetScale, event.clientX, event.clientY, { animate: true });
    },
    [zoomAtPoint]
  );

  const handleNativeDrag = useCallback((event) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    commitTransform({ scale: 1, x: 0, y: 0 });
    setIsDragging(false);
  }, [isOpen, activeImageKey, commitTransform]);

  useEffect(() => {
    function handleResize() {
      const current = transformRef.current;
      commitTransform(current);
    }

    window.addEventListener("resize", handleResize);

    let observer;
    if (containerRef.current && window.ResizeObserver) {
      observer = new ResizeObserver(handleResize);
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (observer) observer.disconnect();
    };
  }, [commitTransform]);

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutRef.current);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return {
    containerRef,
    imageRef,
    scale: transform.scale,
    x: transform.x,
    y: transform.y,
    isDragging,
    isAnimating,
    isZoomed: transform.scale > 1,
    zoomIn,
    zoomOut,
    resetZoom,
    handleWheel,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerCancel,
    handleDoubleClick,
    handleNativeDrag,
  };
}
