import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import videoBg from '../../../videos/h1.mp4';

function HomeBanner() {
  return (
    <section className="home-banner video-bg">
      <video autoPlay muted loop playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="content-width home-banner-content">
        <p className="chip">Piravom, Kerala</p>
        <h2>Build momentum with a full-spectrum digital growth partner.</h2>
        <p>Markmet combines data-driven strategy, storytelling media, and high-converting digital experiences for brands that want to win online.</p>

        <div className="cta-row">
          <Button component={Link} to="/services" variant="contained" sx={{ backgroundColor: '#f7c948', color: '#080808' }}>
            Explore Services
          </Button>
          <Button component={Link} to="/contact" variant="outlined" sx={{ borderColor: '#fff', color: '#fff' }}>
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;