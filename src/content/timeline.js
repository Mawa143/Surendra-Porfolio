// WORK TIMELINE CONTENT
// Change this file when you want to update jobs, companies, dates, or experience text.
//
// Easiest way to add a role:
// 1. Copy one object from roles.
// 2. Paste it in the correct date order.
// 3. Change range, company, role, and desc.
//
// Important:
// - Keep newest/current role first.
// - Only one role should usually have current: true.
// - If no role is current, remove current: true from all roles.

import { profile } from './profile.js';

// EDIT ROLES HERE
// range: Date range shown on the left. Examples: '2025 - Now', '2020 - 23'.
// company: Company, channel, studio, or client name.
// role: Job title or responsibilities.
// desc: One short paragraph describing the work.
// current: true adds the "Live" / "On air" badge.
export const roles = [
  {
    range: '2025 — Now',
    company: 'YK TV Networks',
    role: 'Senior Video Editor — Entertainment',
    desc: 'Lead editor on the entertainment slate — cutting the programs Rachabanda and Filmy Cocktail, and shaping promos that sell each special interview in the first few seconds.',
    current: true,
  },
  {
    range: '2023 — 25',
    company: 'Icon Politics',
    role: 'Video Editor · Thumbnail Designer · Anchor',
    desc: 'Ran the channel end to end — edited and thumbnailed every upload, and stepped in front of the camera to anchor political interviews and on-field public opinion.',
  },
  {
    range: '2020 — 23',
    company: 'Pixoplay IT Services',
    role: 'Video Editor · Thumbnail Designer',
    desc: 'Grew two original brands — Facts Unknown and Playpatrol — owning the full pipeline from edit to thumbnail to publish across YouTube and social.',
  },
  {
    range: '2018 — 19',
    company: 'Hubilo Softech',
    role: 'Video Editor · Motion Graphics',
    desc: 'Cut video and built motion graphics for the official channels of the Andhra Pradesh CMO under Real-Time Governance — quick turnarounds, every frame under public scrutiny.',
  },
  {
    range: '2016 — 18',
    company: '10 TV · Spoorthi Coms',
    role: 'News Video Editor',
    desc: 'Edited and packaged stories for daily news bulletins, working to the relentless clock of a live television newsroom.',
  },
  {
    range: '2013 — 16',
    company: 'Studio N · Narne Networks',
    role: 'Video Editor',
    desc: 'Where it started — editing agriculture and entertainment programming, and learning to tell a story frame by frame.',
  },
];

// TIMELINE SECTION TEXT
// summary is automatic: number of roles + yearsExperience from profile.js.
// You can edit eyebrow/title text, but usually this can stay as-is.
export const timelineSection = {
  eyebrow: 'Experience',
  titlePrefix: 'The',
  titleAccent: 'timeline',
  summary: `${roles.length} rooms · ${profile.yearsExperience} years`,
};
