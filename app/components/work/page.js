/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

// Simple Button
const Button = ({ children }) => (
  <button className="rounded-full bg-black px-6 py-3 text-white shadow-md hover:bg-gray-800 transition">
    {children}
  </button>
);

export default function projects() {
  const images = [
  {
    url: "https://space-tourism-book.vercel.app/destination",
    src: "/space.jpg"
  },
  {
    url: "https://blairnft.netlify.app/",
    src: "/nft.png"
  },
  {
    url: "https://sun-fish.vercel.app/",
    src: "/sunfish.png"
  },
  {
    url: "https://filmduo.com",
    src: "/filmduowebsite.png"
  },
  {
    url: "https://travel-life-psi.vercel.app/",
    src: "/brooklyn.png"
  },
  ];

  const desktopPositions = [
    { top: "40%", left: "0%", rotate: "-5deg", z: 5 },
    { top: "10%", left: "18%", rotate: "4deg", z: 4 },
    { top: "46%", left: "32%", rotate: "0deg", z: 5 },
    { top: "10%", left: "55%", rotate: "-3deg", z: 2 },
    { top: "47%", left: "66%", rotate: "9deg", z: 1 },
  ];

  return (
    <section id="project" className="relative flex flex-col mt-6  py-16 md:py-24 lg:py-28 max-w-screen 2xl:w-[2000px] bg-amber-400 overflow-hidden  text-black">
      {/* Text Section */}
      <div className="text-center z-10 relative">
        <div className="mx-auto max-w-3xl w-full ">
          <h1 className="mb-5 text-5xl font-plaster uppercase font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Feature projects
          </h1>
          <p className="md:text-xl font-bebas font-bold max-w-xl mx-auto">
            We focus on clean modern design to take your business to the next level!
          </p>
          
        </div>
      </div>

      {/* Desktop Images */}
      <div className="hidden lg:block lg:ml-[4%] relative mt-12 h-[70vh]">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="absolute  rounded-xl shadow-2xl overflow-hidden cursor-pointer"
            style={{
              top: desktopPositions[i].top,
              left: desktopPositions[i].left,
              rotate: desktopPositions[i].rotate,
              zIndex: desktopPositions[i].z,
              
            }}
            
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -5, duration: 12 }}
          ><Tooltip>
            <TooltipTrigger asChild>
           <Link href={src.url}> <img
              src={src.src}
              alt={`Living Space ${i + 1}`}
              className="w-[400px] h-60  object-cover rounded-xl"
            /></Link>
             </TooltipTrigger>
                <TooltipContent className=" text-white font-bebas cursor-pointer font-black text-lg  bg-black">
                    <p>Click to view Website</p>
                </TooltipContent>
            </Tooltip>
          </motion.div>
        ))}
      </div>

      {/* Mobile Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-3 flex-col lg:hidden gap-6 mt-8">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="w-full rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <Tooltip>
            <TooltipTrigger asChild>
           <Link href={src.url}>  <img
              src={src.src}
              alt={`Living Space ${i + 1}`}
              className="w-full h-60 sm:h-64 object-cover rounded-xl"
            /></Link>
             </TooltipTrigger>
      <TooltipContent>
        <p>Click to view Website</p>
      </TooltipContent>
    </Tooltip>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
