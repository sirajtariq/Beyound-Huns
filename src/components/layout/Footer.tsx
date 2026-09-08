import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { companyInfo } from '../../data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-corporate-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-extrabold text-white tracking-tight leading-none">
                BEYOND <span className="text-corporate-accent">HUNS</span>
              </span>
              <span className="text-[10px] text-gray-300 font-medium tracking-widest uppercase mt-2">
                {companyInfo.tagline}
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-6 max-w-sm">
              We deliver reliable and professional facility solutions, so you can focus on what matters most.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Sectors', 'Clients', 'Commitment', 'Packages', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center text-sm"
                  >
                    <ChevronRight size={14} className="mr-2 text-corporate-accent" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {[
                'Cleaning & Hygiene', 
                'Maintenance & Technical', 
                'Staffing & Facility Support', 
                'Office & Business Supplies'
              ].map((service) => (
                <li key={service} className="text-gray-300 flex items-start text-sm">
                  <ChevronRight size={14} className="mr-2 mt-1 text-corporate-accent flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-corporate-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{companyInfo.phone}</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-corporate-accent mt-0.5 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-corporate-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">{companyInfo.address}</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link to="/contact" className="inline-block bg-corporate-blue hover:bg-blue-600 text-white font-medium py-2 px-6 rounded transition-colors text-sm">
                Get a Quote
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
