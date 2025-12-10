'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon } from 'lucide-react';

import { useTheme } from './ThemeProvider';


export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full  lg:max-w-3xl xl:max-w-5xl mx-auto px-4 md:px-12 fixed top-5 left-1/2 -translate-x-1/2 flex justify-between">
      <div className="p-1 rounded-xl bg-[var(--bg-primary)]/20 w-fit h-fit border border-[var(--border)] backdrop-blur-xl">
        <Link href="/"><Image className="rounded-lg" width={46} height={46} src="/img/profile.jpg" alt="profile" unoptimized={true} quality={100} /></Link>
      </div>
      <div className="p-1 rounded-xl bg-[var(--bg-primary)]/20 w-fit border border-[var(--border)] backdrop-blur-xl hidden md:flex justify-center">
        <ul className="flex gap-1 text-sm items-center text-[var(--text-primary)]/50">
          <Link href="/abouts"><li className={`hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg p-3 hover:cursor-pointer ${pathname === '/pages/about' ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)]' : ''}`}>About</li></Link>
          <Link href="/articles"><li className={`hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg p-3 hover:cursor-pointer ${pathname.startsWith('/pages/articles') ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)]' : ''}`}>Article</li></Link>
          <Link href="/project"><li className={`hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg p-3 hover:cursor-pointer ${pathname.startsWith('/pages/project') ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)]' : ''}`}>Projects</li></Link>
          <Link href="/uses"><li className={`hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg p-3 hover:cursor-pointer ${pathname === '/pages/uses' ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)]' : ''}`}>Uses</li></Link>
        </ul>
      </div>
      <div className="flex gap-3">
        <div className="Menu flex items-center justify-center px-4 rounded-xl bg-[var(--bg-primary)]/20 w-fit border border-[var(--border)] backdrop-blur-xl md:hidden">
          <div className="card w-fit">Menu</div>
        </div>
        <button
          onClick={toggleTheme}
          className="p-1 rounded-xl bg-[var(--bg-primary)]/20 w-fit border border-[var(--border)] backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <div className="w-[46px] h-[46px] flex items-center justify-center">
            {theme === 'dark' ? (
              <Sun className="w-6 h-6 text-[var(--text-primary)]" />
            ) : (
              <Moon className="w-6 h-6 text-[var(--text-primary)]" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}