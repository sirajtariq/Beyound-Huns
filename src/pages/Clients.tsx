import Layout from '../components/layout/Layout';
import PageHero from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { clients } from '../data/clients';
import HomeCTA from '../components/home/HomeCTA';
import { Shield, Building, Award } from 'lucide-react';
import { assets } from '../data/assets';
import { ClientLogo } from '../components/common/ClientLogo';

export default function Clients() {
  return (
    <Layout>
      <PageHero 
        title="Our Client Portfolio" 
        subtitle="Trusted by Leading Businesses & Institutions"
        image={assets.images.iseTowers}
      />
      
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Strong Partnerships for a Brighter Tomorrow" 
            subtitle="We are proud to partner with a diverse range of clients across corporate, commercial, government and residential sectors, delivering consistent and high-quality facility solutions."
            centered
          />
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div 
                key={client.id}
                className="bg-white h-40 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default text-gray-400 hover:text-corporate-navy"
              >
                <ClientLogo name={client.name} svgData={client.logoSvg} />
              </div>
            ))}
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-corporate-light rounded-2xl flex items-center justify-center text-corporate-blue mb-6">
                <Building size={40} />
              </div>
              <h3 className="text-2xl font-bold text-corporate-navy mb-4">Multiple Sectors</h3>
              <p className="text-gray-600 leading-relaxed">Serving diverse industries with tailored facility management solutions designed for specific environments.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-corporate-light rounded-2xl flex items-center justify-center text-corporate-blue mb-6">
                <Shield size={40} />
              </div>
              <h3 className="text-2xl font-bold text-corporate-navy mb-4">Long-term Partnerships</h3>
              <p className="text-gray-600 leading-relaxed">Building trust through consistent, reliable, and professional service delivery over many years.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-corporate-light rounded-2xl flex items-center justify-center text-corporate-blue mb-6">
                <Award size={40} />
              </div>
              <h3 className="text-2xl font-bold text-corporate-navy mb-4">Commitment to Excellence</h3>
              <p className="text-gray-600 leading-relaxed">Dedicated to exceeding expectations and maintaining the absolute highest industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />
    </Layout>
  );
}
