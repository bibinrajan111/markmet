import HomeBanner from './components/HomeBanner';
import HomeHero from './components/HomeHero';
import HomeMid from './components/HomeMid';
import './HomePage.css';

function HomePage() {
  return (
    <main className="home-page">
      <HomeBanner />
      <HomeHero />
      <HomeMid />
    </main>
  );
}

export default HomePage;
