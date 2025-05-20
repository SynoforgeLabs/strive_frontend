import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as Aboutuscomponents from "../../components/aboutus/aboutus-index"


const AboutusPage = () => {
    return (
      <div className="aboutus-container">
        <Snippets.Navbar />

        <Aboutuscomponents.Hero />

        <Aboutuscomponents.Msg />

        <Aboutuscomponents.Points />

        <Aboutuscomponents.Aboutend />

        <Snippets.Footer />
        
      </div>
    );
  };
  
  export default AboutusPage;