'use client';

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SectionHeading from '@/components/sections/section-heading';
import { companyInfo, services } from '@/lib/site-data';

export default function ContactPage() {
  return (
    <main className="py-16">
      <section className="mx-auto w-[min(1200px,94vw)]">
        <SectionHeading
          label="Contact"
          title="Let’s build your next growth chapter"
          description="Tell us your goals, timelines, and service needs. Our team will respond with a practical action plan."
        />

        <p className="mb-6 text-center text-sm text-slate-700">
          Email: <a className="font-medium text-[#007eb2]" href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
          {' '}| Phone: {companyInfo.phones.join(', ')}
        </p>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <Card>
              <CardContent className="space-y-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input placeholder="Phone Number" />
                <select className="h-11 w-full rounded-xl border border-[#007eb2]/25 bg-white px-4 text-sm text-slate-700 outline-none ring-[#007eb2]/40 focus:ring-2">
                  <option>Required Service</option>
                  {services.map((service) => (
                    <option key={service.slug}>{service.title}</option>
                  ))}
                  <option>Other</option>
                </select>
                <Textarea placeholder="Share goals, target audience, and timeline." />
                <Button size="lg">Submit Enquiry</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Connect with us</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-slate-700">
                  <Mail className="h-4 w-4 text-[#007eb2]" />
                  {companyInfo.email}
                </p>
                {companyInfo.phones.map((phone) => (
                  <p key={phone} className="mt-2 flex items-center gap-2 text-sm text-slate-700">
                    <Phone className="h-4 w-4 text-[#007eb2]" />
                    {phone}
                  </p>
                ))}
              </CardContent>
            </Card>
            <img
              src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80"
              alt="Team discussion"
              className="h-56 w-full rounded-2xl object-cover shadow-xl"
            />
            <video autoPlay muted loop playsInline className="h-56 w-full rounded-2xl object-cover shadow-xl">
              <source
                src="https://player.vimeo.com/external/395591344.sd.mp4?s=906b464613cbcc8d6400ed1d5d295df1c548d652&profile_id=164&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
