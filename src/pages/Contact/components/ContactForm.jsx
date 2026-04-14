import { Alert, Button, MenuItem, TextField } from '@mui/material';
import { useMemo, useState } from 'react';
import { serviceList } from '../../../data/siteData';

const serviceOptions = [...serviceList.map((service) => service.title), 'Other'];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const errors = useMemo(() => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!/^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(form.email)) next.email = 'Valid email required';
    if (!/^\+?[0-9]{10,15}$/.test(form.phone)) next.phone = 'Use a valid phone number';
    if (!form.service) next.service = 'Select a service';
    if (form.message.trim().length < 20) next.message = 'Message should be at least 20 characters';
    return next;
  }, [form]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTouched(true);

    if (Object.keys(errors).length > 0) return;

    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '5531e3f4-4e5c-4257-8253-b8f7690559e5',
          subject: 'New enquiry from Markmet website',
          from_name: 'Markmet Website',
          ...form,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ loading: false, success: true, error: '' });
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
        setTouched(false);
      } else {
        setStatus({ loading: false, success: false, error: 'Something went wrong. Try again.' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Network error. Please try again.' });
    }
  };

  return (
    <section className="content-width contact-form-wrap">
      
      {status.success && <Alert severity="success">✅ Message sent successfully!</Alert>}
      {status.error && <Alert severity="error">{status.error}</Alert>}
      {touched && Object.keys(errors).length > 0 && (
        <Alert severity="error">Please fix the highlighted fields before submitting.</Alert>
      )}

      <form onSubmit={handleSubmit} className="contact-form glass-card">
        
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          error={!!errors.name && touched}
          helperText={touched ? errors.name : ''}
          fullWidth
          required
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          error={!!errors.email && touched}
          helperText={touched ? errors.email : ''}
          fullWidth
          required
        />

        <TextField
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          error={!!errors.phone && touched}
          helperText={touched ? errors.phone : ''}
          fullWidth
          required
        />

        <TextField
          select
          label="Required Service"
          name="service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          error={!!errors.service && touched}
          helperText={touched ? errors.service : ''}
          fullWidth
          required
        >
          {serviceOptions.map((service) => (
            <MenuItem key={service} value={service}>
              {service}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          multiline
          minRows={5}
          label="Message"
          name="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          error={!!errors.message && touched}
          helperText={touched ? errors.message : 'Share goals, target audience, and timeline.'}
          fullWidth
          required
        />

        <Button
          type="submit"
          variant="contained"
          disabled={status.loading}
          sx={{ backgroundColor: '#3d6a6c' }}
        >
          {status.loading ? 'Sending...' : 'Submit Enquiry'}
        </Button>
      </form>
    </section>
  );
}

export default ContactForm;