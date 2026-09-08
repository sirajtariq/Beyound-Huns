import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';
import { companyInfo } from '../../data/company';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Sectors', path: '/sectors' },
  { name: 'Clients', path: '/clients' },
  { name: 'Commitment', path: '/commitment' },
  { name: 'Packages', path: '/packages' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-3xl font-extrabold text-corporate-navy tracking-tight leading-none">
              BEYOND <span className="text-corporate-blue">HUNS</span>
            </span>
            <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase mt-1 hidden sm:block">
              {companyInfo.tagline}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-corporate-blue bg-corporate-light'
                    : 'text-gray-600 hover:text-corporate-blue hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Button asLink to="/contact" variant="primary" className="hidden md:inline-flex">
              Get a Quote
            </Button>
            
            <button
              className="md:hidden p-2 text-gray-600 hover:text-corporate-blue focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 rounded-md text-base font-medium ${
                location.pathname === link.path
                  ? 'text-corporate-blue bg-corporate-light'
                  : 'text-gray-700 hover:text-corporate-blue hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Button asLink to="/contact" variant="primary" className="w-full">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
