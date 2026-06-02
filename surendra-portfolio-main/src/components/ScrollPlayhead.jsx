import { useEffect, useState } from 'react';
import { profile } from '../content/profile.js';

// A thin edit-timeline scrubber pinned to the top of the viewport.
// The playhead + running timecode track scroll progress — the site's
// editing-suite signature, carried across every section.
export default function ScrollPlayhead() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Map progress to a fake running timecode, using the editable years of experience.
  const totalFrames = profile.yearsExperience * 60;
  const f = Math.round(progress * totalFrames);
  const mm = String(Math.floor(f / 60)).padStart(2, '0');
  const ss = String(f % 60).padStart(2, '0');
  const tc = `00:${mm}:${ss}`;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 inset-x-0 z-[60] h-1.5 bg-ink/5 backdrop-blur-sm pointer-events-none"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'repeating-linear-gradient(to right, rgba(10,10,10,.18) 0 1px, transparent 1px 40px)',
        }}
      />
      <div
        className="absolute left-0 top-0 h-full bg-accent"
        style={{ width: `${progress * 100}%` }}
      />
      <div
        className="absolute top-0 -translate-x-1/2"
        style={{ left: `${progress * 100}%` }}
      >
        <div className="w-px h-1.5 bg-ink" />
      </div>
      <div
        className="absolute top-2 px-1.5 py-0.5 rounded bg-ink text-cream text-[9px] font-sans tracking-caps tabular-nums whitespace-nowrap"
        style={{ left: `${progress * 100}%`, transform: `translateX(${-progress * 100}%)` }}
      >
        {tc}
      </div>
    </div>
  );
}
