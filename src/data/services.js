import { SprayCan, Wrench, Users, Package } from 'lucide-react';

// To add a service: push a new object. To remove: delete the object.
export const serviceGroups = [
  {
    id: 'cleaning',
    image: 'assets/restroom-cleaning.png',
    icon: SprayCan,
    title: 'Cleaning & Hygiene',
    description: 'A cleaner environment for healthier people.',
    theme: 'blue',
    items: [
      'Janitorial Services',
      'General Cleaning',
      'Carpet Shampooing Services',
      'Floor Polishing',
      'Fumigation Services',
    ],
  },
  {
    id: 'maintenance',
    image: 'assets/facility-maintenance.png',
    icon: Wrench,
    title: 'Maintenance & Technical',
    description: 'Keeping your spaces in perfect shape.',
    theme: 'navy',
    items: [
      'Maintenance Services',
      'Plumber Services',
      'Electrician Services',
      'Paint Services',
      'Gardening Services',
    ],
  },
  {
    id: 'staffing',
    image: 'assets/facility-team.png',
    icon: Users,
    title: 'Staffing & Facility Support',
    description: 'Reliable people for your business needs.',
    theme: 'orange',
    items: [
      'Contractual Staff Services',
      'Recruitment & Selection',
      'Payroll Management',
      'Training & Development',
      'HR Consulting'
    ],
  },
  {
    id: 'supplies',
    image: 'assets/floor-care.png',
    icon: Package,
    title: 'Office & Business Supplies',
    description: 'Everyday essentials, delivered with convenience.',
    theme: 'purple',
    items: [
      'Office / School Stationery',
      'Computer Accessories',
      'General Supplies',
    ],
  },
];
