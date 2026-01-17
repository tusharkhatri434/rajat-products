import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedCard from '../components/AnimatedCard';
import productsData from '../data/products.json';
import { FaIndustry, FaCar, FaOilCan, FaWind, FaBolt, FaCog, FaTrophy, FaCheckCircle, FaMicroscope, FaGlobe, FaShieldAlt } from 'react-icons/fa';

export default function HomePage() {
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
      icon: FaCog
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Where Purity meets{' '}
              <span className="text-primary">next gen silver alloys</span>
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
                Contact us
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
              <div className="w-full h-full flex items-center justify-center">
                <img src="/homePage/home_img1.png" alt="Manufacturing Excellence" className="w-full h-full object-cover" />
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
                Leading the Industry Since 1989
              </h2>
              <p className="text-gray-800 mb-6 leading-relaxed">
                Located in Meerut's industrial hub, Rajat Products Pvt. Ltd. has been a trusted name in manufacturing high-quality silver and copper phosphorus brazing alloys, welding alloys and zari wire.
              </p>
              <p className="text-gray-800 mb-8 leading-relaxed">
              When our customers are not aware of what alloy they might require for accomplishing their manufacturing, we are always there to assist them with our technical expertise.              </p>
              <Button to="/about" variant="primary">
                Know more about us
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
              return (
                <AnimatedCard
                  key={industry.title}
                  index={index}
                  className="group bg-primary p-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
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
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center text-white"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <IconComponent className="text-3xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Experience Excellence?
          </h2>
          <p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-100 mb-8"
          >
            Let's discuss how our premium brazing solutions can elevate your manufacturing processes
          </p>
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button to="/products" variant="outline">
              View Our Products
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}

