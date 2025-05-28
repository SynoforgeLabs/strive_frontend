import React, { useState, useEffect } from "react";
import "../../css/reviews/reviews-list.css";
import reviewService from "../../services/reviewService";

// Review card component
const ReviewCard = ({ name, date, rating, reviewText, platform }) => {
  // Generate star ratings (filled and unfilled)
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star empty"}>
          ★
        </span>
      );
    }
    return stars;
  };

  // Get emoji for avatar based on name
  const getEmoji = (name) => {
    switch(name) {
      case "Spider Man":
        return "👨";
      case "Iron Man":
        return "👨‍🦱";
      case "Hulk":
        return "👨‍🦰";
      case "Wonder Woman":
        return "👩";
      case "Hawkeye":
        return "👨‍🦲";
      case "Black Panther":
        return "👨‍🦲";
      default:
        return "👤";
    }
  };

  return (
    <div className="review-card">
      <div className="reviewer-info">
        <div className="reviewer-avatar" data-name={name}>
          <div className="avatar-placeholder">
            {getEmoji(name)}
          </div>
        </div>
        <div className="reviewer-name-date">
          <h3 className="reviewer-name">{name}</h3>
          <p className="review-date">{date}</p>
        </div>
      </div>
      
      <div className="review-rating">
        {renderStars(rating)}
      </div>
      
      <div className="review-text">
        <p>{reviewText}</p>
      </div>
      
      <div className="review-platform">
        {platform === 'trustpilot' ? (
          <img src="/Images/review sites/trustpilot.png" alt="Trustpilot" className="platform-icon" />
        ) : (
          <img src="/Images/review sites/google.png" alt="Google" className="platform-icon" />
        )}
      </div>
    </div>
  );
};

function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await reviewService.getReviews();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('Failed to load reviews');
        // Fallback to sample data if API fails
        setReviews([
          {
            id: 1,
            name: "Spider Man",
            date: "2025/4/20",
            rating: 3,
            reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            platform: "trustpilot"
          },
          {
            id: 2,
            name: "Iron Man",
            date: "2025/4/20",
            rating: 4,
            reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            platform: "google"
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading reviews...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="alert alert-warning" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex reviews-list-container">
      <div className="reviews-grid">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            date={review.date}
            rating={review.rating}
            reviewText={review.reviewText}
            platform={review.platform}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewsList; 