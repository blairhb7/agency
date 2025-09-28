"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(""); // success or error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ENDPOINT", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
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

  return (
    <section id="contact" className="relative py-24 bg-gray-100">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Let’s Work Together
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Have a project in mind? Drop us a message and we’ll get back to you shortly.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-lg shadow-lg transition"
        >
          Contact Us
        </button>
      </div>

      {/* Slide-in Contact Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="contact-form"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <Icon icon="lucide:x" className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 overflow-y-auto px-6 py-8 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-400 outline-none"
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
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-400 outline-none"
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
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-400 outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>

              {/* Status Message */}
              {status === "SUCCESS" && (
                <p className="text-green-600 font-semibold text-center mt-4">
                  ✅ Thanks! Your message has been sent.
                </p>
              )}
              {status === "ERROR" && (
                <p className="text-red-600 font-semibold text-center mt-4">
                  ❌ Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
