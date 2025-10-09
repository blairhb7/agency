"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react"; // using iconify for the chevron

const faqs = [
  {
    question: "What services does AstroShift offer?",
    answer:
      "We offer web design, mobile-friendly applications, e-commerce solutions, branding, SEO, and custom development.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the complexity of the project. Simple websites can take 2-4 weeks, while larger projects may take 2-3 months.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes! We offer maintenance and support plans to ensure your website or app runs smoothly after launch along with hosting.",
  },
  {
    question: "Can you redesign our existing website?",
    answer:
      "Absolutely! We specialize in modern redesigns that improve user experience and drive conversions.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Every website we build is fully custom, so pricing varies depending on the project. We do offer multiple tiers depending on the complexity and scale of your needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sentenceVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden ">
      <div className="container mx-auto px-8 max-w-4xl">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.15 } },
              }}
              className="bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center relative group"
              >
                <span className="text-xl font-semibold transition-colors duration-300 group-hover:text-amber-400 relative">
                  {faq.question}
                  {/* Animated underline */}
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-amber-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>

                {/* Chevron arrow */}
                <motion.span
                  animate={{ rotate: openIndex === i ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                >
                  <Icon icon="lucide:chevron-right" className="w-6 h-6" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="px-6 pb-6 text-gray-700"
                  >
                    {faq.answer.split(". ").map((line, idx) => (
                      <motion.p
                        key={idx}
                        custom={idx}
                        variants={sentenceVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-2"
                      >
                        {line.trim()}{line.endsWith(".") ? "" : "."}
                      </motion.p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
