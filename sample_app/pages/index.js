import React from 'react';
import Link from 'next/link';
const Home = () => {
	return (
		<div>
			<h3>Home Page</h3>
			<ol>
				<Link href="/blog">
					<li>blog</li>
				</Link>
				<Link href="/product/">
					<li>prodcut</li>
				</Link>
			</ol>
		</div>
	);
};

export default Home;
