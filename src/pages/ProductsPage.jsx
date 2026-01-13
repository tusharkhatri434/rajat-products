import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';
import productsData from '../data/products.json';

export default function ProductsPage() {
  const majorProducts = productsData.products_page.major_products;

  const customSolutions = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quantity-Specific Pricing',
      description: 'Tailored pricing for both high-volume industrial clients and custom batch orders, ensuring cost efficiency.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Application Specific Alloys',
      description: 'Custom formulated brazing alloys to meet your exact application needs, including composition & form factors.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quality Assured',
      description: 'Every custom order undergoes rigorous testing and certification to ensure compliance with industry standards.'
    }
  ];

  const caseStudy = {
    challenge: 'A global HVAC manufacturer needed a low-temperature, cadmium-free brazing alloy with exceptional capillary flow for automated production lines.',
    solution: 'Our R&D team formulated a custom RP Silver 40T variant with modified zinc content and optimized solidus temperature, ensuring seamless flow at 680°C while maintaining AWS BAg-28 compliance.',
    result: 'Achieved 40% reduction in brazing cycle time, 25% cost savings, and zero defect joints in high-volume production.'
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
            <p className="text-base md:text-xl text-gray-100 max-w-4xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis px-4">
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
            <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis px-4">
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
                  <div className="w-16 h-16 bg-[#2C7596] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
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
                          className="inline-flex items-center px-6 py-2.5 bg-[#2C7596] text-white rounded-lg hover:bg-[#1f5c7a] transition-all duration-300 font-medium shadow-md hover:shadow-lg text-sm"
                        >
                          Cadmium Free Alloy
                          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <Link
                          to="/products/rp-silver#cadmium-bearing"
                          className="inline-flex items-center px-6 py-2.5 bg-white text-[#2C7596] border-2 border-[#2C7596] rounded-lg hover:bg-[#2C7596] hover:text-white transition-all duration-300 font-medium shadow-md hover:shadow-lg text-sm"
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
                          <svg className="w-6 h-6 mr-2 text-[#2C7596]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          Features:
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {product.key_technical_features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-gray-700 text-[15px] md:text-base">
                              <svg className="w-5 h-5 text-[#2C7596] mr-2 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real World Case Study
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              How we solve real manufacturing challenges
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-3">
              {/* Challenge */}
              <AnimatedCard 
                index={0}
                className="p-6 md:p-8 bg-white border-r border-gray-200"
                disableHover={true}
                disableTap={true}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">The Challenge</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
              </AnimatedCard>

              {/* Solution */}
              <AnimatedCard 
                index={1}
                className="p-6 md:p-8 bg-white border-r border-gray-200"
                disableHover={true}
                disableTap={true}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">The Solution</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{caseStudy.solution}</p>
              </AnimatedCard>

              {/* Impact */}
              <AnimatedCard 
                index={2}
                className="p-6 md:p-8 bg-gradient-to-br from-[#2C7596] to-[#1f5c7a] text-white"
                disableHover={true}
                disableTap={true}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Impact Achieved</h3>
                </div>
                <p className="text-sm md:text-base text-gray-100 leading-relaxed">{caseStudy.result}</p>
              </AnimatedCard>
            </div>

            {/* Testimonial */}
            <motion.div 
              className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 md:p-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-start max-w-4xl mx-auto">
                <svg className="w-8 h-8 text-[#2C7596] mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <div>
                  <p className="text-sm md:text-base text-gray-700 italic leading-relaxed mb-3">
                    "With Rajat's custom alloy solution, we've optimized our entire brazing process — reducing costs, improving quality, and accelerating time-to-market. Their technical team is an invaluable partner."
                  </p>
                  <p className="text-sm font-semibold text-[#2C7596]">— Manufacturing Director, Global HVAC Leader</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#2C7596] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p 
            className="text-base md:text-xl text-gray-100 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our R&D team is ready to develop the perfect brazing alloy for your specific application
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="https://wa.me/919837065599?text=Hello%2C%20I%20would%20like%20to%20request%20a%20consultation%20for%20custom%20brazing%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-white text-[#2C7596] rounded-lg hover:bg-[#2C7596]/10 hover:text-white hover:border-2 hover:border-white transition-all duration-300 font-medium text-sm md:text-base shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Consultation
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#2C7596] transition-all duration-300 font-medium text-sm md:text-base"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
