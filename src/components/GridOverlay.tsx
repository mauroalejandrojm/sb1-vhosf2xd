import React from "react";

interface GridOverlayProps {
  cellSize?: number;
  opacity?: number;
}

export default function GridOverlay({
  cellSize = 48,
  opacity = 0.06,
}: GridOverlayProps): React.ReactElement {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(15,23,42,${opacity}) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(15,23,42,${opacity}) 1px,
            transparent 1px
          )
        `,
        backgroundSize: `${cellSize}px ${cellSize}px`,
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.75), transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.75), transparent)",
      }}
    >
      <div
        className="absolute inset-0 dark:block hidden"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            )
          `,
          backgroundSize: `${cellSize}px ${cellSize}px`,
        }}
      />
    </div>
  );
}