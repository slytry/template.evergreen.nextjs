import { ProductCardType } from 'lib/models/productCard/ProductCard.types';

export const TOP_SALES: ProductCardType[] = [
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/towel.png',
		type: 'accessories',
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/spray-pink.png',
		type: 'accessories',
		alerts: [{ text: 'Акции', type: 'orange' }],
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/spray-pink.png',
		type: 'chemistry&cosmetics',
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/perforator.png',
		type: 'chemistry&cosmetics',
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/towel.png',
		type: 'chemistry&cosmetics',
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
];

export const filters = [
	{
		value: 'chemistry&cosmetics',
		text: 'Автохимия и автокосметика',
	},
	{
		value: 'accessories',
		text: 'Аксессуары для автомобиля',
	},
];
