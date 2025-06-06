import React, { useState, useEffect, createContext, useContext } from 'react';
import '../../css/snippets/contact-form-overlay.css';

// Create a context to expose the overlay functionality globally
const ContactFormContext = createContext({
  openContactForm: () => {},
  closeContactForm: () => {},
});

// Custom hook to access the contact form from anywhere in the app
export const useContactForm = () => useContext(ContactFormContext);

export const ContactFormProvider = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  
  useEffect(() => {
    // Show overlay after 5 seconds - keep existing functionality
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const openContactForm = () => {
    setShowOverlay(true);
  };
  
  const closeContactForm = () => {
    setShowOverlay(false);
  };

  return (
    <ContactFormContext.Provider value={{ openContactForm, closeContactForm }}>
      {children}
      {showOverlay && <ContactFormOverlay onClose={closeContactForm} />}
    </ContactFormContext.Provider>
  );
};

const ContactFormOverlay = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <div className="snippet-contact-us-overlay">
      <div className="snippet-contact-us-backdrop" onClick={onClose}></div>
      <div className="snippet-contact-us-modal">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-none d-md-block snippet-contact-us-image-container">
              <div className="snippet-contact-us-heading">
                <h1>Form overlay heading</h1>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 snippet-contact-us-form-container">
              <button 
                className="snippet-contact-us-close-btn" 
                onClick={onClose}
                aria-label="Close"
              >
                &times;
              </button>
              
              <h2 className="snippet-contact-us-form-title d-md-none">Form overlay heading</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="fullName" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="John.Doe@gmail.com" 
                    required 
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Telephone number</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    id="phone" 
                    placeholder="+61 123456789" 
                    required 
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="contactTime" className="form-label">What time of day would you like us to contact you?</label>
                  <input 
                    type="text" 
                    className="form-control snippet-contact-us-time-input" 
                    id="contactTime" 
                    placeholder="+61 123456789" 
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="curriculum" className="form-label">What curriculum are you looking for?</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="curriculum" 
                    placeholder="VIC" 
                  />
                </div>
                
                <div className="d-grid">
                  <button type="submit" className="btn snippet-contact-us-submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// For backwards compatibility with existing code
const ContactFormOverlayStandalone = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  
  useEffect(() => {
    // Show overlay after 5 seconds
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowOverlay(false);
  };

  if (!showOverlay) return null;
  
  return <ContactFormOverlay onClose={handleClose} />;
};

export default ContactFormOverlayStandalone; 