import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as Contactuscomponents from "../../components/contact-us/contactus-index"

const JoinusPage = () => {
  return (
    <div className="joinus-container">
      <Snippets.Navbar />
      <Contactuscomponents.ContactusHero />
      <Contactuscomponents.ContactusContent />
      <Contactuscomponents.ContactusFaq />
      <Snippets.Footer />
    </div>
  );
};

export default JoinusPage; 