import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function StrategyBuildingCTA() {
  return (
    <section className="content-width service-detail-cta">
      <div className="glass-card">
        <h3>Ready to elevate your strategy building outcomes?</h3>
        <p>Speak with Markmet and receive a focused action plan for your brand.</p>
        <Button component={Link} to="/contact" variant="contained" sx={{ backgroundColor: 'var(--brand-blue)', color: 'var(--pure-white)' }}>Contact Markmet</Button>
      </div>
    </section>
  );
}

export default StrategyBuildingCTA;
