import { Building2, Landmark, GraduationCap, Activity, Store, Home } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { sectors } from '../../data/sectors';
import { assets } from '../../data/assets';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={28} />,
  Landmark: <Landmark size={28} />,
  GraduationCap: <GraduationCap size={28} />,
  Hospital: <Activity size={28} />,
  Store: <Store size={28} />,
  Home: <Home size={28} />,
};

export default function HomeSectors() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              title="We Deliver Cleaner, Safer Spaces Across Islamabad" 
              subtitle="From corporate offices and commercial buildings to institutions and residential communities, Beyond Huns delivers reliable facility solutions for a cleaner and brighter Islamabad."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 mb-12">
              {sectors.slice(0, 4).map((sector) => (
                <div key={sector.id} className="flex items-start">
                  <div className="p-3 rounded-lg bg-corporate-light text-corporate-blue mr-4 shrink-0">
                    {iconMap[sector.iconName]}
                  </div>
                  <div>
                    <h3 className="font-bold text-corporate-navy mb-1">{sector.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{sector.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asLink to="/sectors" variant="primary">
              View All Client Sectors
            </Button>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100 relative">
              <img 
                src={assets.images.iseTowers} 
                alt="Islamabad Stock Exchange Tower - Client context reference" 
                className="w-full h-auto max-h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="inline-block py-1 px-3 bg-corporate-blue text-xs font-bold tracking-widest uppercase rounded mb-3">
                  Proud to Serve
                </span>
                <h3 className="text-2xl font-bold">Islamabad's Leading Businesses</h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
