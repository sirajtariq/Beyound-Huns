import React from 'react';
import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for clean tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  to?: string;
  href?: string;
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  asLink, 
  to, 
  href, 
  children, 
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:ring-offset-2";
  
  const variants = {
    primary: "bg-corporate-blue text-white hover:bg-blue-700 shadow-sm",
    secondary: "bg-corporate-navy text-white hover:bg-gray-800 shadow-sm",
    outline: "border-2 border-corporate-blue text-corporate-blue hover:bg-corporate-light",
    ghost: "text-corporate-navy hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (asLink && to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (asLink && href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
