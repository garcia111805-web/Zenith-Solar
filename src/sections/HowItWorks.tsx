import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ClipboardCheck, Wrench, Zap, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'We Design Your System',
    description: 'We analyze your roof, usage, and local incentives—then build a plan that fits your budget.',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'Expert Installation',
    description: 'Our certified technicians install your system with precision and care, ensuring optimal performance.',
    icon: Wrench,
  },
  {
    number: '03',
    title: 'Start Saving',
    description: 'Once activated, you\'ll immediately start generating clean energy and reducing your bills.',
    icon: Zap,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;

    if (!section || !panel) return;

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
        .fromTo(panel,
          { y: '22vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.step-number',
          { x: '-20vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .fromTo('.step-title',
          { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, ease: 'none' },
          0.1
        )
        .fromTo('.step-content',
          { x: '10vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.15
        );

      // SETTLE (30% - 70%) - hold

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(panel,
          { y: 0, opacity: 1 },
          { y: '-18vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.works-bg',
          { scale: 1 },
          { scale: 1.06 },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pinned relative flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="works-bg absolute inset-0">
        <img
          src="/images/how-it-works-sky.jpg"
          alt="Sky background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zenith-blue/20 to-zenith-blue/40" />
      </div>

      {/* Main Panel */}
      <div
        ref={panelRef}
        className="relative z-10 w-[min(92vw,1240px)] glass-card p-8 md:p-12"
      >
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="micro-label text-zenith-navy/70 mb-3 block">Our Process</span>
          <h2 className="font-display font-bold text-h2 text-zenith-navy">
            How It <span className="text-zenith-tangerine">Works</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            
            return (
              <div
                key={step.number}
                className={`relative p-6 md:p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'bg-zenith-blue text-white shadow-glass-lg'
                    : 'bg-white/60 text-zenith-navy hover:bg-white/80'
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Number */}
                <span className={`step-number font-display font-bold text-5xl md:text-6xl opacity-20 absolute top-4 left-4 ${
                  isActive ? 'text-white' : 'text-zenith-navy'
                }`}>
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 mt-8 ${
                  isActive ? 'bg-white/20' : 'bg-zenith-periwinkle'
                }`}>
                  <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-zenith-blue'}`} />
                </div>
                
                {/* Content */}
                <h3 className={`step-title font-display font-bold text-xl md:text-2xl mb-3 ${
                  isActive ? 'text-white' : 'text-zenith-navy'
                }`}>
                  {step.title}
                </h3>
                <p className={`step-content text-sm leading-relaxed ${
                  isActive ? 'text-white/80' : 'text-zenith-navy/70'
                }`}>
                  {step.description}
                </p>
                
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute bottom-4 right-4">
                    <CheckCircle className="w-5 h-5 text-zenith-tangerine" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeStep === index
                  ? 'w-8 bg-zenith-tangerine'
                  : 'bg-zenith-navy/20 hover:bg-zenith-navy/40'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-zenith-blue font-medium hover:text-zenith-tangerine transition-colors group"
          >
            Explore our services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
