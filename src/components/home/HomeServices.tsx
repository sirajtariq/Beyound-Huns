import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { services } from '../../data/services';
import { Link } from 'react-router-dom';
import { assets } from '../../data/assets';

const imageMap: Record<string, string> = {
  "cleaning-hygiene": assets.images.services.cleaning,
  "maintenance-technical": assets.images.services.maintenance,
  "staffing-support": assets.images.services.staffing,
  "office-supplies": assets.images.services.supplies,
};

export default function HomeServices() {
  return (
    <section className="py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <SectionHeading 
            title="Complete Facility Solutions" 
            subtitle="One Reliable Partner for all your facility needs."
            className="mb-0 md:mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Button asLink to="/services" variant="outline" className="hidden md:inline-flex bg-white hover:bg-corporate-navy hover:text-white hover:border-corporate-navy transition-all">
              View All Services
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={`/services#${service.id}`}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-[400px] flex flex-col justify-end"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={imageMap[service.id]} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/95 via-corporate-navy/60 to-transparent group-hover:via-corporate-navy/80 transition-colors duration-500"></div>
              </div>
              
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-sm line-clamp-2">{service.description}</p>
                
                <div className="flex items-center text-corporate-accent font-semibold text-sm group-hover:text-white transition-colors">
                  Explore <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button asLink to="/services" variant="outline" className="w-full bg-white">
            View All Services
          </Button>
        </div>

      </div>
    </section>
  );
}
