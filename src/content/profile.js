// PROFILE CONTENT
// Change this file when you want to update the person's name, job title,
// about text, contact details, skills, footer text, or scrolling ticker.
//
// Important:
// - Edit only the values inside profileInput unless you are changing the app code.
// - Keep text inside quotes.
// - Keep commas between items.
// - Do not edit the helper functions at the bottom. They automatically build
//   fullName, mail links, phone links, SEO text, logo text, and navigation ids.

const profileInput = {
  // BASIC DETAILS
  // firstName + lastName become the full name shown in the footer and SEO.
  // role becomes the big role text in the hero and footer.
  firstName: 'Surendra',
  lastName: 'Yelisetty',
  role: 'Senior Video Editor',

  // EXPERIENCE NUMBERS
  // startedYear appears in the About side label.
  // yearsExperience is also used for the scroll timecode and timeline summary.
  startedYear: 2013,
  yearsExperience: 13,

  // HERO STATUS / BUTTON TEXT
  // status is the small white pill on the hero section.
  // contactCta is the navbar contact button text.
  status: 'Open to new opportunities',
  contactCta: "Let's talk",

  // NAVIGATION LINKS
  // href must match the section id on the page.
  // Usually you only edit label text. Example: { label: 'Work', href: '#work' }
  navigation: [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
  ],

  // HERO TEXT
  // heroGreeting controls the large script words behind the portrait.
  // heroSpecialties controls the sentence on the right side of the hero.
  heroGreeting: ['Hey,', 'there'],
  heroSpecialties: ['promos', 'television programs', 'podcasts', 'reels'],

  // ABOUT SECTION
  // headline is split into three parts so the accent word can be styled.
  // paragraphs can have an optional highlight at the start.
  // stats are the three big numbers below the About text.
  about: {
    eyebrow: 'About',
    sideLabel: 'Cutting Room',
    headline: {
      beforeAccent: 'Cutting the',
      accent: 'story',
      afterAccent: 'frame by frame.',
    },
    paragraphs: [
      {
        highlight: 'Thirteen years',
        text:
          ' in the edit bay - live news bulletins, political interviews, entertainment programs, promos, and the daily churn of YouTube. I have cut for television newsrooms where the story breaks on deadline, and for digital channels where the first three seconds decide whether anyone stays.',
      },
      {
        text:
          'Editing is where I do my best thinking: finding the story buried in the rushes and shaping it into something tight - paced to breathe, timed to land. Along the way I have designed the thumbnails, built and run the channels, and anchored on-field public opinion. Different formats, same job - hold the viewer to the last frame.',
      },
    ],
    stats: [
      { n: 13, label: 'Years editing' },
      { n: 6, label: 'TV networks & studios' },
      { n: 5, label: 'Editing tools mastered' },
    ],
  },

  // CONTACT DETAILS
  // Write phone normally for people to read. The site creates the tel: link.
  // Write email normally. The site creates the mailto: link.
  contact: {
    email: 'yelisettysurendra@gmail.com',
    phone: '+91 94934 44142',
  },

  // SOCIAL LINKS
  // type controls the icon. Available icons: facebook, instagram, email.
  // For email, you only need { type: 'email' }; the site uses contact.email.
  // For social profiles, add handle and href.
  socials: [
    {
      type: 'facebook',
      handle: '@surendrayelisetty',
      href: 'https://www.facebook.com/surendrayelisetty',
    },
    {
      type: 'instagram',
      handle: '@surendrayelisetty6',
      href: 'https://www.instagram.com/surendrayelisetty6',
    },
    {
      type: 'email',
    },
  ],

  // SKILLS SECTION
  // tools appear as the numbered skill list.
  // services appear as rounded chips under "What I cut".
  // quote.lines supports one or more lines.
  skills: {
    tools: [
      { name: 'Final Cut Pro', note: 'My home timeline', level: 'Expert' },
      { name: 'Avid', note: 'News Cutter & News Composer', level: 'Expert' },
      { name: 'Adobe Premiere Pro', note: 'Long-form, multicam & promos', level: 'Advanced' },
      { name: 'After Effects', note: 'Titles & motion graphics', level: 'Working' },
      { name: 'Photoshop', note: 'Thumbnails & on-screen graphics', level: 'Advanced' },
    ],
    services: [
      'News bulletins',
      'Promos',
      'Political interviews',
      'YouTube channels',
      'Thumbnails',
      'Entertainment programs',
    ],
    quote: {
      lines: ['Good editing disappears.', "That's the whole job."],
    },
  },

  // SCROLLING TICKER
  // These names scroll across the page. Add/remove names as needed.
  marquee: {
    eyebrow: 'Trusted in the newsroom',
    names: [
      'YK TV Network',
      'YK TV Entertainments',
      'Edhi Sangathi',
      'Icon Politics',
      'Pixoplay',
      'Hubilo Softech',
      '10 TV',
      'Studio N',
      'Narne Networks',
      'AP Real-Time Governance',
      'Facts Unknown',
      'Playpatrol',
    ],
  },

  // FOOTER
  // badges are the small pills beside the email CTA.
  // summary is the short paragraph under the footer logo.
  footer: {
    eyebrow: "Let's cut something",
    ctaTitle: 'Got footage?',
    ctaAccent: "Let's edit.",
    badges: ['Remote & on-site', 'Open to new roles', 'Replies within 24h'],
    summary:
      'Senior video editor with 13 years across television newsrooms, political media and entertainment. Promos, programs, bulletins - cut with intent.',
    rightsSuffix: 'All rights reserved.',
  },
};

