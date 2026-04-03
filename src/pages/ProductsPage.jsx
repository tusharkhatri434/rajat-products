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
    challenge: 'RISING REJECTION WITH SILVER BRAZING RING SOURCED FROM THEIR OLD SUPPLIER.',
    solution: 'BAG 24 advanced engineered silver alloy with 50% Silver, ZINC, COPPER AND Nickel .',
    results: [
      '100% PENETRATION PROOF RINGS',
      'GAS POROSITY ACHIEVED UNDER RANGE',
      'BRAZING LENGTH ACHIEVED PERFECTLY'
    ],
    testimonial: {
      text1: "BAG 24 gave us the edge we needed to compete in reliability-driven contracts.",
      text2: "It's not just an alloy switch it's a performance transformation.",
      author: ''
    }
  };

  return (
    <div>
      {/* Hero Section – Banner Image */}
      <section className="relative overflow-hidden" style={{ minHeight: '400px' }}>
        <img
          src="/images/product_banner.png"
          alt="Our Products"
          className="w-full h-full object-cover absolute inset-0"
          style={{ minHeight: '400px' }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ minHeight: '400px' }}>
          <motion.div
            className="text-center w-full py-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg">Our Product Range</h1>
            <p className="text-base md:text-xl text-gray-100 max-w-5xl mx-auto px-4 drop-shadow">
              Comprehensive range of brazing alloys delivering exceptional performance for demanding industrial applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Major Products — compact card grid */}
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 pb-10">
            {majorProducts.map((product, index) => (
              <AnimatedCard
                key={product.id}
                index={index}
                delay={index * 0.06}
                reveal={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                className="group bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Product image — tall portrait ratio (no max-height clamp) */}
                <div className="relative aspect-4/5 md:aspect-3/4 overflow-hidden bg-gray-50">
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <motion.img
                    src={`/images/${product.cardImgName || product.imgName}`}
                    alt={product.title}
                    className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />

                  <div className="absolute top-3 left-3 z-20 md:top-4 md:left-4">
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#1a415a] text-[10px] font-bold uppercase tracking-widest rounded shadow-sm">
                      {product.id === 'rp-silver' ? 'Silver Alloy' : 'Premium Alloy'}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col grow bg-white">
                  <h2 className="text-base font-bold text-gray-900 line-clamp-2 leading-snug mb-2">
                    {product.title}
                  </h2>

                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 mb-3">
                    {product.short_description}
                  </p>

                  {product.key_technical_features && (
                    <ul className="space-y-1.5 mb-4 grow">
                      {product.key_technical_features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary" />
                          <span className="text-[11px] text-gray-700 leading-snug line-clamp-2">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide px-1.5 py-0.5 bg-gray-50 rounded shrink-0">
                      Premium
                    </span>
                    <Link
                      to={product.cta.route}
                      className="inline-flex items-center text-primary font-bold text-xs group/link shrink-0"
                    >
                      <span className="relative">
                        {product.cta.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                      </span>
                      <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5-5 5M6 7l5 5-5 5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
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
                reveal={index % 3 === 1 ? 'fade-up' : index % 3 === 0 ? 'fade-right' : 'fade-left'}
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
    </div>
  );
}
