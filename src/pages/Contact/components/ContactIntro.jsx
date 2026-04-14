import { companyInfo } from '../../../data/siteData';

function ContactIntro() {
  return (
    <section className="contact-intro">
      <div className="content-width">
        <h2>Let’s build your next growth chapter</h2>
        <p>Tell us your goals, timelines, and service needs. Our team will respond with a practical action plan.</p>
        <p>Email: <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a> | Phone: {companyInfo.phones.join(', ')}</p>
      </div>
    </section>
  );
}

export default ContactIntro;
