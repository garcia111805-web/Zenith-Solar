import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Shield, Sun, CheckCircle } from 'lucide-react';

const Home = () => {
  const [monthlyBill, setMonthlyBill] = useState(142);

  // Calculate savings based on monthly bill
  const estimatedSavings = Math.round(monthlyBill * 12 * 0.85);
  const panelCount = Math.max(6, Math.round(monthlyBill / 12));
  const paybackYears = (monthlyBill * 12 * 6 / estimatedSavings / 12).toFixed(1);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthlyBill(Number(e.target.value));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-new-2.jpg"
            alt="Solar panels on a roof at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zenith-blue/40 to-zenith-blue/20" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="animate-fade-in">
                <span className="micro-label text-white/80 mb-4 block">
                  Residential & Commercial
                </span>

                <h1 className="font-display font-bold text-hero text-white mb-6">
                  Power Your Home{' '}
                  <span className="text-zenith-tangerine">With Solar</span>
                </h1>

                <p className="text-white/80 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
                  Save money, increase your property value, and reduce your carbon footprint with our premium solar solutions.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-accent inline-flex items-center gap-2 group">
                    Get a free quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/services"
                    className="px-6 py-3 rounded-full border-2 border-white/40 text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    Learn more
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-6 mt-10">
                  <div className="flex items-center gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-zenith-tangerine" />
                    <span className="text-sm">25-year warranty</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-zenith-tangerine" />
                    <span className="text-sm">$0 down options</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <CheckCircle className="w-5 h-5 text-zenith-tangerine" />
                    <span className="text-sm">Premium panels</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Solar Calculator Bento */}
              <div className="space-y-4">
                {/* Calculator Card */}
                <div className="glass-card bg-white/90 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-zenith-tangerine/20 flex items-center justify-center">
                      <Sun className="w-5 h-5 text-zenith-tangerine" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-zenith-navy">Solar Savings Calculator</h3>
                      <p className="text-sm text-zenith-navy/60">See how much you can save</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-zenith-navy/70">
                      Current Monthly Bill
                    </span>
                    <span className="text-3xl md:text-4xl font-display font-bold text-zenith-tangerine">
                      ${monthlyBill}
                    </span>
                  </div>

                  <div className="mb-6">
                    <input
                      type="range"
                      min="50"
                      max="400"
                      value={monthlyBill}
                      onChange={handleSliderChange}
                      className="range-slider"
                      style={{ '--value': `${((monthlyBill - 50) / 350) * 100}%` } as React.CSSProperties}
                    />
                    <div className="flex justify-between mt-2 text-xs text-zenith-navy/50">
                      <span>$50</span>
                      <span>$400</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-zenith-periwinkle/50 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Zap className="w-4 h-4 text-zenith-blue" />
                      </div>
                      <span className="block text-lg font-display font-bold text-zenith-navy">
                        ~{panelCount}
                      </span>
                      <span className="text-xs text-zenith-navy/60">Panels</span>
                    </div>
                    <div className="bg-zenith-periwinkle/50 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp className="w-4 h-4 text-zenith-tangerine" />
                      </div>
                      <span className="block text-lg font-display font-bold text-zenith-navy">
                        ~{paybackYears}y
                      </span>
                      <span className="text-xs text-zenith-navy/60">Payback</span>
                    </div>
                    <div className="bg-zenith-periwinkle/50 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Shield className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="block text-lg font-display font-bold text-zenith-tangerine">
                        ${(estimatedSavings / 12).toFixed(0)}
                      </span>
                      <span className="text-xs text-zenith-navy/60">Monthly</span>
                    </div>
                  </div>
                </div>

                {/* Yearly Savings Card */}
                <div className="glass-card bg-white/80 p-5 flex items-center justify-between">
                  <div>
                    <span className="text-sm text-zenith-navy/60">Estimated Yearly Savings</span>
                    <span className="block text-2xl font-display font-bold text-zenith-navy">
                      ${estimatedSavings.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-zenith-blue">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="micro-label text-white/70 mb-3 block">Why Choose Zenith</span>
              <h2 className="font-display font-bold text-h2 text-white mb-4">
                The Smart Choice for <span className="text-zenith-tangerine">Solar Energy</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card bg-white/90 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-zenith-blue/10 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-zenith-blue" />
                </div>
                <h3 className="font-display font-bold text-xl text-zenith-navy mb-3">Save Money</h3>
                <p className="text-zenith-navy/70">Reduce your electricity bills by up to 85% and protect yourself from rising energy costs.</p>
              </div>

              <div className="glass-card bg-white/90 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-zenith-tangerine/20 flex items-center justify-center mx-auto mb-6">
                  <Sun className="w-8 h-8 text-zenith-tangerine" />
                </div>
                <h3 className="font-display font-bold text-xl text-zenith-navy mb-3">Clean Energy</h3>
                <p className="text-zenith-navy/70">Generate your own clean, renewable energy and reduce your carbon footprint.</p>
              </div>

              <div className="glass-card bg-white/90 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-display font-bold text-xl text-zenith-navy mb-3">25-Year Warranty</h3>
                <p className="text-zenith-navy/70">Industry-leading warranties on panels, inverters, and workmanship for peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-zenith-periwinkle">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-h2 text-zenith-navy mb-6">
              Ready to Start <span className="text-zenith-tangerine">Saving?</span>
            </h2>
            <p className="text-zenith-navy/70 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of homeowners who have made the switch to solar. Get your free quote today and see how much you can save.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-accent inline-flex items-center gap-2">
                Get a free quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="px-6 py-3 rounded-full border-2 border-zenith-navy/20 text-zenith-navy font-medium hover:bg-zenith-navy/5 transition-colors">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
