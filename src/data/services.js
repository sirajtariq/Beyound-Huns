
import { SprayCan, Wrench, Users, Package } from 'lucide-react';

// To add a service: push a new object. To remove: delete the object.
export const serviceGroups = [
  {
    id: 'floor-cleaning',
    image: 'assets/restroom-cleaning.png',
    icon: SprayCan,
    title: 'Floor Cleaning Services',
    description: 'Professional cleaning for spotless and hygienic floors.',
    theme: 'blue',
    items: [
      'Floor Deep Cleaning',
      'Floor Scrubbing & Washing',
      'Floor Polishing',
      'Carpet Shampooing',
    ],
  },
  {
    id: 'glass-cleaning',
    image: 'assets/facility-maintenance.png',
    icon: Wrench,
    title: 'Glass & Window Cleaning',
    description: 'Crystal-clear glass surfaces and spotless windows.',
    theme: 'navy',
    items: [
      'Glass Cleaning',
      'Window Cleaning',
      'Glass Partition Cleaning',
      'Facade Glass Cleaning',
    ],
  },
  {
    id: 'building-cleaning',
    image: 'assets/facility-team.png',
    icon: Users,
    title: 'Building & Exterior Cleaning',
    description: 'Complete cleaning solutions for indoor and outdoor spaces.',
    theme: 'orange',
    items: [
      'Roof Cleaning',
      'Building Exterior Cleaning',
      'Wall Cleaning',
      'Parking Area Cleaning',
    ],
  },
  {
    id: 'specialized-cleaning',
    image: 'assets/floor-care.png',
    icon: Package,
    title: 'Specialized Cleaning Services',
    description: 'Reliable janitorial and deep-cleaning solutions.',
    theme: 'purple',
    items: [
      'Janitorial Services',
      'Washroom & Restroom Cleaning',
      'Deep Cleaning Services',
      'Fumigation Services',
    ],
  },
];
