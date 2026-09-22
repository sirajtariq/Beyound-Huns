export default function SectionHeading({ eyebrow, title, lead, align = 'center' }) {
  const renderTitle = (text) => {
    if (typeof text !== 'string') return text;
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return <span key={i} className="text-accent">{part.slice(1, -1)}</span>;
      }
      return part;
    });
  };

  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title ? renderTitle(title) : null}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
}
