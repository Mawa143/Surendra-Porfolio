// VIDEO / SHOWREEL CONTENT
// Change this file when you want to add, remove, or edit videos.
//
// Easiest way to add a video:
// 1. Copy one object from editableVideos.
// 2. Paste it where you want the video to appear.
// 3. Change title, category, channel, and url.
//
// Required fields for each video:
// - title: Short title shown on the card.
// - category: Must match one of the filter keys below, such as 'promo'.
// - channel: Channel or client name shown on the card.
// - url: Normal YouTube link. Works with youtu.be, watch links, shorts, embeds.
//
// Optional fields:
// - youtubeTitle: Smaller line shown under the channel. If missing, title is used.
// - img: Custom thumbnail path or URL. If missing, YouTube thumbnail is automatic.
//
// Do not add youtubeId manually unless you really need to. It is automatic.

function getYouTubeId(value) {
  if (!value) return '';

  const trimmed = String(value).trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);
    const host = url.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') return url.pathname.split('/').filter(Boolean)[0] || '';
    if (!host.endsWith('youtube.com')) return '';

    if (url.pathname === '/watch') return url.searchParams.get('v') || '';

    const [section, id] = url.pathname.split('/').filter(Boolean);
    if (['embed', 'shorts', 'live'].includes(section)) return id || '';
  } catch {
    return '';
  }

  return '';
}

function getYouTubeThumbnail(youtubeId) {
  return youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : '';
}

// FILTER BUTTONS
// key is the category value used by videos below.
// label is the button text visitors see.
// If you add a new category to videos, add a matching filter here.
export const videoFilters = [
  { key: 'all', label: 'All cuts' },
  { key: 'promo', label: 'Promos' },
  { key: 'short', label: 'Shorts' },
  { key: 'program', label: 'Programs' },
  { key: 'podcast', label: 'Podcast' },
];

// SHOWREEL SECTION TEXT
// This controls the heading and short intro above the video grid.
export const videoSection = {
  eyebrow: 'Selected Work',
  countLabel: 'Verified cuts',
  titlePrefix: 'The',
  titleAccent: 'showreel',
  description:
    'Promos, shorts, programs and podcast work, grouped by the channels they were published on.',
};

// EDIT VIDEOS HERE
// Keep videos separated by commas.
// Example:
// {
//   title: 'My New Promo',
//   category: 'promo',
//   channel: 'My Channel',
//   url: 'https://youtu.be/VIDEO_ID',
// },
//
// Public and unlisted YouTube videos can usually show thumbnails and play.
// Private YouTube videos cannot be embedded or thumbnailed for visitors.
const editableVideos = [
  {
    title: 'Edhi Sangathi Promo 01',
    youtubeTitle: '@edisangathi',
    category: 'promo',
    channel: 'Edhi Sangathi',
    url: 'https://youtu.be/0pUhgy_h0-I',
  },
  {
    title: 'Edhi Sangathi Promo 02',
    youtubeTitle: 'PROMOS @edisangathi',
    category: 'promo',
    channel: 'Edhi Sangathi',
    url: 'https://youtu.be/amAo4xAtMM4',
  },
  {
    title: 'Edhi Sangathi Promo 03',
    youtubeTitle: 'PROMO@edisangathi',
    category: 'promo',
    channel: 'Edhi Sangathi',
    url: 'https://youtu.be/E9F6xnwiDIw',
  },
  {
    title: 'Srirama Navami Promo',
    youtubeTitle: 'SRIRAMA NAVAMI PROMO @edisangathi',
    category: 'promo',
    channel: 'Edhi Sangathi',
    url: 'https://www.youtube.com/watch?v=wrZUhqFVRhk',
  },
  {
    title: 'BC Galam Promo',
    youtubeTitle: 'BC Galam | BC Voice Live Only On YK TV',
    category: 'promo',
    channel: 'YK TV Network',
    url: 'https://youtu.be/dbUVzT83s8o',
  },
  {
    title: 'Prince Yawar Interview Promo',
    youtubeTitle: 'BIGG BOSS Prince Yawar Interview PROMO Ep - 01',
    category: 'promo',
    channel: 'YK TV Network',
    url: 'https://www.youtube.com/watch?v=aR2pMMhuDYM',
  },
  {
    title: 'Ayodhya Food Short 01',
    youtubeTitle: 'AYODYA FOOD @edisangathi',
    category: 'short',
    channel: 'Edhi Sangathi',
    url: 'https://youtube.com/shorts/12oukaCe8kc',
  },
  {
    title: 'Ayodhya Food Short 02',
    youtubeTitle: 'AYODYA FOODS @edisangathi',
    category: 'short',
    channel: 'Edhi Sangathi',
    url: 'https://youtube.com/shorts/6YLX3Nr5EaE',
  },
  {
    title: 'Mana Janapadhalu',
    youtubeTitle: 'Mana Janapadhalu Celebrating the Soul of Folk Culture',
    category: 'program',
    channel: 'YK TV Entertainments',
    url: 'https://youtu.be/gibOaelbNjM',
  },
  {
    title: 'Filmy Cocktail',
    youtubeTitle: 'FILMY COCKTAIL Full Ep 1',
    category: 'program',
    channel: 'YK TV Network',
    url: 'https://youtu.be/DdhWHjbKFd4',
  },
  {
    title: 'Rachabanda',
    youtubeTitle: 'RACHABANDA | YK TV Originals',
    category: 'program',
    channel: 'YK TV Network',
    url: 'https://youtu.be/vEmzYf6EENk',
  },
  {
    title: 'Prince Yawar Podcast',
    youtubeTitle: 'BIGG BOSS Prince Yawar Special PODCAST | Full Episode',
    category: 'podcast',
    channel: 'YK TV Network',
    url: 'https://www.youtube.com/watch?v=znnfFduigdM',
  },
];

// Everything below builds the app-ready video data automatically.
// You usually do not need to edit anything below this line.

export const videos = editableVideos.map((video) => {
  const youtubeId = video.youtubeId || getYouTubeId(video.url);

  return {
    ...video,
    label: video.label || video.category.toUpperCase(),
    youtubeTitle: video.youtubeTitle || video.title,
    youtubeId,
    img: video.img || getYouTubeThumbnail(youtubeId),
  };
});
