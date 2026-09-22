import { Check, ArrowRight } from 'lucide-react';
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
          {serviceGroups.map((group, index) => (
            <article key={group.id} className={`service-card-v2 theme-${group.theme}`}>
              <div className="service-card-v2__media">
                <img src={group.image} alt="" />
                <div className="service-card-v2__wave" aria-hidden>
                  <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path fill="currentColor" d="M0,64L120,74.7C240,85,480,107,720,101.3C960,96,1200,64,1320,48L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
                  </svg>
                </div>
                <div className="service-card-v2__icon-wrapper">
                  <div className="service-card-v2__icon"><group.icon size={26} aria-hidden /></div>
                </div>
              </div>
              <div className="service-card-v2__body">
                <div className="service-card-v2__bg-icon" aria-hidden>
                  <group.icon size={120} />
                </div>
                <div className="service-card-v2__header">
                  <span className="service-card-v2__num">0{index + 1}</span>
                </div>
                <h3>{group.title}</h3>
                <p className="card__desc">{group.description}</p>
                <ul className="check-list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <div style={{ background: 'var(--color-blue)', color: 'white', borderRadius: '50%', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="check-icon-bg">
                        <Check size={12} strokeWidth={3} aria-hidden />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a className="service-card-v2__btn" href="#contact">Explore Services <ArrowRight size={18} aria-hidden /></a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
