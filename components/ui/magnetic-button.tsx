"use client";

import { cloneElement, isValidElement, type ReactElement, type ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticButton({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 20, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 280, damping: 20, mass: 0.2 });

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.16);
    y.set(offsetY * 0.16);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  if (isValidElement(children)) {
    return (
      <motion.div ref={ref} style={{ x: springX, y: springY }} onMouseMove={handleMove} onMouseLeave={handleLeave}>
        {cloneElement(children as ReactElement)}
      </motion.div>
    );
  }

  return <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}>{children}</div>;
}
