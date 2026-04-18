import * as React from 'react';
import { cn } from '@/lib/utils';

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'flex min-h-32 w-full rounded-xl border border-[#007eb2]/25 bg-white px-4 py-3 text-sm text-[#0e141a] outline-none ring-[#007eb2]/40 transition focus:ring-2',
        className,
      )}
      {...props}
    />
  );
}
