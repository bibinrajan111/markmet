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
          title="Growth strategy, creative execution, and measurable outcomes"
          description="We blend insight-led planning and high-performance execution to help brands move faster in digital markets."
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
                <h3 className="text-2xl font-semibold">Our Story</h3>
                <p className="text-slate-600">Markmet helps modern brands translate ambition into consistent digital growth. We architect campaigns, content, and experiences that drive outcomes—not vanity metrics.</p>
                <p className="text-slate-600">Every sprint is designed for momentum: clear strategy, rapid iteration, and transparency at every milestone.</p>
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
            <source src="https://player.vimeo.com/external/371433814.sd.mp4?s=2366f35f2cf2d4e728fdbd4a0344dbf2e6b6ebf2&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          </motion.video>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
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
