import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedCard from '../components/AnimatedCard';
import ScrollReveal from '../components/ScrollReveal';
import { FaIndustry, FaCar, FaOilCan, FaWind, FaBolt, FaCog, FaTrophy, FaCheckCircle, FaMicroscope, FaGlobe, FaShieldAlt, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

const forms = [
  { 
    label: 'Molly Wire', 
    category: 'Non-ferrous Wire',
    description: 'High-performance molybdenum wire for extreme temperatures, corrosion, and high load environments.', 
    image: '/images/rp_braze.png',
    bullets: [
      'Extremely High Melting Point (2620°C)',
      'Excellent Dimensional Stability',
      'Corrosion & Oxidation Resistant'
    ]
  },
  { 
    label: 'Er Cu SnC', 
    category: 'Brazing and Welding',
    description: 'Provides corrosion-resistant strong joints in copper piping.', 
    image: '/images/rp_copper.png',
    bullets: [
      'Improved corrosion resistance',
      'Strong joints',
      'Ideal for piping and tubing applications'
    ]
  },
  { 
    label: 'Induction Brazing Rings', 
    category: 'Brazing and Welding',
    description: 'Rings for induction heating and joining in industrial applications.', 
    image: '/images/rp_phos.png',
    bullets: [
      'Pre-formed rings for uniform joints',
      'Excellent repeatability',
      'Reduces manual brazing time'
    ]
  },
  { 
    label: 'Pure Silver Wires', 
    category: 'Fine Wires',
    description: 'Ultra-thin, high-purity silver wires for high-precision electronic and scientific equipment.', 
    image: '/images/zari_wire.png',
    bullets: [
      'Exceptional electrical conductivity',
      'Minimal surface oxidation',
      'High thermal sensitivity for sensors'
    ]
  }
];

export default function HomePage() {
  const [currentFormSlide, setCurrentFormSlide] = useState(0);

  // Build the full slides array (products + "View All" card)
  const allSlides = [...forms, { label: 'View All', isViewAll: true }];
  const totalSlides = allSlides.length;
  const visibleCards = 3;
  const slideWidth = 100 / visibleCards;
  // Max index so the last position shows a full row of 3 cards
  const maxSlideIndex = Math.max(totalSlides - visibleCards, 0);

  // Auto-advance slider (infinite loop)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFormSlide(prev => prev >= maxSlideIndex ? 0 : prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [maxSlideIndex]);

  const industries = [
    {
      title: 'Induction Motor',
      description: 'High-performance brazing for motor applications',
      icon: FaCog
    },
    {
      title: 'Machine Tool Manufacturing',
      description: 'Precision alloys for machine tools',
      icon: FaCog
    },
    {
      title: 'Pump Industries',
      description: 'Reliable solutions for pump manufacturing',
      icon: FaCog
    },
    {
      title: 'ISRO',
      description: 'Specialized alloys for space applications',
      icon: FaCog
    },
    {
      title: 'Electric Lux Industries',
      description: 'Premium brazing for electrical appliances',
      icon: FaCog
    },
    {
      title: 'View All Products',
      description: 'Explore our complete range of solutions',
      icon: FaCog,
      isLink: true
    }
  ];

  const whyChooseUs = [
    {
      icon: FaTrophy,
      title: '30+ Years',
      description: 'Proven track record & technical expertise since 1989.'
    },
    {
      icon: FaCheckCircle,
      title: 'ISO 9001:2015 Certified',
      description: 'Certified quality management systems & ISO 14001:2015'
    },
    {
      icon: FaMicroscope,
      title: 'In House R&D & Custom Development',
      description: 'Modern facility with advanced production capabilities & on time order completion promises.'
    },
    {
      icon: FaGlobe,
      title: 'Trusted By Global Leaders',
      description: 'Delivering reliable brazing solutions that drive efficiency and quality.'
    }
  ];

  const values = [
    {
      icon: FaShieldAlt,
      title: 'High-Tensile Strength',
      description: 'Strong mechanical properties for heavy-duty use. Maintains reliability under stress and load.'
    },
    {
      icon: FaShieldAlt,
      title: 'Corrosion Resistant',
      description: 'Withstands harsh environments without degradation. Ensures long-lasting durability & performance.'
    },
    {
      icon: FaShieldAlt,
      title: 'Superior Conductivity',
      description: 'Provides superior electrical and thermal efficiency. Reduces energy loss for optimized applications.'
    }
  ];

  return (
    <div>
      {/* Hero Section – Banner Image */}
      <section className="relative overflow-hidden" style={{ minHeight: '600px' }}>
        <img
          src="/homePage/homepage_banner.jpeg"
          alt="Rajat Products – Where Purity Meets Next Gen Silver Alloys"
          className="w-full h-full object-cover absolute inset-0"
          style={{ minHeight: '600px' }}
        />
        {/* Subtle dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center" style={{ minHeight: '600px' }}>
          <div className="text-center py-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-3xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg"
            >
              WHERE PURITY MEETS{' '}
              <span className="text-[#7ecbee]">NEXT GEN SILVER ALLOYS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow"
            >
              Delivering trusted brazing solutions since 1989
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button to="/products" variant="primary">
                Explore Products
              </Button>
              <Button to="/contact" variant="secondary">
                Contact us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leading Since 1989 Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading the Industry Since 1989
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Located in Meerut's industrial hub, Rajat Products Pvt. Ltd. has been a trusted name in manufacturing high-quality silver and copper phosphorus brazing alloys, welding alloys and zari wire since 1989.",
                  "We are known for having a customer centric approach, focusing on value creation, digital engagement and personalized solutions.",
                  "Our team at Rajat Products is focused on Data Driven Customization—bridging the gap between our customers and their needs."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <p className="text-gray-800 leading-relaxed font-medium">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              <Button to="/about" variant="primary">
                Know more about us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Different Available Forms Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-widest text-primary/60 mb-2 font-semibold">Silver & Copper Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a415a] mb-3">
              A Glimpse At Our Silver And Copper Expertise
            </h2>
            <p className="text-gray-500 text-base font-medium">Built to perform. Designed to last.</p>
          </motion.div>

          {/* Slider Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => setCurrentFormSlide(prev => prev <= 0 ? maxSlideIndex : prev - 1)}
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1a415a] hover:bg-[#1a415a] hover:text-white transition-all duration-300 border border-gray-200"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => setCurrentFormSlide(prev => prev >= maxSlideIndex ? 0 : prev + 1)}
              className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1a415a] hover:bg-[#1a415a] hover:text-white transition-all duration-300 border border-gray-200"
            >
              <FaChevronRight className="text-sm" />
            </button>

            {/* Cards Track */}
            <div className="overflow-hidden mx-2 lg:mx-0">
              <motion.div
                className="flex"
                animate={{ x: `-${currentFormSlide * slideWidth}%` }}
                transition={{ type: "tween", duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                {allSlides.map((form) => (
                  <div
                    key={form.label}
                    className="px-3"
                    style={{ minWidth: `${slideWidth}%`, maxWidth: `${slideWidth}%` }}
                  >
                    {form.isViewAll ? (
                      /* "View All Products" Special Card */
                      <Link to="/products" className="block h-full">
                        <div className="bg-linear-to-br from-[#f0f7ff] to-[#e8f1fc] h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border-2 border-dashed border-[#1a415a]/15 hover:border-[#1a415a]/30 flex flex-col">
                          <div className="aspect-4/3 w-full flex flex-col items-center justify-center">
                            <div className="w-16 h-16 bg-[#1a415a] rounded-full flex items-center justify-center mb-4 shadow-lg">
                              <FaIndustry className="text-2xl text-white" />
                            </div>
                            <h3 className="text-xl font-black text-[#1a415a]">View All Products</h3>
                          </div>
                          <div className="p-6 grow flex flex-col justify-between">
                            <div>
                              <p className="text-gray-500 text-sm mb-5 text-center">Discover our complete collection of premium alloy solutions.</p>
                              <div className="space-y-2.5 mb-6">
                                {['Complete product catalog', 'Detailed specifications', 'Custom alloy solutions'].map((bullet, i) => (
                                  <div key={i} className="flex items-center gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                    <span className="text-xs font-medium text-gray-600">{bullet}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="w-full py-3.5 bg-[#1a415a] rounded-xl text-white font-bold text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-primary transition-all duration-300">
                              EXPLORE ALL
                              <FaArrowRight className="text-xs" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      /* Regular Product Card */
                      <div className="bg-white h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20 flex flex-col group">
                        {/* Image – 4:3 aspect ratio */}
                        <div className="aspect-4/3 w-full overflow-hidden relative">
                          <img
                            src={form.image}
                            alt={form.label}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                          {/* Category Tag */}
                          <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#1a415a]/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded-md border border-white/10">
                            {form.category}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="p-6 grow flex flex-col">
                          <h3 className="text-lg font-bold text-[#1a415a] mb-2 group-hover:text-primary transition-colors duration-300">
                            {form.label}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                            {form.description}
                          </p>

                          {/* Bullet Points */}
                          <div className="space-y-2.5 mb-6">
                            {form.bullets.map((bullet, i) => (
                              <div key={i} className="flex items-center gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                <span className="text-xs font-medium text-gray-600">{bullet}</span>
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="mt-auto">
                            <Link
                              to="/products"
                              className="w-full py-3.5 bg-[#1a415a] rounded-xl text-white font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary shadow-md hover:shadow-primary/25"
                            >
                              VIEW DETAILS
                              <FaArrowRight className="text-xs" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots + View All Button */}
            <div className="flex flex-col items-center mt-10 gap-6">
              <div className="flex gap-2">
                {Array.from({ length: maxSlideIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentFormSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${i === currentFormSlide ? 'w-8 bg-[#1a415a]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <Link
                to="/products"
                className="px-8 py-3 bg-[#1a415a] text-white rounded-lg font-bold text-sm tracking-wider hover:bg-primary transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2"
              >
                View All Products
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries we serve
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of high-quality brazing alloys & specialized wires for diverse industrial applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              const card = (
                <AnimatedCard
                  key={industry.title}
                  index={index}
                  reveal={index % 2 === 0 ? 'zoom-in' : 'fade-up'}
                  className="group bg-primary p-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer flex flex-col h-full"
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                        <IconComponent className="text-2xl text-white" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">{industry.title}</h3>
                    <p className="text-gray-100 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </AnimatedCard>
              );

              return industry.isLink ? (
                <Link key={industry.title} to="/products" className="block h-full">
                  {card}
                </Link>
              ) : (
                <div key={industry.title} className="h-full">
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Rajat Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section: Image + Text */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="w-full h-full flex items-center justify-center">
                <img src="/homePage/home_img2.png" alt="Why Choose Rajat Products" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why choose Rajat Products
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Rajat Products, we are dedicated to your success—delivering reliable brazing solutions that drive efficiency & quality in your operations.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Proven track record and technical expertise since 1989.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Customer-focused innovation and reliability.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Modern facility with advanced production capabilities & on time order completion promises.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <AnimatedCard
                  key={item.title}
                  index={index}
                  reveal="fade-up"
                  className="group text-center bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="text-2xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <ScrollReveal
                  key={value.title}
                  animation={index % 2 === 0 ? 'fade-up' : 'zoom-in'}
                  delay={index * 0.08}
                  className="text-center text-white transition-transform duration-300 hover:scale-[1.03]"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <IconComponent className="text-3xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{value.description}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
