import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact Us' },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="content-width header-inner">
        <Link to="/" className="logo-wrap">
          <span className="logo-orb" />
          <div>
            <h1>Markmet</h1>
            <p>Digital Marketing Company</p>
          </div>
        </Link>

        <nav className={`desktop-nav ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <IconButton className="mobile-toggle" onClick={() => setOpen((p) => !p)} aria-label="Toggle menu">
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
