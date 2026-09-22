import { Check } from 'lucide-react';
import { packages, packagesIntro, enterprisePackage } from '../../data/packages';
import { site } from '../../data/site';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function Packages() {
  return (
    <section className="section section--tinted" id="packages">
      <Container>
        <SectionHeading
          eyebrow="Janitor Services Packages"
          title="Simple. *Transparent.* Reliable."
          lead={packagesIntro}
        />
        <div className="card-grid card-grid--3">
          {packages.map((pkg) => (
            <article key={pkg.id} className={`card package-card ${pkg.featured ? 'package-card--featured' : ''}`}>
              {pkg.featured && <span className="package-card__flag">Popular</span>}
              <h3>{pkg.name}</h3>
              <p className="package-card__price">{pkg.price}<span>{pkg.unit}</span></p>
              <ul className="check-list">
                {pkg.features.map((f) => (
                  <li key={f}><Check size={14} aria-hidden /> {f}</li>
                ))}
              </ul>
              <Button href={site.whatsapp} variant={pkg.featured ? 'primary' : 'outline'}>
                Book This Package
              </Button>
            </article>
          ))}

          <article className="card package-card package-card--enterprise">
            <h3>{enterprisePackage.name}</h3>
            <p className="package-card__sub">{enterprisePackage.subtitle}</p>
            <p className="card__desc">{enterprisePackage.description}</p>
            <ul className="check-list">
              {enterprisePackage.features.map((f) => (
                <li key={f}><Check size={14} aria-hidden /> {f}</li>
              ))}
            </ul>
            <Button href={site.whatsapp}>{enterprisePackage.cta}</Button>
          </article>
        </div>
      </Container>
    </section>
  );
}
