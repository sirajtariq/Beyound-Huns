import { Building2 } from 'lucide-react';
import { clients, clientsIntro } from '../../data/clients';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function Clients() {
  const isMarquee = clients.length > 3;
  const marqueeClients = isMarquee ? [...clients, ...clients] : clients;

  return (
    <section className="section section--tinted" id="clients">
      <Container>
        <SectionHeading
          eyebrow="Our Client Portfolio"
          title="Trusted by Leading *Businesses & Institutions*"
          lead={clientsIntro}
        />

        {!isMarquee && (
          <div className="client-showcase-single" aria-label="Our clients">
            {clients.map((client, index) => (
              <div key={`${client}-${index}`} className="client-chip client-chip--featured">
                <div className="client-chip__icon-wrap" aria-hidden="true">
                  <Building2 size={22} />
                </div>
                <div className="client-chip__info">
                  <span className="client-chip__tag">Valued Client</span>
                  <span className="client-chip__name">{client}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>

      {isMarquee && (
        <div className="client-marquee" aria-label="Our clients">
          <ul className="client-marquee__track">
            {marqueeClients.map((client, index) => (
              <li key={`${client}-${index}`} className="client-chip">{client}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

