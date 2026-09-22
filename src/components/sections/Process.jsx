import { MessageSquare, ClipboardList, Briefcase, TrendingUp } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const steps = [
  { icon: MessageSquare, title: 'Understand', text: 'We understand your facility, requirements and expectations.' },
  { icon: ClipboardList, title: 'Plan', text: 'We develop a practical service plan tailored to your needs.' },
  { icon: Briefcase, title: 'Deliver', text: 'Our trained team executes with professionalism, care and attention to detail.' },
  { icon: TrendingUp, title: 'Monitor & Improve', text: 'We continuously monitor performance and improve service quality.' },
];

export default function Process() {
  return (
    <section className="section section--dark">
      <Container>
        <SectionHeading
          eyebrow="Our commitment"
          title="More Than a Service. *Peace of Mind.*"
          lead="A professional approach, dependable people and consistent quality — from the first day to every day after."
        />
        <ol className="process">
          {steps.map((step, i) => (
            <li key={step.title} className="process__step">
              <div className="process__icon"><step.icon size={21} aria-hidden /></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="promise-line">
          Our Promise: <strong>Clean</strong> Spaces · <strong>Safe</strong> Environments · <strong>Professional</strong> People · <strong>Reliable</strong> Partnerships
        </p>
      </Container>
    </section>
  );
}
