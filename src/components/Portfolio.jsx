import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import booksImg from '../assets/portfolio-books.png';
import magazinesImg from '../assets/portfolio-magazines.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    'All',
    'Books',
    'Brochures',
    'Annual Reports',
    'School Diaries',
    'Business Cards',
    'Packaging',
    'Banners',
    'Magazines'
  ];

  const portfolioItems = [
    { title: 'Sri Lankan Historical Novel', category: 'Books', image: booksImg, desc: 'A custom-printed hardcover publication with gold-foiled title.' },
    { title: 'Corporate Annual Report 2026', category: 'Annual Reports', image: magazinesImg, desc: 'Glossy cover annual report with clean data visualization charts.' },
    { title: 'Premium Tri-Fold brochure', category: 'Brochures', image: magazinesImg, desc: 'High-quality offset brochures printed on 150gsm art paper.' },
    { title: 'St. Joseph College School Diary', category: 'School Diaries', image: booksImg, desc: 'Bound customized daily organizer with school emblem embossing.' },
    { title: 'Minimalist Embossed Business Card', category: 'Business Cards', image: magazinesImg, desc: 'Heavyweight textured board business cards with spot UV.' },
    { title: 'Eco-friendly Product Packaging Box', category: 'Packaging', image: magazinesImg, desc: 'Eco-friendly Kraft paperboard folding carton product container.' },
    { title: 'Kurunegala Trade Fair Flex Banner', category: 'Banners', image: magazinesImg, desc: 'High-contrast large flex banner printed on weather-proof PVC.' },
    { title: 'Ceylon Travel Monthly Magazine', category: 'Magazines', image: magazinesImg, desc: 'Saddle-stitched glossy catalog featuring national tourist spots.' }
  ];

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  // Lightbox navigation functions
  const openLightbox = (index) => {
    // Find absolute index in the filtered items array
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>Our Portfolio / Gallery</h2>
          <p>Explore some of our completed printing and publishing projects, showcasing vibrant detail.</p>
        </div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px'
          }}
        >
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className="btn"
              style={{
                padding: '8px 16px',
                fontSize: '0.9rem',
                backgroundColor: filter === cat ? 'var(--cyan)' : 'var(--bg-secondary)',
                color: filter === cat ? 'var(--white)' : 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                boxShadow: filter === cat ? 'var(--shadow-sm)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                style={{
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 'var(--border-radius)',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)'
                }}
                className="portfolio-card"
              >
                <div style={{ position: 'relative', paddingBottom: '75%', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      top: 0,
                      left: 0
                    }}
                    className="portfolio-img"
                  />
                  {/* Overlay on hover */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 51, 102, 0.85)',
                      opacity: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '20px',
                      transition: 'opacity 0.3s ease',
                      color: 'var(--white)',
                      textAlign: 'center',
                      zIndex: 2
                    }}
                    className="portfolio-overlay"
                  >
                    <div style={{
                      fontSize: '2rem',
                      color: 'var(--cyan)',
                      marginBottom: '10px'
                    }}>
                      <FaEye />
                    </div>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--cyan)', fontWeight: '700', marginBottom: '4px' }}>
                      {item.category}
                    </span>
                    <h4 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '8px' }}>
                      {item.title}
                    </h4>
                  </div>
                </div>
                <div style={{ padding: '1.25rem', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--cyan)' }}>{item.category}</span>
                  <h4 style={{ fontSize: '1.05rem', margin: '4px 0 8px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 0 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox-overlay"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button className="lightbox-close" onClick={closeLightbox}>
                <FaTimes />
              </button>

              {/* Prev Button */}
              <button className="lightbox-nav lightbox-prev" onClick={showPrev}>
                <FaArrowLeft />
              </button>

              {/* Next Button */}
              <button className="lightbox-nav lightbox-next" onClick={showNext}>
                <FaArrowRight />
              </button>

              {/* Lightbox Content */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="lightbox-img"
                />
                <div className="lightbox-caption">
                  <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--cyan)', fontWeight: '700', display: 'block', letterSpacing: '1px' }}>
                    {filteredItems[lightboxIndex].category}
                  </span>
                  {filteredItems[lightboxIndex].title}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      
      {/* Portfolio card hover styles */}
      <style>{`
        .portfolio-card:hover .portfolio-img {
          transform: scale(1.1);
        }
        .portfolio-card:hover .portfolio-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
