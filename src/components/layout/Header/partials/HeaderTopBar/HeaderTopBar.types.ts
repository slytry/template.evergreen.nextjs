import { Dispatch } from 'react';

import { menuItem } from 'lib/models/header/Header.types';

export interface HeaderTopBarProps {
	menuItems: menuItem[];
	className?: string;
	location: string;
	pageType: 'wholesale' | 'retail';
	setPageType: Dispatch<'wholesale' | 'retail'>;
}
