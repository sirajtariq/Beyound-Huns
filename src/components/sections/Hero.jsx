import { Leaf, ShieldCheck, Smile } from 'lucide-react';
import { hero, site } from '../../data/site';
import Container from '../common/Container';
import Button from '../common/Button';

const highlightIcons = [Leaf, ShieldCheck, Smile];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Container className="hero__grid">
        <div className="hero__content">
          <p className="eyebrow">{site.tagline}</p>
          <h1>
            {hero.titleTop}<br />
            <span className="text-accent">{hero.titleMid}</span><br />
            {hero.titleBottom}
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <Button href="#packages" withArrow>View Janitor Packages</Button>
            <Button href={site.whatsapp} variant="outline">WhatsApp Us</Button>
          </div>
          <ul className="hero__highlights">
            {hero.highlights.map((h, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <li key={h.title}>
                  <Icon size={20} aria-hidden />
                  <span><strong>{h.title}</strong> {h.sub}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <figure className="hero__media">
          <img src={hero.image} alt={hero.imageAlt} loading="eager" />
          <figcaption className="hero__badge">{site.promise}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
