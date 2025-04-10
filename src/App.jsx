import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/js/home';
import AboutusPage from './pages/js/aboutus';
import Faqpage from './pages/js/faq';
import ReviewsPage from './pages/js/reviews';
import Findtpage from './pages/js/find-tutor';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
        <Route path="/faq" element={<Faqpage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/find-a-tutor" element={<Findtpage />} />
        {/* Add more routes here, like <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
