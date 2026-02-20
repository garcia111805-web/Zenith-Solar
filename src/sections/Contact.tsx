import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-left',
        { x: '-6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          }
        }
      );

      gsap.fromTo('.contact-form',
        { x: '6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          }
        }
      );

      gsap.fromTo('.contact-cta',
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-cta',
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', address: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-zenith-periwinkle"
    >
      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column - Info */}
          <div className="contact-left">
            <span className="micro-label text-zenith-navy/70 mb-3 block">Get In Touch</span>
            <h2 className="font-display font-bold text-h2 text-zenith-navy mb-4">
              Ready to switch to <span className="text-zenith-tangerine">solar?</span>
            </h2>
            <p className="text-zenith-navy/70 text-lg leading-relaxed mb-8">
              Tell us a little about your home and we'll reply with a personalized estimate. Our team is here to answer all your questions.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zenith-blue/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-zenith-blue" />
                </div>
                <div>
                  <span className="block text-sm text-zenith-navy/60">Email</span>
                  <span className="font-medium text-zenith-navy">hello@zenithsolar.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zenith-blue/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-zenith-blue" />
                </div>
                <div>
                  <span className="block text-sm text-zenith-navy/60">Phone</span>
                  <span className="font-medium text-zenith-navy">1-800-555-0199</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zenith-blue/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-zenith-blue" />
                </div>
                <div>
                  <span className="block text-sm text-zenith-navy/60">Hours</span>
                  <span className="font-medium text-zenith-navy">Mon–Fri, 8am–6pm</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zenith-blue/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-zenith-blue" />
                </div>
                <div>
                  <span className="block text-sm text-zenith-navy/60">Location</span>
                  <span className="font-medium text-zenith-navy">Serving nationwide</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-glass">
              <img
                src="/images/contact-house.jpg"
                alt="Solar home"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zenith-navy/40 to-transparent" />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-form">
            <div className="glass-card bg-white/90 p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-zenith-navy mb-2">
                    Thank you!
                  </h3>
                  <p className="text-zenith-navy/70">
                    We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-zenith-navy mb-2">
                      Full Name
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
                        Email
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
                    className="contact-cta w-full btn-accent flex items-center justify-center gap-2"
                  >
                    Request a quote
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
