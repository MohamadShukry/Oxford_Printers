import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'Dr. Nihal Perera',
      role: 'University Professor & Author',
      quote: 'Oxford Printers published my recent research compilation. The printing and paper quality are outstanding. Their support in cataloging and obtaining the ISBN made the entire publishing process stress-free.',
      rating: 5
    },
    {
      name: 'Mrs. K. A. Gunawardena',
      role: 'Principal, Kurunegala National College',
      quote: 'We have been outsourcing our annual school diaries, certificates, and student magazines to Oxford Printers for over 6 years. Their offset print color replication is flawless and they always meet strict academic deadlines.',
      rating: 5
    },
    {
      name: 'Sarah de Silva',
      role: 'Marketing Director, Ceylon Tea Harvest',
      quote: 'Excellent design assistance! The packaging boxes and brochures they designed and printed for our export products have received praise for their premium look. Professional customer service.',
      rating: 5
    }
  ];

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>Customer Testimonials</h2>
          <p>Read what authors, business owners, and academic organizations say about working with us.</p>
        </div>

        {/* Carousel Wrapper */}
        <div
          style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto',
            minHeight: '280px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '-20px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-md)',
              zIndex: 5,
              transition: 'all var(--transition-fast)'
            }}
            className="carousel-btn-nav"
            title="Previous Review"
          >
            <FaChevronLeft />
          </button>

          {/* Review Card display */}
          <div style={{ width: '100%', padding: '0 25px', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--border-radius-lg)',
                  border: '1px solid var(--border-color)',
                  padding: '3rem 2.5rem 2.5rem',
                  position: 'relative',
                  boxShadow: 'var(--shadow-sm)',
                  textAlign: 'center'
                }}
              >
                {/* Quote Icon overlay */}
                <FaQuoteLeft
                  style={{
                    fontSize: '2.5rem',
                    color: 'var(--cyan)',
                    opacity: 0.25,
                    position: 'absolute',
                    top: '25px',
                    left: '30px'
                  }}
                />

                {/* Stars */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '1.5rem' }}>
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} style={{ color: '#F59E0B', fontSize: '1.25rem' }} />
                  ))}
                </div>

                {/* Quote text */}
                <p style={{
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  lineHeight: '1.7',
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem'
                }}>
                  "{reviews[currentIndex].quote}"
                </p>

                {/* Client info */}
                <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>
                  {reviews[currentIndex].name}
                </h4>
                
                <span style={{ fontSize: '0.85rem', color: 'var(--cyan)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {reviews[currentIndex].role}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '-20px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-md)',
              zIndex: 5,
              transition: 'all var(--transition-fast)'
            }}
            className="carousel-btn-nav"
            title="Next Review"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Indicator dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '25px'
        }}>
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: index === currentIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: index === currentIndex ? 'var(--cyan)' : 'var(--border-color)',
                cursor: 'pointer',
                transition: 'all var(--transition-normal)'
              }}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

      <style>{`
        .carousel-btn-nav:hover {
          background-color: var(--cyan) !important;
          color: white !important;
          border-color: var(--cyan) !important;
        }
        @media (max-width: 500px) {
          .carousel-btn-nav {
            width: 36px !important;
            height: 36px !important;
            font-size: 0.85rem !important;
          }
          .carousel-btn-nav.left {
            left: -10px !important;
          }
          .carousel-btn-nav.right {
            right: -10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
