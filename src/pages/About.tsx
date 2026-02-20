import { PiggyBank, Smartphone, Clock, Leaf, Users, Award, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '2,500+', label: 'Installations', icon: Zap },
    { value: '15+', label: 'Years Experience', icon: Clock },
    { value: '50MW', label: 'Power Generated', icon: Zap },
    { value: '4.9', label: 'Customer Rating', icon: Award },
  ];

  const values = [
    {
      icon: PiggyBank,
      title: 'Save Money',
      description: 'Cut energy bills, protect against rate hikes, and add long-term value to your property.',
    },
    {
      icon: Clock,
      title: '25+ Year Savings',
      description: 'Designed to perform through decades of weather and wear with industry-leading warranties.',
    },
    {
      icon: Smartphone,
      title: 'Smart Monitoring',
      description: 'Track production and usage in real time from your phone. Stay in control of your energy.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Reduce your carbon footprint and contribute to a cleaner, greener planet.',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-zenith-blue">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="micro-label text-white/70 mb-4 block">About Zenith</span>
                <h1 className="font-display font-bold text-hero text-white mb-6">
                  Powering a <span className="text-zenith-tangerine">Brighter</span> Future
                </h1>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  At Zenith Solar, we believe everyone deserves access to clean, affordable energy. Since 2009, we've been helping homeowners and businesses make the switch to solar power.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Our mission is simple: to make solar energy accessible, affordable, and hassle-free. With over 15 years of experience and thousands of successful installations, we're the trusted choice for solar solutions.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/images/about-zenith-2.jpg"
                  alt="Zenith Solar team presentation"
                  className="rounded-3xl shadow-glass-lg w-full"
                />
                <div className="absolute -bottom-6 -left-6 glass-card bg-white/95 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-zenith-tangerine flex items-center justify-center">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className="block font-display font-bold text-2xl text-zenith-navy">2,500+</span>
                      <span className="text-sm text-zenith-navy/60">Happy Customers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-2xl bg-zenith-periwinkle/50">
                    <div className="w-12 h-12 rounded-xl bg-zenith-blue/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-zenith-blue" />
                    </div>
                    <span className="block font-display font-bold text-3xl text-zenith-navy mb-1">
                      {stat.value}
                    </span>
                    <span className="text-sm text-zenith-navy/60">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-zenith-periwinkle">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="micro-label text-zenith-navy/70 mb-3 block">Our Values</span>
              <h2 className="font-display font-bold text-h2 text-zenith-navy mb-4">
                Why Go <span className="text-zenith-tangerine">Solar?</span>
              </h2>
              <p className="text-zenith-navy/70 max-w-2xl mx-auto">
                Discover the benefits of switching to solar energy with Zenith.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="glass-card bg-white/90 p-6">
                    <div className="w-12 h-12 rounded-xl bg-zenith-blue/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-zenith-blue" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-zenith-navy mb-2">
                      {value.title}
                    </h3>
                    <p className="text-zenith-navy/70 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="micro-label text-zenith-navy/70 mb-3 block">Our Process</span>
              <h2 className="font-display font-bold text-h2 text-zenith-navy mb-4">
                How It <span className="text-zenith-tangerine">Works</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-zenith-blue flex items-center justify-center mb-6">
                  <span className="font-display font-bold text-2xl text-white">01</span>
                </div>
                <h3 className="font-display font-bold text-xl text-zenith-navy mb-3">
                  We Design Your System
                </h3>
                <p className="text-zenith-navy/70 leading-relaxed">
                  We analyze your roof, usage, and local incentives—then build a plan that fits your budget.
                </p>
              </div>

              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-zenith-tangerine flex items-center justify-center mb-6">
                  <span className="font-display font-bold text-2xl text-white">02</span>
                </div>
                <h3 className="font-display font-bold text-xl text-zenith-navy mb-3">
                  Expert Installation
                </h3>
                <p className="text-zenith-navy/70 leading-relaxed">
                  Our certified technicians install your system with precision and care, ensuring optimal performance.
                </p>
              </div>

              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
                  <span className="font-display font-bold text-2xl text-white">03</span>
                </div>
                <h3 className="font-display font-bold text-xl text-zenith-navy mb-3">
                  Start Saving
                </h3>
                <p className="text-zenith-navy/70 leading-relaxed">
                  Once activated, you'll immediately start generating clean energy and reducing your bills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-16 md:py-24 bg-zenith-blue">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="micro-label text-white/70 mb-4 block">Testimonial</span>
            <blockquote className="font-display text-2xl md:text-3xl text-white leading-relaxed mb-8">
              "The install was clean, the crew was respectful, and our bill dropped more than expected. We couldn't be happier with our decision to go solar with Zenith."
            </blockquote>
            <div>
              <span className="block font-display font-bold text-lg text-white">Sarah & James Mitchell</span>
              <span className="text-white/60">Homeowners, Austin TX</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
