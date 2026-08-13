"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(event: PointerEvent) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70 mix-blend-multiply"
      style={{
        background: `radial-gradient(circle 160px at ${position.x}px ${position.y}px, rgba(37,99,235,0.09), transparent 55%)`
      }}
    />
  );
}
