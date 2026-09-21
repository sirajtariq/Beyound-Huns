import { about } from '../../data/whyUs';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function About() {
  return (
    <section className="section" id="about">
      <Container className="split">
        <div>
          <SectionHeading align="left" eyebrow="Who We Are" title={about.heading} lead={about.lead} />
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="body-text">{p}</p>
          ))}
          <ul className="pillar-list">
            {about.pillars.map((p, i) => (
              <li key={p.title}>
                <span className="pillar-list__num">0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <figure className="split__media">
          <img src={about.image} alt={about.imageAlt} loading="lazy" />
        </figure>
      </Container>
    </section>
  );
}
