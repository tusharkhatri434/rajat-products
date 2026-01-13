import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedCard from '../components/AnimatedCard';
import { FaShieldAlt } from 'react-icons/fa';

export default function CertificationsPage() {
  const certifications = [
    {
      title: 'ISO 14001:2015',
      subtitle: 'Environmental Management System',
      description: 'Demonstrates our commitment to environmental responsibility & sustainable manufacturing practices'
    },
    {
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management System',
      description: 'International standard that demonstrates our ability to consistently provide products and services that meet customer & regulatory requirements.'
    }
  ];

  const standards = [
    {
      code: 'AWS',
      full: 'American Welding Society Standards'
    },
    {
      code: 'DIN',
      full: 'German Institute for Standardization'
    },
    {
      code: 'BS',
      full: 'British Standards'
    },
    {
      code: 'IS',
      full: 'Indian Standards'
    },
    {
      code: 'EN',
      full: 'European Standards'
    }
  ];

  const qualityProcess = [
    {
      step: '1',
      title: 'Raw Material Inspection',
      description: 'Thorough examination of incoming materials for purity and composition'
    },
    {
      step: '2',
      title: 'Alloy Formulation',
      description: 'Precise mixing according to specification requirements'
    },
    {
      step: '3',
      title: 'Melting & Casting',
      description: 'Controlled melting in advanced furnace systems'
    },
    {
      step: '4',
      title: 'Quality Testing',
      description: 'Comprehensive testing for all critical parameters'
    },
    {
      step: '5',
      title: 'Final Inspection',
      description: 'Final quality approval before packaging'
    },
    {
      step: '6',
      title: 'Packaging & Dispatch',
      description: 'Secure packaging for safe delivery'
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
      <section className="relative bg-[#1f5c7a] text-white py-20">
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
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
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
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Internationally Recognized Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Internationally recognized certifications that validate our commitment to quality & environmental responsibility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <AnimatedCard
                key={cert.title}
                index={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <FaShieldAlt className="text-5xl text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-[#2C7596] font-medium mb-3">{cert.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </AnimatedCard>
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
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              International Standards Compliance
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our products meet and exceed global industry standards
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {standards.map((standard, index) => (
              <AnimatedCard
                key={standard.code}
                index={index}
                className="group bg-white rounded-xl p-6 text-center border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#4a7c92] rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <FaShieldAlt className="text-3xl text-white" />
                </div>
                <h3 className="font-bold text-[#2C7596] text-xl mb-2">{standard.code}</h3>
                <p className="text-sm text-gray-700 font-medium">{standard.full}</p>
              </AnimatedCard>
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
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A systematic approach to quality that ensures every product meets the highest standards
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-14">
            {qualityProcess.map((process, index) => (
              <AnimatedCard
                key={process.step}
                index={index}
                className="relative"
                disableHover={true}
                disableTap={true}
              >
                {/* Number Circle - positioned outside */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-[#2f6f8f] flex items-center justify-center text-white font-bold text-lg">
                    {process.step}
                  </div>
                </div>

                {/* Card */}
                <div className="h-full border border-gray-300 rounded-xl px-6 py-5 pl-10 bg-white hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Quality Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Commitment
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dedicated to delivering excellence through expertise, documentation, and continuous improvement
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <AnimatedCard
                key={commitment.title}
                index={index}
                className="group bg-white p-6 md:p-8 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[#1f5c7a] rounded-full flex items-center justify-center text-3xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    {commitment.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1f5c7a] transition-colors duration-300">{commitment.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{commitment.description}</p>
              </AnimatedCard>
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
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-[#2C7596]/10 to-gray-50 rounded-lg p-8 md:p-12 text-center"
          >
            <svg className="w-16 h-16 text-[#2C7596] mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
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
            <p className="text-[#1f5c7a] font-medium italic">
              "Quality is never an accident; it is always the result of intelligent effort."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C7596] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Explore Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-100 mb-8"
          >
            Discover our comprehensive range of certified, high-quality brazing alloys
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
