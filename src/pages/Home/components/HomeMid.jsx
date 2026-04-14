import { serviceList } from '../../../data/siteData';
import { Link } from 'react-router-dom';

function HomeMid() {
  return (
    <section className="home-mid content-width">
      <h3>Capabilities built for modern digital-first brands</h3>
      <div className="service-mini-grid">
        {serviceList.map((service) => (
          <Link key={service.slug} to={`/services/${service.slug}`} className="service-mini-card" style={{ backgroundImage: `url(${service.image})` }}>
            <div>
              <h4>{service.title}</h4>
              <p>{service.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomeMid;
