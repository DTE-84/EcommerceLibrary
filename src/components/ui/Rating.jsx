import React from 'react';

const Rating = ({ rating }) => {
  // Use 'Number()' to convert strings, and '|| 0' to handle undefined/null
  // Math.max/min ensures the number stays between 0 and 5
  const validRating = Math.max(0, Math.min(5, Math.floor(Number(rating || 0))));

  return (
    <div className="book__ratings">
      {/* This will now always be a valid integer between 0 and 5 */}
      {Array(validRating).fill(0).map((_, index) => (
        <span key={`full-${index}`}>★</span>
      ))}
      
      {Array(5 - validRating).fill(0).map((_, index) => (
        <span key={`empty-${index}`}>☆</span>
      ))}
    </div>
  );
};

export default Rating;