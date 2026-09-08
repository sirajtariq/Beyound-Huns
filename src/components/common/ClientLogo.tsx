interface ClientLogoProps {
  name: string;
  svgData?: string;
  className?: string;
}

export function ClientLogo({ name, svgData, className = '' }: ClientLogoProps) {
  // Extract initials or short version for the logo mark
  const words = name.split(' ');
  const initials = words.length > 1 
    ? (words[0][0] + words[1][0]).toUpperCase() 
    : name.substring(0, 2).toUpperCase();

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-4 ${className}`}>
      {svgData ? (
        <div 
          className="w-auto h-12 md:h-16 max-w-full flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: svgData }}
        />
      ) : (
        <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 200 80" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-12 md:h-16 max-w-full"
      >
        {/* Subtle geometric mark */}
        <rect x="20" y="25" width="30" height="30" rx="6" fill="currentColor" fillOpacity="0.1" />
        <path d="M42 20 L50 28 L42 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8" />
        <path d="M30 44 L22 36 L30 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8" />
        
        {/* Initials in the mark */}
        <text 
          x="35" 
          y="46" 
          fontFamily="system-ui, sans-serif" 
          fontSize="14" 
          fontWeight="900" 
          fill="currentColor" 
          textAnchor="middle"
        >
          {initials}
        </text>

        {/* Company Name */}
        <text 
          x="65" 
          y="46" 
          fontFamily="system-ui, sans-serif" 
          fontSize="18" 
          fontWeight="800" 
          fill="currentColor" 
          letterSpacing="-0.5"
        >
          {name.length > 20 ? name.substring(0, 18) + '...' : name}
        </text>
      </svg>
      )}
    </div>
  );
}
