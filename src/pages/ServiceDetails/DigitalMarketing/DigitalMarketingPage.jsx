import DigitalMarketingHero from './components/DigitalMarketingHero';
import DigitalMarketingContent from './components/DigitalMarketingContent';
import DigitalMarketingCTA from './components/DigitalMarketingCTA';
import './DigitalMarketingPage.css';

function DigitalMarketingPage() {
  return (
    <main className="service-detail-page">
      <DigitalMarketingHero />
      <DigitalMarketingContent />
      <DigitalMarketingCTA />
    </main>
  );
}

export default DigitalMarketingPage;
