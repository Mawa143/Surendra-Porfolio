import { motion } from 'framer-motion';
import { profile } from '../content/profile.js';

const ease = [0.2, 0.7, 0.2, 1];

export default function Skills() {
  const { quote, services, tools } = profile.skills;

  return (
    <section className="relative bg-cream border-t border-border">
      <div className="mx-auto max-w-page px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 items-start gap-12 lg:gap-20">
        <div className="lg:col-span-7">
          <h3 className="mb-10 flex h-5 items-center font-sans uppercase font-bold tracking-caps text-[12px] text-ink-soft">
            <span className="inline-block w-8 h-px align-middle bg-accent mr-3" />
            Core Skills
          </h3>

          <ul>
            {tools.map((t, i) => (
              <motion.li
                key={t.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease, delay: i * 0.07 }}
                className="group flex items-baseline justify-between gap-6 border-t border-border py-6 last:border-b"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-serif italic text-accent text-[16px] tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans font-medium text-[24px] md:text-[32px] text-ink leading-none transition-transform duration-300 group-hover:translate-x-1">
                    {t.name}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-[13px] text-ink-soft">{t.note}</div>
                  <div className="text-[11px] uppercase tracking-caps text-muted mt-1">{t.level}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <h3 className="mb-10 flex h-5 items-center font-sans uppercase font-bold tracking-caps text-[12px] text-ink-soft">
            <span className="inline-block w-8 h-px align-middle bg-accent mr-3" />
            What I cut
          </h3>

          <div className="flex flex-wrap gap-3">
            {services.map((s) => (
              <span
                key={s}
                className="px-5 py-3 rounded-full border border-border bg-surface text-[15px] text-ink-soft hover:border-accent hover:text-ink transition-colors"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-12 rounded-[24px] bg-ink text-cream p-8 md:p-10">
            <p className="font-serif italic text-[26px] md:text-[32px] leading-[1.15]">
              &ldquo;{quote.lines[0]}
              {quote.lines.slice(1).map((line) => (
                <span key={line}>
                  <br />
                  {line}
                </span>
              ))}
              &rdquo;
            </p>
            <div className="mt-6 text-[12px] uppercase tracking-caps text-cream/50">
              {quote.author}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
