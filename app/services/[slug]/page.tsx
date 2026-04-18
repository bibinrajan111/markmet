import { notFound } from 'next/navigation';
import ServiceDetailView from '@/components/sections/service-detail-view';
import { services } from '@/lib/site-data';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}
