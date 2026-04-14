import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function InfluencerManagementCTA() {
  return (
    <section className="content-width service-detail-cta">
      <div className="glass-card">
        <h3>Ready to elevate your influencer & creator management outcomes?</h3>
        <p>Speak with Markmet and receive a focused action plan for your brand.</p>
        <Button component={Link} to="/contact" variant="contained" sx={{ backgroundColor: '#f7c948', color: '#080808' }}>Contact Markmet</Button>
      </div>
    </section>
  );
}

export default InfluencerManagementCTA;
