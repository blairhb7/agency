"use client";

import React, { useEffect, useRef, useState } from "react";

const defaultItems = [
  "Web Design",
  "Mobile Friendly",
  "E-Commerce",
  "Branding",
  "SEO",
  "UI/UX",
  "Custom Development",
];

export default function RobustMarquee({
  items = defaultItems,
  speed = 120, // px per second
  height = "400px",
  pauseOnHover = true,
  className = "",
}) {
  const containerRef = useRef(null);
  const measureRef = useRef(null); // used to measure one group
  const [groupWidth, setGroupWidth] = useState(0);
  const [mounted, setMounted] = useState(false); // <-- client-only flag

  // Only run measurements on client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !measureRef.current) return;

    const measure = () => {
      if (!measureRef.current) return;
      const w = Math.ceil(measureRef.current.getBoundingClientRect().width);
      if (w && w !== groupWidth) setGroupWidth(w);
    };

    measure();

    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => measure());
      if (measureRef.current) ro.observe(measureRef.current);
      if (containerRef.current) ro.observe(containerRef.current);
    } else {
      window.addEventListener("resize", measure);
    }

    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", measure);
    };
  }, [groupWidth, mounted]);

  // duration to travel `groupWidth` pixels at `speed` px/sec
  const duration = groupWidth ? Math.max(4, groupWidth / speed) : 20;

  // Don't render the marquee until mounted
  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-black ${className}`}
      style={{ height }}
    >
      {/* Animated inner — duplicated groups (2x) */}
      <div
        className="marquee-inner"
        style={{
          "--marquee-width": `${groupWidth}px`,
          "--marquee-duration": `${duration}s`,
        }}
      >
        {[...Array(2)].map((_, blockIdx) => (
          <div className="marquee-group" key={blockIdx}>
            {items.map((item, i) => (
              <span
                key={`${blockIdx}-${i}`}
                className="marquee-item font-bebas text-gray-300 hover:text-amber-400 duration-700 ease-in-out"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Hidden measurement element */}
      <div
        ref={measureRef}
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          pointerEvents: "none",
          visibility: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ display: "flex", gap: "4rem", padding: "0 2rem" }}>
          {items.map((item, i) => (
            <span
              key={`m-${i}`}
              style={{
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-inner {
          display: flex;
          align-items: center;
          height: 100%;
          width: calc(var(--marquee-width, 1000px) * 2);
          white-space: nowrap;
          will-change: transform;
          animation: marquee var(--marquee-duration, 20s) linear infinite;
        }

        .marquee-group {
          display: flex;
          gap: 4rem;
          padding: 0 2rem;
          align-items: center;
          flex-shrink: 0;
        }

        .marquee-item {
          font-size: 1.875rem; /* ~text-3xl */
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: gray;
          margin-right: 0.5rem;
          user-select: none;
        }

        :hover.marquee-item {
          color: #ffca28;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(var(--marquee-width, 1000px) * -1));
          }
        }

        ${pauseOnHover ? `.marquee-inner:hover { animation-play-state: paused; }` : ""}
      `}</style>
    </div>
  );
}
