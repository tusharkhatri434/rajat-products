import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';
import { FaShieldAlt, FaMicroscope } from 'react-icons/fa';

function CapabilityCard({ title, children }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <h3 className="mb-4 text-base font-bold uppercase tracking-wide text-primary md:text-lg">
        {title}
      </h3>
      <div className="grow space-y-3 text-sm leading-relaxed text-gray-700 md:text-[15px]">{children}</div>
    </div>
  );
}

function BoldLead({ label, children }) {
  return (
    <p>
      <span className="font-bold text-gray-900">{label}</span> {children}
    </p>
  );
}

export default function InfrastructurePage() {
  const stats = [
    { value: '200 MT', label: 'Annual Production' },
    { value: '85%', label: 'Process Automation' },
    { value: '50+', label: 'Skilled Professionals' },
    { value: '99.9%', label: 'First Pass Yield' }
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
      title: 'Extrusion Press Technology',
      subtitle: 'Advanced extrusion technology for precise alloy shaping and forming',
      features: [
        'Hot Extrusion Process',
        '600 Ton Capacity',
        'Precision Drawing'
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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-white py-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/media/infrastructure/banner.png)',
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

      {/* Our capabilities — layout from design (not a flat image) */}
      <section className="border-t border-gray-200 bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Our Capabilities</h2>
          </motion.div>

          <div className="flex flex-col gap-6 md:gap-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <CapabilityCard title="Fine Wires and Rods">
      <p>
        To meet your precise requirements, diameters ranging from <span className="font-medium text-gray-900">0.08 to 180 mm</span> are available.
        For precise size and quality finishing, these are drawn from Carbide, Compax, and Diamond dies of the best quality.
      </p>
      <BoldLead label="Coils:">
        Can be supplied in any quantity, as desired by the consumer.
      </BoldLead>
      <BoldLead label="Cut Lengths:">
        Regularly cut from 100–1000 mm; other cut lengths available on request.
      </BoldLead>
      <BoldLead label="Coils:">
        Coils can be provided in any weight desired.
      </BoldLead>
                </CapabilityCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <CapabilityCard title="Strips">
      <BoldLead label="SILVER:">
        Strips are available with thickness from 0.1 to 100 mm and width from 2 mm to 100 mm.
      </BoldLead>
      <BoldLead label="COPPER:">
        Strips are available with thickness from 0.1 to 50 mm and width from 25 mm to 180 mm.
      </BoldLead>
      <BoldLead label="Coils:">
        Can be supplied in any quantity, as desired by the consumer.
      </BoldLead>
      <BoldLead label="Cut Lengths:">
        Regularly cut from 100–1000 mm; other cut lengths available on request.
      </BoldLead>
      <BoldLead label="Spools:">
        Strips are wound on spools layer over layer. Spools are typically used in automated brazing equipment for simple dispensing.
      </BoldLead>
                </CapabilityCard>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <CapabilityCard title="Wire Flattening">
      <p>
        These are wires with square or half-round edges that have been flattened in a mill. Available in thickness down to{' '}
        <span className="font-medium text-gray-900">0.1 mm</span> and width down to{' '}
        <span className="font-medium text-gray-900">0.8 mm</span>.
      </p>
      <BoldLead label="Spools:">
        Available in pancake reels with layer-wound strips for precise and simple dispensing.
      </BoldLead>
                </CapabilityCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <CapabilityCard title="Wire Preform">
      <p>
        These, like rings or any other shapes, are specially made in accordance with customer specifications. The interior diameter
        of these rings ranges from <span className="font-medium text-gray-900">320 mm to 2 mm</span>, and they can have open or
        closed ends, one turn, two turns, or numerous turns.
      </p>
                </CapabilityCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <CapabilityCard title="Customer Specifications">
      <p>
        Forms and size not mentioned or specified above may be available as per customer specification on request.
      </p>
                </CapabilityCard>
              </motion.div>
            </div>
          </div>
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
                reveal={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                className="group bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
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
            <p className="text-gray-600 text-base md:text-lg max-w-5xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis px-4">
              Comprehensive in-house testing facilities ensure every product meets stringent quality specifications.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {laboratories.map((lab, index) => (
              <AnimatedCard
                key={lab.title}
                index={index}
                reveal="fade-up"
                className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <FaMicroscope className="text-3xl text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">
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
    </div>
  );
}
