import React from 'react';
import { useRouter } from 'next/router';

const Docs = () => {
	const { query } = useRouter();
	const { params = [] } = query;

	if (params.length === 1) return <div>Vieing docs for {params[0]}</div>;
	if (params.length >= 1)
		return (
			<div>
				Vieing docs for {params[0]} and {params[1]}
			</div>
		);
	if (params.length >= 2)
		return (
			<div>
				Vieing docs for {params[0]} and {params[1]} and {params[2]}
			</div>
		);
	return <div>Docs for Home page</div>;
};

export default Docs;
