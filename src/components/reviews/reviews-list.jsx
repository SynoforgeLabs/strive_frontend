import React from "react";
import "../../css/reviews/reviews-list.css";

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
  // Sample review data
  const reviews = [
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
    {
      id: 3,
      name: "Hulk",
      date: "2025/4/20",
      rating: 5,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "trustpilot"
    },
    {
      id: 4,
      name: "Wonder Woman",
      date: "2025/4/20",
      rating: 5,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "trustpilot"
    },
    {
      id: 5,
      name: "Black Panther",
      date: "2025/4/20",
      rating: 2,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "trustpilot"
    },
    {
      id: 6,
      name: "Hawkeye",
      date: "2025/4/20",
      rating: 4,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "google"
    },
    {
      id: 7,
      name: "Iron Man",
      date: "2025/4/20",
      rating: 5,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "google"
    },
    {
      id: 8,
      name: "Spider Man",
      date: "2025/4/20",
      rating: 2,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "trustpilot"
    },
    {
      id: 9,
      name: "Hulk", 
      date: "2025/4/20",
      rating: 5,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "trustpilot"
    },
    {
      id: 10,
      name: "Black Panther",
      date: "2025/4/20",
      rating: 3,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "trustpilot"
    },
    {
      id: 11,
      name: "Spider Man",
      date: "2025/4/20",
      rating: 2,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "trustpilot"
    },
    {
      id: 12,
      name: "Iron Man",
      date: "2025/4/20",
      rating: 5,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "google"
    },
    {
      id: 13,
      name: "Hawkeye",
      date: "2025/4/20",
      rating: 4,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "google"
    },
    {
      id: 14,
      name: "Hulk",
      date: "2025/4/20",
      rating: 5,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "trustpilot"
    },
    {
      id: 15,
      name: "Wonder Woman",
      date: "2025/4/20",
      rating: 5,
      reviewText: "Lorem ipsum dolor  mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      platform: "trustpilot"
    }
  ];

  return (
    <div className="reviews-list-container">
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