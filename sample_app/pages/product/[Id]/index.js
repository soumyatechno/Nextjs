import React from 'react';
import { useRouter } from 'next/router';

const Product = () => {
	const { query } = useRouter();
	const { Id } = query;
	return <div>Details of product {Id}</div>;
};

export default Product;
