import { useEffect, useState } from 'react';
import ScrollPlayhead from './components/ScrollPlayhead.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Marquee from './components/Marquee.jsx';
import Showreel from './components/Showreel.jsx';
import Footer from './components/Footer.jsx';
import VideoLightbox from './components/VideoLightbox.jsx';
import { profile } from './content/profile.js';

export default function App() {
  // null = closed; otherwise the project/video to play.
  const [reel, setReel] = useState(null);

  useEffect(() => {
    document.title = profile.seo.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', profile.seo.description);
  }, []);

  return (
    <div id="top">
      <ScrollPlayhead />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Marquee />
        <Showreel onPlay={(p) => setReel(p)} />
      </main>
      <Footer />
      <VideoLightbox video={reel} onClose={() => setReel(null)} />
    </div>
  );
}
