import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sun, Home, Battery, Settings, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    number: '01',
    title: 'Solar Panel Installation',
    description: 'Our experts provide professional solar panel installation tailored to your site\'s unique conditions, ensuring maximum sunlight capture and optimal energy performance.',
    icon: Sun,
    features: ['Custom system design', 'Premium tier-1 panels', '25-year warranty', 'Permit handling'],
    image: '/images/service-installation.jpg',
  },
  {
    id: 2,
    number: '02',
    title: 'System Design & Engineering',
    description: 'We create customized solar solutions engineered for your specific energy needs, roof structure, and local climate conditions.',
    icon: Settings,
    features: ['3D roof analysis', 'Energy modeling', 'Shade analysis', 'Code compliance'],
    image: '/images/service-design.jpg',
  },
  {
    id: 3,
    number: '03',
    title: 'Energy Storage Solutions',
    description: 'Store excess solar energy for use during outages or peak rate periods. Our battery systems provide backup power and additional savings.',
    icon: Battery,
    features: ['Tesla Powerwall', 'LG batteries', 'Backup power', 'Time-of-use optimization'],
    image: '/images/service-storage.jpg',
  },
  {
    id: 4,
    number: '04',
    title: 'Maintenance & Monitoring',
    description: 'Keep your system running at peak efficiency with our comprehensive maintenance plans and real-time monitoring services.',
    icon: Home,
    features: ['24/7 monitoring', 'Annual inspections', 'Panel cleaning', 'Performance reports'],
    image: '/images/service-maintenance.jpg',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // Flowing section animation
      gsap.fromTo('.services-header',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          }
        }
      );

      gsap.fromTo('.service-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-zenith-blue"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Header */}
        <div className="services-header max-w-3xl mb-12 md:mb-16">
          <span className="micro-label text-white/70 mb-3 block">What We Offer</span>
          <h2 className="font-display font-bold text-h2 text-white mb-4">
            Our Sustainable <span className="text-zenith-tangerine">Solar Services</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            From initial consultation to ongoing maintenance, we provide end-to-end solar solutions tailored to your needs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="services-grid grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="service-card group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 flex flex-col h-full"
              >
                <div className="h-48 md:h-64 relative overflow-hidden flex-shrink-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zenith-navy/90 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zenith-tangerine flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-white/60 font-display font-bold text-sm block mb-1">{service.number}</span>
                      <h3 className="font-display font-bold text-xl text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <p className="text-white/70 leading-relaxed mb-6 block flex-grow">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/90">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-accent inline-flex items-center gap-2 group"
          >
            Get started today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
