import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedCard from '../components/AnimatedCard';
import { FaShieldAlt, FaMicroscope, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

export default function InfrastructurePage() {
  const stats = [
    { value: '500+ MT', label: 'Annual Production' },
    { value: '85%', label: 'Process Automation' },
    { value: '50+', label: 'Skilled Professionals' },
    {value: '99.9%', label: 'First Pass Yield'}
  ];

  const facilities = [
    {
      title: 'Manufacturing Plant',
      subtitle: 'State-of-the-art 50,000 sq ft facility equipped with modern infrastructure',
      features: [
        'Climate controlled environment',
        'Clean room facilities',
        'Advanced ventilation systems'
      ]
    },
    {
      title: 'Melting & Casting',
      subtitle: 'High-precision induction furnaces for controlled alloy melting',
      features: [
        'Induction furnaces',
        'Vacuum casting systems',
        'Temperature precision ±2°C'
      ]
    },
    {
      title: 'Wire Drawing Unit',
      subtitle: 'Multi-stage wire drawing machines for various gauge requirements',
      features: [
        'Fine wire capability',
        'Multi-die systems',
        'Automated lubrication'
      ]
    },
    {
      title: 'Rolling Mill',
      subtitle: 'Precision rolling equipment for sheets and strips production',
      features: [
        'Hot & cold rolling',
        'Thickness control',
        'Surface finishing'
      ]
    }
  ];

  const laboratories = [
    {
      title: 'Metallurgical Lab',
      description: 'Comprehensive material analysis and microstructure examination',
      tests: [
        'Optical microscopy',
        'Grain structure analysis',
        'Phase identification'
      ]
    },
    {
      title: 'Chemical Analysis Lab',
      description: 'Precise composition testing & verification',
      tests: [
        'Optical microscopy',
        'Grain structure analysis',
        'Phase identification'
      ]
    },
    {
      title: 'Mechanical Testing',
      description: 'Physical property testing & validation',
      tests: [
        'Tensile strength testing',
        'Hardness measurement',
        'Elongation analysis'
      ]
    }
  ];

  const technologies = [
    {
      icon: FaFileAlt,
      title: 'Induction Melting Technology',
      description: 'Advanced electromagnetic induction systems for precise temperature control & efficient melting of alloys.'
    },
    {
      icon: FaFileAlt,
      title: 'CNC Wire Drawing',
      description: 'Computer-controlled wire drawing systems ensuring consistent diameter & surface quality across production runs.'
    },
    {
      icon: FaCheckCircle,
      title: 'Automated Quality Control',
      description: 'Real-time monitoring systems with automated inspection for dimensional accuracy & surface defects.'
    },
    {
      icon: FaCheckCircle,
      title: 'Advanced Spectroscopy',
      description: 'State-of-the-art spectrometers for rapid & accurate chemical composition analysis of all products.'
    }
  ];

  const innovation = [
    {
      title: 'Dedicated R&D Team',
      description: 'Our experienced R&D team focuses on continuous innovation including new alloy formulations, customized solutions, and process optimization',
      points: [
        'Custom alloy development',
        'Process improvement',
        'Application research',
        'Quality enhancement'
      ]
    },
    {
      title: 'Continuous Improvement',
      description: 'We invest in cutting-edge infrastructure and constantly upgrade our facilities to maintain technological leadership',
      points: [
        'Equipment modernization',
        'Capacity expansion',
        'Technology integration',
        'Sustainability initiatives'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-white py-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/infra/banner.png)',
            // filter: 'grayscale(100%)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Title Section with Glass Effect */}
            <div className="bg-white/15 backdrop-blur-xs rounded-2xl px-8 py-10 mb-12 max-w-5xl mx-auto border border-white/20">
              <p className="text-sm uppercase tracking-widest text-black mb-4">
                World Class Facilities
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Infrastructure & <span className="text-[#5aa3c5]">Capabilities</span>
              </h1>
              <p className="text-lg text-black max-w-4xl mx-auto leading-relaxed">
                Our modern manufacturing facility combines cutting-edge technology with decades of
                metallurgical expertise to deliver brazing alloys of uncompromising quality.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-black text-xs md:text-sm uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Production Facilities */}
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
              Production Facilities
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our manufacturing infrastructure is designed for precision, efficiency & consistent quality output
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {facilities.map((facility, index) => (
              <AnimatedCard
                key={facility.title}
                index={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2C7596] transition-colors duration-300">
                    {facility.title}
                  </h3>
                  <p className="text-gray-700 text-sm font-medium mb-4">{facility.subtitle}</p>
                  <ul className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Shield Icon */}
                <div className="absolute bottom-6 right-6 transition-transform duration-300 group-hover:scale-110">
                  <FaShieldAlt className="text-4xl text-gray-300" />
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Laboratories */}
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
              Testing Laboratories
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive in-house testing facilities ensure every product meets stringent quality specifications.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {laboratories.map((lab, index) => (
              <AnimatedCard
                key={lab.title}
                index={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#4a7c92] rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <FaMicroscope className="text-3xl text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2C7596] mb-3 text-center">
                  {lab.title}
                </h3>
                <p className="text-gray-700 text-sm mb-6 text-center">{lab.description}</p>
                <ul className="space-y-2">
                  {lab.tests.map((test, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="mr-2 mt-1">•</span>
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technologies */}
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
              Advanced Technologies
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Leveraging cutting-edge technology to deliver superior brazing solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <AnimatedCard
                  key={tech.title}
                  index={index}
                  className="flex items-start gap-6"
                  disableHover={true}
                  disableTap={true}
                >
                  {/* Icon Box */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-[#4a7c92] rounded-2xl flex items-center justify-center">
                      <IconComponent className="text-4xl text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation at Our Core */}
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
              Innovation at Our Core
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovation.map((item, index) => (
              <AnimatedCard
                key={item.title}
                index={index}
                className="bg-white p-8 rounded-lg border-2 border-gray-200 shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#2C7596] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>
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
            Experience Our Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-100 mb-8"
          >
            Visit our facilities or schedule a virtual tour to see our world-class infrastructure in action
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button to="/products" variant="outline">
              Contact Us
            </Button>
            <Button to="/certifications" variant="outline">
              View Our Certifications
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
