import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFileInvoiceDollar, FaArrowLeft, FaPaperPlane, FaWhatsapp, FaCalculator } from 'react-icons/fa';
import confetti from 'canvas-confetti';

const QuotePage = () => {
  const navigate = useNavigate();
  const [projectType, setProjectType] = useState('publishing'); // 'publishing' or 'printing'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    org: '',
    
    // Publishing Specs
    pagesCount: 150,
    bindingType: 'Softcover Perfect Bound',
    isbnNeeded: 'Yes',
    coverFinish: 'Matte Laminated',
    pubQuantity: 100,

    // Printing Specs
    pageSize: 'A5',
    paperStock: '120gsm Art Paper',
    inkColors: 'Full Color (CMYK)',
    printQuantity: 500,

    remarks: ''
  });

  const [estPrice, setEstPrice] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic estimate calculator (Simulated business logic)
  useEffect(() => {
    let price = 0;
    if (projectType === 'publishing') {
      // Base setup
      price = 15000; // base typesetting & ISBN fee
      
      // Page cost
      const pageCost = formData.pagesCount * 120; // 120 LKR per page
      // Cover cost
      const coverCost = formData.coverFinish === 'Spot UV Glossy' ? 12000 : 7000;
      // Binding multiplier
      const bindMultiplier = formData.bindingType === 'Hardcover Section Sewn' ? 350 : 180;

      const singleBookCost = pageCost + bindMultiplier;
      price += (singleBookCost * formData.pubQuantity) + coverCost;

      if (formData.isbnNeeded === 'Yes') {
        price += 5000; // ISBN application support fee
      }
    } else {
      // General Printing
      let sheetCost = 15;
      if (formData.pageSize === 'A4') sheetCost = 25;
      if (formData.paperStock === '150gsm Glossy Art') sheetCost += 10;
      if (formData.inkColors === 'Full Color (CMYK)') sheetCost += 15;

      price = (sheetCost * formData.printQuantity) + 5000; // plates setup fee
    }
    setEstPrice(Math.round(price));
  }, [projectType, formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in your name, phone number, and email.');
      return;
    }

    setIsSubmitted(true);

    // Confetti!
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#003366', '#00AEEF', '#EC008C']
    });
  };

  // Build text summary to share directly to WhatsApp
  const shareToWhatsApp = () => {
    let summaryText = `*New Quote Inquiry - Oxford Printers Kurunegala*\n`;
    summaryText += `*Name:* ${formData.name}\n`;
    summaryText += `*Phone:* ${formData.phone}\n`;
    summaryText += `*Email:* ${formData.email}\n`;
    summaryText += `*Company/Org:* ${formData.org || 'None'}\n`;
    summaryText += `*Project:* ${projectType === 'publishing' ? 'Book Publishing' : 'General Print'}\n`;

    if (projectType === 'publishing') {
      summaryText += `- *Page Count:* ${formData.pagesCount}\n`;
      summaryText += `- *Binding:* ${formData.bindingType}\n`;
      summaryText += `- *Cover Finish:* ${formData.coverFinish}\n`;
      summaryText += `- *ISBN Support:* ${formData.isbnNeeded}\n`;
      summaryText += `- *Quantity:* ${formData.pubQuantity} books\n`;
    } else {
      summaryText += `- *Page Size:* ${formData.pageSize}\n`;
      summaryText += `- *Paper Stock:* ${formData.paperStock}\n`;
      summaryText += `- *Ink Style:* ${formData.inkColors}\n`;
      summaryText += `- *Quantity:* ${formData.printQuantity} items\n`;
    }
    
    if (formData.remarks) {
      summaryText += `*Additional Remarks:* ${formData.remarks}\n`;
    }
    
    summaryText += `*Simulated Estimate:* LKR ${estPrice.toLocaleString()}`;

    window.open(`https://wa.me/94775255563?text=${encodeURIComponent(summaryText)}`, '_blank');
  };

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 30px)', paddingBottom: '60px', backgroundColor: 'var(--bg-secondary)', minHeight: '100vh', textAlign: 'left' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Back Link */}
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--cyan)',
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginBottom: '20px',
            padding: 0
          }}
        >
          <FaArrowLeft />
          Back to Homepage
        </button>

        {/* Card Panel */}
        <div className="card" style={{ padding: '3rem 2rem' }}>
          
          {/* Header Title */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              fontSize: '2.5rem',
              color: 'var(--cyan)',
              marginBottom: '15px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '70px',
              height: '70px',
              borderRadius: '16px',
              backgroundColor: 'rgba(0, 174, 239, 0.1)'
            }}>
              <FaFileInvoiceDollar />
            </div>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '8px' }}>Request a Free Quotation</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Fill in your layout preferences below. Our algorithm calculates a preliminary estimate. Submit the form to request official review.
            </p>
          </div>

          {isSubmitted ? (
            /* Thank you page */
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ textAlign: 'center', padding: '30px 0' }}
            >
              <div style={{ fontSize: '4rem', color: '#10B981', marginBottom: '20px' }}>✅</div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '12px' }}>Quotation Request Logged!</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 30px', fontSize: '1.05rem' }}>
                Thank you, <strong>{formData.name}</strong>. Your requirement has been successfully logged.
                Our production team in Kurunegala will analyze the print specs and send you the official PDF invoice.
              </p>

              {/* Estimate overview */}
              <div style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1.5px dashed var(--border-color)',
                borderRadius: 'var(--border-radius)',
                padding: '20px',
                maxWidth: '450px',
                margin: '0 auto 30px',
                textAlign: 'left'
              }}>
                <h4 style={{ margin: '0 0 10px', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Inquiry Details</h4>
                <p style={{ fontSize: '0.9rem', margin: '0 0 6px' }}><strong>Project Category:</strong> {projectType === 'publishing' ? 'Book Publishing' : 'General Print'}</p>
                <p style={{ fontSize: '0.9rem', margin: '0 0 6px' }}><strong>Target Quantity:</strong> {projectType === 'publishing' ? formData.pubQuantity : formData.printQuantity} items</p>
                <p style={{ fontSize: '1.15rem', color: 'var(--cyan)', margin: '15px 0 0', fontWeight: '700' }}>
                  Simulated Cost: LKR {estPrice.toLocaleString()}
                </p>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>*Subject to change upon artwork review.</span>
              </div>

              {/* WhatsApp direct send */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                <button
                  onClick={shareToWhatsApp}
                  className="btn btn-whatsapp"
                  style={{ padding: '12px 24px', fontSize: '1rem' }}
                >
                  <FaWhatsapp style={{ fontSize: '1.2rem' }} />
                  Submit details to WhatsApp
                </button>
                
                <button
                  onClick={() => { setIsSubmitted(false); }}
                  className="btn btn-outline"
                  style={{ padding: '12px 24px', fontSize: '1rem' }}
                >
                  Request another Quote
                </button>
              </div>
            </motion.div>
          ) : (
            /* Quotation Form */
            <form onSubmit={handleFormSubmit}>
              {/* Step 1: Project Type Tabs */}
              <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
                <button
                  type="button"
                  onClick={() => setProjectType('publishing')}
                  style={{
                    flex: 1,
                    padding: '15px',
                    borderRadius: '8px',
                    border: '2px solid',
                    borderColor: projectType === 'publishing' ? 'var(--cyan)' : 'var(--border-color)',
                    backgroundColor: projectType === 'publishing' ? 'rgba(0, 174, 239, 0.05)' : 'transparent',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  📖 Book Publishing Service
                </button>
                <button
                  type="button"
                  onClick={() => setProjectType('printing')}
                  style={{
                    flex: 1,
                    padding: '15px',
                    borderRadius: '8px',
                    border: '2px solid',
                    borderColor: projectType === 'printing' ? 'var(--cyan)' : 'var(--border-color)',
                    backgroundColor: projectType === 'printing' ? 'rgba(0, 174, 239, 0.05)' : 'transparent',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  🖨️ Offset Printing Service
                </button>
              </div>

              {/* Grid: Client details */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                1. Customer Details
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                <div className="form-group">
                  <label className="form-label">Name <span style={{ color: 'var(--magenta)' }}>*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Full name"
                    required
                  />
                </div>
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
                <div className="form-group">
                  <label className="form-label">Email Address <span style={{ color: 'var(--magenta)' }}>*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g. author@gmail.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">School / Organization</label>
                  <input
                    type="text"
                    name="org"
                    value={formData.org}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Optional"
                  />
                </div>
              </div>

              {/* Step 2: Specs parameters */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                2. Project Specifications
              </h3>

              {projectType === 'publishing' ? (
                /* Book Publishing Fields */
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  <div className="form-group">
                    <label className="form-label">Page Count (Inner)</label>
                    <input
                      type="number"
                      name="pagesCount"
                      value={formData.pagesCount}
                      onChange={handleInputChange}
                      className="form-input"
                      min="10"
                      max="1000"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Binding Style</label>
                    <select
                      name="bindingType"
                      value={formData.bindingType}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="Softcover Perfect Bound">Softcover (Perfect Bound)</option>
                      <option value="Hardcover Section Sewn">Hardcover (Section Sewn)</option>
                      <option value="Spiral Wire-O Bound">Spiral / Wire-O Bound</option>
                      <option value="Saddle Stitched Booklet">Saddle Stitched (Magazines)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Cover Lamination Finish</label>
                    <select
                      name="coverFinish"
                      value={formData.coverFinish}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="Matte Laminated">Matte Lamination</option>
                      <option value="Glossy Laminated">Glossy Lamination</option>
                      <option value="Spot UV Glossy">Spot UV + Matte Lamination</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">ISBN Registration Support</label>
                    <select
                      name="isbnNeeded"
                      value={formData.isbnNeeded}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="Yes">Yes, apply on my behalf</option>
                      <option value="No">No, I have my own ISBN</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Quantity Needed (Copies)</label>
                    <input
                      type="number"
                      name="pubQuantity"
                      value={formData.pubQuantity}
                      onChange={handleInputChange}
                      className="form-input"
                      min="10"
                      step="50"
                    />
                  </div>
                </div>
              ) : (
                /* Offset Printing Fields */
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  <div className="form-group">
                    <label className="form-label">Finished Size</label>
                    <select
                      name="pageSize"
                      value={formData.pageSize}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="A4">A4 (210 x 297 mm)</option>
                      <option value="A5">A5 (148 x 210 mm)</option>
                      <option value="A6">A6 (105 x 148 mm)</option>
                      <option value="Letter">Letter Size</option>
                      <option value="Custom Size">Custom Size</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Paper Stock Material</label>
                    <select
                      name="paperStock"
                      value={formData.paperStock}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="80gsm White Bond">80gsm Standard Bond</option>
                      <option value="120gsm Art Paper">120gsm Art Paper (Standard)</option>
                      <option value="150gsm Glossy Art">150gsm Glossy Art Paper (Premium)</option>
                      <option value="300gsm Cardboard Board">300gsm Heavy Cardboard Board</option>
                      <option value="Eco Kraft Paper">Brown Kraft Cardstock</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Ink Profile</label>
                    <select
                      name="inkColors"
                      value={formData.inkColors}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="Full Color (CMYK)">Vibrant Full Color (CMYK)</option>
                      <option value="Grayscale / B&W">Single Color / Grayscale (K)</option>
                      <option value="CMYK + Spot Gold">CMYK + Spot Pantone (Metallics)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Quantity Needed (Pcs)</label>
                    <input
                      type="number"
                      name="printQuantity"
                      value={formData.printQuantity}
                      onChange={handleInputChange}
                      className="form-input"
                      min="100"
                      step="100"
                    />
                  </div>
                </div>
              )}

              {/* Remarks Area */}
              <div className="form-group" style={{ marginBottom: '30px' }}>
                <label className="form-label">Additional Instructions / Specifications</label>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="3"
                  placeholder="Specify preferences for binding, spot laminations, packaging dividers, page layout, or delivery addresses..."
                />
              </div>

              {/* Live Calculator Panel */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'var(--bg-tertiary)',
                  borderRadius: 'var(--border-radius)',
                  padding: '20px 25px',
                  marginBottom: '30px',
                  border: '1px solid var(--border-color)',
                  flexWrap: 'wrap',
                  gap: '15px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <FaCalculator style={{ fontSize: '1.5rem', color: 'var(--cyan)' }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-primary)' }}>Interactive Estimate Simulator</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Auto-calculates based on current quantities & selections</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '1.65rem', fontWeight: '800', color: 'var(--cyan)' }}>
                    LKR {estPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-accent"
                style={{ width: '100%', padding: '15px', fontSize: '1.1rem' }}
              >
                <FaPaperPlane style={{ marginRight: '8px' }} />
                Submit Quotation Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
