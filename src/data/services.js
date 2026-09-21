import { SprayCan, Wrench, Users, Package } from 'lucide-react';

// To add a service: push a new object. To remove: delete the object.
export const serviceGroups = [
  {
    id: 'cleaning',
    icon: SprayCan,
    title: 'Cleaning & Hygiene',
    description: 'A cleaner environment for healthier people.',
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
    icon: Wrench,
    title: 'Maintenance & Technical',
    description: 'Keeping your spaces in perfect shape.',
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
    icon: Users,
    title: 'Staffing & Facility Support',
    description: 'Reliable people for your business needs.',
    items: ['Contractual Staff Services'],
  },
  {
    id: 'supplies',
    icon: Package,
    title: 'Office & Business Supplies',
    description: 'Everyday essentials, delivered with convenience.',
    items: [
      'Office / School Stationery',
      'Computer Accessories',
      'General Supplies',
    ],
  },
];
