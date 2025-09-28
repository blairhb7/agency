"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const FeatureCard = ({ feature, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const animatedWidth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  const width = useTransform(animatedWidth, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col justify-center py-24 snap-start max-w-screen overflow-hidden "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Mobile number */}
      <div className="flex text-[6rem] text-amber-400 font-bold leading-[1] md:hidden md:text-[14rem]">
        {feature.number}
      </div>

      {/* Progress line */}
      <div className="mb-8 mt-8 h-0.5 w-full bg-gray-200">
        <motion.div className="h-0.5 bg-black" style={{ width }} />
      </div>

      {/* Content */}
      {children}
    </motion.div>
  );
};

const useStickyCounter = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0.33, 0.66, 1],
    ["0%", "-50%", "-95%"]
  );

  return { ref, y };
};

export default function ServiceNumber() {
  const sticky = useStickyCounter();

  return (
    <section
      id="features"
      className="px-[5%] py-24  bg-white "
      ref={sticky.ref}
    >
      <div id="services" className="container">
        <div className="relative grid grid-cols-1 md:grid-cols-[0.75fr_1fr] lg:grid-cols-[max-content_1fr] gap-x-12 md:gap-x-20 gap-y-16">
          {/* Sticky counter (desktop) */}
          <div className="hidden md:sticky md:top-[20%] h-56 overflow-hidden md:flex md:items-start">
            <h1 className="text-[6rem] text-gray-300 font-bold leading-[1] md:text-[14rem]">
              0
            </h1>
            <motion.div style={{ y: sticky.y }}>
              {[1, 2, 3, 4].map((num) => (
                <h1
                  key={num}
                  className="text-[6rem] text-amber-400 font-plaster font-bold leading-[1] md:text-[14rem]"
                >
                  {num}
                </h1>
              ))}
            </motion.div>
          </div>

          {/* Feature cards with natural scroll + snap */}
          <div className="grid grid-cols-1 gap-y-2 snap-y snap-mandatory">
            {[
              {
                number: "01",
                tagline: "Design",
                heading: "Web Design",
                description:
                  "We design clean, modern, and engaging websites tailored to your business goals. Our focus is on creating user-friendly experiences that leave a lasting impression.",
              },
              {
                number: "02",
                tagline: "Mobile",
                heading: "Mobile Friendly",
                description:
                  "With mobile-first design, your website will look flawless and perform smoothly on every screen size, ensuring your audience can connect with you anywhere.",
              },
              {
                number: "03",
                tagline: "store",
                heading: "E-Commerce",
                description:
                  "From product showcases to secure checkouts, we build scalable e-commerce solutions that boost sales and create effortless shopping experiences.",
              },
              {
                number: "04",
                tagline: "Marketing",
                heading: "Branding",
                description:
                  "We craft memorable brand identities that capture your vision and connect emotionally with your audience, helping you stand out from the competition.",
              },
            ].map((feature, idx) => (
              <FeatureCard key={idx} feature={feature}>
                <p className="mb-3 text-gray-300  font-semibold md:mb-4">
                  {feature.tagline}
                </p>
                <h2 className="mb-5 text-2xl uppercase font-plaster hover:text-amber-400 duration-700 ease-in-out font-bold md:mb-6 md:text-4xl lg:text-6xl">
                  {feature.heading}
                </h2>
                <p className="md:text-lg font-bebas w-[70%]">{feature.description}</p>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
