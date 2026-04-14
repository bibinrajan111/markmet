import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function WebAppDevelopmentCTA() {
  return (
    <section className="content-width service-detail-cta">
      <div className="glass-card">
        <h3>Ready to elevate your website and app development outcomes?</h3>
        <p>Speak with Markmet and receive a focused action plan for your brand.</p>
        <Button component={Link} to="/contact" variant="contained" sx={{ backgroundColor: '#f7c948', color: '#080808' }}>Contact Markmet</Button>
      </div>
    </section>
  );
}

export default WebAppDevelopmentCTA;
