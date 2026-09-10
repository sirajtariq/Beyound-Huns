import Layout from '../components/layout/Layout';
import { SectionHeading } from '../components/common/SectionHeading';
import { services } from '../data/services';
import { assets } from '../data/assets';
import { Sparkles, Settings, Users, Package, CheckCircle2 } from 'lucide-react';
import HomeCTA from '../components/home/HomeCTA';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={36} />,
  Settings: <Settings size={36} />,
  Users: <Users size={36} />,
  Package: <Package size={36} />,
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
      
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="From Cleanliness to Maintenance" 
            subtitle="We keep your workplace running smoothly with our comprehensive range of services."
            centered
          />
          
          <div className="mt-24 space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2 relative group">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative z-10 transform group-hover:scale-[1.02] transition-transform duration-700">
                    <img 
                      src={imageMap[service.id]} 
                      alt={service.title} 
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-corporate-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  {/* Decorative background shape */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-full h-full bg-corporate-blue/10 rounded-full blur-3xl -z-10 ${index % 2 !== 0 ? '-left-12' : '-right-12'}`}></div>
                </div>
                
                <div className="w-full lg:w-1/2 lg:px-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-xl text-corporate-blue mb-8">
                    {iconMap[service.iconName]}
                  </div>
                  <h3 className="text-4xl font-extrabold text-corporate-navy mb-6 tracking-tight">{service.title}</h3>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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
