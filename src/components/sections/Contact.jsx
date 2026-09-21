import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { site } from '../../data/site';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const contactItems = [
  { icon: Phone, label: site.phone, sub: 'Call or WhatsApp', href: site.phoneHref },
  { icon: Mail, label: site.email, sub: 'Email Us', href: `mailto:${site.email}` },
  { icon: MapPin, label: site.address, sub: 'Visit Our Office' },
  { icon: Globe, label: site.website, sub: 'Explore Our Services' },
];

export default function Contact() {
  return (
    <section className="section section--dark" id="contact">
      <Container className="split split--center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Get In Touch With Us Today"
            title="Let's Build Cleaner, Safer Spaces Together"
            lead="Whether you need janitor services for your office, facility or a large enterprise, our team is ready to provide the right solution for your needs."
          />
          <ul className="contact-list">
            {contactItems.map((item) => (
              <li key={item.label}>
                <span className="contact-list__icon"><item.icon size={18} aria-hidden /></span>
                {item.href ? (
                  <a href={item.href}>{item.label}<small>{item.sub}</small></a>
                ) : (
                  <span>{item.label}<small>{item.sub}</small></span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-panel">
          <p className="cta-panel__quote">“A clean environment builds a brighter tomorrow.”</p>
          <p className="cta-panel__text">Ready for a better-maintained space? Let's build it together.</p>
          <Button href={site.whatsapp} withArrow>Start the Conversation</Button>
        </div>
      </Container>
    </section>
  );
}
