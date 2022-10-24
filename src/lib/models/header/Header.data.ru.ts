import { IHeader } from './Header.types';

export const HeaderDataRu: IHeader = {
	menu: [
		{
			slug: '0',
			content: 'Доставка',
		},
		{
			slug: '1',
			content: 'Новости',
		},
		{
			slug: '2',
			content: 'Возврат',
		},
		{
			slug: '3',
			content: 'Контакты',
		},
		{
			slug: '4',
			content: 'Обратная связь',
		},
	],
	productSections: [
		{
			slug: '0',
			content: 'Акции',
			icon: '/icons/header/fire.svg',
		},
		{
			slug: '1',
			content: 'Популярное',
			icon: '/icons/header/star.svg',
		},
		{
			slug: '2',
			content: 'Сезонные товары',
			icon: '/icons/common/calendar.svg',
		},
		{
			slug: '3',
			content: 'Новинки',
			icon: '/icons/header/bookmark-add.svg',
		},
		{
			slug: '4',
			content: 'Топ продаж',
			icon: '/icons/header/crown.svg',
		},
		{
			slug: '5',
			content: 'Лучшие цены',
			icon: '/icons/header/price-ticket.svg',
		},
		{
			slug: '6',
			content: 'Рекомендованное',
			icon: '/icons/header/thumbs-up.svg',
		},
	],
	location: 'Москва',
};
