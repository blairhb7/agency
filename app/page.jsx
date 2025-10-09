'use client'
import  {useState} from "react"
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion,  AnimatePresence  } from "framer-motion";
import ServiceNumber from "./components/service/page";
import Marquee from "./components/marquee"
import Projects from "./components/work/page";
import FAQ from "./components/FAQ";
import Contact from "./components/contact";
import Image from "next/image";
import Nav from "./components/nav"
import Link from "next/link";
import CalendlyEmbed from "./components/calendly";
// General animation variants
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


const marqueeItems = [
  "Web Design",
  "Mobile Friendly",
  "E-Commerce",
  "Branding",
  "SEO",
  "UI/UX",
  "Custom Development",
];




export default function MinimalPortfolioWebsite() {

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





  return (
    <div id="Home" className="min-h-screen  bg-white ">
      {/* Header */}


      <section id="contact" className="">
     

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






      {/* Hero Section */}
      <motion.section
        className="py-32 md:py-48 bg-amber-400 overflow-hidden "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container  mx-auto px-8 text-center uppercase max-w-6xl ">
          <motion.div variants={fadeUp}>
            <Badge variant="outline" className="mb-8 md:text-lg  md:px-6 py-3 border-white">
              <Icon icon="lucide:sparkles" className="w-5 h-5 mr-3" />
              Award-winning design agency
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold mb-12 leading-tight text-black"
            variants={fadeUp}
          >
            We craft digital experiences that <span className="text-white font-plaster">inspire</span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed" variants={fadeUp}>
            Transform your brand with stunning web designs that convert visitors into customers.
            We blend creativity with strategy to deliver exceptional results.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={fadeUp}>
            <Button onClick={() => setIsOpen(true)}  size="lg" className="md:text-xl mx-18 md:mx-0 lg:px-12 py-6 bg-black text-white cursor-pointer ">
              <Icon icon="lucide:rocket" className="w-6 h-6 mr-3" /> Start Your Project
            </Button>
            <Link href="#project"><Button  size="lg" variant="outline" className="md:text-xl cursor-pointer px-12 py-6 border-white text-black hover:bg-gray-50 duration-1000">
              <Icon icon="lucide:play-circle" className="w-6 h-6 mr-3" /> View Our Work
            </Button></Link>
          </motion.div>
        </div>
      </motion.section>


      {/* Services Section */}
      

         {/* Services Section 2 */}

         <ServiceNumber/>

      {/* Featured Work Section */}
    

<Projects/>

      {/* Marquee Section */}
      
      
<Marquee/>

<FAQ/>

      {/* Trusted by Section */}
      

      {/* Contact/CTA Section */}
      <motion.section className="py-32 w-screen overflow-hidden " initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <div className="container mx-auto px-8 text-center max-w-5xl ">
          <motion.div className="w-20 h-20 bg-black hover:bg-amber-400 duration-700 ease-in-out rounded-full flex items-center justify-center mx-auto mb-12" variants={fadeUp}>
            <Icon icon="lucide:rocket" className="w-10 h-10 text-white " />
          </motion.div>
          <motion.h2 className="text-5xl  md:text-7xl font-heading font-bold mb-8 text-black" variants={fadeUp}>
            Ready to transform your digital presence?
          </motion.h2>
          <motion.p className="text-2xl font-bebas text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed" variants={fadeUp}>
            Let&apos;s work together to create something extraordinary. Get in touch and let&apos;s discuss your project.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={fadeUp}>
            <Button size="lg" className="text-xl px-12 py-6 bg-black text-white hover:bg-amber-400 duration-700 ease-in-out">
              <Icon icon="lucide:calendar" className="w-6 h-6 mr-3" /> Schedule a Call
            </Button>
            <Button onClick={() => setIsOpen(true)} size="lg" variant="outline" className="text-xl px-12 py-6 border-gray-300 text-black hover:bg-gray-50">
              <Icon icon="lucide:mail" className="w-6 h-6 mr-3" /> Send Message
            </Button>
          </motion.div>
        </div>
      </motion.section>

    
     

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
