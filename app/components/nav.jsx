"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileHeader() {
  const [isMobile, setIsMobile] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(""); // success or error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
  
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
  
    try {
      const res = await fetch("https://formspree.io/f/myznegje", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };




  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/#services" },
    { title: "Work", href: "/#project" },
    { title: "About", href: "/pages/about" },
   
  ];

  return (
    <header className="border-b bg-white/95 backdrop-blur sticky  top-0 z-30">



<section id="contact" className=" z-50 ">
      

     {/* Slide-in Contact Form */}
     <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-screen bg-black  z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Form Panel */}
            <motion.div
              key="contact-form"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="fixed inset-y-0 h-screen right-0 w-full max-w-lg lg:max-w-3xl bg-white shadow-2xl z-50 flex flex-col rounded-l-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b bg-amber-400 rounded-tl-2xl">
                <h3 className="text-2xl lg:text-6xl uppercase font-plaster  font-bold text-white">
                  Contact Us
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-amber-300 transition"
                >
                  <Icon icon="lucide:x" className="w-6 h-6 text-black" />
                </button>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex-1 overflow-y-auto px-8 py-8 space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-amber-400 outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-amber-400 outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    className="w-full border rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-amber-400 outline-none resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-black text-white font-semibold font-plaster  rounded-lg hover:bg-amber-400 duration-700 transition"
                >
                  Send Message
                </button>

                {/* Status */}
                {status === "SUCCESS" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 font-semibold text-center mt-4"
                  >
                    ✅ Thanks! Your message has been sent.
                  </motion.p>
                )}
                {status === "ERROR" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 font-semibold text-center mt-4"
                  >
                    ❌ Oops! Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>

              {/* Phone Section */}
              <div className="px-8 py-6 border-t bg-gray-50 flex items-center space-x-3">
                <Icon
                  icon="lucide:phone"
                  className="w-6 h-6 text-amber-400"
                />
                <a href="tel:+19256957466" className="text-lg font-semibold text-gray-800">
                  +1 ‪(925) 695-7466‬
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>








      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/#Home">
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <Icon icon="lucide:zap" className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-heading font-plaster font-extrabold uppercase font-monoton  text-amber-400">
              AstroLab
            </span>
          </div>
        </Link>












        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="relative font-bebas uppercase px-5 py-2 text-gray-900 font-semibold text-xl transition-colors duration-1000
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-t-2 before:border-b-2 before:border-gray-900 before:scale-y-200 before:opacity-0 before:transition-all before:duration-300
                after:content-[''] after:absolute after:top-[2px] after:left-0 after:w-full after:h-full after:bg-gray-900 after:scale-0 after:opacity-0 after:transition-all after:duration-300
                hover:text-amber-400
                hover:bg-black
                hover:rounded-md
                hover:before:scale-y-100 hover:before:opacity-100
                hover:after:scale-y-100 hover:after:opacity-100"
            >
              {item.title}
            </Link>
          ))}
          <Button onClick={() => setIsOpen(true)}  size="lg" variant="outline" className="text-xl px-12 py-6 border-gray-300 text-black hover:bg-gray-50 hover:border-amber-400 duration-700">
              <Icon icon="lucide:mail" className="w-6 h-6 mr-3" /> Send Message
            </Button>
        </div>















        {/* Mobile Hamburger */}
        <div className="">
          <button
            onClick={() => setIsMobile(true)}
            className="p-2 rounded-md bg-black/80 text-white hover:bg-black transition"
          >
            <Icon icon="lucide:menu" className="w-6 h-6" />
          </button>
        </div>
      </div>











      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobile && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black h-screen text-white flex flex-col justify-center items-center"
          >
            {/* Close button */}
            <motion.button
              onClick={() => setIsMobile(false)}
              className="absolute top-8 right-8 p-3 rounded-full bg-white/10 hover:bg-white/20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Icon icon="lucide:x" className="w-6 h-6" />
            </motion.button>

            {/* Menu items */}
            <motion.ul
              className="flex flex-col items-center space-y-12 text-center text-4xl font-bold"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className="relative uppercase px-6 py-3 cursor-pointer
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-t-2 before:border-b-2 before:border-white before:scale-y-200 before:opacity-0 before:transition-all before:duration-300
                    after:content-[''] after:absolute after:top-[2px] after:left-0 after:w-full after:h-full after:bg-white after:scale-0 after:opacity-0 after:transition-all after:duration-300
                    hover:text-amber-400
                    hover:before:scale-y-100 hover:before:opacity-100
                    hover:after:scale-y-100 hover:after:opacity-100"
                  variants={{
                    hidden: { y: 50, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                  
                >
                  {item.title}
                </motion.a>
              ))}
            </motion.ul>

            {/* Optional CTA */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
            >
              <Button onClick={() => setIsOpen(true)}   className="bg-amber-400 text-black px-8 py-3 hover:bg-amber-300">
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
