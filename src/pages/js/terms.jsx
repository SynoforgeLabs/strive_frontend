import React from 'react';
import { Navbar, TermsContent } from '../../components/snippets/snippets-index';
import * as Snippets from '../../components/snippets/snippets-index';
import '../css/terms.css';

const TermsPage = () => {
  return (
    <div className="terms-page">
      <Navbar />
      <TermsContent />
      <Snippets.Footer />
    </div>
  );
};

export default TermsPage; 