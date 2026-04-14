import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header';
import './components/shared/Header.css';
import Footer from './components/shared/Footer';
import './components/shared/Footer.css';
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
  return (
    <div className="page-shell">
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
    </div>
  );
}

export default App;
