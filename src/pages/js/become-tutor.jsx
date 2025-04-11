import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as TutorComponents from "../../components/become-tutor/become-tutor-index"

const BecomeTutorPage = () => {
  return (
    <div className="become-tutor-container">
      {/* navbar */}
      <Snippets.Navbar />
      {/* hero */}
      <TutorComponents.Hero />
      {/* requirements */}
      <TutorComponents.Requirements />
      {/* desirable characteristics */}
      <TutorComponents.Characteristics />
      {/* perks */}
      <TutorComponents.Perks />
      {/* call to action */}
      <TutorComponents.CallToAction />
      {/* footer */}
    </div>
  );
};

export default BecomeTutorPage; 