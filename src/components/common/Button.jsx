import { ArrowRight } from 'lucide-react';

export default function Button({ href, children, variant = 'primary', withArrow = false, ...props }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} className={`btn btn--${variant}`} {...props}>
      {children}
      {withArrow && <ArrowRight size={16} aria-hidden />}
    </Tag>
  );
}
