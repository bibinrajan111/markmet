import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/shared/Header';
import './components/shared/Header.css';
import Footer from './components/shared/Footer';
import './components/shared/Footer.css';
import ScrollTopButton from './components/shared/ScrollTopButton';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ServicesPage from './pages/Services/ServicesPage';
import ContactPage from './pages/Contact/ContactPage';
import StrategyBuildingPage from './pages/ServiceDetails/StrategyBuilding/StrategyBuildingPage';
import DigitalMarketingPage from './pages/ServiceDetails/DigitalMarketing/DigitalMarketingPage';
import MediaProductionPage from './pages/ServiceDetails/MediaProduction/MediaProductionPage';
import AdvertisementPage from './pages/ServiceDetails/Advertisement/AdvertisementPage';
import InfluencerManagementPage from './pages/ServiceDetails/InfluencerManagement/InfluencerManagementPage';
import WebAppDevelopmentPage from './pages/ServiceDetails/WebAppDevelopment/WebAppDevelopmentPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = Array.from(
      document.querySelectorAll(
        'main section, .glass-card, .service-mini-card, .MuiCard-root, .footer-grid > div, .service-detail-content article',
      ),
    );

    targets.forEach((node) => node.classList.add('reveal-on-scroll'));

    if (reduceMotion) {
      targets.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' },
    );

    targets.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="page-shell cinematic-theme">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/strategy-building" element={<StrategyBuildingPage />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/media-production" element={<MediaProductionPage />} />
        <Route path="/services/advertisement" element={<AdvertisementPage />} />
        <Route path="/services/influencer-creator-management" element={<InfluencerManagementPage />} />
        <Route path="/services/website-app-development" element={<WebAppDevelopmentPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
