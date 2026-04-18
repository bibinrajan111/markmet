'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/sections/section-heading';
import { valueItems } from '@/lib/site-data';

export default function AboutPage() {
  return (
    <main className="py-16">
      <section className="mx-auto w-[min(1200px,94vw)]">
        <SectionHeading
          label="About Markmet"
          title="About Markmet"
          description="We are a Kerala-based digital marketing company helping brands build memorable stories, consistent demand, and measurable growth through strategy-led execution."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-semibold">Who We Are</h3>
                <p className="text-slate-600">
                  Markmet operates from Piravom, Kerala, delivering integrated marketing and digital
                  production services for startups, local businesses, and scaling enterprises. We
                  believe marketing should not be fragmented—strategy, creatives, media, and
                  technology must collaborate in one ecosystem.
                </p>
                <p className="text-slate-600">
                  Our teams blend audience research, content architecture, media buying, and creative
                  direction so that each campaign builds long-term brand equity while driving
                  short-term conversions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.video
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            autoPlay
            muted
            loop
            playsInline
            className="h-full min-h-72 w-full rounded-2xl object-cover shadow-xl"
          >
            <source
              src="https://player.vimeo.com/external/447697281.sd.mp4?s=1bd387f57be16eef88239003ce1bb4f001357349&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </motion.video>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <h3 className="mb-4 text-2xl font-semibold">Our Core Values</h3>
          <Accordion type="single" collapsible>
            {valueItems.map((item) => (
              <AccordionItem key={item.title} value={item.title}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>
    </main>
  );
}
