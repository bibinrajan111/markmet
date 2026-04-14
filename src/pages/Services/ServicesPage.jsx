import ServicesIntro from './components/ServicesIntro';
import ServicesGrid from './components/ServicesGrid';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <main className="services-page">
      <ServicesIntro />
      <ServicesGrid />
    </main>
  );
}

export default ServicesPage;
