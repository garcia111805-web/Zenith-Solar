import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, ArrowRight, Tag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'GreenRoof Residence',
    location: 'California',
    year: '2024',
    status: 'Complete',
    tags: ['Residential', 'Battery-ready'],
    image: '/images/project-residence.jpg',
    description: 'A complete solar solution for a modern family home, featuring 24 premium panels and integrated battery storage.',
    stats: { panels: 24, capacity: '8.4kW', savings: '$2,400/yr' },
  },
  {
    id: 2,
    title: 'SunPark Corporate Center',
    location: 'Texas',
    year: '2024',
    status: 'Complete',
    tags: ['Commercial', 'Grid-tied'],
    image: '/images/services-home.jpg',
    description: 'Large-scale commercial installation powering a 50,000 sq ft office complex with clean energy.',
    stats: { panels: 180, capacity: '65kW', savings: '$18,000/yr' },
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
          { y: '22vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo('.project-image',
          { x: '-18vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .fromTo('.project-info',
          { x: '18vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.1
        )
        .fromTo('.project-tag',
          { scale: 0.85, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.02, ease: 'none' },
          0.15
        );

      // SETTLE (30% - 70%) - hold with subtle image zoom

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(card,
          { y: 0, opacity: 1 },
          { y: '-18vh', opacity: 0, ease: 'power2.in' },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pinned relative flex items-center justify-center bg-zenith-blue"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent" />

      <div
        ref={cardRef}
        className="relative z-10 w-[min(90vw,1200px)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="micro-label text-white/70 mb-2 block">Featured Projects</span>
            <h2 className="font-display font-bold text-h2 text-white">
              Powering With <span className="text-zenith-tangerine">Purpose</span>
            </h2>
          </div>
          <span className="text-white/40 text-sm font-medium hidden md:block">[PROJECTS]</span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="project-image relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zenith-navy/60 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium text-zenith-navy">{project.status}</span>
                </div>
              </div>

              {/* Content */}
              <div className="project-info p-5 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-xl text-zenith-navy group-hover:text-zenith-blue transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-zenith-navy/50">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs">{project.location}</span>
                  </div>
                </div>

                <p className="text-zenith-navy/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-zenith-periwinkle/50 rounded-lg p-2 text-center">
                    <span className="block text-sm font-display font-bold text-zenith-navy">{project.stats.panels}</span>
                    <span className="text-xs text-zenith-navy/60">Panels</span>
                  </div>
                  <div className="bg-zenith-periwinkle/50 rounded-lg p-2 text-center">
                    <span className="block text-sm font-display font-bold text-zenith-navy">{project.stats.capacity}</span>
                    <span className="text-xs text-zenith-navy/60">Capacity</span>
                  </div>
                  <div className="bg-zenith-periwinkle/50 rounded-lg p-2 text-center">
                    <span className="block text-sm font-display font-bold text-zenith-tangerine">{project.stats.savings}</span>
                    <span className="text-xs text-zenith-navy/60">Savings</span>
                  </div>
                </div>

                {/* Tags & Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="project-tag px-3 py-1 bg-zenith-blue/10 rounded-full text-xs text-zenith-blue font-medium flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-zenith-navy/40">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs">{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-white font-medium hover:text-zenith-tangerine transition-colors group"
          >
            Explore more successful installations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
