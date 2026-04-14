import InfluencerManagementHero from './components/InfluencerManagementHero';
import InfluencerManagementContent from './components/InfluencerManagementContent';
import InfluencerManagementCTA from './components/InfluencerManagementCTA';
import './InfluencerManagementPage.css';

function InfluencerManagementPage() {
  return (
    <main className="service-detail-page">
      <InfluencerManagementHero />
      <InfluencerManagementContent />
      <InfluencerManagementCTA />
    </main>
  );
}

export default InfluencerManagementPage;
