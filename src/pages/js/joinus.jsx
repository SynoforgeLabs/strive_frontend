import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as Joinuscomponents from "../../components/joinus/joinus-index"

const JoinusPage = () => {
  return (
    <div className="joinus-container">
      <Snippets.Navbar />
      
      <Joinuscomponents.JoinusHero />
      <Joinuscomponents.JoinusQualities />
      <Joinuscomponents.JoinusPoints /> 
    </div>
  );
};

export default JoinusPage; 