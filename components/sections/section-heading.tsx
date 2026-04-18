'use client';

import { motion } from 'framer-motion';

type Props = {
  label: string;
  title: string;
  description: string;
};

export default function SectionHeading({ label, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="mb-3 inline-flex rounded-full border border-[#8acde8] bg-[#007eb2]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#005d86]">
        {label}
      </p>
      <h2 className="text-3xl font-bold text-[#0e141a] md:text-4xl">{title}</h2>
      <p className="mt-3 text-slate-600">{description}</p>
    </motion.div>
  );
}
