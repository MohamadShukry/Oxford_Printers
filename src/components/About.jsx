import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaAward, FaSlidersH, FaCalendarCheck } from 'react-icons/fa';
import aboutImg from '../assets/about-team.png';

const About = () => {
  const highlights = [
    { title: 'Professional Quality', desc: 'Crisp text and premium finishes for books and corporate materials.' },
    { title: 'Vibrant Color Printing', desc: 'Flawless CMYK ink calibration for magazines and brochures.' },
    { title: 'Affordable Pricing', desc: 'Cost-effective printing and distribution budgets for authors.' },
    { title: 'Fast Delivery', desc: 'On-time shipping and publication distribution across the region.' },
    { title: 'Customer Satisfaction', desc: 'Dedicated layout designers and proofreaders working with you.' },
    { title: 'Modern Printing Technology', desc: 'State-of-the-art offset machinery and digital publication systems.' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        {/* Section Title */}
        <div className="section-header">
          <h2>About Oxford Printers & Publishers</h2>
          <p>Your premier printing and book-publishing partner based in Kurunegala, Sri Lanka.</p>
        </div>

        {/* Two Column Grid */}
        <div
          className="grid-about"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center',
            textAlign: 'left'
          }}
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              width: '100%',
              height: '100%',
              border: '3px solid var(--cyan)',
              borderRadius: 'var(--border-radius)',
              zIndex: 0
            }} />
            <img
              src={aboutImg}
              alt="Oxford Publishing Team"
              style={{
                width: '100%',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
                zIndex: 1,
                display: 'block'
              }}
            />
            
            {/* CMYK badge overlapping the image */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              backgroundColor: 'var(--royal-blue)',
              color: 'var(--white)',
              padding: '12px 24px',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--cyan)' }}>
                10+
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Years Experience
              </span>
            </div>
          </motion.div>

          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
              Turning Ideas into Professional Publications
            </h3>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Oxford Printers & Publishers is a trusted printing and publishing company serving businesses, schools, organizations, authors, and individuals. We specialize in high-quality offset printing, book publishing, educational materials, annual reports, and customized printing solutions.
            </p>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Our mission is to bridge the gap between creative concepts and high-end printed works. From design, typesetting, and editing to proofreading and getting your ISBN, we provide a smooth end-to-end publishing journey.
            </p>

            <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: '700' }}>
              Why Choose Us:
            </h4>

            {/* Checklist */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '15px'
            }}>
              {highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <FaCheckCircle style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>{item.title}</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .grid-about {
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
