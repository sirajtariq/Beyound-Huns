import { Check } from 'lucide-react';
import { serviceGroups } from '../../data/services';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function Services() {
  return (
    <section className="section section--tinted" id="services">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Facility Solutions. One Reliable Partner."
          lead="From cleanliness to maintenance, we keep your workplace running."
        />
        <div className="card-grid card-grid--4">
          {serviceGroups.map((group) => (
            <article key={group.id} className="card service-card">
              <div className="service-card__icon"><group.icon size={24} aria-hidden /></div>
              <h3>{group.title}</h3>
              <p className="card__desc">{group.description}</p>
              <ul className="check-list">
                {group.items.map((item) => (
                  <li key={item}><Check size={14} aria-hidden /> {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
