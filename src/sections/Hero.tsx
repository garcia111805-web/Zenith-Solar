import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [monthlyBill, setMonthlyBill] = useState(142);

  // Calculate savings based on monthly bill
  const estimatedSavings = Math.round(monthlyBill * 12 * 0.85);
  const panelCount = Math.max(6, Math.round(monthlyBill / 12));
  const paybackYears = (monthlyBill * 12 * 6 / estimatedSavings / 12).toFixed(1);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const headline = headlineRef.current;

    if (!section || !card || !headline) return;

    const ctx = gsap.context(() => {
      // Initial load animation
      const loadTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      loadTl
        .fromTo(card,
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1 }
        )
        .fromTo(headline.querySelectorAll('.word'),
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          '-=0.6'
        )
        .fromTo('.hero-subtext',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        )
        .fromTo('.hero-cta',
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.4 },
          '-=0.2'
        )
        .fromTo('.bento-stat',
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.set(card, { opacity: 1, x: 0, scale: 1 });
            gsap.set('.hero-bg', { scale: 1, y: 0 });
          }
        }
      });

      // Exit animation (70% - 100%)
      scrollTl
        .fromTo(card,
          { x: 0, opacity: 1 },
          { x: '-55vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.hero-bg',
          { scale: 1, y: 0 },
          { scale: 1.08, y: '-6vh' },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthlyBill(Number(e.target.value));
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="section-pinned relative flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="hero-bg absolute inset-0">
        <img
          src="/images/hero-new-2.jpg"
          alt="Solar panels on a roof at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zenith-blue/30 to-zenith-blue/10" />
      </div>

      {/* Main Content */}
      <div
        ref={cardRef}
        className="relative z-10 w-[min(90vw,1200px)] glass-card p-8 md:p-12 lg:p-16"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Main Content */}
          <div>
            <span className="micro-label text-zenith-navy/70 mb-4 block">
              Residential & Commercial
            </span>

            <h1
              ref={headlineRef}
              className="font-display font-bold text-hero text-zenith-navy mb-6"
            >
              <span className="word inline-block">Power</span>{' '}
              <span className="word inline-block">Your</span>{' '}
              <span className="word inline-block">Home</span>{' '}
              <span className="word inline-block text-zenith-tangerine">With</span>{' '}
              <span className="word inline-block text-zenith-tangerine">Solar</span>
            </h1>

            <p className="hero-subtext text-zenith-navy/80 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
              Save money, increase your property value, and reduce your carbon footprint with our premium solar solutions.
            </p>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-cta btn-accent inline-flex items-center gap-2 group"
            >
              Get a free quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column - Solar Calculator Bento */}
          <div className="space-y-4">
            {/* Calculator Card */}
            <div className="bento-card bg-white/90">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-zenith-navy/70">
                  Estimated Monthly Bill
                </span>
                <span className="text-2xl md:text-3xl font-display font-bold text-zenith-tangerine">
                  ${monthlyBill}/mo
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

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zenith-periwinkle/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-zenith-blue" />
                    <span className="text-xs text-zenith-navy/60">Panels Needed</span>
                  </div>
                  <span className="text-xl font-display font-bold text-zenith-navy">
                    ~{panelCount}
                  </span>
                </div>
                <div className="bg-zenith-periwinkle/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-zenith-tangerine" />
                    <span className="text-xs text-zenith-navy/60">Payback</span>
                  </div>
                  <span className="text-xl font-display font-bold text-zenith-navy">
                    ~{paybackYears} yrs
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bento-stat bento-card p-4 text-center">
                <div className="icon-circle mx-auto mb-2">
                  <TrendingUp className="w-5 h-5 text-zenith-blue" />
                </div>
                <span className="block text-xl font-display font-bold text-zenith-navy">25+</span>
                <span className="text-xs text-zenith-navy/60">Years Savings</span>
              </div>
              <div className="bento-stat bento-card p-4 text-center">
                <div className="icon-circle mx-auto mb-2">
                  <Shield className="w-5 h-5 text-zenith-blue" />
                </div>
                <span className="block text-xl font-display font-bold text-zenith-navy">98%</span>
                <span className="text-xs text-zenith-navy/60">Satisfaction</span>
              </div>
              <div className="bento-stat bento-card p-4 text-center">
                <div className="icon-circle mx-auto mb-2">
                  <Zap className="w-5 h-5 text-zenith-tangerine" />
                </div>
                <span className="block text-xl font-display font-bold text-zenith-navy">${estimatedSavings.toLocaleString()}</span>
                <span className="text-xs text-zenith-navy/60">Yearly Savings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
