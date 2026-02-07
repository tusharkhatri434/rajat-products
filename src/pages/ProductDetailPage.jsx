import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import SubProductCard from '../components/SubProductCard';
import productsData from '../data/products.json';
import Button from '../components/Button';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSubProduct, setSelectedSubProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Find the product
  const product = productsData.products_page.major_products.find(p => p.id === productId);

  if (!product) {
    navigate('/404');
    return null;
  }

  // Handle subcategories (for RP Silver)
  let allSubProducts = [];
  let cadmiumFreeProducts = [];
  let cadmiumBearingProducts = [];

  if (product.sub_categories) {
    product.sub_categories.forEach(category => {
      if (category.id === 'rp-silver-cadmium-free') {
        cadmiumFreeProducts = category.sub_products;
      } else if (category.id === 'rp-silver-cadmium-bearing') {
        cadmiumBearingProducts = category.sub_products;
      }
      allSubProducts = [...allSubProducts, ...category.sub_products];
    });
  } else if (product.sub_products) {
    allSubProducts = product.sub_products;
  }

  // Filter products based on active filter
  const filteredProducts =
    activeFilter === 'cadmium-free' ? cadmiumFreeProducts :
      activeFilter === 'cadmium-bearing' ? cadmiumBearingProducts :
        allSubProducts;

  // Handle hash navigation for RP Silver buttons
  useEffect(() => {
    if (productId === 'rp-silver' && location.hash) {
      const hash = location.hash.replace('#', '');
      if (hash === 'cadmium-free') {
        setActiveFilter('cadmium-free');
      } else if (hash === 'cadmium-bearing') {
        setActiveFilter('cadmium-bearing');
      }
    }
  }, [location.hash, productId]);

  return (
    <div>
      {/* Breadcrumb */}
      {/* <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex justify-end">
        <Button onClick={() => navigate('/products')} variant="primary">Back to Products</Button>
      </div>

      {/* Product Header */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Title - Full Width */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Content Source - Order 2 on mobile, Order 1 on desktop */}
            <div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
              }}
            >
              {/* Description Paragraphs */}
              <div className="space-y-4 text-gray-600 mb-6 leading-relaxed">
                {product.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Divider with reduced opacity */}
              <div className="border-t border-gray-300 opacity-10 my-6"></div>

              {/* Key Features */}
              {product.key_technical_features && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Key Technical Features
                  </h3>
                  <ul className="space-y-3">
                    {product.key_technical_features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-2 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
              )}
            </div>

            {/* Image - Order 1 on mobile, Order 2 on desktop */}
            <div
              className="order-1 md:order-2 relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center"
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <img
                src={`/images/${product.imgName}`}
                alt={product.title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute top-4 right-4">
                <a
                  href="https://wa.me/919837065599?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 md:px-4 md:py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors text-sm md:text-base shadow-lg inline-block"
                >
                  Get Your Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories (for RP Silver) */}
      {product.sub_categories && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {product.sub_categories.map((category, index) => (
                <div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  {category.key_technical_features && (
                    <ul className="space-y-2">
                      {category.key_technical_features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <svg className="w-5 h-5 text-primary mr-2 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sub Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Products
            </h2>
            <p className="text-gray-600 mb-6">
              Select any product to view detailed technical specifications
            </p>

            {/* Filter Buttons for RP Silver */}
            {productId === 'rp-silver' && (
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${activeFilter === 'all'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-primary border-2 border-primary hover:bg-primary/10'
                    }`}
                >
                  All RP Silver Alloys
                </button>
                <button
                  onClick={() => setActiveFilter('cadmium-free')}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${activeFilter === 'cadmium-free'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-primary border-2 border-primary hover:bg-primary/10'
                    }`}
                >
                  Cadmium free alloy
                </button>
                <button
                  onClick={() => setActiveFilter('cadmium-bearing')}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${activeFilter === 'cadmium-bearing'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-primary border-2 border-primary hover:bg-primary/10'
                    }`}
                >
                  Cadmium Bearing Alloys
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((subProduct, index) => (
              <div
                key={subProduct.id}
                onClick={() => setSelectedSubProduct(subProduct)}
                className="cursor-pointer"
              >
                <SubProductCard subProduct={subProduct} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Modal/Section */}
      {selectedSubProduct && (
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}
          onClick={() => setSelectedSubProduct(null)}
        >
          <div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b-2 border-primary/20 p-6 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">{selectedSubProduct.name}</h3>
              <button
                onClick={() => setSelectedSubProduct(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 md:p-8">
              {/* Description Paragraphs */}
              {selectedSubProduct.short_description && (
                <div className="space-y-4 text-gray-600 mb-6 text-base leading-relaxed">
                  {selectedSubProduct.short_description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              )}

              {/* Divider with reduced opacity */}
              <div className="border-t border-gray-300 opacity-30 my-6"></div>

              {selectedSubProduct.technical_specifications && (
                <div className="overflow-x-auto">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {selectedSubProduct.technical_specifications.table_title}
                  </h4>
                  <div className="bg-linear-to-br from-gray-50 to-white rounded-xl overflow-hidden border-2 border-gray-200 max-w-3xl mx-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-linear-to-r from-primary to-[#3d8aaf]">
                          <th className="px-2 py-2 text-left font-bold text-white uppercase tracking-wider w-1/2">
                            Parameter
                          </th>
                          <th className="px-2 py-2 text-left font-bold text-white uppercase tracking-wider w-1/2">
                            Value
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedSubProduct.technical_specifications.rows.map((row, idx) => (
                          <tr
                            key={idx}
                            className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                              } hover:bg-primary/5 transition-colors duration-150`}
                          >
                            <td className="px-2 py-1.5 font-semibold text-gray-900 border-b border-gray-200">
                              {row.parameter}
                            </td>
                            <td className="px-2 py-1.5 text-gray-700 border-b border-gray-200">
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
                <button
                  onClick={() => setSelectedSubProduct(null)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
                >
                  Close
                </button>
                <a
                  href="https://wa.me/919837065599?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-[#1f5c7a] transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-center"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

