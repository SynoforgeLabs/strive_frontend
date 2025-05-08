import React from 'react';
import { Navbar, TermsContent } from '../../components/snippets/snippets-index';
import '../css/terms.css';

const TermsPage = () => {
  return (
    <div className="terms-page">
      <Navbar />
      <TermsContent />
    </div>
  );
};

export default TermsPage; 