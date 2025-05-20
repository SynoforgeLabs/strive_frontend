import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as Tutorcomponents from "../../components/tutor/tutor-index"


const Tutorpage = () => {
    return (
      <div className="tutor-container">

        <Snippets.Navbar />
        <Tutorcomponents.TutorTop />
        <Tutorcomponents.TutorInfo />
        <Snippets.Footer />
      </div>
    );
  };
  
  export default Tutorpage;