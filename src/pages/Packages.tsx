import Layout from '../components/layout/Layout';
import PageHero from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { packages } from '../data/packages';
import { CheckCircle2, User, UserPlus, Building } from 'lucide-react';
import HomeCTA from '../components/home/HomeCTA';

const iconMap: Record<string, React.ReactNode> = {
  "male-janitor": <User size={40} />,
  "female-janitor": <UserPlus size={40} />,
  "enterprise": <Building size={40} />,
};

export default function Packages() {
  return (
    <Layout>
      <PageHero 
        title="Janitor Services Packages" 
        subtitle="Simple. Transparent. Reliable."
      />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Professional Janitor Services" 
            subtitle="Keep your workplace clean, organized and welcoming — so you can focus on what matters most."
            centered
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 transition-transform hover:-translate-y-2 ${
                  pkg.highlight ? 'border-corporate-blue shadow-xl relative z-10 md:-mt-4 md:mb-4' : 'border-gray-200'
                }`}
              >
                {/* Package Header */}
                <div className="p-8 pb-6 border-b border-gray-100 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-gray-50 rounded-full opacity-50 z-0"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                      pkg.highlight ? 'bg-corporate-blue text-white shadow-md' : 'bg-corporate-light text-corporate-blue'
                    }`}>
                      {iconMap[pkg.id]}
                    </div>
                    <h3 className="text-xl font-bold text-corporate-navy mb-4 uppercase tracking-wide">{pkg.title}</h3>
                    
                    <div className="mb-2">
                      <span className="text-3xl font-extrabold text-gray-900">{pkg.price}</span>
                    </div>
                    {pkg.frequency && (
                      <div className="text-gray-500 font-medium">
                        {pkg.frequency} {pkg.subtitle}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Package Features */}
                <div className="p-8 flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="text-corporate-blue shrink-0 mt-0.5 mr-3" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Button 
                      asLink 
                      to="/contact" 
                      variant={pkg.highlight ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      {pkg.price === 'Custom Solution' ? 'Get a Quotation' : 'Select Package'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust indicators */}
          <div className="mt-20 flex flex-wrap justify-center gap-6 text-center text-sm font-semibold text-gray-500 uppercase tracking-widest">
            <span className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm"><CheckCircle2 className="mr-2 text-corporate-blue" size={16}/> Trusted People</span>
            <span className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm"><CheckCircle2 className="mr-2 text-corporate-blue" size={16}/> Consistent Quality</span>
            <span className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm"><CheckCircle2 className="mr-2 text-corporate-blue" size={16}/> Hassle-free Operations</span>
            <span className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm"><CheckCircle2 className="mr-2 text-corporate-blue" size={16}/> Cleaner Environments</span>
          </div>

        </div>
      </section>

      <HomeCTA />
    </Layout>
  );
}
