import React from 'react';
import { Navbar, PrivacyContent } from '../../components/snippets/snippets-index';
import * as Snippets from '../../components/snippets/snippets-index';

const PrivacyPage = () => {
  return (
    <div className="privacy-page">
      <Navbar />
      <PrivacyContent />
      <Snippets.Footer />
    </div>
  );
};

export default PrivacyPage;
