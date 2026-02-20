import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || location.pathname !== '/'
            ? 'nav-glass py-3'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-zenith-tangerine flex items-center justify-center shadow-accent group-hover:shadow-accent-lg transition-shadow">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <span className={`font-display font-bold text-xl transition-colors ${isScrolled || location.pathname !== '/' ? 'text-zenith-navy' : 'text-white'
              }`}>
              Zenith
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-all hover:opacity-70 ${isScrolled || location.pathname !== '/' ? 'text-zenith-navy' : 'text-white'
                  } ${isActive(link.href) ? 'opacity-100 font-semibold' : 'opacity-80'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-accent">
              Get a quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled || location.pathname !== '/' ? 'text-zenith-navy' : 'text-white'
              }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="absolute inset-0 bg-zenith-navy/95 backdrop-blur-lg" />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-2xl font-display font-bold transition-colors ${isActive(link.href) ? 'text-zenith-tangerine' : 'text-white hover:text-zenith-tangerine'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-accent mt-4">
            Get a quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
