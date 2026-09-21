import { useState } from 'react';
import { Menu, X, Phone, Download } from 'lucide-react';
import { site, navLinks } from '../../data/site';
import useScrolled from '../../hooks/useScrolled';
import Container from '../common/Container';

const profileFile = 'Beyond-Huns-Company-Profile.pdf';

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <Container className="header__inner">
        <a href="#top" className="brand" aria-label="Beyond Huns home">
          <span className="brand__name">Beyond Huns</span>
          <span className="brand__tagline">{site.tagline}</span>
        </a>

        <nav className="nav nav--desktop" aria-label="Primary">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>

        <div className="header__actions">
          <a className="btn btn--outline btn--sm header__profile" href={profileFile} download>
            <Download size={15} aria-hidden /> Company Profile
          </a>
          <a className="btn btn--primary btn--sm header__cta" href={site.phoneHref}>
            <Phone size={15} aria-hidden /> {site.phone}
          </a>
          <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Toggle navigation">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {open && (
        <nav className="nav nav--mobile" aria-label="Mobile">
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="btn btn--outline" href={profileFile} download><Download size={16} aria-hidden /> Download Company Profile</a>
          <a className="btn btn--primary" href={site.phoneHref}><Phone size={15} aria-hidden /> Call {site.phone}</a>
        </nav>
      )}
    </header>
  );
}
