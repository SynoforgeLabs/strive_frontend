import React from "react"
import * as Snippets from "../../../../components/dashboards/tutor/snippets/snippets-index"
import TutorDocuments from "../../../../components/dashboards/tutor/documents/documents"
import "../../../css/dashboards/tutor/documents.css"


const TutorDocumentsPage = () => {
    return (
      <div className="tutor-documents-page-main d-flex">
        <div className="tutor-documents-nav-bar w-auto">
          {/* tutor navbar */}
          <Snippets.TutorNavbar />
        </div>
        <div className="tutor-documents-content w-100">
          {/* tutor documents */}
          <TutorDocuments />
        </div>
        
      </div>
    );
  };
  
  export default TutorDocumentsPage;