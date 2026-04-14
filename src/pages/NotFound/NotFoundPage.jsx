import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="content-width" style={{ padding: '6rem 0' }}>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Button component={Link} to="/" variant="contained">Back Home</Button>
    </section>
  );
}

export default NotFoundPage;
