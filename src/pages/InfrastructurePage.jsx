import Button from '../components/Button';
import { FaShieldAlt, FaMicroscope, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

export default function InfrastructurePage() {
  const stats = [
    { value: '8,000+ MT', label: 'Annual Capacity' },
    { value: '99%', label: 'Quality Compliance' },
    { value: '24/7', label: 'Production Support' }
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
      <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d8aaf] to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Infrastructure & <span className="text-[#5aa3c5]">Capabilities</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our modern, state-of-the-art facility combines cutting-edge technology with decades of metallurgical expertise to deliver consistent, high-quality brazing products at every scale
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#5aa3c5] mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Production Facilities
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our manufacturing infrastructure is designed for precision, efficiency & consistent quality output
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {facilities.map((facility, index) => (
              <div
                key={facility.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
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
                <div className="absolute bottom-6 right-6">
                  <FaShieldAlt className="text-4xl text-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Laboratories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testing Laboratories
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive in-house testing facilities ensure every product meets stringent quality specifications.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {laboratories.map((lab, index) => (
              <div
                key={lab.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: index * 0.08
                }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#4a7c92] rounded-lg flex items-center justify-center">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technologies
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Leveraging cutting-edge technology to deliver superior brazing solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6"
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation at Our Core */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Innovation at Our Core
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovation.map((item, index) => (
              <div
                key={item.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg border-2 border-gray-200"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C7596] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Experience Our Capabilities
          </h2>
          <p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-100 mb-8"
          >
            Visit our facilities or schedule a virtual tour to see our world-class infrastructure in action
          </p>
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button to="/products" variant="outline">
              Contact Us
            </Button>
            <Button to="/certifications" variant="outline">
              View Our Certifications
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

