import { motion } from 'framer-motion';
import { roles, timelineSection } from '../content/timeline.js';

const ease = [0.2, 0.7, 0.2, 1];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-cream border-t border-border">
      <div className="mx-auto max-w-page px-6 md:px-12 py-24 md:py-32">
        <div className="flex items-end justify-between mb-14">
          <div>
            <h3 className="font-sans uppercase font-bold tracking-caps text-[12px] text-ink-soft mb-6">
              <span className="inline-block w-8 h-px align-middle bg-accent mr-3" />
              {timelineSection.eyebrow}
            </h3>
            <h2 className="font-sans uppercase font-black leading-[0.9] text-ink text-[40px] md:text-[64px] tracking-tight">
              {timelineSection.titlePrefix}{' '}
              <span className="font-serif italic font-normal lowercase text-accent">
                {timelineSection.titleAccent}
              </span>
            </h2>
          </div>
          <span className="hidden md:inline text-[12px] uppercase tracking-caps text-muted">
            {timelineSection.summary}
          </span>
        </div>

        <div>
          {roles.map((r, i) => (
            <motion.div
              key={`${r.range}-${r.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.06 }}
              className={
                'group grid grid-cols-12 gap-x-6 gap-y-3 items-baseline border-t border-border py-8 md:py-10 -mx-4 px-4 rounded-md transition-colors ' +
                (r.current ? 'bg-[#F3EFE6]' : 'hover:bg-[#F3EFE6]')
              }
            >
              <div className="col-span-12 md:col-span-2 flex items-center gap-3 font-serif italic text-accent text-[18px]">
                {r.range}
                {r.current && (
                  <span className="md:hidden inline-flex items-center gap-1.5 text-[10px] not-italic font-sans uppercase tracking-caps text-ink-soft">
                    <span className="size-1.5 rounded-full bg-accent pulse-dot" /> On air
                  </span>
                )}
              </div>

              <div className="col-span-12 md:col-span-4">
                <div className="font-sans font-medium text-[26px] md:text-[34px] text-ink leading-[1.05]">
                  {r.company}
                </div>
                <div className="mt-2 text-[13px] uppercase tracking-caps text-ink-soft">{r.role}</div>
              </div>

              <div className="col-span-12 md:col-span-5 text-[15px] leading-relaxed text-muted">{r.desc}</div>

              <div className="hidden md:flex col-span-1 justify-end items-baseline">
                {r.current ? (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-caps text-ink-soft">
                    <span className="size-1.5 rounded-full bg-accent pulse-dot" /> Live
                  </span>
                ) : (
                  <span className="text-[13px] text-muted tabular-nums">
                    {String(roles.length - i).padStart(2, '0')}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
