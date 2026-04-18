import { BarChart3, Camera, Megaphone, Rocket, SearchCheck, Smartphone } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  highlights: string[];
  image: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: 'strategy-building',
    title: 'Strategy Building',
    tagline: 'Roadmaps that transform marketing goals into measurable outcomes.',
    highlights: ['Market diagnostics', 'Customer journey planning', 'Campaign architecture'],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    description:
      'We design practical growth strategies based on customer behavior, competitive intelligence, and business constraints.',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'High-impact funnels across search, social, email, and content.',
    highlights: ['Performance campaigns', 'SEO and content engine', 'Analytics and optimization'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    description:
      'From awareness to conversion, we orchestrate measurable campaigns with transparent reporting and rapid iteration cycles.',
  },
  {
    slug: 'media-production',
    title: 'Media Production',
    tagline: 'Visual storytelling for premium brand recall and engagement.',
    highlights: ['Photo and video production', 'Motion graphics', 'Reel and short-form editing'],
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=80',
    description:
      'We create cinematic visual assets that help brands stand out across social, ads, and websites.',
  },
  {
    slug: 'advertisement',
    title: 'Advertisement',
    tagline: 'Cross-channel paid media that scales demand and conversion.',
    highlights: ['Meta & Google ads', 'Creative testing lab', 'Budget and bid optimization'],
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1600&q=80',
    description:
      'Our paid media systems blend creative experimentation with smart allocation to maximize qualified leads.',
  },
  {
    slug: 'influencer-creator-management',
    title: 'Influencer & Creator Management',
    tagline: 'Creator-led growth programs engineered for trust and reach.',
    highlights: ['Talent curation', 'Campaign orchestration', 'Performance tracking'],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    description:
      'We connect brands with aligned creators and manage end-to-end activations for authentic market impact.',
  },
  {
    slug: 'website-app-development',
    title: 'Website and App Development',
    tagline: 'Modern digital products tailored for speed, conversion, and growth.',
    highlights: ['UI/UX architecture', 'Responsive web builds', 'App prototyping and support'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    description:
      'We engineer conversion-focused websites and app experiences with performance, accessibility, and scalability in mind.',
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
