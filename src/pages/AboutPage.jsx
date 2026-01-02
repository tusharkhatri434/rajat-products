import Button from '../components/Button';

export default function AboutPage() {
  const timeline = [
    {
      year: '1989s',
      title: 'Founded Metallurgical Excellence',
      description: 'Rajat Products was established with a vision to deliver the highest quality brazing alloys'
    },
    {
      year: '2000',
      title: 'International Expansion',
      description: 'Expanded operations globally, serving clients across continents'
    },
    {
      year: '2010',
      title: 'ISO Certification & Advanced R&D',
      description: 'Achieved ISO 9001:2015 & ISO 14001:2015 certifications, established state-of-the-art R&D facilities'
    },
    {
      year: '2015',
      title: 'Industry Leadership',
      description: 'Recognized as a leading manufacturer with cutting-edge technology and innovation'
    },
    {
      year: '2020+',
      title: 'Sustainable Manufacturing',
      description: 'Leading the transition to sustainable, eco-friendly manufacturing processes'
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
      icon: '✨',
      title: 'Quality',
      description: 'Never compromise on quality—deliver excellence in every alloy'
    },
    {
      icon: '🌱',
      title: 'Innovation',
      description: 'Constantly innovating metallurgical technology and formulations'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Transparent and ethical in all business dealings'
    },
    {
      icon: '🌍',
      title: 'Sustainability',
      description: 'Committed to environmentally responsible manufacturing practices'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Rajat Products</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Since the 1980s, we've been pioneering excellence in metallurgical solutions. Delivering world-class brazing alloys that set new standards in quality, consistency & reliability across metallurgical applications worldwide.
            </p>
            <div className="mt-8">
              <Button to="/products" variant="outline">
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Decades Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Decades of Metallurgical Mastery
            </h2>
          </div>

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
            <div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver world-class brazing and welding solutions by pioneering quality, consistency & precision,
                empowering global industries with reliable, cutting-edge metallurgical excellence.
              </p>
            </div>
            <div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted manufacturer globally, setting benchmarks in purity, innovation, and
                sustainability, while shaping the future of metallurgical excellence in modern manufacturing ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey through Years
            </h2>
            <p className="text-gray-600">Key milestones that shaped our company's growth & success</p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-32 flex-shrink-0">
                    <span className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full font-bold">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Advanced facilities and expertise for designing top-quality solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-teal-600 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Colored Left Border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-teal-600 transform scale-y-100 group-hover:scale-y-105 transition-transform duration-300"></div>
                
                {/* Content */}
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 text-teal-600 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
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
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Focus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Strategic Focus</h2>
          </div>

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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: index * 0.08
              }}
              className="text-center"
            >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
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
            Ready to get started
          </h2>
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button to="/infrastructure" variant="outline">
              View Our Capabilities
            </Button>
            <Button to="/products" variant="outline">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

