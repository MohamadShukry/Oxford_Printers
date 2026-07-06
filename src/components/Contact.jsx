import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Offset Printing',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    'Offset Printing',
    'Book Publishing',
    'Educational Materials',
    'School Diaries',
    'Annual Reports',
    'Business Cards',
    'Flyers & Brochures',
    'Packaging & Labels',
    'Custom Services'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check validation
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill out all required fields.');
      return;
    }

    // Success state
    setIsSubmitted(true);
    
    // Confetti effect!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#003366', '#00AEEF', '#EC008C']
    });

    // Reset Form
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Offset Printing',
        message: ''
      });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with our printing press and publishing division to discuss your next big launch.</p>
        </div>

        {/* Contact Grid layout */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            textAlign: 'left'
          }}
        >
          {/* Contact Information Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Oxford Printers & Publishers</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Feel free to visit our office, drop us an email, or give us a phone call. We are ready to help you with your layout design, typesetting, cover artwork, and high-volume offset printing requirements.
              </p>
            </div>

            {/* Info cards list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Address */}
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{
                  fontSize: '1.2rem',
                  color: 'var(--white)',
                  backgroundColor: 'var(--royal-blue)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Location</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    Thalgaspitiya, Kurunegala, Sri Lanka
                  </span>
                </div>
              </div>

              {/* Call Numbers */}
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{
                  fontSize: '1.2rem',
                  color: 'var(--white)',
                  backgroundColor: 'var(--cyan)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Phone Numbers</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'block' }}>
                    Landline: <a href="tel:+94372297974" style={{ fontWeight: '600' }}>037 2297974</a>
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'block' }}>
                    Mobile: <a href="tel:+94775255563" style={{ fontWeight: '600' }}>077 5255563</a>
                  </span>
                </div>
              </div>

              {/* Email Address */}
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{
                  fontSize: '1.2rem',
                  color: 'var(--white)',
                  backgroundColor: 'var(--magenta)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <FaEnvelope />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Email Address</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    <a href="mailto:oxfordprintersppl@gmail.com" style={{ fontWeight: '600' }}>
                      oxfordprintersppl@gmail.com
                    </a>
                  </span>
                </div>
              </div>

            </div>

            {/* Google Maps embed */}
            <div style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden', height: '220px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
              <iframe
                title="Oxford Printers Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.175114777592!2d80.2458428!3d7.6245199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae323b7e41ad9c3%3A0x6b30ff52f8677e1c!2sThalgaspitiya!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send Us a Message</h3>

              {isSubmitted ? (
                <div style={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '20px'
                }}>
                  <div style={{
                    fontSize: '3.5rem',
                    color: 'var(--cyan)',
                    marginBottom: '15px',
                    animation: 'pulse 1.5s infinite'
                  }}>
                    🎉
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Thank you!</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    Your message has been sent successfully. One of our consultants will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {/* Name field */}
                  <div className="form-group">
                    <label className="form-label">Name <span style={{ color: 'var(--magenta)' }}>*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Phone field */}
                  <div className="form-group">
                    <label className="form-label">Phone Number <span style={{ color: 'var(--magenta)' }}>*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. 077 5255563"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label className="form-label">Email Address <span style={{ color: 'var(--magenta)' }}>*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. yourname@example.com"
                      required
                    />
                  </div>

                  {/* Service Selector */}
                  <div className="form-group">
                    <label className="form-label">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="form-group">
                    <label className="form-label">Message / Printing Specs</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="4"
                      placeholder="Describe your design, quantity, page counts, or other requirements..."
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary animate-gradient"
                    style={{
                      marginTop: '10px',
                      padding: '12px',
                      width: '100%',
                      background: 'linear-gradient(135deg, var(--royal-blue) 0%, var(--cyan) 100%)',
                      boxShadow: 'var(--shadow-cyan)'
                    }}
                  >
                    <FaPaperPlane style={{ marginRight: '8px' }} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @media (max-width: 768px) {
          .contact-grid {
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
