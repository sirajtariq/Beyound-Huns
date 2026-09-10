import { Building2, Landmark, GraduationCap, Activity, Store, Home, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { sectors } from '../../data/sectors';
import { assets } from '../../data/assets';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={24} className="text-blue-600" />,
  Landmark: <Landmark size={24} className="text-emerald-600" />,
  GraduationCap: <GraduationCap size={24} className="text-purple-600" />,
  Activity: <Activity size={24} className="text-rose-600" />,
  Store: <Store size={24} className="text-amber-600" />,
  Home: <Home size={24} className="text-cyan-600" />,
};

export default function HomeSectors() {
  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Sector Grid */}
          <div className="xl:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/60 text-blue-800 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles size={14} className="text-blue-600" />
              <span>Our Client Sectors</span>
            </div>
            
            <SectionHeading 
              title="We Deliver Cleaner, Safer Spaces Across Islamabad" 
              subtitle="From corporate offices and commercial buildings to institutions and residential communities, Beyond Huns delivers reliable facility solutions for a cleaner and brighter Islamabad."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mb-10">
              {sectors.slice(0, 6).map((sector) => (
                <div key={sector.id} className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {iconMap[sector.iconName]}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540] text-base group-hover:text-blue-600 transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {sector.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asLink to="/sectors" variant="primary" className="shadow-lg shadow-blue-600/20 bg-blue-600 hover:bg-blue-700">
              View All Client Sectors
            </Button>
          </div>

          {/* Right Column: High-Rise Skyscraper Showcase (PDF Page 5 featured photo) */}
          <div className="xl:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10 group">
              <img 
                src={assets.images.iseTowers} 
                alt="ISE Towers Islamabad Commercial Hub" 
                className="w-full h-[520px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="inline-block py-1 px-3 bg-blue-600/90 text-white text-xs font-bold tracking-widest uppercase rounded-full mb-3">
                  Proud To Serve Islamabad
                </span>
                <h3 className="text-2xl font-black mb-2">Cleaner Businesses. Safer Environments.</h3>
                <p className="text-xs text-gray-200">
                  Comprehensive facility management solutions for Islamabad's top commercial high-rises.
                </p>
              </div>
            </div>

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/50 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>

      </div>
    </section>
  );
}

