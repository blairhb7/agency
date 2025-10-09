"use client";

import { useEffect, useRef } from "react";

export default function CalendlyEmbed() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => console.log("Calendly widget loaded");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={calendlyRef}
      className="calendly-inline-widget my-2"
      data-url="https://calendly.com/blairhb7io?primary_color=f4df47"
      style={{ minWidth: "320px", height: "300px" }}
    />
  );
}
