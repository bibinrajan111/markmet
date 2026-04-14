import { Alert, Button, MenuItem, TextField } from '@mui/material';
import { useMemo, useState } from 'react';
import { serviceList } from '../../../data/siteData';

const serviceOptions = [...serviceList.map((service) => service.title), 'Other'];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [touched, setTouched] = useState(false);

  const errors = useMemo(() => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!/^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(form.email)) next.email = 'Valid email required';
    if (!/^\+?[0-9]{10,15}$/.test(form.phone)) next.phone = 'Use a valid phone number';
    if (!form.service) next.service = 'Select a service';
    if (form.message.trim().length < 20) next.message = 'Message should be at least 20 characters';
    return next;
  }, [form]);

  const onSubmit = (event) => {
    setTouched(true);
    if (Object.keys(errors).length > 0) {
      event.preventDefault();
    }
  };

  return (
    <section className="content-width contact-form-wrap">
      {touched && Object.keys(errors).length > 0 && <Alert severity="error">Please fix the highlighted fields before submitting.</Alert>}
      <form action="https://formsubmit.co/support@markmet.co.in" method="POST" onSubmit={onSubmit} className="contact-form glass-card">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New enquiry from Markmet website" />
        <TextField label="Name" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} error={!!errors.name && touched} helperText={touched ? errors.name : ''} fullWidth required />
        <TextField label="Email" name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} error={!!errors.email && touched} helperText={touched ? errors.email : ''} fullWidth required />
        <TextField label="Phone Number" name="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} error={!!errors.phone && touched} helperText={touched ? errors.phone : ''} fullWidth required />
        <TextField select label="Required Service" name="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} error={!!errors.service && touched} helperText={touched ? errors.service : ''} fullWidth required>
          {serviceOptions.map((service) => <MenuItem key={service} value={service}>{service}</MenuItem>)}
        </TextField>
        <TextField multiline minRows={5} label="Message" name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} error={!!errors.message && touched} helperText={touched ? errors.message : 'Share goals, target audience, and timeline.'} fullWidth required />
        <Button type="submit" variant="contained" sx={{ backgroundColor: '#3d6a6c' }}>Submit Enquiry</Button>
      </form>
    </section>
  );
}

export default ContactForm;
