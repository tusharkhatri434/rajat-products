import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

export default function ProductsPage() {
  const majorProducts = productsData.products_page.major_products;

  const customSolutions = [
    {
      icon: '🔧',
      title: 'Quantity-Specific Pricing',
      description: 'Tailored pricing for both high-volume industrial clients and custom batch orders, ensuring cost efficiency.'
    },
    {
      icon: '⚙️',
      title: 'Application Specific Alloys',
      description: 'Custom formulated brazing alloys to meet your exact application needs, including composition & form factors.'
    },
    {
      icon: '📊',
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
      <section className="relative bg-teal-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Our Product Range</h1>
            <p className="text-base md:text-xl text-teal-100 max-w-3xl mx-auto">
              Comprehensive range of brazing alloys delivering exceptional performance for demanding industrial applications
            </p>
          </div>
        </div>
      </section>

      {/* Custom Alloy Solutions */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 opacity-0 animate-fade-in-up animation-delay-100">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Custom Alloy Solutions
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Tailored brazing alloys & specialized formulations delivered precisely to meet unique manufacturing demands
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {customSolutions.map((solution, index) => (
              <div
                key={solution.title}
                className="bg-teal-600 text-white p-6 md:p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-teal-100 text-sm leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Products - Layout matching design */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12">
            {majorProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl border-2 border-gray-200 p-6 md:p-8 lg:p-10 hover:border-gray-300 transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Top Section: Image, Title, Description */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 mb-6 lg:mb-8">
                  {/* Image - Compact on Left */}
                  <div className="shrink-0">
                    <div className="relative w-full lg:w-[280px] xl:w-[340px] h-64 lg:h-[340px] bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center overflow-hidden group">
                      <img
                        src={`/images/${product.imgName}`}
                        alt={product.title}
                        className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Title & Description on Right */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-teal-700 mb-4 lg:mb-6 leading-tight">
                      {product.title}
                    </h2>

                    {/* Subtitle for RP Silver */}
                    {product.id === 'rp-silver' && (
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                        Cadmium Free Alloy
                      </h3>
                    )}

                    {/* Description Paragraphs */}
                    <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] md:text-base text-justify">
                      {product.description.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Features & CTA */}
                {product.key_technical_features && (
                  <div className="border-t-2 border-gray-200 pt-6 lg:pt-8">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                      {/* Features - Takes More Space */}
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-4 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          Features:
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {product.key_technical_features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-gray-700 text-[15px] md:text-base">
                              <svg className="w-5 h-5 text-teal-600 mr-2 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
                          className="inline-flex items-center px-8 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg text-base whitespace-nowrap hover:scale-105 active:scale-95"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 opacity-0 animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real World Case Study
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              How we solve real manufacturing challenges
            </p>
          </div>

          <div className="bg-linear-to-br from-teal-50 to-gray-50 rounded-2xl p-6 md:p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="space-y-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">The Challenge</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
              </div>

              <div className="space-y-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">The Solution</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{caseStudy.solution}</p>
              </div>

              <div className="bg-teal-600 text-white p-6 rounded-xl space-y-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <h3 className="text-lg md:text-xl font-bold">Impact Achieved</h3>
                <p className="text-sm md:text-base text-teal-100 leading-relaxed">{caseStudy.result}</p>
              </div>
            </div>

            <div className="mt-6 md:mt-8 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="inline-block bg-white px-6 py-4 rounded-lg shadow-md border-l-4 border-teal-600">
                <p className="text-sm md:text-base text-gray-600">
                  <span className="font-bold text-teal-600">"With Rajat's custom alloy solution,"</span> we've optimized our entire brazing process — reducing costs, improving quality, and accelerating time-to-market. Their technical team is an invaluable partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 opacity-0 animate-fade-in-up">
            Need a Custom Solution?
          </h2>
          <p className="text-base md:text-xl text-teal-100 mb-6 md:mb-8 opacity-0 animate-fade-in-up animation-delay-100">
            Our R&D team is ready to develop the perfect brazing alloy for your specific application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-200">
            <a
              href="https://wa.me/919837065599?text=Hello%2C%20I%20would%20like%20to%20request%20a%20consultation%20for%20custom%20brazing%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-white text-teal-600 rounded-lg hover:bg-teal-50 transition-all duration-300 font-medium text-sm md:text-base shadow-lg hover:scale-105"
            >
              Request Consultation
            </a>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-300 font-medium text-sm md:text-base hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
