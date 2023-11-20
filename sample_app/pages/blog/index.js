import React from 'react';
import Link from 'next/link';
const Blog = () => {
	return (
		<div>
			<h2>Blog Page</h2>
			<Link href="/">
				<p>Back</p>
			</Link>
		</div>
	);
};

export default Blog;
