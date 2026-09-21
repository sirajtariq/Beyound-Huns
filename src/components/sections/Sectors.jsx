import { sectors, stats } from '../../data/sectors';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function Sectors() {
  return (
    <section className="section" id="sectors">
      <Container>
        <SectionHeading
          eyebrow="We Serve Islamabad & Beyond"
          title="Cleaner, Safer Spaces Across Every Sector"
          lead="From corporate offices and commercial buildings to institutions and residential communities — reliable facility solutions for a cleaner, brighter Islamabad."
        />
        <ul className="sector-list">
          {sectors.map((s) => (
            <li key={s.label}>
              <s.icon size={26} aria-hidden />
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
        <dl className="stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stats__item">
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
