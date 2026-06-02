import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../content/profile.js';
import { Close } from './Icons.jsx';

// Modal video player. Given a `video` with a `youtubeId`, it embeds the player.
// With no id yet, it shows a tasteful "footage coming soon" panel so the flow
// works today and only needs the id dropped in later.
export default function VideoLightbox({ video, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const restoreFocusRef = useRef(null);

  useEffect(() => {
    if (!video) return;

    // Remember what was focused so we can restore it on close.
    restoreFocusRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';
    // Move focus into the dialog.
    const focusTimer = requestAnimationFrame(() => closeRef.current?.focus());

    const getFocusable = () =>
      panelRef.current
        ? Array.from(
            panelRef.current.querySelectorAll(
              'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
            )
          )
        : [];

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      // Trap focus inside the dialog.
      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !panelRef.current.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      cancelAnimationFrame(focusTimer);
      // Restore focus to the trigger element.
      if (restoreFocusRef.current && restoreFocusRef.current.focus) {
        restoreFocusRef.current.focus();
      }
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] grid place-items-center p-5 bg-ink/80 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${video.title} — video`}
        >
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 text-cream">
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-accent pulse-dot" />
                <span className="font-sans text-[13px] uppercase tracking-caps">
                  {video.channel ? `${video.channel} · ${video.title}` : video.title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {video.url && (
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-full border border-white/20 px-3 py-2 text-[12px] font-medium text-cream hover:bg-cream hover:text-ink transition-colors sm:inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    Open on YouTube
                  </a>
                )}
                <button
                  ref={closeRef}
                  onClick={onClose}
                  aria-label="Close video"
                  className="grid place-items-center size-9 rounded-full border border-white/20 text-cream hover:bg-cream hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Close size={16} />
                </button>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
              {video.youtubeId ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center text-center px-8">
                  <div>
                    <div className="font-sans text-[11px] uppercase tracking-caps text-cream/50 mb-4">
                      Reel · {video.title}
                    </div>
                    <p className="font-serif italic text-cream text-[28px] md:text-[40px] leading-tight">
                      Footage lands here soon.
                    </p>
                    <p className="mt-4 text-cream/60 text-[14px] max-w-sm mx-auto">
                      The cut is being prepared. In the meantime, reach out and I’ll send the latest
                      reel directly.
                    </p>
                    <a
                      href={profile.contact.emailHref}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3 text-[14px] font-medium hover:brightness-105 transition"
                    >
                      Request the reel
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
