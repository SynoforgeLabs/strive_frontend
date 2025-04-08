import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as Reviewscomponents from "../../components/reviews/reviews-index"

const ReviewsPage = () => {
  return (
    <div className="reviews-container">
      <Snippets.Navbar />
      
      <Reviewscomponents.ReviewsHeader />
      
      <Reviewscomponents.ReviewsList />
    </div>
  );
};

export default ReviewsPage; 