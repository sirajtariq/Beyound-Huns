import Layout from '../components/layout/Layout';
import PageHero from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { sectors } from '../data/sectors';
import { Building2, Landmark, GraduationCap, Activity, Store, Home } from 'lucide-react';
import HomeCTA from '../components/home/HomeCTA';
import { assets } from '../data/assets';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={32} />,
  Landmark: <Landmark size={32} />,
  GraduationCap: <GraduationCap size={32} />,
  Hospital: <Activity size={32} />,
  Store: <Store size={32} />,
  Home: <Home size={32} />,
};

export default function Sectors() {
  return (
    <Layout>
      <PageHero 
        title="We Deliver Cleaner, Safer Spaces Across Islamabad" 
        subtitle="Providing dedicated facility solutions to diverse environments."
        image={assets.images.iseTowers}
      />
      
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Sectors We Serve" 
            subtitle="Our professional team is equipped to handle the unique facility management requirements of various industries."
            centered
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <div 
                key={sector.id} 
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-corporate-blue/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center text-corporate-blue mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[sector.iconName]}
                </div>
                <h3 className="text-2xl font-bold text-corporate-navy mb-4">{sector.title}</h3>
                <p className="text-gray-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </Layout>
  );
}
