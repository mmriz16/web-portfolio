'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6 bg-white/5 border-1 border-white/10">
      <div className="flex flex-col self-center md:flex-row md:justify-between px-6">
        <ul className="flex gap-4 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/project">Project</Link></li>
          <li><Link href="/articles">Articles</Link></li>
        </ul>
        <p className="text-sm text-white/50">&copy;2025 Miftakhul Rizky. All rights reserved.</p>
      </div>
    </div>
  );
}
