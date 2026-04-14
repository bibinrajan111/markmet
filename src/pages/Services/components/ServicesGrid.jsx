import { Button, Card, CardActions, CardContent, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { serviceList } from '../../../data/siteData';

function ServicesGrid() {
  return (
    <section className="content-width services-grid">
      {serviceList.map((service) => (
        <Card key={service.slug} sx={{ borderRadius: '18px', border: '1px solid rgba(0,126,178,0.2)', boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }}>
          <div className="service-card-media" style={{ backgroundImage: `url(${service.image})` }} />
          <CardContent>
            <Chip label={service.title} sx={{ marginBottom: '.75rem', backgroundColor: 'var(--brand-blue-soft)', color: 'var(--rich-black)' }} />
            <p>{service.tagline}</p>
            <ul>
              {service.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </CardContent>
          <CardActions>
            <Button component={Link} to={`/services/${service.slug}`} size="small" variant="contained" sx={{ backgroundColor: 'var(--brand-blue)' }}>View Details</Button>
          </CardActions>
        </Card>
      ))}
    </section>
  );
}

export default ServicesGrid;
