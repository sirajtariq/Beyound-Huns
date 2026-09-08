import Layout from '../components/layout/Layout';
import PageHero from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { sectors } from '../data/sectors';
import { Building2, Landmark, GraduationCap, Activity, Store, Home } from 'lucide-react';
import HomeCTA from '../components/home/HomeCTA';
import { assets } from '../data/assets';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={36} />,
  Landmark: <Landmark size={36} />,
  GraduationCap: <GraduationCap size={36} />,
  Activity: <Activity size={36} />,
  Store: <Store size={36} />,
  Home: <Home size={36} />,
};

const bgMap: Record<string, string> = {
  "corporate-offices": assets.images.sectors.corporate,
  "government-institutions": assets.images.sectors.government,
  "educational-institutions": assets.images.sectors.education,
  "hospitals-healthcare": assets.images.sectors.healthcare,
  "commercial-retail": assets.images.sectors.commercial,
  "residential-communities": assets.images.sectors.residential,
};

export default function Sectors() {
  return (
    <Layout>
      <PageHero 
        title="We Deliver Cleaner, Safer Spaces Across Islamabad" 
        subtitle="Providing dedicated facility solutions to diverse environments."
        image={assets.images.iseTowers}
      />
      
      <section className="py-32 bg-corporate-light/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="Sectors We Serve" 
            subtitle="Our professional team is equipped to handle the unique facility management requirements of various industries."
            centered
          />
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <div 
                key={sector.id} 
                className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white flex flex-col h-[400px]"
              >
                {/* Image Section */}
                <div className="absolute inset-0 h-1/2">
                  <img 
                    src={bgMap[sector.id] || assets.images.hero} 
                    alt={sector.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>
                
                {/* Content Section */}
                <div className="relative z-10 flex flex-col h-full justify-end p-8 pt-0">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center text-corporate-blue mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                    {iconMap[sector.iconName]}
                  </div>
                  <h3 className="text-2xl font-bold text-corporate-navy mb-3 group-hover:text-corporate-blue transition-colors">{sector.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </Layout>
  );
}
