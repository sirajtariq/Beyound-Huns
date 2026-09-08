import { ArrowRight, Sparkles, Settings, Users, Package } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { services } from '../../data/services';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={32} />,
  Settings: <Settings size={32} />,
  Users: <Users size={32} />,
  Package: <Package size={32} />,
};

export default function HomeServices() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <SectionHeading 
            title="Complete Facility Solutions" 
            subtitle="One Reliable Partner for all your facility needs."
            className="mb-0 md:mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Button asLink to="/services" variant="outline" className="hidden md:inline-flex">
              View All Services
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to="/services"
              className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-corporate-light text-corporate-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-corporate-blue group-hover:text-white transition-colors duration-300">
                {iconMap[service.iconName]}
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-navy">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              
              <div className="flex items-center text-corporate-blue font-semibold text-sm group-hover:text-corporate-navy transition-colors">
                Explore <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button asLink to="/services" variant="outline" className="w-full">
            View All Services
          </Button>
        </div>

      </div>
    </section>
  );
}
