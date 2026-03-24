import { useEffect, useMemo, useState } from "react";
import useImagePanZoom from "./useImagePanZoom";

export default function SystemViewer({
  isOpen,
  images,
  projectTitle,
  techTags,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const activeImage = useMemo(() => {
    if (!images || images.length === 0) return null;
    return images[activeIndex] || null;
  }, [images, activeIndex]);

  const {
    containerRef,
    imageRef,
    scale,
    x,
    y,
    isDragging,
    isAnimating,
    isZoomed,
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
  } = useImagePanZoom({
    isOpen,
    activeImageKey: activeImage?.src || "",
  });

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "+" || event.key === "=") zoomIn();
      if (event.key === "-" || event.key === "_") zoomOut();
      if (event.key === "0") resetZoom();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev, zoomIn, zoomOut, resetZoom]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !activeImage) return;
    setIsImageLoading(true);
  }, [isOpen, activeIndex, activeImage]);

  if (!isOpen || !activeImage) return null;

  return (
    <div className="system-viewer-overlay" onClick={onClose}>
      <div
        className="system-viewer-shell"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="system-viewer-header">
          <div className="system-viewer-meta">
            <p className="system-viewer-project">{projectTitle}</p>
            <h3 className="system-viewer-screen-title">{activeImage.title}</h3>
            <div className="system-viewer-tags">
              {techTags?.map((tag) => (
                <span className="system-viewer-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="system-viewer-actions">
            <button
              type="button"
              className="system-viewer-action-btn"
              onClick={zoomOut}
              aria-label="Zoom out"
            >
              -
            </button>
            <button
              type="button"
              className="system-viewer-action-btn"
              onClick={zoomIn}
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              type="button"
              className="system-viewer-action-btn system-viewer-reset"
              onClick={resetZoom}
              aria-label="Reset zoom"
            >
              Reset
            </button>
            <button
              type="button"
              className="system-viewer-action-btn system-viewer-close"
              onClick={onClose}
              aria-label="Close viewer"
            >
              X
            </button>
          </div>
        </div>

        <div className="system-viewer-stage-row">
          <button
            type="button"
            className="system-viewer-nav-btn"
            onClick={onPrev}
            aria-label="Previous image"
          >
            {"<"}
          </button>

          <div
            ref={containerRef}
            className={`system-viewer-stage ${isZoomed ? "is-zoomed" : ""}`}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            <div className="system-viewer-image-wrap">
              {isImageLoading && <div className="system-viewer-loader" />}

              <img
                ref={imageRef}
                src={activeImage.src}
                alt={activeImage.title}
                className={`system-viewer-image ${
                  isZoomed ? (isDragging ? "is-grabbing" : "is-grab") : ""
                }`}
                style={{
                  transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                  transition: isAnimating ? "transform 220ms ease" : "none",
                }}
                onDoubleClick={handleDoubleClick}
                onDragStart={handleNativeDrag}
                onLoad={() => setIsImageLoading(false)}
              />
            </div>
          </div>

          <button
            type="button"
            className="system-viewer-nav-btn"
            onClick={onNext}
            aria-label="Next image"
          >
            {">"}
          </button>
        </div>

        <div className="system-viewer-footer">
          <div className="system-viewer-context">
            <h4>What this screen demonstrates:</h4>
            <ul>
              {(activeImage.context || []).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
