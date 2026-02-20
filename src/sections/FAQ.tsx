import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, HelpCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'How long does installation take?',
    answer: 'Most residential installations are completed within 1-3 days. The entire process—from signing to activation—typically takes 4-8 weeks, including permits and utility approval.',
  },
  {
    question: 'Will it work on my roof type?',
    answer: 'Solar panels work on most roof types including asphalt shingles, metal, tile, and flat roofs. During our free consultation, we\'ll assess your roof\'s condition, angle, and sun exposure to ensure optimal performance.',
  },
  {
    question: 'What financing options are available?',
    answer: 'We offer multiple financing options including cash purchase, solar loans, leases, and power purchase agreements (PPAs). Many customers qualify for $0 down financing with low monthly payments.',
  },
  {
    question: 'Do you handle permits?',
    answer: 'Yes! We handle all permits, utility interconnection agreements, and inspections. Our team manages the entire paperwork process so you don\'t have to worry about a thing.',
  },
  {
    question: 'What happens during a blackout?',
    answer: 'Standard grid-tied systems shut off during outages for safety. However, with a battery storage system, you can keep essential appliances running during power outages.',
  },
  {
    question: 'How do I monitor performance?',
    answer: 'Every installation includes a smart monitoring app that tracks energy production, consumption, and savings in real-time. Access your data anytime from your phone or computer.',
  },
];

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-header',
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 35%',
            scrub: true,
          }
        }
      );

      gsap.fromTo('.faq-item',
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
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
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="faq-header text-center mb-12">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-7 h-7 text-zenith-tangerine" />
            </div>
            <span className="micro-label text-white/70 mb-3 block">Got Questions?</span>
            <h2 className="font-display font-bold text-h2 text-white">
              Common <span className="text-zenith-tangerine">Questions</span>
            </h2>
          </div>

          {/* FAQ List */}
          <div className="faq-list space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`faq-item bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'bg-white/15' : 'hover:bg-white/15'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 md:p-6 flex items-center justify-between text-left"
                  >
                    <span className={`font-display font-bold text-base md:text-lg pr-4 transition-colors ${
                      isOpen ? 'text-zenith-tangerine' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-white/60 flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                      <p className="text-white/70 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">Still have questions?</p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-accent"
            >
              Contact our team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
