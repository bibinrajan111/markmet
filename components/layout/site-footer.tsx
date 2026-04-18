import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { companyInfo, services } from '@/lib/site-data';

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#05070a] py-12 text-white">
      <div className="mx-auto grid w-[min(1200px,94vw)] gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold">{companyInfo.name}</h3>
          <p className="mt-3 text-sm text-white/70">Growth-first digital partner for ambitious brands.</p>
          <p className="mt-3 flex items-start gap-2 text-sm text-white/80"><MapPin className="mt-0.5 h-4 w-4" />{companyInfo.location}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#8acde8]">Explore</h4>
          <div className="mt-3 grid gap-2 text-sm text-white/85">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#8acde8]">Services</h4>
          <div className="mt-3 grid gap-2 text-sm text-white/85">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#8acde8]">Connect</h4>
          <div className="mt-3 grid gap-2 text-sm text-white/85">
            <a className="flex items-center gap-2" href={`mailto:${companyInfo.email}`}><Mail className="h-4 w-4" />{companyInfo.email}</a>
            {companyInfo.phones.map((phone) => (
              <a key={phone} className="flex items-center gap-2" href={`tel:${phone}`}><Phone className="h-4 w-4" />{phone}</a>
            ))}
            <div className="mt-2 flex gap-3">
              <a aria-label="Facebook" href={companyInfo.social.facebook} target="_blank" rel="noreferrer"><Facebook className="h-4 w-4" /></a>
              <a aria-label="Instagram" href={companyInfo.social.instagram} target="_blank" rel="noreferrer"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
