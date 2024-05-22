// Need to round for decimal point stars and have a hover which shows actual number
import { ReviewContainer } from './style';

interface ReviewBarProps {
  stars?: number;
  reviews?: number;
}

const ReviewBar = ({ stars = 0, reviews = 0 }: ReviewBarProps) => {
  return <ReviewContainer>{[stars, reviews]} </ReviewContainer>;
};

export default ReviewBar;
