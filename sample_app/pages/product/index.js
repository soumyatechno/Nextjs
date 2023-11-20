import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Product = () => {
	const router = useRouter();

	const handleOrder = () => {
		console.log('Order placed');
		router.push('/product/1');
	};
	return (
		<div>
			<h3>Product</h3>
			<ol>
				<Link href="/product/1">
					<li>Product 1</li>
				</Link>
				<Link href="/product/2">
					<li>Product 2</li>
				</Link>
				<Link href="/product/3">
					<li>Product 3</li>
				</Link>
				<Link href="/product/100" replace>
					<li>Product 100</li>
				</Link>
			</ol>
			<Link href="/">
				<p>Back</p>
			</Link>

			<button onClick={handleOrder}>Place Order</button>
		</div>
	);
};

export default Product;
