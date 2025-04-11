import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as FindTutorcomponents from "../../components/find-tutor/findt-index"


const FindTutorPage = () => {
    return (
      <div className="find-tutor-container">
        {/* navbar */}
        <Snippets.Navbar />
        {/* hero */}
        <FindTutorcomponents.FindtHero />
        {/* filters */}
        <FindTutorcomponents.FindtFilters />
        {/* tutors */}
        <FindTutorcomponents.FindtTutors />
      </div>
    );
  };
  
  export default FindTutorPage;  