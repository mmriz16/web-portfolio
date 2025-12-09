'use client';
import { Mail } from 'lucide-react';

export default function Update() {
  return (
    <div className="p-6 border rounded-2xl border-[var(--border)] gap-2.5 flex flex-col">
      <h1 className="text-[var(--text-primary)] font-semibold">Stay up to date</h1>
      <p className="text-sm text-[var(--text-secondary)] leading-[1.6]">Get notified when I publish something new, and unsubscribe at any time.</p>
      <div className="flex items-center justify-center gap-2.5 mt-4">
        <div className="flex items-center gap-2 w-full p-4 border border-[var(--border)] bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-xl">
          <Mail className="w-5 h-5 text-[var(--text-secondary)]" />
          <input type="email" placeholder="Email Address" className="text-xs w-full focus:outline-none" />
        </div>
        <button className="bg-[var(--btn-primary)] text-white font-semibold p-4 rounded-xl text-xs">Join</button>
      </div>
    </div>
  );
}