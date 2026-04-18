import * as React from 'react';
import { cn } from '@/lib/utils';

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'flex h-11 w-full rounded-xl border border-[#007eb2]/25 bg-white px-4 text-sm text-[#0e141a] outline-none ring-[#007eb2]/40 transition focus:ring-2',
        className,
      )}
      {...props}
    />
  );
}
