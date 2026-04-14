import AboutBanner from './components/AboutBanner';
import AboutStory from './components/AboutStory';
import AboutValues from './components/AboutValues';
import './AboutPage.css';

function AboutPage() {
  return (
    <main className="about-page">
      <AboutBanner />
      <AboutStory />
      <AboutValues />
    </main>
  );
}

export default AboutPage;
