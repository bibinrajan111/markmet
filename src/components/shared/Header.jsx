import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

import logo from '../../logo/logo.PNG';

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

        {/* LOGO */}
        <Link to="/" className="logo-wrap">
          <img src={logo} alt="Markmet Logo" className="logo-img" />
        </Link>

        {/* NAV */}
        <nav id="primary-navigation" className={`desktop-nav ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE MENU */}
        <IconButton
          className="mobile-toggle"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

      </div>
    </header>
  );
}

export default Header;