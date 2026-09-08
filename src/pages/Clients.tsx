import Layout from '../components/layout/Layout';
import PageHero from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { clients } from '../data/clients';
import HomeCTA from '../components/home/HomeCTA';
import { Shield, Building, Award } from 'lucide-react';
import { assets } from '../data/assets';

export default function Clients() {
  return (
    <Layout>
      <PageHero 
        title="Our Client Portfolio" 
        subtitle="Trusted by Leading Businesses & Institutions"
        image={assets.images.iseTowers}
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Strong Partnerships for a Brighter Tomorrow" 
            subtitle="We are proud to partner with a diverse range of clients across corporate, commercial, government and residential sectors, delivering consistent and high-quality facility solutions."
            centered
          />
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client) => (
              <div 
                key={client.id}
                className="bg-gray-50 h-32 rounded-xl flex items-center justify-center p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-corporate-blue/20 transition-all group"
              >
                <span className="text-center font-bold text-gray-500 group-hover:text-corporate-navy transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-corporate-light rounded-full flex items-center justify-center text-corporate-blue mb-4">
                <Building size={32} />
              </div>
              <h3 className="text-xl font-bold text-corporate-navy mb-2">Multiple Sectors</h3>
              <p className="text-gray-600 text-sm">Serving diverse industries with tailored facility management solutions.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-corporate-light rounded-full flex items-center justify-center text-corporate-blue mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-corporate-navy mb-2">Long-term Partnerships</h3>
              <p className="text-gray-600 text-sm">Building trust through consistent, reliable, and professional service delivery.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-corporate-light rounded-full flex items-center justify-center text-corporate-blue mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-corporate-navy mb-2">Commitment to Excellence</h3>
              <p className="text-gray-600 text-sm">Dedicated to exceeding expectations and maintaining the highest standards.</p>
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />
    </Layout>
  );
}