// Everything below is automatic setup for the app.
// You usually do not need to edit anything below this line.

function getFullName({ firstName, lastName }) {
  return [firstName, lastName].filter(Boolean).join(' ');
}

function getPhoneHref(phone) {
  return `tel:${String(phone).replace(/[^\d+]/g, '')}`;
}

function getRoleLines(role) {
  const words = String(role).trim().toUpperCase().split(/\s+/);
  if (words.length <= 2) return words;
  return [words.slice(0, 2).join(' '), words.slice(2).join(' ')];
}

function getNavigationItem(item) {
  return {
    ...item,
    id: item.id || item.href.replace(/^#/, ''),
  };
}

function getSocialLabel(social) {
  if (social.label) return social.label;
  if (social.type === 'email') return 'Email';

  const name = social.type.charAt(0).toUpperCase() + social.type.slice(1);
  return social.handle ? `${name} - ${social.handle}` : name;
}

function getSocialHref(social, contact) {
  if (social.href) return social.href;
  if (social.type === 'email') return contact.emailHref;
  return '#';
}

const fullName = getFullName(profileInput);
const contact = {
  ...profileInput.contact,
  emailHref: `mailto:${profileInput.contact.email}`,
  phoneHref: getPhoneHref(profileInput.contact.phone),
};

export const profile = {
  ...profileInput,
  fullName,
  displayName: profileInput.displayName || profileInput.firstName.toUpperCase(),
  logoName: profileInput.logoName || profileInput.firstName,
  roleLines: profileInput.roleLines || getRoleLines(profileInput.role),
  contact,
  navigation: profileInput.navigation.map(getNavigationItem),
  socials: profileInput.socials.map((social) => ({
    ...social,
    label: getSocialLabel(social),
    handle: social.handle || (social.type === 'email' ? 'Email' : ''),
    href: getSocialHref(social, contact),
  })),
  skills: {
    ...profileInput.skills,
    quote: {
      ...profileInput.skills.quote,
      author: profileInput.skills.quote.author || fullName,
    },
  },
  seo: {
    title: profileInput.seo?.title || `${fullName} - ${profileInput.role}`,
    description:
      profileInput.seo?.description ||
      `${fullName} - ${profileInput.role.toLowerCase()} with ${profileInput.yearsExperience} years across television newsrooms, political media and entertainment.`,
  },
};
