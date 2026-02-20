import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Modern Eco-Estate',
        location: 'Austin, TX',
        systemSize: '12.4 kW',
        description: 'A comprehensive solar integration for a modern luxury home, featuring sleek black-on-black panels that complement the architectural design while offsetting 100% of the property\'s energy usage.',
        image: 'https://www.shutterstock.com/shutterstock/videos/3713802185/thumb/1.jpg?ip=x480',
        stats: {
            panels: 32,
            co2Saved: '14.2 tons/yr',
            savings: '$2,400/yr'
        }
    },
    {
        id: 2,
        title: 'Suburban Solar Plus Storage',
        location: 'Denver, CO',
        systemSize: '8.6 kW + 2 Powerwalls',
        description: 'This family home required both energy independence and backup power. We installed a robust solar array paired with dual battery storage to ensure the lights stay on during winter grid outages.',
        image: 'https://img.canarymedia.com/content/uploads/Sunrun-three-homes-with-solar-panels.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=501&q=80&w=864&s=a97df14381819f1f60f54594ef42f6c5',
        stats: {
            panels: 24,
            co2Saved: '9.8 tons/yr',
            savings: '$1,850/yr'
        }
    },
    {
        id: 3,
        title: 'Commercial Roof Array',
        location: 'Phoenix, AZ',
        systemSize: '45.2 kW',
        description: 'A large-scale installation for a local manufacturing facility. The flat roof array provides substantial energy savings during peak operational hours and significantly reduces the company\'s carbon footprint.',
        image: 'https://www.ny-engineers.com/hubfs/commercial%20solar-2.jpg',
        stats: {
            panels: 112,
            co2Saved: '52.4 tons/yr',
            savings: '$12,500/yr'
        }
    },
    {
        id: 4,
        title: 'Historic Home Retrofit',
        location: 'San Diego, CA',
        systemSize: '6.2 kW',
        description: 'Careful planning and custom mounting were required to add solar to this historic property without compromising its aesthetic integrity or violating strict neighborhood guidelines.',
        image: 'https://www.greenandheritage.uk/wp-content/uploads/2021/06/Meadowfield-4.png',
        stats: {
            panels: 16,
            co2Saved: '7.1 tons/yr',
            savings: '$1,400/yr'
        }
    }
];

const Projects = () => {
    return (
        <div className="pt-24 pb-16">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-zenith-blue">
                <div className="w-full px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto text-center">
                        <span className="micro-label text-white/70 mb-4 block">Our Work</span>
                        <h1 className="font-display font-bold text-hero text-white mb-6">
                            Our Latest <span className="text-zenith-tangerine">Installations</span>
                        </h1>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">
                            Explore some of our recent solar projects across residential and commercial properties, showcasing our commitment to quality and sustainability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid Section */}
            <section className="py-16 md:py-24 bg-zenith-periwinkle/30">
                <div className="w-full px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {projects.map((project) => (
                                <div key={project.id} className="glass-card bg-white rounded-3xl overflow-hidden group hover:shadow-lg transition-all duration-300">
                                    <div className="h-64 md:h-80 relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-zenith-navy flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5 text-zenith-tangerine" />
                                            {project.location}
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="font-display font-bold text-2xl text-zenith-navy">{project.title}</h3>
                                            <span className="bg-zenith-blue/10 text-zenith-blue text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
                                                {project.systemSize}
                                            </span>
                                        </div>

                                        <p className="text-zenith-navy/70 leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        <div className="grid grid-cols-3 gap-4 border-t border-zenith-navy/10 pt-6">
                                            <div className="text-center">
                                                <span className="block font-bold text-lg text-zenith-navy">{project.stats.panels}</span>
                                                <span className="text-xs text-zenith-navy/60 uppercase tracking-wider">Panels</span>
                                            </div>
                                            <div className="text-center border-l border-r border-zenith-navy/10 px-2">
                                                <span className="block font-bold text-lg text-zenith-navy">{project.stats.co2Saved.split(' ')[0]}</span>
                                                <span className="text-xs text-zenith-navy/60 uppercase tracking-wider">CO2 Tons/Yr</span>
                                            </div>
                                            <div className="text-center">
                                                <span className="block font-bold text-lg text-zenith-tangerine">{project.stats.savings.split('/')[0]}</span>
                                                <span className="text-xs text-zenith-navy/60 uppercase tracking-wider">Saved/Yr</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-zenith-blue">
                <div className="w-full px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-display font-bold text-h2 text-white mb-6">
                            Ready to Join These <span className="text-zenith-tangerine">Happy Customers?</span>
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                            Contact us today for a free consultation and personalized solar quote for your home or business.
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

export default Projects;
