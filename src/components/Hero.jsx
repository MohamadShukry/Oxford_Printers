import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFileInvoiceDollar } from 'react-icons/fa';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--header-height)',
        backgroundImage: `linear-gradient(to right, rgba(0, 51, 102, 0.9) 30%, rgba(11, 15, 25, 0.6) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        overflow: 'hidden',
        color: 'var(--white)'
      }}
    >
      {/* Decorative CMYK bars at the bottom of hero */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'var(--gradient-cmyk)',
          zIndex: 2
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', textAlign: 'left' }}>
          
          {/* Subtle Sri Lankan location tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 174, 239, 0.2)',
              border: '1px solid var(--cyan)',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '600',
              // color: 'var(--cyan)',
              color: 'rgb(250, 250, 250)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '1.5rem'
            }}
          >
            Thalgaspitiya, Kurunegala, Sri Lanka
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              color: 'var(--white)',
              marginBottom: '1.5rem',
              textShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            Professional Printing & <br />
            <span style={{
              background: 'linear-gradient(90deg, #00AEEF 0%, #EC008C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Publishing Solutions
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6',
              marginBottom: '2.5rem',
              maxWidth: '680px',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            High-quality offset printing, book publishing, educational materials, annual reports, business printing, and custom publishing services. We bring your creative vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <Link
              to="/quote"
              className="btn btn-accent"
              style={{
                padding: '1rem 2rem',
                fontSize: '1.05rem',
                boxShadow: '0 8px 20px rgba(236, 0, 140, 0.4)'
              }}
            >
              <FaFileInvoiceDollar style={{ fontSize: '1.2rem' }} />
              Get a Free Quote
            </Link>

            <a
              href="https://wa.me/94775255563"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                padding: '1rem 2rem',
                fontSize: '1.05rem'
              }}
            >
              <FaWhatsapp style={{ fontSize: '1.3rem' }} />
              Contact Us via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Modern floating elements for visual decoration */}
      <div className="hero-grid-overlay" />

      <style>{`
        .hero-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 24px 24px;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
