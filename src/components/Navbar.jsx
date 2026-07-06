import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
// import logoImg from '../assets/logo.png';
import logoImg from '../assets/logo1.jpg';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to scroll to apply style changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll to section or navigate to home first
  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Process', id: 'process' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav
      className={`glass`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        transition: 'all var(--transition-normal)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        backgroundColor: isScrolled
          ? 'var(--bg-primary)'
          : 'rgba(27, 27, 27, 0.7)'
          // : 'rgba(255, 255, 255, 0.05)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%'
        }}
      >
        {/* Logo and Brand Name */}
        <Link
          to="/"
          onClick={() => handleNavClick('hero')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <img
            src={logoImg}
            alt="Oxford Printers Logo"
            style={{
              height: '48px',
              width: '48px',
              objectFit: 'contain',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'white',
              padding: '2px'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: '800',
                letterSpacing: '-0.5px',
                // color: 'var(--text-primary)',
                color: theme === 'dark' ? '#ffffff' : '#005db4',
                lineHeight: '1.1'
              }}
            >
              O X F O R D
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                fontWeight: '600',
                letterSpacing: '2.5px',
                color: 'var(--cyan)',
                textTransform: 'uppercase'
              }}
            >
              Printers & Publishers
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-menu"
        >
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '24px',
              margin: 0,
              padding: 0
            }}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    padding: '8px 4px',
                    position: 'relative',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseOver={(e) => (e.target.style.color = 'var(--cyan)')}
                  onMouseOut={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.25rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-tertiary)',
              // backgroundColor: theme === 'dark' 
              //   ? '#fff' 
              //   : 'var(--bg-tertiary)',
              transition: 'background-color var(--transition-fast)'
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <HiSun style={{ color: '#EAB308' }} /> : <HiMoon style={{ color: '#475569' }} />}
          </button>

          {/* CTA Quote Button */}
          <Link to="/quote" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Controls */}
        <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="mobile-menu-controls">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.25rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-tertiary)'
            }}
          >
            {theme === 'dark' ? <HiSun style={{ color: '#EAB308' }} /> : <HiMoon style={{ color: '#475569' }} />}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={toggleMenu}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 999
          }}
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        style={{
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          right: 0,
          backgroundColor: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-color)',
          zIndex: 1000,
          display: isOpen ? 'block' : 'none',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-lg)',
          animation: 'slideDown 0.3s ease'
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            margin: 0,
            padding: 0
          }}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 0'
                }}
              >
                {link.name}
              </button>
            </li>
          ))}
          <li style={{ marginTop: '8px' }}>
            <Link to="/quote" className="btn btn-primary" style={{ width: '100%' }} onClick={toggleMenu}>
              Get Free Quote
            </Link>
          </li>
        </ul>
      </div>

      {/* Responsive Inline CSS to handle desktop vs mobile menu display */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-controls {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-controls {
            display: flex !important;
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
