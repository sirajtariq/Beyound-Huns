import { Building2, Landmark, GraduationCap, Activity, Store, Home } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { sectors } from '../../data/sectors';
import { assets } from '../../data/assets';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={24} />,
  Landmark: <Landmark size={24} />,
  GraduationCap: <GraduationCap size={24} />,
  Activity: <Activity size={24} />,
  Store: <Store size={24} />,
  Home: <Home size={24} />,
};

export default function HomeSectors() {
  return (
    <section className="py-32 bg-corporate-light relative">
      <div className="absolute top-0 left-0 w-full h-full bg-white/40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="h-px w-8 bg-corporate-blue"></span>
              <span className="text-corporate-blue text-sm font-bold tracking-widest uppercase">
                Our Sectors
              </span>
            </div>
            
            <SectionHeading 
              title="We Deliver Cleaner, Safer Spaces Across Islamabad" 
              subtitle="From corporate offices to residential communities, Beyond Huns delivers reliable facility solutions for a brighter Islamabad."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 mb-12">
              {sectors.slice(0, 6).map((sector) => (
                <div key={sector.id} className="flex items-start group">
                  <div className="p-4 rounded-xl bg-white shadow-sm text-corporate-blue mr-5 shrink-0 group-hover:bg-corporate-blue group-hover:text-white transition-colors duration-300">
                    {iconMap[sector.iconName]}
                  </div>
                  <div>
                    <h3 className="font-bold text-corporate-navy mb-1 text-lg group-hover:text-corporate-blue transition-colors">{sector.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{sector.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asLink to="/sectors" variant="primary" className="shadow-lg shadow-corporate-blue/20">
              View All Client Sectors
            </Button>
          </div>

          <div className="relative mt-12 xl:mt-0">
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative z-10 transform lg:-translate-x-12">
              <img 
                src={assets.images.iseTowers} 
                alt="Islamabad Stock Exchange Tower - Client context reference" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/90 via-corporate-navy/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-10">
                <span className="inline-block py-1.5 px-4 bg-corporate-blue/90 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                  Proud to Serve
                </span>
                <h3 className="text-3xl font-extrabold text-white">Islamabad's Leading Businesses</h3>
              </div>
            </div>
            
            {/* Background Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-corporate-blue/5 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
