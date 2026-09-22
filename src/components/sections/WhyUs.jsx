import { whyUsIntro, whyUsPoints } from '../../data/whyUs';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function WhyUs() {
  return (
    <section className="section" id="why-us">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Beyond Huns?"
          title="More Than a Service. *A Partner You Can Rely On.*"
          lead={whyUsIntro}
        />
        <div className="card-grid card-grid--5">
          {whyUsPoints.map((point) => (
            <article key={point.title} className="card point-card">
              <div className="point-card__icon"><point.icon size={22} aria-hidden /></div>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
        <blockquote className="quote">
          <p>“People make the difference. Behind every well-maintained facility is a team that takes responsibility, pays attention to detail and genuinely cares about the customer experience.”</p>
        </blockquote>
      </Container>
    </section>
  );
}
