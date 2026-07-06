import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '70px 0 30px',
        color: 'var(--text-primary)',
        textAlign: 'left'
      }}
    >
      <div className="container">
        
        {/* Main Footer Grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}
        >
          {/* Column 1: Brand details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={logoImg}
                alt="Oxford Logo"
                style={{
                  height: '42px',
                  width: '42px',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  padding: '2px',
                  border: '1px solid var(--border-color)'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.15rem', lineHeight: '1.1' }}>
                  OXFORD
                </span>
                <span style={{ fontSize: '0.6rem', color: 'var(--cyan)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  Printers & Publishers
                </span>
              </div>
            </div>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 0 }}>
              "Turning Ideas into Professional Publications"
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 0 }}>
              High-quality offset and custom publishing services based in Thalgaspitiya, Kurunegala, Sri Lanka.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <a
                href="https://facebook.com/oxfordprintersppl"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--text-secondary)',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseOver={(e) => (e.target.style.color = '#1877F2')}
                onMouseOut={(e) => (e.target.style.color = 'var(--text-secondary)')}
                title="Facebook"
              >
                <FaFacebook />
              </a>

              <a
                href="https://wa.me/94775255563"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--text-secondary)',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseOver={(e) => (e.target.style.color = '#25D366')}
                onMouseOut={(e) => (e.target.style.color = 'var(--text-secondary)')}
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:oxfordprintersppl@gmail.com"
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--text-secondary)',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseOver={(e) => (e.target.style.color = 'var(--magenta)')}
                onMouseOut={(e) => (e.target.style.color = 'var(--text-secondary)')}
                title="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['hero', 'about', 'services', 'portfolio', 'process', 'faq', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      padding: '2px 0',
                      textTransform: 'capitalize',
                      transition: 'color var(--transition-fast)'
                    }}
                    onMouseOver={(e) => (e.target.style.color = 'var(--cyan)')}
                    onMouseOut={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {id === 'hero' ? 'Home' : id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>Our Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button onClick={() => handleNavClick('services')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', padding: '2px 0' }}>
                  Offset Press Printing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', padding: '2px 0' }}>
                  Book Self-Publishing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', padding: '2px 0' }}>
                  Educational Materials
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', padding: '2px 0' }}>
                  School Calendars & Diaries
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', padding: '2px 0' }}>
                  Corporate Annual Reports
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <FaMapMarkerAlt style={{ color: 'var(--cyan)', marginTop: '4px', flexShrink: 0 }} />
                <span>Thalgaspitiya, Kurunegala, Sri Lanka</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <FaPhoneAlt style={{ color: 'var(--cyan)', marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <a href="tel:+94372297974" style={{ display: 'block' }}>037 2297974</a>
                  <a href="tel:+94775255563" style={{ display: 'block' }}>077 5255563</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <FaEnvelope style={{ color: 'var(--cyan)', marginTop: '4px', flexShrink: 0 }} />
                <a href="mailto:oxfordprintersppl@gmail.com" style={{ wordBreak: 'break-all' }}>
                  oxfordprintersppl@gmail.com
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '25px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <span>© 2026 Oxford Printers & Publishers. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/quote">Get Quotation</Link>
            <span>•</span>
            <button onClick={() => handleNavClick('faq')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>FAQ</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
