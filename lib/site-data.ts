import { BarChart3, Camera, Megaphone, Rocket, SearchCheck, Smartphone } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  heroSubtitle: string;
  highlights: string[];
  image: string;
  description: string;
  deliveryTitle: string;
  deliveryDescription: string;
  deliveryPoints: string[];
  ctaTitle: string;
  ctaDescription: string;
};

const sharedDeliveryPoints = [
  'Discovery workshop and competitor benchmarking to identify market whitespace.',
  'Tailored campaign roadmap with quarterly milestones and accountability loops.',
  'Creative and channel alignment for consistent messaging across touchpoints.',
  'Weekly analytics review with transparent performance reporting and recommendations.',
];

export const services: Service[] = [
  {
    slug: 'strategy-building',
    title: 'Strategy Building',
    tagline: 'Roadmaps that transform marketing goals into measurable outcomes.',
    heroSubtitle: 'Blueprints that align audience insight, positioning, and growth targets.',
    highlights: ['Market diagnostics', 'Customer journey planning', 'Campaign architecture'],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    description:
      'We design practical growth strategies based on customer behavior, competitive intelligence, and business constraints.',
    deliveryTitle: 'How Markmet delivers Strategy Building',
    deliveryDescription:
      'Every engagement begins with business context, audience behavior, and measurable goals. We then build and execute a practical plan that combines creative quality with performance rigor.',
    deliveryPoints: sharedDeliveryPoints,
    ctaTitle: 'Ready to elevate your strategy building outcomes?',
    ctaDescription: 'Speak with Markmet and receive a focused action plan for your brand.',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'High-impact funnels across search, social, email, and content.',
    heroSubtitle: 'Full-funnel execution across SEO, social, paid media, and CRM automation.',
    highlights: ['Performance campaigns', 'SEO and content engine', 'Analytics and optimization'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    description:
      'From awareness to conversion, we orchestrate measurable campaigns with transparent reporting and rapid iteration cycles.',
    deliveryTitle: 'How Markmet delivers Digital Marketing',
    deliveryDescription:
      'Every engagement begins with business context, audience behavior, and measurable goals. We then build and execute a practical plan that combines creative quality with performance rigor.',
    deliveryPoints: sharedDeliveryPoints,
    ctaTitle: 'Ready to elevate your digital marketing outcomes?',
    ctaDescription: 'Speak with Markmet and receive a focused action plan for your brand.',
  },
  {
    slug: 'media-production',
    title: 'Media Production',
    tagline: 'Visual storytelling for premium brand recall and engagement.',
    heroSubtitle: 'Studio-grade creative assets for high-retention campaigns and brand storytelling.',
    highlights: ['Photo and video production', 'Motion graphics', 'Reel and short-form editing'],
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=80',
    description:
      'We create cinematic visual assets that help brands stand out across social, ads, and websites.',
    deliveryTitle: 'How Markmet delivers Media Production',
    deliveryDescription:
      'Every engagement begins with business context, audience behavior, and measurable goals. We then build and execute a practical plan that combines creative quality with performance rigor.',
    deliveryPoints: sharedDeliveryPoints,
    ctaTitle: 'Ready to elevate your media production outcomes?',
    ctaDescription: 'Speak with Markmet and receive a focused action plan for your brand.',
  },
  {
    slug: 'advertisement',
    title: 'Advertisement',
    tagline: 'Cross-channel paid media that scales demand and conversion.',
    heroSubtitle: 'Paid media systems tuned for performance, reach, and conversion efficiency.',
    highlights: ['Meta & Google ads', 'Creative testing lab', 'Budget and bid optimization'],
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1600&q=80',
    description:
      'Our paid media systems blend creative experimentation with smart allocation to maximize qualified leads.',
    deliveryTitle: 'How Markmet delivers Advertisement',
    deliveryDescription:
      'Every engagement begins with business context, audience behavior, and measurable goals. We then build and execute a practical plan that combines creative quality with performance rigor.',
    deliveryPoints: sharedDeliveryPoints,
    ctaTitle: 'Ready to elevate your advertisement outcomes?',
    ctaDescription: 'Speak with Markmet and receive a focused action plan for your brand.',
  },
  {
    slug: 'influencer-creator-management',
    title: 'Influencer & Creator Management',
    tagline: 'Creator-led growth programs engineered for trust and reach.',
    heroSubtitle: 'Creator partnerships managed end-to-end for trust, engagement, and sales velocity.',
    highlights: ['Talent curation', 'Campaign orchestration', 'Performance tracking'],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    description:
      'We connect brands with aligned creators and manage end-to-end activations for authentic market impact.',
    deliveryTitle: 'How Markmet delivers Influencer & Creator Management',
    deliveryDescription:
      'Every engagement begins with business context, audience behavior, and measurable goals. We then build and execute a practical plan that combines creative quality with performance rigor.',
    deliveryPoints: sharedDeliveryPoints,
    ctaTitle: 'Ready to elevate your influencer & creator management outcomes?',
    ctaDescription: 'Speak with Markmet and receive a focused action plan for your brand.',
  },
  {
    slug: 'website-app-development',
    title: 'Website and APP Development',
    tagline: 'Modern digital products tailored for speed, conversion, and growth.',
    heroSubtitle: 'Conversion-focused websites and apps crafted for speed, scale, and user delight.',
    highlights: ['UI/UX architecture', 'Responsive web builds', 'App prototyping and support'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    description:
      'We engineer conversion-focused websites and app experiences with performance, accessibility, and scalability in mind.',
    deliveryTitle: 'How Markmet delivers Website and APP Development',
    deliveryDescription:
      'Every engagement begins with business context, audience behavior, and measurable goals. We then build and execute a practical plan that combines creative quality with performance rigor.',
    deliveryPoints: sharedDeliveryPoints,
    ctaTitle: 'Ready to elevate your website and app development outcomes?',
    ctaDescription: 'Speak with Markmet and receive a focused action plan for your brand.',
  },
];

export const companyInfo = {
  name: 'Markmet',
  location: 'Piravom, Kerala, India',
  phones: ['+917025601526', '+919645473942'],
  email: 'support@markmet.co.in',
  social: {
    facebook: 'https://www.facebook.com/share/1E9VSBSQxe/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/markmetdigital?igsh=c3JuMHNhZ2wzMTFw',
  },
};

export const homeStats = [
  ['200+', 'Campaigns launched'],
  ['95%', 'Client retention focus'],
  ['6', 'Integrated core services'],
  ['24/7', 'Optimization rhythm'],
] as const;

export const valueItems = [
  {
    title: 'Transparency',
    content: 'We share plans, budgets, and outcomes clearly with clients at every stage.',
  },
  {
    title: 'Creative Performance',
    content: 'Our creative assets are built to inspire emotion and produce measurable action.',
  },
  {
    title: 'Continuous Innovation',
    content: 'We test, analyze, and optimize continuously for market shifts and trends.',
  },
];

export const featureCards = [
  {
    title: 'Performance Growth',
    icon: Rocket,
    description: 'Data-led campaign systems engineered for compounding ROI and measurable growth.',
  },
  {
    title: 'Search Intelligence',
    icon: SearchCheck,
    description: 'SEO + intent strategy that captures demand where your audience is actively searching.',
  },
  {
    title: 'Creative Studio',
    icon: Camera,
    description: 'Cinematic content production for social, paid campaigns, and product storytelling.',
  },
  {
    title: 'Paid Media',
    icon: Megaphone,
    description: 'Cross-channel ad operations with test loops, budget pacing, and conversion lift.',
  },
  {
    title: 'Analytics Stack',
    icon: BarChart3,
    description: 'Decision-ready dashboards and insights that guide weekly optimization.',
  },
  {
    title: 'Web & App Experiences',
    icon: Smartphone,
    description: 'Fast, responsive interfaces designed to convert and retain customers.',
  },
];
