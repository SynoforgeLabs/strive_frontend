import React from "react"
import * as Snippets from "../../../../components/dashboards/tutor/snippets/snippets-index"
import PaymentDetails from "../../../../components/dashboards/tutor/payment-details/payment-details"
import "../../../css/dashboards/tutor/payment-details.css"


const TutorPaymentDetailsPage = () => {
    return (
      <div className="tutor-payment-details-page-main d-flex">
        <div className="tutor-payment-details-nav-bar w-auto">
          {/* tutor navbar */}
          <Snippets.TutorNavbar />
        </div>
        <div className="tutor-payment-details-content w-100">
          {/* tutor payment details */}
          <PaymentDetails />
        </div>
        
      </div>
    );
  };
  
  export default TutorPaymentDetailsPage;