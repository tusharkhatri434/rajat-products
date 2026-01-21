import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';
import productsData from '../data/products.json';

export default function ProductsPage() {
  const majorProducts = productsData.products_page.major_products;

  const customSolutions = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quantity-Specific Pricing',
      description: 'Tailored pricing for both high-volume industrial clients and custom batch orders, ensuring cost efficiency.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Application Specific Alloys',
      description: 'Custom formulated brazing alloys to meet your exact application needs, including composition & form factors.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quality Assured',
      description: 'Every custom order undergoes rigorous testing and certification to ensure compliance with industry standards.'
    }
  ];

  const caseStudy = {
    title: 'BAG 24 Silver Alloy – Automotive Success Story',
    challenge: 'Rising warranty claims and OEM non-compliance due to contact degradation',
    solution: 'BAG 24 advanced engineered silver alloy with 92% Silver, Tin, Nickel and trace Cobalt',
    results: [
      '50% reduction in warranty-related returns',
      'Contact resistance improved from 1.5 mΩ to 0.35 mΩ',
      'Lifespan increased from 8,000 to 16,000+ cycles',
      'OEM rejection rate reduced from 4.6% to 0.3%'
    ],
    testimonial: {
      text1: "BAG 24 gave us the edge we needed to compete in reliability-driven contracts.",
      text2: "It's not just a material switch it's a performance transformation.",
      author: 'Rajeev Khanna, Lead Materials Engineer, Imperial AutoTech, Faridabad'
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1f5c7a] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Our Product Range</h1>
            <p className="text-base md:text-xl text-gray-100 max-w-5xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis px-4">
              Comprehensive range of brazing alloys delivering exceptional performance for demanding industrial applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Custom Alloy Solutions */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Custom Alloy Solutions
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-5xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis px-4">
              Tailored brazing alloys & specialized formulations delivered precisely to meet unique manufacturing demands
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {customSolutions.map((solution, index) => (
              <AnimatedCard
                key={solution.title}
                index={index}
                className="group bg-white p-6 md:p-8 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    {solution.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1f5c7a] transition-colors duration-300">{solution.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Major Products - Layout matching design */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12">
            {majorProducts.map((product, index) => (
              <AnimatedCard
                key={product.id}
                index={index}
                delay={index * 0.15}
                className="group bg-white rounded-3xl border-2 border-gray-200 p-6 md:p-8 lg:p-10 hover:border-gray-300 transition-all duration-300"
              >
                {/* Top Section: Image, Title, Description */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 mb-6 lg:mb-8">
                  {/* Image - Compact on Left */}
                  <div className="shrink-0">
                    <div className="relative w-full lg:w-[280px] xl:w-[340px] h-64 lg:h-[340px] bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center overflow-hidden group">
                      <img
                        src={`/images/${product.imgName}`}
                        alt={product.title}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Title & Description on Right */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1f5c7a] mb-4 lg:mb-6 leading-tight">
                      {product.title}
                    </h2>

                    {/* Description Paragraphs */}
                    <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] md:text-base text-justify mb-6">
                      {product.description.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>

                    {/* RP Silver Buttons */}
                    {product.id === 'rp-silver' && (
                      <div className="flex flex-wrap gap-3 mt-6">
                        <Link
                          to="/products/rp-silver#cadmium-free"
                          className="inline-flex items-center px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-[#1f5c7a] transition-all duration-300 font-medium shadow-md hover:shadow-lg text-sm"
                        >
                          Cadmium Free Alloy
                          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <Link
                          to="/products/rp-silver#cadmium-bearing"
                          className="inline-flex items-center px-6 py-2.5 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium shadow-md hover:shadow-lg text-sm"
                        >
                          Cadmium Bearing Alloy
                          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Section: Features & CTA */}
                {product.key_technical_features && (
                  <div className="border-t-2 border-gray-200 pt-6 lg:pt-8">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                      {/* Features - Takes More Space */}
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1f5c7a] mb-4 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          Features:
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {product.key_technical_features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-gray-700 text-[15px] md:text-base">
                              <svg className="w-5 h-5 text-primary mr-2 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button - Right Side */}
                      <div className="shrink-0 lg:self-end">
                        <Link
                          to={product.cta.route}
                          className="inline-flex items-center px-8 py-3 bg-[#1f5c7a] text-white rounded-lg hover:bg-[#1a4f65] transition-all duration-300 font-medium shadow-md hover:shadow-lg text-base whitespace-nowrap hover:scale-105 active:scale-95"
                        >
                          {product.cta.label}
                          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2">
              Real World Case Study
            </h2>
            <p className="text-lg md:text-xl font-bold text-[#1f5c7a]">
              {caseStudy.title}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-12 items-start mb-10">
            {/* Left side: Challenge & Solution */}
            <div className="md:col-span-7 space-y-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1f5c7a] mb-4">The Challenge</h3>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1f5c7a] mb-4">The Solution</h3>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Right side: Result Achieved Box */}
            <div className="md:col-span-5">
              <div className="bg-[#3e7189] rounded-xl p-8 text-white shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold mb-6">Result Achieved</h3>
                <ul className="space-y-4">
                  {caseStudy.results.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 mt-1 text-white font-bold opacity-80">»</span>
                      <span className="text-base md:text-lg leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonial Box */}
          <motion.div
            className="max-w-5xl mx-auto border-2 border-[#1f5c7a]/30 rounded-xl p-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base md:text-lg lg:text-xl text-gray-900 font-medium leading-relaxed">
              &quot;{caseStudy.testimonial.text1}&quot;
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-900 font-medium mb-5 leading-relaxed">
              &quot;{caseStudy.testimonial.text2}&quot;
            </p>
            <p className="text-base text-right text-gray-800 font-semibold">
              — {caseStudy.testimonial.author}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#3d7088] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Need A Custom Solution?
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="https://wa.me/919837065599?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20custom%20brazing%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Quote
            </motion.a>
            <Link
              to="/infrastructure"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white rounded-md hover:bg-white/10 transition-all duration-300 font-bold text-lg"
            >
              View Our Capabilites
            </Link>
          </motion.div>
        </div>
      </section>
    </div >
  );
}
