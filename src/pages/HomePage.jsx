import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedCard from '../components/AnimatedCard';
import ScrollReveal from '../components/ScrollReveal';
import { FaCog, FaTrophy, FaCheckCircle, FaMicroscope, FaGlobe, FaShieldAlt, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import slideRod from '../assets/glimps/rods.png';
import slideRings from '../assets/glimps/rings.png';
import glimpsStrips from '../assets/glimps/strips.png';
import glimpsFoils from '../assets/glimps/foils.png';
import glimpsWire from '../assets/glimps/wire.png';

/** Order: Fine Wire → Rings → Strips → Foils → Rod (per product team) */
const forms = [
  {
    label: 'Fine Wire',
    description: '0.1mm – 2mm fine wires for the most demanding applications.',
    image: glimpsWire,
  },
  {
    label: 'Rings',
    description: 'Pre-formed rings for consistent joint repeatability.',
    image: slideRings,
  },
  {
    label: 'Strips',
    description: 'Rolled strips for complex assemblies and volume production.',
    image: glimpsStrips,
  },
  {
    label: 'Foils',
    description: 'Ultra-thin foils for precision electronic and medical joints.',
    image: glimpsFoils,
  },
  {
    label: 'Rod',
    description: 'Precision-cut rods for torch and furnace brazing.',
    image: slideRod,
  },
];

export default function HomePage() {
  const [currentFormSlide, setCurrentFormSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(() => {
    if (typeof window === 'undefined') return 2;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  });

  useEffect(() => {
    const onResize = () => {
      let nextVisible = 1;
      if (window.innerWidth >= 1024) nextVisible = 3;
      else if (window.innerWidth >= 768) nextVisible = 2;
      setVisibleCards(nextVisible);
      const maxIdx = Math.max(forms.length - nextVisible, 0);
      setCurrentFormSlide((prev) => Math.min(prev, maxIdx));
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const allSlides = forms;
  const totalSlides = allSlides.length;
  const slideWidth = 100 / visibleCards;
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
          src="/media/home/hero-banner.jpeg"
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
            <p className="text-sm uppercase tracking-widest text-primary/60 mb-2 font-semibold">Silver &amp; copper expertise</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 tracking-tight">
              A glimpse at our silver and copper expertise
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-semibold uppercase tracking-wide">Different available forms</p>
          </motion.div>

          {/* Slider Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              type="button"
              onClick={() => setCurrentFormSlide(prev => prev <= 0 ? maxSlideIndex : prev - 1)}
              className="absolute left-0 sm:-left-3 lg:-left-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1a415a] shadow-lg transition-all duration-300 hover:bg-[#1a415a] hover:text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={() => setCurrentFormSlide(prev => prev >= maxSlideIndex ? 0 : prev + 1)}
              className="absolute right-0 sm:-right-3 lg:-right-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1a415a] shadow-lg transition-all duration-300 hover:bg-[#1a415a] hover:text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-sm" />
            </button>

            {/* Cards Track — pl/pr leave room for arrows on mobile */}
            <div className="overflow-hidden mx-0 px-12 sm:px-10 md:px-8 lg:mx-0 lg:px-0 py-2">
              <motion.div
                className="flex"
                animate={{ x: `-${currentFormSlide * slideWidth}%` }}
                transition={{ type: "tween", duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                {allSlides.map((form) => (
                  <div
                    key={form.label}
                    className="box-border px-0.5 sm:px-1 md:px-2"
                    style={{ minWidth: `${slideWidth}%`, maxWidth: `${slideWidth}%` }}
                  >
                    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-500 group hover:border-primary/20 hover:shadow-xl">
                      <div className="relative h-56 w-full shrink-0 overflow-hidden bg-white sm:h-60 md:h-72 lg:h-72">
                        <img
                          src={form.image}
                          alt={form.label}
                          className="block h-full w-full object-cover object-center"
                          loading="eager"
                          decoding="async"
                        />
                      </div>
                      <div className="flex grow flex-col">
                        <div className="flex justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#1a415a]/10 flex items-center justify-center text-[#1a415a] shrink-0">
                            <FaShieldAlt className="text-xl" aria-hidden />
                          </div>
                        </div>
                        <h3 className="text-center text-lg md:text-xl font-bold text-primary mb-3 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                          {form.label}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed text-center">
                          {form.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex flex-col items-center mt-10 gap-8">
              <div className="flex flex-wrap justify-center gap-2">
                {Array.from({ length: maxSlideIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentFormSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${i === currentFormSlide ? 'w-8 bg-primary' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <Button
                to="/products"
                variant="primary"
                className="rounded-xl px-10 py-3.5 text-sm font-bold tracking-wider shadow-md hover:shadow-lg !inline-flex items-center gap-2"
              >
                View Products
                <FaArrowRight className="text-xs" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Partner Section */}
      <section className="py-16 bg-primary text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Visit Our Manufacturing Partner
            </h3>
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-black text-white mb-8">
              Maheshwari Wires Pvt.Ltd.
            </h2>
            <a
              href="https://maheshwariwires.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors duration-300 text-lg shadow-lg"
            >
              Visit Website
            </a>
          </motion.div>
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
                <img src="/media/home/why-choose.png" alt="Why Choose Rajat Products" className="w-full h-full object-cover" />
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
