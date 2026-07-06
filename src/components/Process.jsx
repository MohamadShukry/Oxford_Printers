import React from 'react';
import { motion } from 'framer-motion';
import { FaShareAlt, FaFileAlt, FaPalette, FaCogs, FaSearchPlus, FaTruck } from 'react-icons/fa';

const Process = () => {
  const steps = [
    {
      num: 1,
      title: 'Share Your Requirement',
      icon: <FaShareAlt />,
      desc: 'Send us your manuscript, print specifications, or design concepts via our online form or WhatsApp chat.'
    },
    {
      num: 2,
      title: 'Get Free Quotation',
      icon: <FaFileAlt />,
      desc: 'We analyze your requirements and provide a transparent, competitive offset printing or book publishing budget breakdown.'
    },
    {
      num: 3,
      title: 'Design Approval',
      icon: <FaPalette />,
      desc: 'Our graphic designers prepare the digital layouts and cover artwork for your final verification and feedback.'
    },
    {
      num: 4,
      title: 'Printing & Production',
      icon: <FaCogs />,
      desc: 'We start printing your order using high-speed offset and digital printing machinery with precise ink calibration.'
    },
    {
      num: 5,
      title: 'Quality Checking',
      icon: <FaSearchPlus />,
      desc: 'Every single batch of books, brochures, or packaging boxes undergoes rigorous alignment and color calibration scrutiny.'
    },
    {
      num: 6,
      title: 'Delivery',
      icon: <FaTruck />,
      desc: 'Your completed print run is safely packed and delivered directly to your doorstep in Kurunegala or anywhere in Sri Lanka.'
    }
  ];

  return (
    <section id="process" className="section section-bg-alt">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>Our Workflow Process</h2>
          <p>We keep our process transparent and efficient to ensure high quality and fast deliveries.</p>
        </div>

        {/* Timeline Container */}
        <div style={{
          position: 'relative',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '20px 0'
        }}>
          {/* Central connecting line for desktop view */}
          <div className="timeline-line" style={{
            position: 'absolute',
            left: '50%',
            top: '40px',
            bottom: '40px',
            width: '4px',
            background: 'linear-gradient(to bottom, var(--cyan) 0%, var(--magenta) 100%)',
            transform: 'translateX(-50%)',
            zIndex: 0
          }} />

          {/* Steps Loop */}
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.num}
                className="timeline-item"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: '50px',
                  position: 'relative',
                  flexDirection: isEven ? 'row' : 'row-reverse'
                }}
              >
                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
                  style={{
                    width: '45%',
                    zIndex: 2
                  }}
                  className="timeline-card-wrapper"
                >
                  <div className="card" style={{
                    padding: '1.75rem',
                    borderColor: step.num % 2 === 0 ? 'var(--magenta)' : 'var(--cyan)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '12px' }}>
                      <span style={{
                        fontSize: '1.25rem',
                        fontWeight: '800',
                        color: 'var(--white)',
                        backgroundColor: step.num % 2 === 0 ? 'var(--magenta)' : 'var(--cyan)',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-heading)'
                      }}>
                        {step.num}
                      </span>
                      <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{step.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Central Circle Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-primary)',
                    border: '4px solid',
                    borderColor: step.num % 2 === 0 ? 'var(--magenta)' : 'var(--cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.35rem',
                    color: 'var(--text-primary)',
                    boxShadow: 'var(--shadow-md)',
                    zIndex: 3
                  }}
                  className="timeline-icon"
                >
                  {step.icon}
                </motion.div>

                {/* Empty Space filler for alignment */}
                <div className="timeline-spacer" style={{ width: '45%' }} />
              </div>
            );
          })}
        </div>

      </div>

      {/* Timeline styles for mobile devices */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 28px !important;
            transform: none !important;
          }
          .timeline-item {
            flex-direction: row-reverse !important;
            align-items: flex-start !important;
            margin-bottom: 40px !important;
          }
          .timeline-card-wrapper {
            width: calc(100% - 70px) !important;
          }
          .timeline-spacer {
            display: none !important;
          }
          .timeline-icon {
            left: 28px !important;
            transform: translateX(-50%) !important;
            width: 48px !important;
            height: 48px !important;
            font-size: 1.15rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
