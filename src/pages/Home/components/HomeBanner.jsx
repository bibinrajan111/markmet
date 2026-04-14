import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cinematicVideo =
  'https://player.vimeo.com/external/434045526.sd.mp4?s=6f6b89d067f7ec4db39f1741314a87d6ec8e2cc5&profile_id=164&oauth2_token_id=57447761';

function HomeBanner() {
  return (
    <section className="home-banner video-bg">
      <video autoPlay muted loop playsInline>
        <source src={cinematicVideo} type="video/mp4" />
      </video>

      <div className="content-width home-banner-content">
        <p className="chip">Piravom, Kerala</p>
        <h2>Build momentum with a full-spectrum digital growth partner.</h2>
        <p>
          Markmet combines data-driven strategy, storytelling media, and high-converting digital
          experiences for brands that want to win online.
        </p>

        <div className="cta-row">
          <Button
            component={Link}
            to="/services"
            variant="contained"
            sx={{ backgroundColor: 'var(--brand-blue-soft)', color: 'var(--rich-black)' }}
          >
            Explore Services
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            sx={{ borderColor: 'var(--pure-white)', color: 'var(--pure-white)' }}
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
