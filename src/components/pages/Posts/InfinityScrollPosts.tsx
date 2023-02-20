import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';

import getData from './getData';

interface IPage {
	page: number;
	firstName: string;
	data: Array<{ email: string; id: number }>;
}

const InfinityScrollPosts = () => {
	const { data, isSuccess, hasNextPage, fetchNextPage, isLoading } =
		useInfiniteQuery('users', async ({ pageParam = 1 }) => getData(pageParam), {
			getNextPageParam(lastPage, allPages) {
				const nextPage = allPages.length + 1;
				return nextPage;
			},
		});
	useEffect(() => {
		let fetching = false;
		const handleScroll = async (e: Event) => {
			const target = e.target as Document;

			if (!target.scrollingElement) {
				return;
			}

			const { scrollHeight, scrollTop, clientHeight } = target.scrollingElement;
			if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
				fetching = true;
				if (hasNextPage) await fetchNextPage();
				fetching = false;
			}
		};

		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [fetchNextPage, hasNextPage]);

	if (isLoading) return <span>loading...</span>;
	if (!data) return <span>Error</span>;

	return (
		<div>
			{isSuccess &&
				data.pages.map((page: IPage) =>
					page.data.map((item) => (
						<div key={item.id} style={{ padding: '100px 10px' }}>
							{item.email}
						</div>
					))
				)}
		</div>
	);
};

export default InfinityScrollPosts;
