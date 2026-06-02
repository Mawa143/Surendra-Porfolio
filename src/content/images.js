// IMAGE CONTENT
// Change this file when you want to update images used by the site.
//
// Hero portrait:
// - Put the new transparent portrait image in the assets folder.
// - Recommended filename: assets/portrait.png
// - Transparent PNG works best for the hero.
// - If you rename the file, update the import below.
//
// About image:
// - You can use a full URL, like an Unsplash image.
// - Or you can import a local image from assets the same way portrait is imported.

import portrait from '../../assets/portrait.png';
import { profile } from './profile.js';

// This builds the small "REC" badge from the yearsExperience value in profile.js.
const yearsTimecode = String(profile.yearsExperience).padStart(2, '0');

export const images = {
  // HERO PORTRAIT
  // src comes from the import above.
  // alt is automatic from the person's name and role.
  portrait: {
    src: portrait,
    alt: `${profile.fullName}, ${profile.role.toLowerCase()}`,
  },

  // ABOUT SECTION IMAGE
  // Replace src with another image URL if needed.
  // Keep alt as a short description of what the image shows.
  about: {
    src: 'https://images.unsplash.com/photo-1757845524683-611470b2d7ce?auto=format&fit=crop&w=1400&q=80',
    alt: 'Professional filmmaker workstation with cameras, monitors and editing gear',
    badge: `REC · 00:${yearsTimecode}:00:00`,
  },
};
