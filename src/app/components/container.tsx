'use client';

import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto py-2 md:py-12 bg-[var(--bg-secondary)] border-x-1 border-[var(--border)] lg:max-w-3xl xl:max-w-5xl max-w-full md:px-6 px-4">
      {children}
    </div>
  );
}