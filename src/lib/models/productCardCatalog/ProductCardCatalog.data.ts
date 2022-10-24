export interface CardType {
	title: string;
	rating: string;
	inFavorite: boolean;
	inСomparison: boolean;
	productCode: string;
	images: string;

	comments: {
		total: string;
	};

	purchase: {
		price: string;
		minimumPurchase: string;
		quantityInPackage: string;
	};
	attributes: {
		label: string;
		values: { label: string; value: string }[];
	}[];
}

export interface ProductCardCatalogDataType {
	data: CardType;
	getCardsArray(arrayLength: number): CardType[];
}

export const ProductCardCatalogMock: ProductCardCatalogDataType = {
	data: {
		title: 'Перфоратор аккумуляторный Интерскол ПА-24/18В, 18 В, 2 x 2 Ач АПИ, ЗУ',
		rating: '5.0',
		inFavorite: true,
		inСomparison: false,
		productCode: '579.2.2.70',
		images: '/images/cards/paint.png',

		comments: {
			total: '8',
		},

		purchase: {
			price: '990',
			minimumPurchase: '12',
			quantityInPackage: '12',
		},

		attributes: [
			{
				label: 'Объем',
				values: [
					{ label: '1 л', value: '1 л' },
					{ label: '2 л', value: '2 л' },
					{ label: '6 л', value: '6 л' },
				],
			},
			{
				label: 'Цвет',
				values: [
					{ label: '#FFFFFF', value: '#FFFFFF' },
					{ label: '#56BE92', value: '#56BE92' },
				],
			},
			{
				label: 'База',
				values: [
					{ label: 'A', value: 'A' },
					{ label: 'B', value: 'B' },
					{ label: 'C', value: 'C' },
				],
			},
		],
	},
	getCardsArray(arrayLength) {
		return new Array(arrayLength).fill(this.data);
	},
};
