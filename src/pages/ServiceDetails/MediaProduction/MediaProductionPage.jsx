import MediaProductionHero from './components/MediaProductionHero';
import MediaProductionContent from './components/MediaProductionContent';
import MediaProductionCTA from './components/MediaProductionCTA';
import './MediaProductionPage.css';

function MediaProductionPage() {
  return (
    <main className="service-detail-page">
      <MediaProductionHero />
      <MediaProductionContent />
      <MediaProductionCTA />
    </main>
  );
}

export default MediaProductionPage;
