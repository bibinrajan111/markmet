'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Service } from '@/lib/site-data';

export default function ServiceDetailView({ service }: { service: Service }) {
  return (
    <main>
      <section className="relative overflow-hidden py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#05070a]/90 to-[#007eb2]/70" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-[min(1200px,94vw)]"
        >
          <Badge className="border-white/50 bg-white/10 text-white">Markmet Service</Badge>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-3xl text-white/85">{service.heroSubtitle}</p>
        </motion.div>
      </section>

      <section className="mx-auto grid w-[min(1200px,94vw)] gap-4 py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold">{service.deliveryTitle}</h2>
              <p className="mt-3 text-slate-600">{service.deliveryDescription}</p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-700">
                {service.deliveryPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.video
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          autoPlay
          muted
          loop
          playsInline
          className="h-full min-h-80 w-full rounded-2xl object-cover shadow-xl"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=6f6b89d067f7ec4db39f1741314a87d6ec8e2cc5&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </motion.video>
      </section>

      <section className="mx-auto w-[min(1200px,94vw)] pb-14">
        <Card className="bg-gradient-to-r from-[#007eb2] to-[#005d86] text-white">
          <CardContent className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">{service.ctaTitle}</h3>
              <p className="mt-2 text-white/85">{service.ctaDescription}</p>
            </div>
            <Link href="/contact">
              <Button variant="secondary" size="lg">Contact Markmet</Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
