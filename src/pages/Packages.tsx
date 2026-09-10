import Layout from '../components/layout/Layout';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { packages } from '../data/packages';
import { CheckCircle2, User, UserPlus, Building } from 'lucide-react';
import HomeCTA from '../components/home/HomeCTA';
import { assets } from '../data/assets';

const iconMap: Record<string, React.ReactNode> = {
  "male-janitor": <User size={28} />,
  "female-janitor": <UserPlus size={28} />,
  "enterprise": <Building size={28} />,
};

const imageMap: Record<string, string> = {
  "male-janitor": assets.images.janitorMale,
  "female-janitor": assets.images.janitorFemale,
  "enterprise": assets.images.iseTowers,
};

export default function Packages() {
  return (
    <Layout>
      
      <section className="py-32 bg-corporate-light/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="Professional Janitor Services" 
            subtitle="Keep your workplace clean, organized and welcoming — so you can focus on what matters most."
            centered
          />
          
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  pkg.highlight ? 'ring-4 ring-corporate-blue shadow-corporate-blue/20 lg:-mt-6 lg:mb-6' : 'border border-gray-100'
                }`}
              >
                {/* Package Image Header */}
                <div className="h-56 relative overflow-hidden group">
                  <img 
                    src={imageMap[pkg.id]} 
                    alt={pkg.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy via-corporate-navy/40 to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                        {iconMap[pkg.id]}
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-wider">{pkg.title}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Price Section */}
                <div className="p-8 pb-4 text-center border-b border-gray-50 bg-gray-50/50">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-extrabold text-corporate-navy tracking-tight">{pkg.price}</span>
                  </div>
                  {pkg.frequency && (
                    <p className="text-gray-500 font-medium mt-1">
                      {pkg.frequency} <span className="text-gray-400">{pkg.subtitle}</span>
                    </p>
                  )}
                </div>
                
                {/* Package Features */}
                <div className="p-8 flex-grow flex flex-col bg-white">
                  <ul className="space-y-5 mb-10 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="text-corporate-accent shrink-0 mt-0.5 mr-4" size={22} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Button 
                      asLink 
                      to="/contact" 
                      variant={pkg.highlight ? 'primary' : 'outline'}
                      className={`w-full py-4 text-lg ${!pkg.highlight && 'border-gray-200 hover:border-corporate-blue'}`}
                    >
                      {pkg.price === 'Custom Solution' ? 'Get a Quotation' : 'Select Package'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust indicators */}
          <div className="mt-24 flex flex-wrap justify-center gap-6 text-center text-sm font-bold text-gray-600 uppercase tracking-widest">
            <span className="flex items-center px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-100"><CheckCircle2 className="mr-3 text-corporate-accent" size={18}/> Trusted People</span>
            <span className="flex items-center px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-100"><CheckCircle2 className="mr-3 text-corporate-accent" size={18}/> Consistent Quality</span>
            <span className="flex items-center px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-100"><CheckCircle2 className="mr-3 text-corporate-accent" size={18}/> Hassle-free Operations</span>
            <span className="flex items-center px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-100"><CheckCircle2 className="mr-3 text-corporate-accent" size={18}/> Cleaner Environments</span>
          </div>

        </div>
      </section>

      <HomeCTA />
    </Layout>
  );
}
