import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as Interviewcomponents from "../../components/interview/interview-index"


const InterviewPage = () => {
    return (
      <div className="interview-container">
        {/* navbar */}
        <Snippets.Navbar />
        {/* hero */}
        <Interviewcomponents.InterviewHero />
        {/* price grid */}
        <Interviewcomponents.InterviewPriceGrid />
        {/*workshopdays*/}
        <Interviewcomponents.InterviewWdays />
        {/*hdiw*/}
        <Interviewcomponents.InterviewHdiw />
      </div>
    );
  };
  
  export default InterviewPage;