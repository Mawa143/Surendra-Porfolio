import { profile } from '../content/profile.js';

function Row({ items }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((n, i) => (
        <span key={i} className="flex items-center gap-8 md:gap-10">
          <span className="font-serif italic font-medium text-[30px] md:text-[44px] leading-none text-ink/80 whitespace-nowrap">
            {n}
          </span>
          <span className="text-accent text-[16px] md:text-[20px]" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  const { marquee } = profile;

  return (
    <section className="relative bg-cream border-t border-border py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-page px-6 md:px-12 mb-8">
        <h3 className="font-sans uppercase font-bold tracking-caps text-[12px] text-ink-soft">
          <span className="inline-block w-8 h-px align-middle bg-accent mr-3" />
          {marquee.eyebrow}
        </h3>
      </div>
      <div className="marquee relative edge-fade">
        <div className="marquee-track marquee-track--slow flex w-max">
          <Row items={marquee.names} />
          <Row items={marquee.names} />
        </div>
      </div>
    </section>
  );
}
