import React from "react";
import "../../css/reviews/reviews-header.css";

function ReviewsHeader() {
  return (
    <div className="reviews-header-container">
      <h1 className="reviews-heading">Reviews Heading</h1>
      <h2 className="reviews-slogan">Reviews slogan</h2>
      <p className="reviews-content">Reviews content</p>
      
      <div className="review-platforms">
        <div className="trustpilot-logo">
          <img src="/Images/review sites/trustpilot.png" alt="Trustpilot" />
        </div>
        <div className="google-logo">
          <img src="/Images/review sites/google.png" alt="Google Reviews" />
        </div>
      </div>
    </div>
  );
}

export default ReviewsHeader; 