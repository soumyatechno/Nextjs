import React from 'react';
import { useRouter } from 'next/router';
const Review = () => {
	const { query } = useRouter();
	const { Id, reviewId } = query;
	return (
		<div>
			Review {reviewId} for product {Id}
		</div>
	);
};

export default Review;
