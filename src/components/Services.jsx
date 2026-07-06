import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPrint, FaIdCard, FaCopy, FaBookOpen, FaImage, FaUtensils,
  FaNewspaper, FaCalendarAlt, FaChartBar, FaAward, FaTags,
  FaBoxOpen, FaAd, FaTv, FaBook, FaGraduationCap, FaScroll,
  FaUserGraduate, FaMicroscope, FaFolderOpen, FaClock, FaBarcode,
  FaPalette, FaEdit
} from 'react-icons/fa';

const Services = () => {
  const [activeTab, setActiveTab] = useState('printing');

  const printingServices = [
    { name: 'Offset Printing', icon: <FaPrint />, desc: 'Mass print solutions for books, booklets, and corporate stationary with rich ink replication.' },
    { name: 'Business Cards', icon: <FaIdCard />, desc: 'Premium, thick cardstock business cards with matte, glossy, or spot UV finishes.' },
    { name: 'Flyers & Flyers', icon: <FaCopy />, desc: 'Vibrant promotional materials to spread your brand messaging effectively.' },
    { name: 'Brochures', icon: <FaBookOpen />, desc: 'Bi-fold, tri-fold, and custom multi-page marketing brochures.' },
    { name: 'Posters', icon: <FaImage />, desc: 'High-definition posters in standard or custom large-scale dimensions.' },
    { name: 'Restaurant Menus', icon: <FaUtensils />, desc: 'Durable, spill-resistant menu card printing with elegant typography.' },
    { name: 'School Magazines', icon: <FaNewspaper />, desc: 'Professionally formatted yearbooks, periodicals, and campus magazines.' },
    { name: 'Calendars & Diaries', icon: <FaCalendarAlt />, desc: 'Custom desk, wall, and pocket calendars, and school agendas/planners.' },
    { name: 'Annual Reports', icon: <FaChartBar />, desc: 'Polished data presentation brochures with thermal or wire-o binding.' },
    { name: 'Certificates', icon: <FaAward />, desc: 'Elegant graduation, training, and achievement certificates on textured cardstock.' },
    { name: 'Stickers & Labels', icon: <FaTags />, desc: 'Custom die-cut product labels and promotional vinyl stickers.' },
    { name: 'Packaging Printing', icon: <FaBoxOpen />, desc: 'Branded cardboard boxes, product sleeves, and customized packaging items.' },
    { name: 'Banners & Flex', icon: <FaAd />, desc: 'High-durability indoor/outdoor flex banners and event backdrops.' }
  ];

  const publishingServices = [
    { name: 'Book Publishing', icon: <FaBook />, desc: 'Full-service novel, poetry, biography, and fiction publishing packages.' },
    { name: 'Educational Books', icon: <FaGraduationCap />, desc: 'Curriculum-aligned textbook, workbook, and school syllabus production.' },
    { name: 'Reference Books', icon: <FaScroll />, desc: 'Encyclopedias, manuals, directories, and corporate guides.' },
    { name: 'Thesis Printing', icon: <FaUserGraduate />, desc: 'Hardcover thesis binding with gold-foil spine lettering for university submissions.' },
    { name: 'Research Publications', icon: <FaMicroscope />, desc: 'Peer-reviewed research reports, scientific white papers, and conference papers.' },
    { name: 'Journal Publishing', icon: <FaFolderOpen />, desc: 'Academic and scientific journal editions, serialized print editions.' },
    { name: 'Print on Demand', icon: <FaClock />, desc: 'Flexible, small-run printing starting from single digit copy quantities.' },
    { name: 'ISBN Assistance', icon: <FaBarcode />, desc: 'Complete guidance to secure cataloging details, barcodes, and legal deposits.' },
    { name: 'Book Cover Design', icon: <FaPalette />, desc: 'Stunning front-to-back layout designs crafted by industrial publication artists.' },
    { name: 'Editing & Proofreading', icon: <FaEdit />, desc: 'Professional manuscript polishing, grammar reviews, and layout alignment checking.' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="services" className="section section-bg-alt">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>Our Printing & Publishing Services</h2>
          <p>We leverage cutting-edge offset and digital workflows to deliver crisp, professional results.</p>
        </div>

        {/* Dynamic Tab Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '40px'
          }}
        >
          <button
            onClick={() => setActiveTab('printing')}
            className="btn"
            style={{
              padding: '12px 24px',
              backgroundColor: activeTab === 'printing' ? 'var(--royal-blue)' : 'var(--bg-primary)',
              color: activeTab === 'printing' ? 'var(--white)' : 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              boxShadow: activeTab === 'printing' ? 'var(--shadow-md)' : 'none'
            }}
          >
            <FaPrint style={{ marginRight: '8px' }} />
            Printing Services
          </button>

          <button
            onClick={() => setActiveTab('publishing')}
            className="btn"
            style={{
              padding: '12px 24px',
              backgroundColor: activeTab === 'publishing' ? 'var(--royal-blue)' : 'var(--bg-primary)',
              color: activeTab === 'publishing' ? 'var(--white)' : 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              boxShadow: activeTab === 'publishing' ? 'var(--shadow-md)' : 'none'
            }}
          >
            <FaBook style={{ marginRight: '8px' }} />
            Publishing Services
          </button>
        </div>

        {/* Services Grid Render */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {activeTab === 'printing'
              ? printingServices.map((service, index) => (
                  <motion.div key={index} variants={itemVariants} className="card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <div style={{
                      fontSize: '2rem',
                      color: 'var(--cyan)',
                      marginBottom: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 174, 239, 0.1)',
                    }}>
                      {service.icon}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{service.name}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 0, flexGrow: 1 }}>{service.desc}</p>
                  </motion.div>
                ))
              : publishingServices.map((service, index) => (
                  <motion.div key={index} variants={itemVariants} className="card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <div style={{
                      fontSize: '2rem',
                      color: 'var(--magenta)',
                      marginBottom: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(236, 0, 140, 0.1)',
                    }}>
                      {service.icon}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{service.name}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 0, flexGrow: 1 }}>{service.desc}</p>
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Services;
