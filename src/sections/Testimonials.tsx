import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote: "The install was clean, the crew was respectful, and our bill dropped more than expected. We couldn't be happier with our decision to go solar with Zenith.",
    name: 'Sarah & James Mitchell',
    role: 'Homeowners, Austin TX',
    rating: 5,
    image: '/images/testimonial-couple.jpg',
  },
  {
    id: 2,
    quote: "Zenith made the entire process seamless. From the initial consultation to the final installation, everything was handled professionally. Our energy bills have been cut in half!",
    name: 'Michael Chen',
    role: 'Business Owner, San Diego CA',
    rating: 5,
    image: '/images/project-residence.jpg',
  },
  {
    id: 3,
    quote: "The monitoring app is fantastic. I can see exactly how much energy we're producing in real-time. The team was knowledgeable and answered all our questions.",
    name: 'Emily Rodriguez',
    role: 'Homeowner, Phoenix AZ',
    rating: 5,
    image: '/images/services-home.jpg',
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;

    if (!section || !card) return;

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
        .fromTo(card,
          { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.testimonial-image',
          { x: '-22vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .fromTo('.testimonial-quote',
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.1
        )
        .fromTo('.testimonial-author',
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
          0.15
        );

      // SETTLE (30% - 70%) - hold

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(card,
          { x: 0, opacity: 1 },
          { x: '-55vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.testimonial-bg',
          { scale: 1 },
          { scale: 1.06 },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="section-pinned relative flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="testimonial-bg absolute inset-0">
        <img
          src="/images/testimonial-sky.jpg"
          alt="Sky background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zenith-blue/30 to-zenith-blue/50" />
      </div>

      {/* Main Card */}
      <div
        ref={cardRef}
        className="relative z-10 w-[min(90vw,1140px)] glass-card overflow-hidden"
      >
        <div className="grid md:grid-cols-2">
          {/* Image Column */}
          <div className="testimonial-image relative h-64 md:h-auto">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:to-white/40" />
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-zenith-tangerine flex items-center justify-center shadow-accent">
              <Quote className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Content Column */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-zenith-tangerine text-zenith-tangerine" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="testimonial-quote font-display text-xl md:text-2xl text-zenith-navy leading-relaxed mb-6">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author */}
            <div className="testimonial-author">
              <span className="block font-display font-bold text-lg text-zenith-navy">
                {currentTestimonial.name}
              </span>
              <span className="text-sm text-zenith-navy/60">
                {currentTestimonial.role}
              </span>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeIndex === idx
                        ? 'w-6 bg-zenith-tangerine'
                        : 'bg-zenith-navy/20 hover:bg-zenith-navy/40'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-zenith-periwinkle flex items-center justify-center hover:bg-zenith-blue hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-zenith-periwinkle flex items-center justify-center hover:bg-zenith-blue hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
