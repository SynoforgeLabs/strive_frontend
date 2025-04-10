import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as UCATComponents from "../../components/ucat/ucat-index"

const UCATPage = () => {
  return (
    <div className="ucat-container">
      {/* navbar */}
      <Snippets.Navbar />
      {/* hero */}
      <UCATComponents.Hero />
      {/* proven results */}
      <UCATComponents.ProvenResults />
      {/* exam tested strategies */}
      <UCATComponents.ExamStrategies />
      {/* interview success */}
      <UCATComponents.InterviewSuccess />
      {/* elite tutors */}
      <UCATComponents.EliteTutors />
      {/* rigorous tutor selection */}
      <UCATComponents.TutorSelection />
      {/* online small group sessions */}
      <UCATComponents.SmallGroupSessions />
      {/* why choose us */}
      <UCATComponents.WhyChooseUs />
      {/* sign up process */}
      <UCATComponents.SignUpProcess />
      {/* footer */}
      {/* <Snippets.Footer /> */}
    </div>
  );
};

export default UCATPage; 