import StrategyBuildingHero from './components/StrategyBuildingHero';
import StrategyBuildingContent from './components/StrategyBuildingContent';
import StrategyBuildingCTA from './components/StrategyBuildingCTA';
import './StrategyBuildingPage.css';

function StrategyBuildingPage() {
  return (
    <main className="service-detail-page">
      <StrategyBuildingHero />
      <StrategyBuildingContent />
      <StrategyBuildingCTA />
    </main>
  );
}

export default StrategyBuildingPage;
