import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'How long does a print or publishing run take?',
      a: 'Delivery timelines depend on the project scope and binding style. High-volume business cards, flyers, or labels usually take 3–5 working days. Large offset publication runs like school magazines, diaries, or hardbound book editions can take 7–14 days. We always discuss and commit to clear deadlines beforehand.'
    },
    {
      q: 'Do you provide design, typesetting, and editing services?',
      a: 'Yes! Oxford Printers has dedicated in-house designers, proofreaders, and layout specialists. We can assist with book cover designs, interior formatting, educational material typesetting, and grammatical reviews to ensure your work looks completely professional.'
    },
    {
      q: 'Can I publish my own book with you, and do you assist with ISBN?',
      a: 'Absolutely. We specialize in self-publishing solutions for independent authors. We provide ISBN application assistance, help with the layout and formatting standards required by national archives, handle the printing (both offset and print-on-demand), and deliver complete volumes ready for bookstores.'
    },
    {
      q: 'Do you offer delivery services across Sri Lanka?',
      a: 'Yes, we do. While our primary facility is based in Thalgaspitiya, Kurunegala, we ship and deliver completed printing projects to schools, authors, and corporate customers in Colombo, Kandy, Gampaha, and all other districts in Sri Lanka.'
    },
    {
      q: 'What file formats do you accept for custom designs?',
      a: 'For best results, we recommend high-resolution PDFs (CMYK color profile with text converted to curves/outlines). We also accept Adobe Illustrator (.ai), Photoshop (.psd), CorelDraw (.cdr), and high-resolution JPEG or PNG files. Our design team can guide you on setting up bleed margins before printing.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section section-bg-alt">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about offset printing specifications, publishing setups, and deliveries.</p>
        </div>

        {/* Accordions Wrapper */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="accordion-item">
                {/* Title Trigger */}
                <div
                  className="accordion-title"
                  onClick={() => handleToggle(idx)}
                  style={{
                    backgroundColor: isOpen ? 'var(--bg-tertiary)' : 'var(--bg-card)',
                    color: isOpen ? 'var(--cyan)' : 'var(--text-primary)',
                    borderBottom: isOpen ? '1px solid var(--border-color)' : 'none',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <FaChevronUp style={{ color: 'var(--magenta)' }} /> : <FaChevronDown />}
                </div>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="accordion-content">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
