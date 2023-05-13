import React from "react";

const Rating = ({ rating }: { rating: number }):JSX.Element => {
    const maxRating = 5;
    const fullStar = "★";
    const emptyStar = "☆";
    const fullStars = Math.round(rating);
    const emptyStars = maxRating - fullStars;

    return (
        <>
            {[...Array(fullStars)].map((_, i) => (
                <span key={`full-${i}`}>{fullStar}</span>
            ))}
            {[...Array(emptyStars)].map((_, i) => (
                <span key={`empty-${i}`}>{emptyStar}</span>
            ))}
        </>
    );
};

export default Rating;
