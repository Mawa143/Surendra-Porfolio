import { motion } from 'framer-motion';
import { images } from '../content/images.js';
import { profile } from '../content/profile.js';
import { useCountUp } from '../hooks.js';

const ease = [0.2, 0.7, 0.2, 1];

function Stat({ n, label }) {
  const [ref, value] = useCountUp(n);
  return (
    <div ref={ref}>
      <div className="font-sans font-black text-[44px] md:text-[60px] leading-none text-ink tabular-nums">
        {value}
        <span className="text-ink">+</span>
      </div>
      <div className="mt-3 text-[13px] leading-snug text-ink-soft">{label}</div>
    </div>
  );
}

export default function About() {
  const { about } = profile;

  return (
    <section id="about" className="relative bg-cream border-t border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 origin-left -rotate-90 select-none"
      >
        <span className="font-sans uppercase tracking-caps text-[11px] text-muted">
          Est. <span className="text-accent">{profile.startedYear}</span> · {about.sideLabel}
        </span>
      </div>

      <div className="mx-auto max-w-page px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-6 flex flex-col">
          <h3 className="font-sans uppercase font-bold tracking-caps text-[12px] text-ink-soft mb-8">
            <span className="inline-block w-8 h-px align-middle bg-accent mr-3" />
            {about.eyebrow}
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="font-serif text-[44px] md:text-[68px] leading-[0.98] text-ink headline-balance"
          >
            <span className="block">
              {about.headline.beforeAccent}{' '}
              <span className="italic text-accent">{about.headline.accent}</span>
            </span>
            <span className="block">{about.headline.afterAccent}</span>
          </motion.div>

          {about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.text}
              className={
                (index === 0 ? 'mt-8 ' : 'mt-5 ') +
                'max-w-[52ch] text-[15px] leading-relaxed text-muted'
              }
            >
              {paragraph.highlight && <span className="text-ink-soft">{paragraph.highlight}</span>}
              {paragraph.text}
            </p>
          ))}

          <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
            {about.stats.map((stat) => (
              <Stat key={stat.label} n={stat.n} label={stat.label} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease }}
            className="relative overflow-hidden rounded-[28px] aspect-[4/5] lg:aspect-auto lg:h-full"
          >
            <img
              src={images.about.src}
              alt={images.about.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-ink/85 backdrop-blur px-4 py-2 text-cream">
              <span className="size-2 rounded-full bg-accent pulse-dot" />
              <span className="font-sans text-[12px] tracking-caps uppercase">
                {images.about.badge}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
