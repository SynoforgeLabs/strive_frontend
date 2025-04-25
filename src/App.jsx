import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/js/home';
import AboutusPage from './pages/js/aboutus';
import FaqPage from './pages/js/faq';
import ReviewsPage from './pages/js/reviews';
import FindtPage from './pages/js/find-tutor';
import JoinusPage from './pages/js/joinus';
import TutorPage from './pages/js/tutor';
import BFriendPage from './pages/js/b-friend';  
import InterviewPage from './pages/js/interview';  
import PricingPage from './pages/js/pricing';  
import UcatPage from './pages/js/ucat';  

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/find-a-tutor" element={<FindtPage />} />
        <Route path="/join-us" element={<JoinusPage />} />
        <Route path="/tutor" element={<TutorPage />} />
        <Route path="/bring-a-friend-and-save" element={<BFriendPage />} />
        <Route path="/interview-preperation" element={<InterviewPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/ucat" element={<UcatPage />} />

        {/* Add more routes here, like <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>

  );
};

export default App;
