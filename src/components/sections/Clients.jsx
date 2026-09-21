import { clients, clientsIntro } from '../../data/clients';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function Clients() {
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="section section--tinted" id="clients">
      <Container>
        <SectionHeading
          eyebrow="Our Client Portfolio"
          title="Trusted by Leading Businesses & Institutions"
          lead={clientsIntro}
        />
      </Container>
      <div className="client-marquee" aria-label="Our clients">
        <ul className="client-marquee__track">
          {marqueeClients.map((client, index) => (
            <li key={`${client}-${index}`} className="client-chip">{client}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
