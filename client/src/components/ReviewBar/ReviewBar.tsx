// Need to round for decimal point stars and have a hover which shows actual number
import './ReviewBar.css';

interface ReviewBarProps {
  stars?: number;
  reviews?: number;
}

const ReviewBar = ({ stars = 0, reviews = 0 }: ReviewBarProps) => {
  return <div className="review-container">{[stars, reviews]} </div>;
};

export default ReviewBar;
