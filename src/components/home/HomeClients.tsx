import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { clients } from '../../data/clients';
import { ClientLogo } from '../common/ClientLogo';

export default function HomeClients() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading 
          title="Trusted by Leading Businesses" 
          subtitle="We are proud to partner with a diverse range of clients across corporate, commercial, government and residential sectors."
          centered
        />

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {clients.slice(0, 10).map((client) => (
            <div 
              key={client.id} 
              className="bg-white h-32 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-lg hover:border-corporate-blue/20 hover:-translate-y-1 transition-all duration-300 group text-gray-400 hover:text-corporate-blue"
            >
              <ClientLogo name={client.name} svgData={client.logoSvg} />
            </div>
          ))}
        </div>

        <Button asLink to="/clients" variant="outline" className="bg-white">
          View Our Full Client Portfolio
        </Button>
      </div>
    </section>
  );
}
