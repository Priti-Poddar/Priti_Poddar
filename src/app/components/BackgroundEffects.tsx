import { useEffect, useState, useRef } from "react";

export function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const particles = useRef(
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${15 + Math.random() * 10}s`,
    }))
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(107, 33, 168, 0.10), transparent 80%)`,
          willChange: "background",
        }}
      />

      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {particles.current.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              backgroundColor: "rgba(107, 33, 168, 0.4)", // --violet
            }}
          />
        ))}
      </div>
    </>
  );
}
