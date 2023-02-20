import { useState } from 'react';

import InfinityScrollPosts from './InfinityScrollPosts';

import cx from './index.module.scss';

const Posts = () => {
	const [listMode, setListMode] = useState<'infinity' | 'pagination'>(
		'infinity'
	);
	return (
		<>
			<div>
				<button
					className={cx('navButton')}
					onClick={() => {
						setListMode('infinity');
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
			{listMode === 'infinity' ? (
				<InfinityScrollPosts />
			) : (
				<div>Pagination</div>
			)}
		</>
	);
};

export default Posts;
