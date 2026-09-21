import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { site, navLinks } from '../../data/site';
import Container from '../common/Container';

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__grid">
        <div>
          <p className="brand__name brand__name--light">Beyond Huns</p>
          <p className="footer__promise">{site.promise}</p>
          <p className="footer__pillars">{site.pillars.join(' · ')}</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <ul className="footer__contact">
          <li><Phone size={15} aria-hidden /> <a href={site.phoneHref}>{site.phone}</a></li>
          <li><Mail size={15} aria-hidden /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><MapPin size={15} aria-hidden /> <span>{site.address}</span></li>
          <li><Globe size={15} aria-hidden /> <span>{site.website}</span></li>
        </ul>
      </Container>

      <div className="footer__bottom">
        <Container>
          <p>© {new Date().getFullYear()} Beyond Huns. All rights reserved. — {site.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
