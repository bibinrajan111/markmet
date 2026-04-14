import { Link } from 'react-router-dom';
import { companyInfo, serviceList } from '../../data/siteData';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-width footer-grid">
        <div>
          <h3>Markmet</h3>
          <p>Growth-first digital marketing partner for ambitious brands in Kerala and beyond.</p>
          <p>{companyInfo.location}</p>
        </div>
        <div>
          <h4>Explore</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <div className="footer-links">
            {serviceList.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4>Connect</h4>
          <p><a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></p>
          {companyInfo.phones.map((phone) => (
            <p key={phone}><a href={`tel:${phone}`}>{phone}</a></p>
          ))}
          <div className="footer-links">
            <a href={companyInfo.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={companyInfo.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Markmet. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
