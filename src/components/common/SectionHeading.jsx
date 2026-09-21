export default function SectionHeading({ eyebrow, title, lead, align = 'center' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
}
