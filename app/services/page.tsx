'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/sections/section-heading';
import { services } from '@/lib/site-data';

export default function ServicesPage() {
  return (
    <main className="py-16">
      <section className="mx-auto w-[min(1200px,94vw)]">
        <SectionHeading
          label="Services"
          title="Integrated digital services built for modern brands"
          description="Select a service to explore the outcomes, workflows, and growth approach Markmet brings to every engagement."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
                <CardContent>
                  <Badge>{service.title}</Badge>
                  <p className="mt-3 text-sm text-slate-600">{service.tagline}</p>
                  <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-700">
                    {service.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#007eb2]">
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
