const standardFeatures = [
  'Trained & Verified Staff',
  'Standard Uniform & ID',
  'Basic Cleaning Equipment',
  'Regular Supervision',
  'Replacement Support',
  'Consistent Service Quality',
];

export const packagesIntro =
  'Professional janitor services to keep your workplace clean, organized and welcoming — so you can focus on what matters most.';

export const packages = [
  {
    id: 'male-janitor',
    name: 'Male Janitor Package',
    price: 'PKR 65,000',
    unit: 'per month (per janitor)',
    features: standardFeatures,
    featured: false,
  },
  {
    id: 'female-janitor',
    name: 'Female Janitor Package',
    price: 'PKR 75,000',
    unit: 'per month (per janitor)',
    features: standardFeatures,
    featured: true,
  },
];

export const enterprisePackage = {
  name: 'Enterprise / High-Rise Buildings',
  subtitle: 'Custom Solution',
  cta: 'Get a Quotation',
  description:
    'Contact us for tailored pricing based on your facility size and requirements.',
  features: [
    'Customized Service Plan',
    'Dedicated Supervision',
    'Scalable Workforce',
    'Specialized Equipment',
    'Flexible Terms',
    'On-site Assessment',
  ],
};
