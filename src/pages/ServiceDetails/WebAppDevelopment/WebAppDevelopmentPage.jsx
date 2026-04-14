import WebAppDevelopmentHero from './components/WebAppDevelopmentHero';
import WebAppDevelopmentContent from './components/WebAppDevelopmentContent';
import WebAppDevelopmentCTA from './components/WebAppDevelopmentCTA';
import './WebAppDevelopmentPage.css';

function WebAppDevelopmentPage() {
  return (
    <main className="service-detail-page">
      <WebAppDevelopmentHero />
      <WebAppDevelopmentContent />
      <WebAppDevelopmentCTA />
    </main>
  );
}

export default WebAppDevelopmentPage;
