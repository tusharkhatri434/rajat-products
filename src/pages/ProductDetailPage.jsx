import { useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SubProductCard from '../components/SubProductCard';
import ScrollReveal from '../components/ScrollReveal';
import productsData from '../data/products.json';

const MotionDiv = motion.div;

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSubProduct, setSelectedSubProduct] = useState(null);

  const product = productsData.products_page.major_products.find(p => p.id === productId);

  const activeFilter =
    productId === 'rp-silver' && location.hash
      ? (() => {
          const h = location.hash.replace('#', '');
          if (h === 'cadmium-free') return 'cadmium-free';
          if (h === 'cadmium-bearing') return 'cadmium-bearing';
          return 'all';
        })()
      : 'all';

  if (!product) {
    navigate('/404');
    return null;
  }

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

  const filteredProducts =
    activeFilter === 'cadmium-free' ? cadmiumFreeProducts :
      activeFilter === 'cadmium-bearing' ? cadmiumBearingProducts :
        allSubProducts;

  const heroImageName = product.cardImgName || product.imgName;

  return (
    <div className="bg-white">

      {/* Product hero: back link + two-column layout (matches product detail reference) */}
      <section className="pt-6 pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-down" className="mb-4 flex justify-stretch md:mb-5 md:justify-end">
            <Link
              to="/products"
              className="inline-flex w-full items-center justify-center px-6 py-2.5 text-center text-sm font-bold text-white bg-gray-900/70 rounded-lg shadow-md transition-colors hover:bg-gray-900/80 active:scale-[0.98] sm:w-auto"
            >
              Back to Products
            </Link>
          </ScrollReveal>

          {/* Title + quote — stacks on small screens; row from sm */}
          <ScrollReveal
            animation="fade-up"
            delay={0.05}
            className="mb-5 flex flex-col gap-3 rounded-xl bg-[#888888] px-4 py-3 md:mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:px-5 md:py-3.5"
          >
            <h1 className="w-full text-lg font-bold leading-snug text-gray-900 tracking-tight sm:min-w-0 sm:flex-1 sm:truncate sm:text-xl md:text-2xl">
              {product.title}
            </h1>
            <a
              href="https://wa.me/919837065599?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-gray-900 shadow-sm transition-colors hover:bg-gray-100 active:scale-[0.98] sm:w-auto"
            >
              Get Your Quote
            </a>
          </ScrollReveal>

          <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8 lg:gap-10">
            {/* Left: copy + features — full width on mobile; grows on desktop */}
            <ScrollReveal
              animation="fade-right"
              delay={0.08}
              className="order-2 flex min-w-0 w-full flex-1 flex-col gap-4 md:order-1 md:gap-5"
            >
              <div className="flex flex-col gap-3 text-base leading-relaxed text-gray-600 md:text-lg">
                {product.description.split('\n\n').map((p, i) => (
                  <p key={i} className="break-words">
                    {p}
                  </p>
                ))}
              </div>

              {product.key_technical_features && (
                <div className="flex w-full flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm md:p-6">
                  <h2 className="flex flex-wrap items-center gap-2.5 text-base font-bold text-gray-900 md:text-lg">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </span>
                    Key Technical Features
                  </h2>
                  <ul className="flex w-full flex-col gap-2.5 md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-2.5">
                    {product.key_technical_features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex w-full min-w-0 items-start gap-2.5 text-gray-700 md:basis-[calc(50%-0.75rem)] md:max-w-[calc(50%-0.75rem)]"
                      >
                        <span className="mt-0.5 shrink-0 text-gray-900/70" aria-hidden>
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-sm leading-snug md:text-[15px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ScrollReveal>

            {/* Right: full-width on mobile; capped column on md+ */}
            <ScrollReveal
              animation="fade-left"
              delay={0.1}
              className="order-1 flex w-full shrink-0 flex-col items-stretch md:order-2 md:max-w-lg"
            >
              <div className="mx-auto flex w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/90 md:ml-auto md:mr-0 md:max-w-lg">
                <div className="flex h-[220px] w-full shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:h-[280px] md:h-[400px] lg:h-[440px]">
                  <img
                    src={`/images/${heroImageName}`}
                    alt={product.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const t = e.currentTarget;
                      if (t.dataset.fallbackApplied) {
                        t.style.display = 'none';
                        return;
                      }
                      t.dataset.fallbackApplied = '1';
                      t.src = `/images/${product.imgName}`;
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-t border-gray-200 py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal animation="fade-up" className="text-center mb-7 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Available Products
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((subProduct, i) => (
              <ScrollReveal
                key={subProduct.id}
                animation={i % 2 === 0 ? 'fade-up' : 'zoom-in'}
                delay={Math.min(i * 0.06, 0.42)}
                className="h-full"
              >
                <div
                  onClick={() => setSelectedSubProduct(subProduct)}
                  className="cursor-pointer h-full"
                >
                  <SubProductCard subProduct={subProduct} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CLEAN MODAL */}
      <AnimatePresence>
        {selectedSubProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            {/* Backdrop */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSubProduct(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl border flex flex-col max-h-[90vh]"
            >

              {/* Header - Metallic Brushed Steel */}
              <div
                className="flex justify-between items-center px-8 py-6 rounded-t-2xl z-20 bg-gray-900/70"
                style={{
                  borderBottom: '2px solid #222',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold mb-1 block" style={{ color: '#aaa' }}>Technical Specifications</span>
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                    {selectedSubProduct.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedSubProduct(null)}
                  className="p-2.5 rounded-full transition-all bg-white/10 text-white hover:bg-white/20"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto space-y-6">

                {/* Description */}
                {selectedSubProduct.short_description && (
                  <p className="text-gray-600">
                    {selectedSubProduct.short_description}
                  </p>
                )}

                {/* Title */}
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-gray-900/70 rounded-full"></div>
                  Specifications
                </h3>

                {/* Table */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-900 border-b">
                      <tr>
                        <th className="px-6 py-4 text-left font-black tracking-wide">Parameter</th>
                        <th className="px-6 py-4 text-left font-black tracking-wide">Value</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {selectedSubProduct.technical_specifications.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-bold">
                            {row.parameter}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 px-8 py-5 border-t bg-gray-50 rounded-b-2xl">
                <button
                  onClick={() => setSelectedSubProduct(null)}
                  className="px-6 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-white active:scale-95 transition-all text-sm"
                >
                  Close
                </button>

                <a
                  href={`https://wa.me/919837065599?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(selectedSubProduct.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-gray-900/70 text-white font-black hover:bg-[#133246] active:scale-95 transition-all text-sm shadow-md"
                >
                  Request Quote
                </a>
              </div>

            </MotionDiv>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}