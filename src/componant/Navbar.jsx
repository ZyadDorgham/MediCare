import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2v20M8 6l8 12M16 6l-8 12M4 12h16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
          <span className="brand-text">Medi<span>Care</span></span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Patients">Patients</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/Appointments">Appointments</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>

        <div className="navbar-actions">
          <button className="btn-get-started">Get Started</button>
          <button className="hamburger" onClick={toggleMobileMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/Patients" onClick={toggleMobileMenu}>Patients</Link>
          <Link to="/doctors" onClick={toggleMobileMenu}>Doctors</Link>
          <Link to="/Appointments" onClick={toggleMobileMenu}>Appointments</Link>
          <Link to="/dashboard" onClick={toggleMobileMenu}>Dashboard</Link>
          <div className="mobile-cta">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;