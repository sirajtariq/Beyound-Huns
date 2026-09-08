import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { clients } from '../../data/clients';

export default function HomeClients() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading 
          title="Trusted by Leading Businesses & Institutions" 
          subtitle="We are proud to partner with a diverse range of clients across corporate, commercial, government and residential sectors."
          centered
        />

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {clients.slice(0, 10).map((client) => (
            <div 
              key={client.id} 
              className="bg-white h-32 rounded-xl flex items-center justify-center p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="text-center font-bold text-gray-400 group-hover:text-corporate-blue transition-colors text-lg tracking-tight">
                {/* Fallback to text if actual logos are not available */}
                {client.name}
              </div>
            </div>
          ))}
        </div>

        <Button asLink to="/clients" variant="outline">
          View Our Full Client Portfolio
        </Button>
      </div>
    </section>
  );
}
