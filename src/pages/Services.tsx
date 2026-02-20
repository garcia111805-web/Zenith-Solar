import { Link } from 'react-router-dom';
import { Sun, Battery, Settings, ArrowRight, CheckCircle, Wrench } from 'lucide-react';

const Services = () => {

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
      icon: Wrench,
      features: ['24/7 monitoring', 'Annual inspections', 'Panel cleaning', 'Performance reports'],
      image: '/images/service-maintenance.jpg',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-zenith-blue">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <span className="micro-label text-white/70 mb-4 block">What We Offer</span>
            <h1 className="font-display font-bold text-hero text-white mb-6">
              Our Sustainable <span className="text-zenith-tangerine">Solar Services</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              From initial consultation to ongoing maintenance, we provide end-to-end solar solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16 md:space-y-24">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 !== 0;

                return (
                  <div key={service.id} className={`flex flex-col gap-8 md:gap-16 items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="w-full md:w-1/2">
                      <div className="relative rounded-3xl overflow-hidden shadow-glass-lg group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zenith-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-zenith-navy/30 font-display font-bold text-4xl">
                          {service.number}
                        </span>
                        <div className="w-14 h-14 rounded-2xl bg-zenith-tangerine flex items-center justify-center shadow-glass">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      <h2 className="font-display font-bold text-3xl md:text-4xl text-zenith-navy mb-4">
                        {service.title}
                      </h2>

                      <p className="text-zenith-navy/70 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-zenith-tangerine flex-shrink-0 mt-0.5" />
                            <span className="text-zenith-navy/80 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-zenith-periwinkle">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-glass">
                <span className="block font-display font-bold text-3xl text-zenith-navy mb-1">2,500+</span>
                <span className="text-sm text-zenith-navy/60">Installations</span>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-glass">
                <span className="block font-display font-bold text-3xl text-zenith-navy mb-1">15+</span>
                <span className="text-sm text-zenith-navy/60">Years Experience</span>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-glass">
                <span className="block font-display font-bold text-3xl text-zenith-navy mb-1">50MW</span>
                <span className="text-sm text-zenith-navy/60">Installed Capacity</span>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-glass">
                <span className="block font-display font-bold text-3xl text-zenith-tangerine mb-1">4.9</span>
                <span className="text-sm text-zenith-navy/60">Customer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-zenith-blue">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-h2 text-white mb-6">
              Ready to Get <span className="text-zenith-tangerine">Started?</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and personalized solar quote.
            </p>
            <Link to="/contact" className="btn-accent inline-flex items-center gap-2 group">
              Get a free quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
