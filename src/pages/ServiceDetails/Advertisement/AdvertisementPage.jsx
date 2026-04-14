import AdvertisementHero from './components/AdvertisementHero';
import AdvertisementContent from './components/AdvertisementContent';
import AdvertisementCTA from './components/AdvertisementCTA';
import './AdvertisementPage.css';

function AdvertisementPage() {
  return (
    <main className="service-detail-page">
      <AdvertisementHero />
      <AdvertisementContent />
      <AdvertisementCTA />
    </main>
  );
}

export default AdvertisementPage;
