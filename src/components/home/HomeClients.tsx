import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { clients } from '../../data/clients';
import { Sparkles, Users, Building, ShieldCheck, Award } from 'lucide-react';

export default function HomeClients() {
  return (
    <section className="py-28 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
          <Sparkles size={14} className="text-blue-600" />
          <span>Our Client Portfolio</span>
        </div>

        <SectionHeading 
          title="Trusted by Leading Businesses & Institutions" 
          subtitle="We are proud to partner with a diverse range of clients across corporate, commercial, government and residential sectors."
          centered
        />

        {/* Client Marquee Strip */}
        <div className="mt-12 mb-14 relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:w-16 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-16 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
          <div className="flex w-max animate-marquee space-x-6">
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={`${client.id}-${index}`} 
                className="bg-slate-50/80 hover:bg-white h-16 px-8 rounded-full flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 whitespace-nowrap cursor-default"
              >
                <span className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Metrics Strip from Brochure Page 6 */}
        <div className="bg-[#0A2540] text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center p-2">
              <Users className="text-cyan-400 mb-2" size={28} />
              <span className="text-2xl font-black text-white">100+</span>
              <span className="text-xs text-gray-300 font-medium">Trusted Clients</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
              <Building className="text-emerald-400 mb-2" size={28} />
              <span className="text-2xl font-black text-white">Multiple</span>
              <span className="text-xs text-gray-300 font-medium">Client Sectors</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
              <ShieldCheck className="text-amber-400 mb-2" size={28} />
              <span className="text-2xl font-black text-white">Long-term</span>
              <span className="text-xs text-gray-300 font-medium">Partnerships</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
              <Award className="text-cyan-300 mb-2" size={28} />
              <span className="text-2xl font-black text-white">Commitment</span>
              <span className="text-xs text-gray-300 font-medium">To Excellence</span>
            </div>
          </div>
        </div>

        <Button asLink to="/clients" variant="outline" className="bg-white border-gray-300 hover:border-blue-600 hover:text-blue-600">
          Explore Our Full Portfolio
        </Button>

      </div>
    </section>
  );
}

