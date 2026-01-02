import Button from '../components/Button';

export default function InfrastructurePage() {
  const stats = [
    { value: '8,000+ MT', label: 'Annual Capacity' },
    { value: '99%', label: 'Quality Compliance' },
    { value: '24/7', label: 'Production Support' }
  ];

  const facilities = [
    {
      icon: '🏭',
      title: 'Manufacturing Plant',
      description: 'State-of-the-art 50,000 sq ft facility equipped with modern melting and casting systems',
      features: [
        'Advanced induction furnaces',
        'Automated casting systems',
        'Climate-controlled environment',
        '24/7 production capability'
      ]
    },
    {
      icon: '🔥',
      title: 'Melting & Casting',
      description: 'High-precision induction furnaces for consistent alloy composition',
      features: [
        'Ultra-pure argon atmosphere',
        'Continuous temperature monitoring',
        'Precision composition control',
        'Non-stop quality tracking'
      ]
    },
    {
      icon: '⚙️',
      title: 'Wire Drawing Unit',
      description: 'Multi-stage wire drawing machines for various gauge requirements',
      features: [
        'Gauge range: 0.5mm - 5mm',
        'Precision diameter control',
        'Surface treatment capabilities',
        'High-speed production'
      ]
    },
    {
      icon: '🎯',
      title: 'Rolling Mill',
      description: 'Precision cold-rolling equipment for strips and foils production',
      features: [
        'Ultra-thin strip capability',
        'Consistent thickness control',
        'Surface finish options',
        'Multiple width formats'
      ]
    }
  ];

  const laboratories = [
    {
      icon: '🔬',
      title: 'Material Testing Lab',
      description: 'State-of-the-art facility for comprehensive material analysis',
      tests: [
        'Spectroscopic analysis',
        'Chemical composition verification',
        'Purity testing',
        'Metallographic examination'
      ]
    },
    {
      icon: '🧪',
      title: 'Chemical Analysis Lab',
      description: 'Precision instruments for detailed chemical characterization',
      tests: [
        'X-ray fluorescence',
        'Atomic absorption spectroscopy',
        'Wet chemical analysis',
        'ICP-OES analysis'
      ]
    },
    {
      icon: '💪',
      title: 'Mechanical Testing Lab',
      description: 'Physical properties and performance testing facility',
      tests: [
        'Tensile strength testing',
        'Hardness measurements',
        'Elongation tests',
        'Shear strength evaluation'
      ]
    }
  ];

  const technologies = [
    {
      icon: '📊',
      title: 'Real-Time Monitoring',
      description: 'Advanced control systems that enable continuous process monitoring for optimal quality and efficiency'
    },
    {
      icon: '🤖',
      title: 'CNC Wire Drawing',
      description: 'Computer-controlled precision wire drawing systems ensuring uniform dimension and superior surface finish & high-speed efficiency'
    },
    {
      icon: '🎯',
      title: 'Automated Quality Control',
      description: 'Inline non-contact measuring systems providing automated real-time dimensional quality checks and immediate feedback'
    },
    {
      icon: '⚡',
      title: 'Advanced Spectrometry',
      description: 'State-of-the-art optical emission spectrometers deliver precise elemental composition analysis within seconds'
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
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Infrastructure & <span className="text-teal-400">Capabilities</span>
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
                  <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">{stat.value}</div>
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
            <p className="text-gray-600 max-w-3xl mx-auto">
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
                whileHover={{ 
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-teal-500 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex items-start space-x-4">
                  <div 
                    className="text-5xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {facility.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{facility.description}</p>
                    <ul className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-teal-600 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
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
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive in-house testing facilities ensure every product meets stringent quality specifications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }
                }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-teal-500 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div 
                    className="text-5xl mb-4 text-center"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {lab.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-teal-600 transition-colors">
                    {lab.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">{lab.description}</p>
                  <ul className="space-y-2">
                    {lab.tests.map((test, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {test}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
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
            <p className="text-gray-600 max-w-3xl mx-auto">
              Investing in cutting-edge technology to deliver consistent excellence and leading reliability
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-teal-600 text-white p-6 md:p-8 rounded-2xl shadow-lg"
              >
                <div className="text-4xl md:text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{tech.title}</h3>
                <p className="text-teal-100 text-sm md:text-base leading-relaxed">{tech.description}</p>
              </div>
            ))}
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
                      <svg className="w-4 h-4 text-teal-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="py-16 bg-teal-600 text-white">
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
            className="text-xl text-teal-100 mb-8"
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

