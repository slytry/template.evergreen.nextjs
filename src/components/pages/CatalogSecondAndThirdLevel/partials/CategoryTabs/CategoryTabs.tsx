import { ReactElement } from 'react';
import { Item } from 'react-stately';

import { Tabs } from '@/base/Tabs';

import { getArrRange } from './CategoryTabs.utils';

interface Itabs {
	id: string;
	value: string;
	link: string;
	subcategories: string | null;
}

interface CategoryTabsProps {
	tabs: Itabs[];
}

const CategoryTabs = ({ tabs }: CategoryTabsProps): ReactElement => {
	const tabRange = getArrRange<Itabs>(tabs, 4, 1);
	return (
		<Tabs>
			{tabRange.map((tab) => (
				<Item key={tab.id} title={tab.value}>
					{tab.value}
				</Item>
			))}
		</Tabs>
	);
};

export { CategoryTabs };
