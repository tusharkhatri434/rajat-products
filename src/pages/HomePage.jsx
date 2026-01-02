import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import productsData from '../data/products.json';

export default function HomePage() {
  const industries = [
    {
      title: 'Refrigeration & HVAC',
      description: 'High-performance brazing solutions for refrigeration systems',
      icon: '❄️'
    },
    {
      title: 'Automobile Manufacturing',
      description: 'Reliable alloys for automotive component joining',
      icon: '🚗'
    },
    {
      title: 'Petro Industries',
      description: 'Corrosion-resistant alloys for harsh environments',
      icon: '🛢️'
    },
    {
      title: 'Air Conditioning',
      description: 'Specialized brazing for AC system components',
      icon: '🌡️'
    },
    {
      title: 'Electrical Industries',
      description: 'High-conductivity solutions for electrical applications',
      icon: '⚡'
    },
    {
      title: 'General Manufacturing',
      description: 'Versatile alloys for diverse industrial needs',
      icon: '⚙️'
    }
  ];

  const whyChooseUs = [
    {
      icon: '🏆',
      title: '35+ Years',
      description: 'Proven track record in metallurgical excellence since 1989'
    },
    {
      icon: '✅',
      title: 'ISO 9001:2015 Certified',
      description: 'Certified quality management systems & ISO 14001:2015'
    },
    {
      icon: '🔬',
      title: 'In-House R&D & Testing Laboratories',
      description: 'Advanced testing facilities ensuring product integrity & quality specifications'
    },
    {
      icon: '🌐',
      title: 'Trusted by Global Leaders',
      description: 'Serving Fortune 500 clients across continents with excellence'
    }
  ];

  const values = [
    {
      icon: '💪',
      title: 'High Tensile Strength',
      description: 'High-performance brazing solutions delivering exceptional tensile strength & joint reliability for critical industrial applications'
    },
    {
      icon: '🛡️',
      title: 'Corrosion Resistance',
      description: 'Advanced formulations providing superior corrosion resistance in hostile environments, extending component life significantly'
    },
    {
      icon: '🔥',
      title: 'Superior Conductivity',
      description: 'Optimized thermal & electrical conductivity for HVAC, refrigeration, & electrical assemblies'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Where Purity meets{' '}
              <span className="text-teal-600">next gen silver alloys</span>
              <br />
              for demanding applications
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
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
              <Button to="/about" variant="secondary">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leading Since 1989 Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
              className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">
                Manufacturing Excellence
              </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading the Industry Since 1989
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over three decades of expertise, Rajat Products stands as a pioneer in manufacturing high-quality silver and copper phosphorus brazing alloys. We've set industry benchmarks for purity, consistency, and performance excellence.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our commitment to innovation and quality has made us the preferred choice for HVAC, refrigeration, electrical, and general manufacturing industries worldwide.
              </p>
              <Button to="/about" variant="primary">
                Discover Our Story
              </Button>
            </motion.div>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries we serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of brazing alloys tailored for specific industrial applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
              initial={{ opacity: 0, y: 30, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
                delay: index * 0.08
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }
              }}
                className="group bg-teal-600 text-white p-4 md:p-6 rounded-2xl hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-teal-400 relative overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-3xl md:text-4xl mb-3"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {industry.icon}
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-teal-100 text-xs md:text-sm leading-relaxed">{industry.description}</p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Rajat Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why choose Rajat Products
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Rajat Products, we're dedicated to excellence in every aspect. Our cutting-edge technology and quality-driven approach ensure unmatched reliability and superior performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group text-center bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: index * 0.2 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                
                {/* Bottom Accent */}
                <div className="mt-4 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group bg-teal-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-teal-400 relative overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-teal-100 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Experience Excellence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-teal-100 mb-8"
          >
            Let's discuss how our premium brazing solutions can elevate your manufacturing processes
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button to="/products" variant="outline">
              View Our Products
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

