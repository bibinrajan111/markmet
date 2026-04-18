import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="grid min-h-[65vh] place-items-center px-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#007eb2]">404</p>
        <h1 className="mt-2 text-4xl font-bold">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you’re looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-block">
          <Button>Back Home</Button>
        </Link>
      </div>
    </main>
  );
}
