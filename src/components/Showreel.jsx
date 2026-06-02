import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { videoFilters, videoSection, videos } from '../content/videos.js';
import { Play } from './Icons.jsx';

const ease = [0.2, 0.7, 0.2, 1];

export default function Showreel({ onPlay }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleVideos = useMemo(
    () => (activeFilter === 'all' ? videos : videos.filter((v) => v.category === activeFilter)),
    [activeFilter]
  );
  const channelCounts = useMemo(
    () =>
      videos.reduce((acc, video) => {
        acc[video.channel] = (acc[video.channel] || 0) + 1;
        return acc;
      }, {}),
    []
  );

  return (
    <section id="work" className="relative bg-cream border-t border-border">
      <div className="mx-auto max-w-page px-6 md:px-12 py-24 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <h3 className="font-sans uppercase font-bold tracking-caps text-[12px] text-ink-soft">
            <span className="inline-block w-8 h-px align-middle bg-accent mr-3" />
            {videoSection.eyebrow}
          </h3>
          <span className="hidden md:inline text-[12px] uppercase tracking-caps text-muted">
            {videoSection.countLabel} · <span className="text-accent">{videos.length}</span> videos
          </span>
        </div>

        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-sans uppercase font-black leading-none text-ink text-[48px] md:text-[88px] tracking-tight">
            {videoSection.titlePrefix}{' '}
            <span className="font-serif italic font-normal lowercase text-accent">
              {videoSection.titleAccent}
            </span>
          </h2>
          <p className="mt-5 text-[14px] text-muted max-w-md mx-auto">
            {videoSection.description}
          </p>
        </div>

        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-wrap gap-2">
            {videoFilters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                aria-pressed={activeFilter === filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={
                  'rounded-full border px-4 py-2 text-[13px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ' +
                  (activeFilter === filter.key
                    ? 'border-ink bg-ink text-cream'
                    : 'border-border bg-surface text-ink-soft hover:border-accent hover:text-ink')
                }
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 text-[12px] text-muted">
            {Object.entries(channelCounts).map(([channel, count]) => (
              <span key={channel} className="rounded-full border border-border bg-surface px-3 py-1.5">
                <span className="text-ink-soft">{channel}</span> · {count}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-8">
          {visibleVideos.map((p, i) => (
            <motion.div
              key={p.youtubeId || p.url || p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease, delay: (i % 3) * 0.05 }}
              className="group"
            >
              <button
                type="button"
                onClick={() => onPlay(p)}
                className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
                aria-label={`Play ${p.title} from ${p.channel}`}
              >
                <div
                  className="relative overflow-hidden rounded-[24px] aspect-[16/10] transition-shadow duration-300 group-hover:shadow-xl"
                  style={{ background: '#E9E4DA' }}
                >
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={`${p.title} thumbnail`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center px-6 text-center">
                      <span className="font-serif italic text-[28px] leading-tight text-ink">
                        Thumbnail coming soon.
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/10" />
                  <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-2">
                    <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1.5 font-sans text-[10px] uppercase tracking-caps text-cream">
                      {p.label}
                    </span>
                    <span className="max-w-[62%] truncate rounded-full bg-cream/90 px-3 py-1.5 text-right text-[11px] font-medium text-ink">
                      {p.channel}
                    </span>
                  </div>
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid place-items-center w-16 h-16 rounded-full bg-cream/90 text-ink shadow-lg scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <Play size={20} />
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h4 className="font-sans text-[22px] md:text-[26px] font-medium text-ink">{p.title}</h4>
                  <span className="text-[13px] text-muted tabular-nums">
                    <span className="text-accent">{String(i + 1).padStart(2, '0')}</span> /{' '}
                    {String(visibleVideos.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-1 flex flex-col gap-1 text-[13px] text-muted">
                  <span>{p.channel}</span>
                  <span className="text-[12px]">{p.youtubeTitle}</span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
