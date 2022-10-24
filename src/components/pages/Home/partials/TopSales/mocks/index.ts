import { FilterType } from 'components/shared/Filters/Filters.types';
import { ProductCardType } from 'lib/models/productCard/ProductCard.types';

export const TOP_SALES: ProductCardType[] = [
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/perforator.png',
		type: 'material',
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/perforator.png',
		type: 'material',
		alerts: [{ text: 'Новинка', type: 'green' }],
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/perforator.png',
		type: 'garden',
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/perforator.png',
		type: 'garden',
		alerts: [{ text: 'Акции', type: 'orange' }],
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/perforator.png',
		type: 'instruments',
		alerts: [
			{ text: 'Новинка', type: 'green' },
			{ text: 'Акции', type: 'orange' },
		],
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/perforator.png',
		type: 'instruments',
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/perforator.png',
		type: 'instruments',
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/perforator.png',
		type: 'instruments',
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
];

export const FILTERS: FilterType[] = [
	{
		value: 'material',
		text: 'Лакокрасочные материалы',
	},
	{
		value: 'instruments',
		text: 'Инструменты',
	},
	{
		value: 'garden',
		text: 'Сад и огород',
	},
];
