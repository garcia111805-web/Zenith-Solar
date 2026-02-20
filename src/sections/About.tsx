import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PiggyBank, Smartphone, ArrowRight, Clock, Leaf, Home } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl
        .fromTo(container,
          { y: '18vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.about-left-card',
          { x: '-40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.about-right-top',
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.06
        )
        .fromTo('.about-right-bottom',
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.12
        )
        .fromTo('.about-icon',
          { scale: 0.6, rotate: -8 },
          { scale: 1, rotate: 0, ease: 'none' },
          0.15
        );

      // SETTLE (30% - 70%) - hold position

      // EXIT (70% - 100%)
      scrollTl
        .fromTo('.about-left-card',
          { x: 0, opacity: 1 },
          { x: '-55vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.about-right-card',
          { x: 0, opacity: 1 },
          { x: '55vw', opacity: 0, ease: 'power2.in' },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-pinned relative flex items-center justify-center bg-zenith-blue"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 w-[min(90vw,1200px)]"
      >
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="micro-label text-white/70 mb-3 block">Why Choose Us</span>
          <h2 className="font-display font-bold text-h2 text-white">
            Why go <span className="text-zenith-tangerine">solar?</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-5 gap-4 md:gap-5">
          {/* Left Large Card */}
          <div className="about-left-card lg:col-span-3 bento-card bg-white/90 p-6 md:p-8">
            <div className="h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display font-bold text-h3 text-zenith-navy mb-3">
                    Save More, Worry Less
                  </h3>
                  <p className="text-zenith-navy/70 leading-relaxed max-w-md">
                    Cut energy bills, protect against rate hikes, and add long-term value to your property. Our systems are designed to maximize your savings from day one.
                  </p>
                </div>
                <div className="about-icon icon-circle flex-shrink-0 animate-float">
                  <PiggyBank className="w-5 h-5 text-zenith-blue" />
                </div>
              </div>
              
              <div className="mt-auto grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-zenith-periwinkle/50 rounded-xl">
                  <span className="block text-2xl md:text-3xl font-display font-bold text-zenith-navy">85%</span>
                  <span className="text-xs text-zenith-navy/60">Bill Reduction</span>
                </div>
                <div className="text-center p-4 bg-zenith-periwinkle/50 rounded-xl">
                  <span className="block text-2xl md:text-3xl font-display font-bold text-zenith-navy">30%</span>
                  <span className="text-xs text-zenith-navy/60">Home Value</span>
                </div>
                <div className="text-center p-4 bg-zenith-periwinkle/50 rounded-xl">
                  <span className="block text-2xl md:text-3xl font-display font-bold text-zenith-navy">$0</span>
                  <span className="text-xs text-zenith-navy/60">Down Options</span>
                </div>
              </div>
              
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-zenith-blue font-medium mt-6 hover:text-zenith-tangerine transition-colors group"
              >
                See how it works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-4 md:space-y-5">
            {/* Top Right Card */}
            <div className="about-right-card about-right-top bento-card bg-white/90 p-6">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-display font-bold text-xl text-zenith-navy">
                  25+ Year Savings
                </h4>
                <div className="about-icon icon-circle animate-float" style={{ animationDelay: '0.5s' }}>
                  <Clock className="w-5 h-5 text-zenith-blue" />
                </div>
              </div>
              <p className="text-zenith-navy/70 text-sm leading-relaxed">
                Designed to perform through decades of weather and wear. Our panels come with industry-leading warranties.
              </p>
            </div>

            {/* Bottom Right Card */}
            <div className="about-right-card about-right-bottom bento-card bg-white/90 p-6">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-display font-bold text-xl text-zenith-navy">
                  Smart Monitoring
                </h4>
                <div className="about-icon icon-circle animate-float" style={{ animationDelay: '1s' }}>
                  <Smartphone className="w-5 h-5 text-zenith-tangerine" />
                </div>
              </div>
              <p className="text-zenith-navy/70 text-sm leading-relaxed">
                Track production and usage in real time from your phone. Stay in control of your energy.
              </p>
            </div>

            {/* Mini Cards Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="about-right-card bento-card bg-white/80 p-4 text-center">
                <Leaf className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <span className="text-xs text-zenith-navy/60">Eco-Friendly</span>
              </div>
              <div className="about-right-card bento-card bg-white/80 p-4 text-center">
                <Home className="w-6 h-6 text-zenith-blue mx-auto mb-2" />
                <span className="text-xs text-zenith-navy/60">Custom Fit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
