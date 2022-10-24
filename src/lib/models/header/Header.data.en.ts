import { IHeader } from './Header.types';

export const HeaderDataEn: IHeader = {
	menu: [
		{
			slug: '0',
			content: 'Delivery',
		},
		{
			slug: '1',
			content: 'News',
		},
		{
			slug: '2',
			content: 'Refund',
		},
		{
			slug: '3',
			content: 'Contacts',
		},
		{
			slug: '4',
			content: 'Feedback',
		},
	],
	productSections: [
		{
			slug: '0',
			content: 'Stocks',
			icon: '/icons/header/fire.svg',
		},
		{
			slug: '1',
			content: 'Popular',
			icon: '/icons/header/star.svg',
		},
		{
			slug: '2',
			content: 'Seasonal products',
			icon: '/icons/common/calendar.svg',
		},
		{
			slug: '3',
			content: 'New items',
			icon: '/icons/header/bookmark-add.svg',
		},
		{
			slug: '4',
			content: 'Best selling',
			icon: '/icons/header/crown.svg',
		},
		{
			slug: '5',
			content: 'Best prices',
			icon: '/icons/header/price-ticket.svg',
		},
		{
			slug: '6',
			content: 'Recommended',
			icon: '/icons/header/thumbs-up.svg',
		},
	],
	location: 'Moscow',
};
