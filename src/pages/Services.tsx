import Layout from '../components/layout/Layout';
import PageHero from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { services } from '../data/services';
import { assets } from '../data/assets';
import { Sparkles, Settings, Users, Package, CheckCircle2 } from 'lucide-react';
import HomeCTA from '../components/home/HomeCTA';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={40} />,
  Settings: <Settings size={40} />,
  Users: <Users size={40} />,
  Package: <Package size={40} />,
};

const imageMap: Record<string, string> = {
  "cleaning-hygiene": assets.images.services.cleaning,
  "maintenance-technical": assets.images.services.maintenance,
  "staffing-support": assets.images.services.staffing,
  "office-supplies": assets.images.services.supplies,
};

export default function Services() {
  return (
    <Layout>
      <PageHero 
        title="Our Services" 
        subtitle="Complete Facility Solutions. One Reliable Partner."
      />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="From Cleanliness to Maintenance" 
            subtitle="We keep your workplace running smoothly with our comprehensive range of services."
            centered
          />
          
          <div className="mt-16 space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2 relative group">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
                    <img 
                      src={imageMap[service.id]} 
                      alt={service.title} 
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-corporate-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-corporate-light rounded-xl -z-10"></div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-corporate-blue text-white mb-6 shadow-md">
                    {iconMap[service.iconName]}
                  </div>
                  <h3 className="text-3xl font-bold text-corporate-navy mb-4">{service.title}</h3>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="text-corporate-accent mt-0.5 mr-3 shrink-0" size={20} />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
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
