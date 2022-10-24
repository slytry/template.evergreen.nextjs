import { ProductCardType } from 'lib/models/productCard/ProductCard.types';

export const promo: ProductCardType[] = [
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/smell1.png',
		type: 'material',
		alerts: [{ text: 'Акция', type: 'orange' }],
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный Интерскол ПА-24/18В, 18 В, 2 x 2 Ач АПИ, ЗУ',
		src: '/images/cards/smell2.png',
		type: 'material',
		alerts: [{ text: 'Акция', type: 'orange' }],
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
	{
		price: '2 500',
		title: 'Перфоратор аккумуляторный',
		src: '/images/cards/smell3.png',
		type: 'garden',
		alerts: [{ text: 'Акция', type: 'orange' }],
		info: {
			rating: '5.0',
			article: '579.2.2.70',
		},
	},
];
