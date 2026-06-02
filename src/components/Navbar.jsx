import { useEffect, useState } from 'react';
import { Menu } from './Icons.jsx';
import { profile } from '../content/profile.js';
import { useActiveSection } from '../hooks.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = profile.navigation;
  const active = useActiveSection(['home', 'about', 'experience', 'work', 'contact']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ' +
        (scrolled ? 'bg-cream/70 backdrop-blur-xl border-b border-border/70' : 'bg-transparent')
      }
    >
      <div className="mx-auto max-w-page h-20 px-6 md:px-12 flex items-center justify-between">
        <a href="#top" className="font-serif italic text-[26px] leading-none text-ink">
          {profile.logoName}<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-active={active === l.id}
              className="nav-link text-[15px] font-medium text-ink-soft hover:text-ink data-[active=true]:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex group items-center gap-2 bg-ink text-cream rounded-full px-7 py-3 text-[15px] font-medium hover:bg-ink-soft transition-colors"
        >
          {profile.contactCta}
        </a>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-cream/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="uppercase text-xs tracking-caps py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-ink text-cream rounded-full px-5 py-3 text-sm font-medium self-start"
            >
              {profile.contactCta} →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
