import { Button, Card, CardActions, CardContent, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { serviceList } from '../../../data/siteData';

function ServicesGrid() {
  return (
    <section className="content-width services-grid">
      {serviceList.map((service) => (
        <Card key={service.slug} sx={{ borderRadius: '18px', border: '1px solid rgba(61,106,108,0.2)', boxShadow: '0 8px 28px rgba(0,0,0,0.08)' }}>
          <div className="service-card-media" style={{ backgroundImage: `url(${service.image})` }} />
          <CardContent>
            <Chip label={service.title} sx={{ marginBottom: '.75rem', backgroundColor: '#f7c948', color: '#111' }} />
            <p>{service.tagline}</p>
            <ul>
              {service.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </CardContent>
          <CardActions>
            <Button component={Link} to={`/services/${service.slug}`} size="small" variant="contained" sx={{ backgroundColor: '#3d6a6c' }}>View Details</Button>
          </CardActions>
        </Card>
      ))}
    </section>
  );
}

export default ServicesGrid;
