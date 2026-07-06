import React, { useState } from 'react';
import { FaWhatsapp, FaFacebook, FaPhoneAlt, FaPaperPlane, FaTimes } from 'react-icons/fa';

const FloatingActions = () => {
  const [showChat, setShowChat] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleSendWhatsApp = () => {
    const defaultText = encodeURIComponent(
      userMsg || "Hi, I am interested in your printing and publishing services."
    );
    window.open(`https://wa.me/94775255563?text=${defaultText}`, '_blank');
    setShowChat(false);
    setUserMsg('');
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 999 }}>
      
      {/* WhatsApp Window Popup */}
      {showChat && (
        <div className="wa-chat-window">
          {/* Header */}
          <div className="wa-header">
            <div className="wa-avatar">OP</div>
            <div className="wa-agent-info" style={{ textAlign: 'left' }}>
              <h4>Oxford Support</h4>
              <span>Online • Typical reply: Instant</span>
            </div>
            <button
              onClick={() => setShowChat(false)}
              style={{
                marginLeft: 'auto',
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
              title="Close Chat"
            >
              <FaTimes />
            </button>
          </div>

          {/* Body with chat bubbles */}
          <div className="wa-body">
            <div className="wa-msg">
              Hello! 👋 Thank you for reaching out to Oxford Printers & Publishers Kurunegala.
            </div>
            <div className="wa-msg">
              How can we assist you with your book publishing, diaries, offset prints, or customized cards today?
            </div>
          </div>

          {/* Input Footer */}
          <div className="wa-footer" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Type message here..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              style={{
                flexGrow: 1,
                border: '1px solid var(--border-color)',
                borderRadius: '18px',
                padding: '8px 14px',
                fontSize: '0.85rem',
                outline: 'none'
              }}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSendWhatsApp(); }}
            />
            <button
              onClick={handleSendWhatsApp}
              style={{
                backgroundColor: '#128C7E',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
              title="Send to WhatsApp"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {/* Floating Buttons Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
        
        {/* FaceBook Button */}
        <a
          href="https://facebook.com/oxfordprintersppl"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            backgroundColor: '#1877F2',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.25rem',
            boxShadow: 'var(--shadow-md)',
            transition: 'all var(--transition-normal)'
          }}
          className="floating-action-btn"
          title="Visit Facebook Page"
        >
          <FaFacebook />
        </a>

        {/* Direct Call Button */}
        <a
          href="tel:+94372297974"
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            backgroundColor: 'var(--royal-blue)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.25rem',
            boxShadow: 'var(--shadow-md)',
            transition: 'all var(--transition-normal)'
          }}
          className="floating-action-btn"
          title="Call Office"
        >
          <FaPhoneAlt />
        </a>

        {/* Interactive WhatsApp Button */}
        <div
          onClick={() => setShowChat(!showChat)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.85rem',
            boxShadow: 'var(--shadow-lg)',
            cursor: 'pointer',
            transition: 'all var(--transition-normal)'
          }}
          className="floating-action-btn wa-primary-btn"
          title="Open WhatsApp Chat"
        >
          <FaWhatsapp />
        </div>

      </div>

      <style>{`
        .floating-action-btn:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: var(--shadow-lg);
        }
        .wa-primary-btn:hover {
          background-color: #20BA56 !important;
        }
      `}</style>

    </div>
  );
};

export default FloatingActions;
