import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedCard from '../components/AnimatedCard';
import { FaAward, FaLightbulb, FaHandshake, FaLeaf } from 'react-icons/fa';

export default function AboutPage() {
  const timeline = [
    {
      year: '1948',
      title: 'Founded Maheshwari Industrial Corporation',
      description: ''
    },
    {
      year: '2000',
      title: 'Pioneered silver and copper-phosphorus alloy formulations',
      description: ''
    },
    {
      year: '2010',
      title: 'Achieved ISO 9001:2015 & ISO 14001:2015 certifications',
      description: ''
    },
    {
      year: '2015',
      title: 'Expanded to comprehensive welding alloy solutions',
      description: ''
    },
    {
      year: '2020+',
      title: 'Established \'Everything in one place\' customer-centric approach',
      description: ''
    }
  ];

  const capabilities = [
    {
      title: 'Advanced Metallurgical Properties',
      description: 'Equipped laboratories to develop ultra-high purity alloys & custom formulations meeting diverse specifications',
      features: [
        'Custom alloy development',
        'Precision composition control',
        'Advanced heat treatment'
      ]
    },
    {
      title: 'Precision Alloy Manufacturing',
      description: 'Cutting-edge facilities with state-of-the-art technology to produce consistent, high-quality brazing materials',
      features: [
        'Automated production lines',
        'Real-time quality monitoring',
        'ISO-certified processes'
      ]
    },
    {
      title: 'Custom Alloy Development',
      description: 'Specialized teams that design and innovate custom alloys tailored to specific industrial applications',
      features: [
        'Application-specific solutions',
        'Rapid prototyping',
        'Technical consultation'
      ]
    },
    {
      title: 'Comprehensive Product Range',
      description: 'Diverse brazing alloys—from silver-phosphorus alloys to specialty formulations for critical industries',
      features: [
        'Wide temperature range',
        'Multiple form factors',
        'Industry-specific solutions'
      ]
    },
    {
      title: 'International Standards Compliance',
      description: 'AWS, DIN, EN, IS & EN standards—ensuring seamless integration worldwide',
      features: [
        'Multi-standard certification',
        'Global compliance',
        'Traceability systems'
      ]
    },
    {
      title: 'Expert Technical Guidance',
      description: 'Seasoned R&T engineers providing comprehensive support for joint design, alloy selection and process optimization',
      features: [
        '24/7 technical support',
        'On-site consultation',
        'Training programs'
      ]
    }
  ];

  const values = [
    {
      icon: FaAward,
      title: 'Quality',
      description: 'Never compromise on performance standards'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Constantly developing new materials and techniques'
    },
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'Transparent, ethical & customer-focused approach'
    },
    {
      icon: FaLeaf,
      title: 'Sustainability',
      description: 'Commitment to environmentally responsible practices'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Rajat Products</h1>
            <p className="text-base md:text-lg text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Since the 1980s, we&apos;ve been pioneering excellence in metallurgical solutions.<br className="hidden md:block" />
              Delivering world-class brazing alloys that set new standards in quality, consistency & reliability worldwide.
            </p>
            <div className="mt-8">
              <Button to="/products" variant="outline">
                Explore Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Decades Section */}
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
              Three Decades of Metallurgical Mastery
            </h2>
          </motion.div>

          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <p className="mb-6">
              Rajat Products was founded in the 1990s as a clean pioneer for metallurgy and an unwavering vision to
              deliver the highest quality brazing alloys to industries worldwide.
            </p>
            <p className="mb-6">
              Our journey began with a team of seasoned L&T technicians dedicated to refining silver compositions tailored
              to demanding applications. Over the decades, we've evolved from a local manufacturer to a globally recognized
              leader in metallurgy and brazing.
            </p>
            <p className="mb-6">
              Recognizing the diverse need for reliable, precise silver and copper–phosphorus alloys, we invested heavily in
              research and development, pioneering formulations that set new industry benchmarks.
            </p>
            <p>
              Today, we operate in an "Everything in one place" environment for our customers, guiding them with our
              expertise to help make them the "worry about brazing or welding problems for their manufacturing pipeline."
            </p>
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <AnimatedCard
              index={0}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver world-class brazing alloys that set new benchmarks in quality, consistency & reliability empowering industries to achieve robust & efficient metal joining solutions in every application.
              </p>
            </AnimatedCard>
            <AnimatedCard
              index={1}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and innovative global supplier of silver and copper-phosphorus brazing alloys, driving advancements in manufacturing, sustainability & metallurgical excellence for a better-connected world.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Journey through Years
            </h2>
            <p className="text-gray-600 text-lg">Key milestones that shaped our company's growth & success</p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative py-10">
            {/* Main Horizontal Line */}
            <div className="absolute top-1/2 left-[15%] right-[15%] h-1 bg-accent/40 rounded-full -translate-y-1/2"></div>

            <div className="relative z-10">
              {/* Top Row: 1948, 2010, 2020+ */}
              <div className="flex justify-between px-[5%] mb-24">
                {/* 1948 */}
                <div className="w-64 relative">
                  <AnimatedCard index={0} className="bg-secondary text-white rounded-2xl p-6 shadow-lg h-full">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">{timeline[0].year}</h3>
                    <p className="text-white/90 text-sm md:text-base text-center leading-relaxed">{timeline[0].title}</p>
                  </AnimatedCard>
                  <div className="absolute left-1/2 top-full w-1 h-12 bg-accent/60 -translate-x-1/2"></div>
                  <div className="absolute left-1/2 top-[calc(100%+48px)] w-3 h-3 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-white shadow-sm"></div>
                </div>

                {/* 2010 */}
                <div className="w-64 relative">
                  <AnimatedCard index={2} className="bg-secondary text-white rounded-2xl p-6 shadow-lg h-full">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">{timeline[2].year}</h3>
                    <p className="text-white/90 text-sm md:text-base text-center leading-relaxed">{timeline[2].title}</p>
                  </AnimatedCard>
                  <div className="absolute left-1/2 top-full w-1 h-12 bg-accent/60 -translate-x-1/2"></div>
                  <div className="absolute left-1/2 top-[calc(100%+48px)] w-3 h-3 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-white shadow-sm"></div>
                </div>

                {/* 2020+ */}
                <div className="w-64 relative">
                  <AnimatedCard index={4} className="bg-secondary text-white rounded-2xl p-6 shadow-lg h-full">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">{timeline[4].year}</h3>
                    <p className="text-white/90 text-sm md:text-base text-center leading-relaxed">{timeline[4].title}</p>
                  </AnimatedCard>
                  <div className="absolute left-1/2 top-full w-1 h-12 bg-accent/60 -translate-x-1/2"></div>
                  <div className="absolute left-1/2 top-[calc(100%+48px)] w-3 h-3 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-white shadow-sm"></div>
                </div>
              </div>

              {/* Bottom Row: 2000, 2015 */}
              <div className="flex justify-around px-[20%] mt-4">
                {/* 2000 */}
                <div className="w-64 relative">
                  <div className="absolute left-1/2 bottom-full w-1 h-12 bg-accent/60 -translate-x-1/2"></div>
                  <div className="absolute left-1/2 bottom-[calc(100%+48px)] w-3 h-3 bg-accent rounded-full -translate-x-1/2 translate-y-1/2 border-2 border-white shadow-sm"></div>
                  <AnimatedCard index={1} className="bg-secondary text-white rounded-2xl p-6 shadow-lg h-full">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">{timeline[1].year}</h3>
                    <p className="text-white/90 text-sm md:text-base text-center leading-relaxed">{timeline[1].title}</p>
                  </AnimatedCard>
                </div>

                {/* 2015 */}
                <div className="w-64 relative">
                  <div className="absolute left-1/2 bottom-full w-1 h-12 bg-accent/60 -translate-x-1/2"></div>
                  <div className="absolute left-1/2 bottom-[calc(100%+48px)] w-3 h-3 bg-accent rounded-full -translate-x-1/2 translate-y-1/2 border-2 border-white shadow-sm"></div>
                  <AnimatedCard index={3} className="bg-secondary text-white rounded-2xl p-6 shadow-lg h-full">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">{timeline[3].year}</h3>
                    <p className="text-white/90 text-sm md:text-base text-center leading-relaxed">{timeline[3].title}</p>
                  </AnimatedCard>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden space-y-6">
            {timeline.map((item, index) => (
              <AnimatedCard
                key={item.year}
                index={index}
                className="bg-secondary text-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-3">{item.year}</h3>
                <p className="text-white text-sm leading-relaxed">{item.title}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Advanced facilities and expertise for designing top-quality solutions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {capabilities.map((capability, index) => (
              <AnimatedCard
                key={capability.title}
                index={index}
                className="group bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Colored Left Border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5aa3c5] to-primary transform scale-y-100 group-hover:scale-y-105 transition-transform duration-300"></div>

                {/* Content */}
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
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

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3d8aaf] to-[#5aa3c5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Focus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Strategic Focus</h2>
          </motion.div>

          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 space-y-6">
            <p>
              <strong>Continuous improvement of alloy compositions and manufacturing processes,</strong> ensuring compliance with
              international standards such as AWS, DIN, EN, IS & EN.
            </p>
            <p>
              <strong>Customer-centric development,</strong> providing tailored solutions for HVAC, electrical, plumbing, and precision
              engineering sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Rajat Products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <AnimatedCard
                  key={value.title}
                  index={index}
                  className="group bg-primary p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                      <IconComponent className="text-2xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-100 text-sm leading-relaxed">{value.description}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to get started
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button to="/infrastructure" variant="outline">
              View Our Capabilities
            </Button>
            <Button to="/products" variant="outline">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
