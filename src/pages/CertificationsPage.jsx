import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function CertificationsPage() {
  const certifications = [
    {
      icon: '🏆',
      title: 'ISO 14001:2015',
      subtitle: 'Environmental Management System',
      description: 'Demonstrates our commitment to environmental responsibility and sustainable manufacturing practices, ensuring minimal ecological impact in all our operations'
    },
    {
      icon: '✅',
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management System',
      description: 'Certified quality management systems ensuring consistent product quality, customer satisfaction, and continuous improvement across all processes'
    }
  ];

  const standards = [
    {
      code: 'AWS',
      full: 'American Welding Society',
      description: 'A5.8, A5.31 standards'
    },
    {
      code: 'DIN',
      full: 'German Institute for Standardization',
      description: '8513 standards'
    },
    {
      code: 'BS',
      full: 'British Standards',
      description: '1845 standards'
    },
    {
      code: 'IS',
      full: 'Indian Standards',
      description: 'Bureau of Indian Standards compliance'
    },
    {
      code: 'EN',
      full: 'European Norms',
      description: '1044 standards'
    }
  ];

  const qualityProcess = [
    {
      step: '1',
      title: 'Raw Material Inspection',
      description: 'Rigorous testing of all incoming raw materials for purity and composition',
      icon: '🔍'
    },
    {
      step: '2',
      title: 'Alloy Formulation',
      description: 'Precise mixing and melting under controlled atmosphere to meet specification requirements',
      icon: '⚗️'
    },
    {
      step: '3',
      title: 'Melting & Casting',
      description: 'Advanced induction melting with continuous temperature and composition monitoring',
      icon: '🔥'
    },
    {
      step: '4',
      title: 'Quality Testing',
      description: 'Comprehensive testing for chemical composition, mechanical properties, and dimensional accuracy',
      icon: '🧪'
    },
    {
      step: '5',
      title: 'Final Inspection',
      description: 'Multi-point quality approval before packaging',
      icon: '✓'
    },
    {
      step: '6',
      title: 'Packaging & Dispatch',
      description: 'Secure packaging with full traceability and certification documentation',
      icon: '📦'
    }
  ];

  const commitments = [
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Seasoned R&D, quality, and production experts with decades of metallurgical experience'
    },
    {
      icon: '📋',
      title: 'Documentation',
      description: 'Complete traceability and certification documentation for every batch'
    },
    {
      icon: '🔄',
      title: 'Continuous Improvement',
      description: 'Regular quality audits and process refinements to maintain highest standards'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Certifications & Quality Assurance
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Committed to international standards and meticulous quality control at every step
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internationally Recognized Excellence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Internationally Recognized Excellence
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our certifications demonstrate unwavering commitment to quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-teal-500 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex items-start space-x-4">
                  <motion.div 
                    className="text-6xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-teal-600 font-medium mb-3">{cert.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Standards Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              International Standards Compliance
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our products meet and exceed global industry standards
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.code}
                initial={{ opacity: 0, y: 20, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: index * 0.06
                }}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }
                }}
                className="bg-white rounded-lg p-6 text-center border-2 border-gray-200 hover:border-teal-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-teal-600">{standard.code}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{standard.full}</h3>
                <p className="text-xs text-gray-600">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Quality Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A systematic approach to quality that ensures every product meets the highest standards
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {qualityProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: index * 0.08
                }}
                className="relative"
              >
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 h-full hover:border-teal-500 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {process.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="text-3xl mb-2">{process.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h3>
                      <p className="text-gray-600 text-sm">{process.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Quality Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Commitment
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: index * 0.08
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }
                }}
                className="bg-teal-600 text-white p-6 md:p-8 rounded-2xl text-center shadow-lg cursor-pointer"
              >
                <div className="text-4xl md:text-5xl mb-4">{commitment.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{commitment.title}</h3>
                <p className="text-teal-100 text-xs md:text-sm leading-relaxed">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-50 to-gray-50 rounded-lg p-8 md:p-12 text-center"
          >
            <svg className="w-16 h-16 text-teal-600 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality is Our Promise</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Rajat Products, quality assurance is not just a process—it's embedded in our DNA. Every product undergoes rigorous testing and verification to ensure it meets our exacting standards and exceeds your expectations. Our commitment to excellence is backed by international certifications, state-of-the-art testing facilities, and decades of metallurgical expertise.
            </p>
            <p className="text-teal-700 font-medium italic">
              "Quality is never an accident; it is always the result of intelligent effort."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Explore Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-teal-100 mb-8"
          >
            Discover our comprehensive range of certified, high-quality brazing alloys
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button to="/products" variant="outline">
              View Product Range
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

