import { ArrowUpRight, Facebook, Instagram, Mail } from './Icons.jsx';
import { profile } from '../content/profile.js';

const socialIcons = {
  email: Mail,
  facebook: Facebook,
  instagram: Instagram,
};

export default function Footer() {
  const { contact, footer, navigation, socials } = profile;
  const contactItems = [
    { k: 'Phone', v: contact.phone, h: contact.phoneHref },
    { k: 'Email', v: contact.email, h: contact.emailHref },
  ];

  return (
    <footer id="contact" className="bg-ink text-cream">
      <div className="mx-auto max-w-page px-6 md:px-12 pt-24 md:pt-32 pb-10">
        <div className="border-b border-white/10 pb-20 md:pb-28">
          <p className="text-[12px] uppercase tracking-caps text-cream/60 mb-8">
            <span className="inline-block w-8 h-px align-middle bg-accent mr-3" />
            {footer.eyebrow}
          </p>
          <h2 className="font-serif italic font-normal headline-balance leading-[0.95]" style={{ fontSize: 'clamp(56px, 11vw, 184px)' }}>
            {footer.ctaTitle}
            <br />
            <span className="text-accent">{footer.ctaAccent}</span>
          </h2>

          <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <a href={contact.emailHref} className="group inline-flex items-center gap-4 text-[20px] md:text-[26px] font-sans break-all">
              <span className="underline underline-offset-[6px] decoration-cream/30 group-hover:decoration-cream transition-colors">
                {contact.email}
              </span>
              <span className="grid place-items-center w-12 h-12 shrink-0 rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </a>

            <div className="md:ml-auto flex flex-wrap gap-3">
              {footer.badges.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full border border-white/15 text-[12px] uppercase tracking-caps text-cream/80">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
            {contactItems.map((c) => (
              <div key={c.k}>
                <div className="uppercase tracking-caps text-[11px] text-cream/40 mb-2">{c.k}</div>
                <a href={c.h} className="text-[15px] text-cream/90 hover:text-white break-words">
                  {c.v}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-12 grid grid-cols-1 md:grid-cols-12 gap-10 text-[13px]">
          <div className="md:col-span-5">
            <a href="#top" className="font-serif italic text-3xl">
              {profile.logoName}<span className="text-accent">.</span>
            </a>
            <p className="mt-4 max-w-sm text-cream/60 leading-relaxed">
              {footer.summary}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="uppercase tracking-caps text-[11px] text-cream/40 mb-4">Explore</div>
            <ul className="space-y-2">
              {navigation.map((x) => (
                <li key={x.label}>
                  <a href={x.href} className="hover:text-white">
                    {x.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="uppercase tracking-caps text-[11px] text-cream/40 mb-4">Elsewhere</div>
            <div className="flex gap-3">
              {socials.map(({ type, label, href }) => {
                const Icon = socialIcons[type] || Mail;

                return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid place-items-center w-11 h-11 rounded-full border border-white/15 hover:bg-cream hover:text-ink transition-colors"
                >
                  <Icon size={16} />
                </a>
                );
              })}
            </div>
            <p className="mt-4 text-cream/50">
              {socials
                .filter((social) => social.handle.startsWith('@'))
                .map((social) => social.handle)
                .join(' · ')}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-cream/50">
          <div>
            © {new Date().getFullYear()} {profile.fullName}. {footer.rightsSuffix}
          </div>
          <div className="font-sans uppercase tracking-caps">{profile.role}</div>
        </div>
      </div>
    </footer>
  );
}
