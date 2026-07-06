import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaCheckDouble, FaUsers, FaShippingFast } from 'react-icons/fa';

const Stats = () => {
  const statsData = [
    { number: '10+', label: 'Years Experience', icon: <FaCalendarAlt />, color: 'var(--royal-blue)' },
    { number: '1000+', label: 'Completed Projects', icon: <FaCheckDouble />, color: 'var(--cyan)' },
    { number: '500+', label: 'Happy Clients', icon: <FaUsers />, color: 'var(--magenta)' },
    { number: '100%', label: 'On-Time Delivery', icon: <FaShippingFast />, color: 'var(--royal-blue)' }
  ];

  return (
    <section
      id="stats"
      style={{
        padding: '60px 0',
        background: 'linear-gradient(135deg, var(--royal-blue) 0%, #001B3A 100%)',
        color: 'var(--white)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Visual background registration lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(rgba(0, 174, 239, 0.15) 1.5px, transparent 1.5px)',
        backgroundSize: '30px 30px',
        opacity: 0.5,
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '30px'
          }}
        >
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: 'var(--border-radius)',
                padding: '2.5rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div
                style={{
                  fontSize: '2.25rem',
                  color: idx % 2 === 0 ? 'var(--cyan)' : 'var(--magenta)',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                {stat.icon}
              </div>
              
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.75rem',
                  fontWeight: '800',
                  lineHeight: '1',
                  marginBottom: '8px',
                  background: idx % 2 === 0 
                    ? 'linear-gradient(to right, #ffffff, var(--cyan))' 
                    : 'linear-gradient(to right, #ffffff, var(--magenta))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                {stat.number}
              </span>
              
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
