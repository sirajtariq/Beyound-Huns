import { cn } from './Button';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = false, light = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-extrabold mb-4",
        light ? "text-white" : "text-corporate-navy"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl max-w-3xl text-balance",
          centered && "mx-auto",
          light ? "text-blue-100" : "text-gray-600"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
