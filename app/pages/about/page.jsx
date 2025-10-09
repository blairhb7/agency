"use client";

import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



export default function AboutPage() {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };
  
  const hoverScale = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  

  return (
    <div className="min-h-screen w-screen bg-white">
      {/* Header */}
    

      {/* Hero Section */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
              <Badge variant="outline" className="mb-8 text-lg px-6 py-3 border-gray-300 flex items-center justify-center mx-auto">
                <Icon icon="lucide:users" className="w-5 h-5 mr-3" />
                Meet the team behind the magic
              </Badge>
            </motion.div>
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bebas font-heading font-bold mb-12 leading-tight text-black"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }}
            >
              We are <span className="text-amber-400 font-plaster">AstroShift</span>
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } } }}
            >
              A passionate team of designers, developers, and strategists dedicated to crafting
              exceptional digital experiences that make a lasting impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-plaster font-heading font-bold mb-16 text-black hover:text-amber-400 duration-700 ease-in-out"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            >
              Our Story
            </motion.h2>
            <div className="space-y-8 font-bebas">
              {[
                "AstroShift began as a small studio with a big vision: to bridge the gap between beautiful design and meaningful business results. What started as a two-person team has grown into a collective of creative minds, each bringing unique expertise to every project.",
                "We believe that great design isn’t just about how something looks—it’s about how it works, how it feels, and how it transforms businesses. Every pixel, every interaction, every decision is made with intention and purpose.",
                "Today, we’re proud to have helped many companies across various industries tell their stories through exceptional digital experiences. wWe’ve learned that the best solutions come from truly understanding our clients’ challenges and aspirations.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-2xl text-gray-600 leading-relaxed"
                  custom={i}
                  variants={paragraphVariants}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

 {/* Footer */}
 <motion.footer className="border-t bg-amber-400 border-gray-200   overflow-hidden py-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Icon icon="lucide:zap" className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-plaster font-heading uppercase font-bold text-black">AstroShift</span>
              </div>
              <p className="text-white text-lg leading-relaxed">Creating digital experiences that inspire and convert.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl text-black">Services</h4>
              <div className="space-y-4 text-white  text-lg">
                <div>Web Design</div>
                <div>Mobile Apps</div>
                <div>E-commerce</div>
                <div>Branding</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl text-black">Company</h4>
              <div className="space-y-4 text-white text-lg">
                <Link className=" cursor-pointer hover:text-black duration-1000" href="/pages/about"><div>About Us</div></Link>
                <Link className=" cursor-pointer hover:text-black duration-1000" href="/#projects"><div>Our Work</div></Link>
                <Link className=" cursor-pointer hover:text-black duration-1000" href="/#services"><div>Services</div></Link>
                <div onClick={() => setIsOpen(true)} className=" cursor-pointer hover:text-black duration-1000" ><div>Contact</div></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl text-black">Connect</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-300 text-white  hover:bg-gray-700">
                  <Image width={20} height={20} alt="twitter" src="/x-logo.png" className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-white  hover:bg-gray-700">
                  <Icon icon="lucide:linkedin" className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-white  hover:bg-gray-700">
                  <Icon icon="lucide:instagram" className="w-5 h-5" />
                </Button>
              </div>
              
            </div>
          </div>
          <Separator className="my-12 bg-gray-200" />
          <div className="flex flex-col md:flex-row justify-between items-center text-white text-lg">
            <div>© 2024 AstroShift. All rights reserved.</div>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
