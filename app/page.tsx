'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { services } from '@/lib/site-data';
import SectionHeading from '@/components/sections/section-heading';
import Features3D from '@/components/sections/features-3d';

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-[#007eb2]/10 bg-[#05070a] py-28 text-white">
        <video className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" autoPlay muted loop playsInline>
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=6f6b89d067f7ec4db39f1741314a87d6ec8e2cc5&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#05070a] via-[#05070a]/85 to-[#007eb2]/65" />

        <div className="mx-auto w-[min(1200px,94vw)]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-5 border-white/40 bg-white/10 text-white">Piravom, Kerala</Badge>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Build momentum with a full-spectrum digital growth partner.</h1>
            <p className="mt-5 max-w-2xl text-white/80">Markmet combines strategy, storytelling media, and high-converting digital experiences for brands that want to win online.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services"><Button size="lg" variant="secondary">Explore Services</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline">Start a Project</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-[min(1200px,94vw)]">
          <SectionHeading
            label="Capabilities"
            title="Omnichannel systems built for measurable growth"
            description="From strategy to execution, we build agile growth engines that combine media, performance marketing, and product experiences."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
                  <CardContent>
                    <h3 className="text-lg font-semibold text-[#0e141a]">{service.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{service.tagline}</p>
                    <Link href={`/services/${service.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#007eb2]">
                      View Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionHeading
          label="Features"
          title="Interactive 3D feature experiences"
          description="Hover each card to explore depth, movement, and cinematic feedback inspired by premium product storytelling."
        />
        <Features3D />
      </section>
    </main>
  );
}
