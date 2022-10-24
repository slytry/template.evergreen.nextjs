import { ProductCardType } from 'lib/models/productCard/ProductCard.types';

export const NEW_PRODUCTS: ProductCardType[] = [
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
		title: 'Перфоратор аккумуляторный Интерскол ПА-24/18В, 18 В, 2 x 2 Ач АПИ, ЗУ',
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
];
