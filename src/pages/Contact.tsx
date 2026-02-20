import { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', address: '', message: '' });
    }, 3000);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-zenith-blue">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <span className="micro-label text-white/70 mb-4 block">Get In Touch</span>
            <h1 className="font-display font-bold text-hero text-white mb-6">
              Ready to Switch to <span className="text-zenith-tangerine">Solar?</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Tell us a little about your home and we'll reply with a personalized estimate. Our team is here to answer all your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-zenith-periwinkle">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Info */}
              <div>
                <h2 className="font-display font-bold text-h3 text-zenith-navy mb-6">
                  Contact Information
                </h2>
                <p className="text-zenith-navy/70 leading-relaxed mb-8">
                  Have questions about going solar? Our team of experts is ready to help you every step of the way.
                </p>

                {/* Contact Info */}
                <div className="space-y-5 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white shadow-glass flex items-center justify-center">
                      <Mail className="w-6 h-6 text-zenith-blue" />
                    </div>
                    <div>
                      <span className="block text-sm text-zenith-navy/60">Email</span>
                      <span className="font-medium text-zenith-navy">hello@zenithsolar.com</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white shadow-glass flex items-center justify-center">
                      <Phone className="w-6 h-6 text-zenith-blue" />
                    </div>
                    <div>
                      <span className="block text-sm text-zenith-navy/60">Phone</span>
                      <span className="font-medium text-zenith-navy">1-800-555-0199</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white shadow-glass flex items-center justify-center">
                      <Clock className="w-6 h-6 text-zenith-blue" />
                    </div>
                    <div>
                      <span className="block text-sm text-zenith-navy/60">Hours</span>
                      <span className="font-medium text-zenith-navy">Mon–Fri, 8am–6pm</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white shadow-glass flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-zenith-blue" />
                    </div>
                    <div>
                      <span className="block text-sm text-zenith-navy/60">Location</span>
                      <span className="font-medium text-zenith-navy">Serving nationwide</span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-glass-lg">
                  <img
                    src="/images/contact-house.jpg"
                    alt="Solar home"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zenith-navy/40 to-transparent" />
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <div className="glass-card bg-white/95 p-8 md:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="font-display font-bold text-3xl text-zenith-navy mb-3">
                        Thank you!
                      </h3>
                      <p className="text-zenith-navy/70 text-lg">
                        We've received your message and will be in touch within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-display font-bold text-2xl text-zenith-navy mb-2">
                        Request a Quote
                      </h3>
                      <p className="text-zenith-navy/60 mb-8">
                        Fill out the form below and we'll get back to you with a personalized estimate.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-zenith-navy mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-zenith-periwinkle/50 border border-transparent focus:border-zenith-blue focus:bg-white transition-colors outline-none text-zenith-navy"
                            placeholder="John Smith"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-zenith-navy mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl bg-zenith-periwinkle/50 border border-transparent focus:border-zenith-blue focus:bg-white transition-colors outline-none text-zenith-navy"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-zenith-navy mb-2">
                              Phone
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-zenith-periwinkle/50 border border-transparent focus:border-zenith-blue focus:bg-white transition-colors outline-none text-zenith-navy"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-zenith-navy mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-zenith-periwinkle/50 border border-transparent focus:border-zenith-blue focus:bg-white transition-colors outline-none text-zenith-navy"
                            placeholder="123 Solar Street, City, State"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-zenith-navy mb-2">
                            Message
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl bg-zenith-periwinkle/50 border border-transparent focus:border-zenith-blue focus:bg-white transition-colors outline-none text-zenith-navy resize-none"
                            placeholder="Tell us about your energy needs..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full btn-accent flex items-center justify-center gap-2"
                        >
                          Request a quote
                          <Send className="w-4 h-4" />
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-h3 text-zenith-navy mb-4">
                Frequently Asked <span className="text-zenith-tangerine">Questions</span>
              </h2>
              <p className="text-zenith-navy/70">
                Have more questions? Here are some common ones we receive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zenith-periwinkle/50 rounded-2xl p-6">
                <h4 className="font-display font-bold text-lg text-zenith-navy mb-2">
                  How long does installation take?
                </h4>
                <p className="text-zenith-navy/70 text-sm">
                  Most residential installations are completed within 1-3 days. The entire process typically takes 4-8 weeks including permits.
                </p>
              </div>

              <div className="bg-zenith-periwinkle/50 rounded-2xl p-6">
                <h4 className="font-display font-bold text-lg text-zenith-navy mb-2">
                  Will it work on my roof type?
                </h4>
                <p className="text-zenith-navy/70 text-sm">
                  Solar panels work on most roof types including asphalt shingles, metal, tile, and flat roofs.
                </p>
              </div>

              <div className="bg-zenith-periwinkle/50 rounded-2xl p-6">
                <h4 className="font-display font-bold text-lg text-zenith-navy mb-2">
                  What financing options are available?
                </h4>
                <p className="text-zenith-navy/70 text-sm">
                  We offer multiple options including cash purchase, solar loans, leases, and PPAs. Many qualify for $0 down.
                </p>
              </div>

              <div className="bg-zenith-periwinkle/50 rounded-2xl p-6">
                <h4 className="font-display font-bold text-lg text-zenith-navy mb-2">
                  Do you handle permits?
                </h4>
                <p className="text-zenith-navy/70 text-sm">
                  Yes! We handle all permits, utility interconnection agreements, and inspections for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
