import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const PRODUCT_INTEREST_OPTIONS = [
  'SILVER BRAZING ALLOYS',
  'COPPER PHOSPHORUS ALLOYS',
  'BRASS BRAZING ALLOYS',
  'WELDING ALLOYS',
  'FLUXES AND OTHER CONSUMABLES',
  'CUSTOM ALLOY DEVELOPMENT',
];

const emptyForm = () => ({
  fullName: '',
  email: '',
  phone: '',
  company: '',
  inquiryType: '',
  monthlyConsumption: '',
  productInterest: [],
  productInterestOther: '',
  message: '',
});

export default function ContactPage() {
  const [formData, setFormData] = useState(emptyForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    let message = `*New Contact Form Inquiry*\n\n`;
    message += `*Name:* ${formData.fullName}\n`;
    message += `*Email:* ${formData.email}\n`;

    if (formData.phone) {
      message += `*Phone:* ${formData.phone}\n`;
    }

    if (formData.company) {
      message += `*Company:* ${formData.company}\n`;
    }

    message += `*Inquiry Type:* ${formData.inquiryType}\n`;

    if (formData.monthlyConsumption) {
      message += `*Monthly Consumption:* ${formData.monthlyConsumption}\n`;
    }

    if (formData.productInterest.length > 0 || formData.productInterestOther.trim()) {
      message += `*Product Interest:*\n`;
      formData.productInterest.forEach((item) => {
        message += `• ${item}\n`;
      });
      if (formData.productInterestOther.trim()) {
        message += `• Other: ${formData.productInterestOther.trim()}\n`;
      }
    }

    message += `\n*Message:*\n${formData.message}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/919837065599?text=${encodedMessage}`, '_blank');

    setFormData(emptyForm());
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleProductInterest = (label) => {
    setFormData((prev) => {
      const set = new Set(prev.productInterest);
      if (set.has(label)) {
        set.delete(label);
      } else {
        set.add(label);
      }
      return { ...prev, productInterest: [...set] };
    });
  };

  return (
    <div>
      {/* Hero — banner from updatedImagesChanges (served via public/media) */}
      <section className="relative min-h-[480px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/media/banners/contact-hero.png)' }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <ScrollReveal animation="fade-up" className="text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-md">Contact Us</h1>
            <p className="text-base md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Whether you need technical specifications, custom solutions, or partnership opportunities, we&apos;re here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Contact Form */}
            <ScrollReveal animation="fade-right" className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                Ready to discuss your wire requirements? Send us a message and our technical team will respond promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name and Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@company.com"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="product">Product Inquiry</option>
                    <option value="quote">Request Quote</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Monthly Consumption
                  </label>
                  <input
                    type="text"
                    name="monthlyConsumption"
                    value={formData.monthlyConsumption}
                    onChange={handleChange}
                    placeholder="e.g. 500 kg/month, project-based…"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                <fieldset className="space-y-3 rounded-lg border border-gray-200 bg-gray-50/50 p-4">
                  <legend className="text-sm font-medium text-gray-900 px-1">Product Interest</legend>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {PRODUCT_INTEREST_OPTIONS.map((label) => (
                      <label key={label} className="flex cursor-pointer items-start gap-2 text-sm text-gray-800">
                        <input
                          type="checkbox"
                          checked={formData.productInterest.includes(label)}
                          onChange={() => toggleProductInterest(label)}
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                  <div className="pt-2">
                    <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-gray-600">Other</label>
                    <input
                      type="text"
                      name="productInterestOther"
                      value={formData.productInterestOther}
                      onChange={handleChange}
                      placeholder="Specify other interest"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                  </div>
                </fieldset>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements, specifications, or questions in detail..."
                    required
                    rows="5"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#1f4d63] text-white rounded-lg hover:bg-[#1a4155] transition-all duration-300 font-medium text-base shadow-md hover:shadow-lg flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>
              </form>
            </ScrollReveal>

            {/* Right Side - Contact Information */}
            <ScrollReveal animation="fade-left" delay={0.1} className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>

                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+919837065599" className="text-primary hover:underline block text-sm">+91 9837065599</a>
                      <a href="tel:+919837002076" className="text-primary hover:underline block text-sm">+91 9837002076</a>
                      <a href="tel:+919457815966" className="text-primary hover:underline block text-sm">+91 9457815966</a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Whatsapp</h4>
                      <a href="https://wa.me/919837065599" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">+91 9837065599</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:connect@rajatproducts.com" className="text-primary hover:underline text-sm break-all">connect@rajatproducts.com</a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600 text-sm">
                        1, Mohkampur Industrial Complex<br />
                        Phase - II, Rithani, Meerut, U.P, 250103, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-700">Monday - Saturday</span>
                    <span className="text-gray-900 font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-700">Sunday</span>
                    <span className="text-red-500 font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Fast Response Guarantee */}
              <div className="bg-linear-to-br from-primary to-[#1f5c7a] rounded-2xl shadow-lg p-6 md:p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Fast Response Guarantee</h3>
                <p className="text-gray-100 text-sm">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Find Us on Map</h2>
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={0.08} className="rounded-2xl overflow-hidden shadow-lg" style={{ height: '450px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9847895874947!2d77.66874931506644!3d28.947085782319383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c658cac49dadf%3A0xcb7470652c7240ff!2sRajat%20Products%20Private%20Limited!5e0!3m2!1sen!2sin!4v1704389000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rajat Products Private Limited - Mohkampur Industrial Complex, Meerut"
            ></iframe>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.12} className="text-center mt-6">
            <a
              href="https://www.google.com/maps/place/Rajat+Products+Private+Limited/@28.9470857,77.6713354,17z/data=!3m1!4b1!4m6!3m5!1s0x390c658cac49dadf:0xcb7470652c7240ff!8m2!3d28.9470857!4d77.6713354!16s%2Fg%2F11sx3qbx7_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-[#1f5c7a] transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

