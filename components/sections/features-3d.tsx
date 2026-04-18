'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { ComponentType } from 'react';
import { featureCards } from '@/lib/site-data';

function TiltCard({ title, description, Icon }: { title: string; description: string; Icon: ComponentType<{ className?: string }> }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 180, damping: 18 });

  return (
    <motion.article
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        x.set(px);
        y.set(py);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative rounded-2xl border border-[#007eb2]/20 bg-white/80 p-6 shadow-[0_18px_40px_rgba(5,7,10,0.14)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#007eb2]/12 via-transparent to-[#05070a]/10 opacity-0 transition group-hover:opacity-100" />
      <div style={{ transform: 'translateZ(36px)' }} className="relative">
        <div className="mb-4 inline-flex rounded-xl bg-[#007eb2]/10 p-3 text-[#007eb2]">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-[#0e141a]">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>
    </motion.article>
  );
}

export default function Features3D() {
  return (
    <section className="py-20">
      <div className="mx-auto w-[min(1200px,94vw)]">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
          {featureCards.map((feature) => (
            <TiltCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              Icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
