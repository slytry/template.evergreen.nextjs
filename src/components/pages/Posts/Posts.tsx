import { useState } from 'react';

import InfiniteScrollPosts from './InfinityScrollPosts';

import cx from './index.module.scss';

const Posts = () => {
	const [listMode, setListMode] = useState<'infinite' | 'pagination'>(
		'infinite'
	);
	return (
		<>
			<div>
				<button
					className={cx('navButton')}
					onClick={() => {
						setListMode('infinite');
					}}
				>
					Endless Scroll
				</button>
				<button
					className={cx('navButton')}
					onClick={() => {
						setListMode('pagination');
					}}
				>
					Pagination
				</button>
			</div>
			{listMode === 'infinite' ? (
				<InfiniteScrollPosts />
			) : (
				<div>Pagination</div>
			)}
		</>
	);
};

export default Posts;
