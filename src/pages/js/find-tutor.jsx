import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as Findtcomponents from "../../components/find-tutor/findt-index"


const Findtpage = () => {
    return (
      <div className="faq-container">

        <Snippets.Navbar />
        <Findtcomponents.FindtHero />
        <Findtcomponents.FindtFilters />
        <Findtcomponents.FindtTutors />

      </div>
    );
  };
  
  export default Findtpage;