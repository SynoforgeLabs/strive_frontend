import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactFormProvider } from './components/snippets/contact-form-overlay';

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
import TermsPage from './pages/js/terms';
import LoginPage from './pages/js/login';
import SignupPage from './pages/js/signup';
import TutorContactPage from './pages/js/tutor-contact';
import PrivacyPage from './pages/js/privacy';
import ContactusPage from './pages/js/contact-us';
import AccountSettingsPage from './pages/js/dashboard/tutor/ account-settings';

const App = () => {
  return (
    <ContactFormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutusPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/find-a-tutor" element={<FindtPage />} />
          <Route path="/join-us" element={<JoinusPage />} />
          <Route path="/tutor" element={<TutorPage />} />
          <Route path="/tutor/contact" element={<TutorContactPage />} />
          <Route path="/bring-a-friend-and-save" element={<BFriendPage />} />
          <Route path="/interview-preperation" element={<InterviewPage />} /> 
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/ucat" element={<UcatPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact-us" element={<ContactusPage />} />
          <Route path="/tutor/account-settings" element={<AccountSettingsPage />} />
        </Routes>
      </Router>
    </ContactFormProvider>
  );
};

export default App;
