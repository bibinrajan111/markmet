import ContactIntro from './components/ContactIntro';
import ContactForm from './components/ContactForm';
import ContactMedia from './components/ContactMedia';
import './ContactPage.css';

function ContactPage() {
  return (
    <main className="contact-page">
      <ContactIntro />
      <ContactForm />
      <ContactMedia />
    </main>
  );
}

export default ContactPage;
