import { motion } from 'framer-motion';
import { images } from '../content/images.js';
import { profile } from '../content/profile.js';

const ease = [0.2, 0.7, 0.2, 1];

function HeroSpecialties({ items }) {
  if (!items.length) return null;
  const breakIndex = items.length > 3 ? Math.ceil(items.length / 2) : -1;
  const commaBeforeBreakIndex = breakIndex - 1;

  return (
    <>
      Specialized in{' '}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const startsNewLine = index === breakIndex;
        const separator = index === 0 || startsNewLine ? '' : isLast ? ' & ' : ', ';

        return (
          <span key={item}>
            {startsNewLine && <br />}
            {separator}
            <span className="italic text-accent">{item}</span>
            {index === commaBeforeBreakIndex && ','}
          </span>
        );
      })}
      .
    </>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative hero-bg overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none hero-grain" />

      <div className="relative mx-auto max-w-page px-6 md:px-12 pt-28 md:pt-28 min-h-[860px] md:min-h-[840px] flex flex-col">
        <div className="relative z-10 mx-auto flex w-full max-w-[850px] items-baseline justify-between pt-12 md:pt-20">
          <motion.p
            aria-hidden="true"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.05 }}
            className="flex w-full items-baseline justify-between font-serif italic font-normal text-ink leading-none select-none hero-script"
          >
            <span>{profile.heroGreeting[0]}</span>
            <span>{profile.heroGreeting[1]}</span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="absolute z-20 left-1/2 pointer-events-none hero-portrait"
        >
          <picture className="block h-full w-full">
            <img src={images.portrait.src} alt={images.portrait.alt} draggable="false" />
          </picture>
        </motion.div>

        <div className="relative z-30 mt-[320px] flex items-start justify-between gap-6 sm:mt-10 md:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.65 }}
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-white pl-3 pr-6 shadow-lg shadow-black/5"
          >
            <span className="relative grid size-6 place-items-center rounded-full bg-white shadow-sm">
              <span className="absolute size-4 rounded-full bg-accent/15 pulse-dot" />
              <span className="relative size-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-[15px] font-medium leading-none text-ink">
              {profile.status}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.72 }}
            className="hidden max-w-[22rem] text-right text-[19px] md:text-[20px] font-medium leading-[1.3] text-ink sm:block"
          >
            <HeroSpecialties items={profile.heroSpecialties} />
          </motion.p>
        </div>

        <div className="relative z-40 mt-auto flex flex-col items-start justify-between gap-6 pb-12 sm:flex-row sm:items-end sm:gap-6 md:pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.55 }}
            className="font-sans font-black uppercase leading-[0.86] text-ink hero-name"
          >
            <span className="block">I AM</span>
            <span className="block">{profile.displayName}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.65 }}
            className="font-sans font-black uppercase text-ink text-left leading-[0.95] hero-role sm:text-right"
          >
            {profile.roleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
