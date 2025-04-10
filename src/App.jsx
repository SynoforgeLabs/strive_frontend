import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/js/home';
import AboutusPage from './pages/js/aboutus';
import Faqpage from './pages/js/faq';
import ReviewsPage from './pages/js/reviews';
import UCATPage from './pages/js/ucat';
import BecomeTutorPage from './pages/js/become-tutor';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
        <Route path="/faq" element={<Faqpage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/ucat" element={<UCATPage />} />
        <Route path="/become-tutor" element={<BecomeTutorPage />} />
        {/* Add more routes here, like <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
