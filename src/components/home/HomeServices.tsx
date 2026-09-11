import { ArrowRight, Sparkles, Droplets, Wrench, Users, PackageCheck } from 'lucide-react';
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

const serviceIcons: Record<string, React.ReactNode> = {
  "cleaning-hygiene": <Droplets size={24} className="text-cyan-400" />,
  "maintenance-technical": <Wrench size={24} className="text-emerald-400" />,
  "staffing-support": <Users size={24} className="text-amber-400" />,
  "office-supplies": <PackageCheck size={24} className="text-blue-400" />,
};

export default function HomeServices() {
  return (
    <section className="py-28 bg-[#0A2540] text-white relative overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-[#0A2540] to-[#0A2540] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4 border border-white/10">
              <Sparkles size={14} className="text-cyan-400" />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Complete Facility Solutions. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-300">
                One Reliable Partner.
              </span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0">
            <Button asLink to="/services" variant="outline" className="hidden md:inline-flex bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#0A2540] backdrop-blur-md transition-all">
              View All Services
            </Button>
          </div>
        </div>

        {/* 4 Core Service Cards matching PDF Page 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={`/services#${service.id}`}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 border border-white/10 transition-all duration-500 hover:-translate-y-2 h-[420px] flex flex-col justify-between p-7 bg-white/5 backdrop-blur-sm"
            >
              {/* Background Image with Dark Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={imageMap[service.id]} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/80 to-[#0A2540]/30 group-hover:via-[#0A2540]/70 transition-colors duration-500"></div>
              </div>
              
              {/* Top Icon Badge */}
              <div className="relative z-10 self-start w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {serviceIcons[service.id]}
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl font-extrabold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-5 text-sm line-clamp-2 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center text-cyan-400 font-semibold text-sm group-hover:text-white transition-colors">
                  <span>Explore Service</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button asLink to="/services" variant="outline" className="w-full bg-white/10 text-white border-white/20">
            View All Services
          </Button>
        </div>

      </div>
    </section>
  );
}

