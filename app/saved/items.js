<motion.section id="services" className="py-32" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="container mx-auto px-8">
          <motion.div className="text-center mb-24" variants={fadeUp}>
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-black">Our Services</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive design solutions to elevate your digital presence
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { title: "Web Design", desc: "Beautiful, responsive websites that capture your brand essence..." },
              { title: "Mobile Apps", desc: "Intuitive mobile experiences that delight users and drive engagement..." },
              { title: "E-commerce", desc: "Powerful online stores that convert visitors into customers..." },
              { title: "Branding", desc: "Complete brand identity solutions that make your business memorable..." },
            ].map((service, i) => (
              <motion.div key={i} className="border-b border-gray-200 pb-12" variants={fadeUp} custom={i}>
                <div className="flex items-start justify-between cursor-pointer group">
                  <div className="flex items-start space-x-8">
                    <span className="text-6xl font-heading font-bold text-gray-300 group-hover:text-black transition-colors">{`0${i + 1}`}</span>
                    <div>
                      <h3 className="text-3xl font-heading font-bold mb-6 text-black group-hover:text-gray-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">{service.desc}</p>
                    </div>
                  </div>
                  <Icon icon="lucide:plus" className="w-8 h-8 text-gray-400 group-hover:text-black transition-colors mt-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>




<motion.section id="work" className="py-32" initial="hidden" whileInView="visible" viewport={{ once: true }}>
<div className="container mx-auto px-8">
  <motion.div className="text-center mb-24" variants={fadeUp}>
    <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-black hover:text-amber-400 duration-700 ease-in-out">Featured Work</h2>
    <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
      Explore some of our recent projects that showcase our design expertise
    </p>
  </motion.div>
  <motion.div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
    {[
      { alt: "Fashion Forward Project", height: 300, img:"/space.jpg" },
      { alt: "TechFlow Dashboard", height: 300, img:"/nft.png" },
      { alt: "Brand Identity Project", height: 300, img:"/sunfish.png" },
      { alt: "Mobile App Design", height: 300, img:"/brooklyn.png" },
      { alt: "E-commerce Platform", height: 300, img:"/filmduowebsite.png" },
      { alt: "Web Application", height: 300, img:"/space.jpg" },
    ].map((work, i) => (
      <motion.div
        key={i}
        className="break-inside-avoid rounded-lg  hover:rounded-lg duration-500 hover:scale-105 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        
      >
        <img
          alt={work.alt}
          src={work.img}
          
          className="w-full rounded-lg object-cover "
        />
      </motion.div>
    ))}
  </motion.div>
</div>
</motion.section>