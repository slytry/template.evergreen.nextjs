import { useState } from 'react';

import Posts from '@/pages/Posts/Posts';

const FetchingData = () => {
	const [listMode, setListMode] = useState<'infinity' | 'pagination'>(
		'infinity'
	);

	return (
		<div>
			<h1>Fetching Data</h1>
			<Posts />
		</div>
	);
};

export default FetchingData;
