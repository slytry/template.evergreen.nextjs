export const CatalogSecondLevelMock = {
	breadcrumbs: [
		{ href: '/', title: 'Главная' },
		{ href: '/catalog-first', title: 'Автотовары' },
		{ href: '/fdf', title: 'Автохимия и автокосметика' },
	],
	category: {
		id: '0',
		value: 'Автохимия и автокосметика',
		link: '/catalog-first',
		subcategories: [
			{
				id: '0',
				value: 'Мовиль',
				link: '/catalog-third',
				subcategories: null,
			},
			{
				id: '1',
				value: 'Преобразователь ржавчины',
				link: '/catalog-third',
				subcategories: null,
			},
			{
				id: '2',
				value: 'Смазки автомобильные',
				link: '/catalog-third',
				subcategories: null,
			},
			{
				id: '3',
				value: 'Уход за двигателем',
				link: '/catalog-third',
				subcategories: null,
			},
			{
				id: '4',
				value: 'Уход за кузовом',
				link: '/catalog-third',
				subcategories: null,
			},
			{
				id: '5',
				value: 'Уход за салоном',
				link: '/catalog-third',
				subcategories: null,
			},
			{
				id: '6',
				value: 'Уход за стеклами и зеркалами',
				link: '/catalog-third',
				subcategories: null,
			},
			{
				id: '7',
				value: 'Уход за шинами и дисками',
				link: '/catalog-third',
				subcategories: null,
			},
		],
	},
	productTypes: [
		{
			type: 'Активная пена',
		},
		{
			type: 'Антидождь',
		},
		{
			type: 'Антизапотеватель',
		},
		{
			type: 'Автошампунь',
		},
		{
			type: 'Пасивная пена',
		},
		{
			type: 'Вишневая пена',
		},
		{
			type: 'Мыльная пена',
		},
	],
	pickerOptions: [
		{
			option: 'Сначала новые',
		},
		{
			option: 'Сначала старые',
		},
		{
			option: 'Сначала дешевле',
		},
		{
			option: 'Сначала дороже',
		},
		{
			option: 'Сначала в наличии',
		},
		{
			option: 'Сначала не в наличии',
		},
	],
};

export const CatalogThirdLevelMock = {
	breadcrumbs: [
		{ href: '/', title: 'Главная' },
		{ href: '/catalog-first', title: 'Автотовары' },
		{ href: '/catalog-second', title: 'Автохимия и автокосметика' },
		{ href: '/catalog-third', title: 'Мовиль' },
	],
	category: {
		id: '0',
		value: 'Мовиль',
		link: '/catalog-first',
		subcategories: [
			{
				id: '0',
				value: 'Категории',
				link: '/catalog-second',
				subcategories: null,
			},
			{
				id: '1',
				value: 'Категории',
				link: '/catalog-second',
				subcategories: null,
			},
			{
				id: '2',
				value: 'Категории',
				link: '/catalog-second',
				subcategories: null,
			},
			{
				id: '3',
				value: 'Категории',
				link: '/catalog-second',
				subcategories: null,
			},
			{
				id: '4',
				value: 'Категории',
				link: '/catalog-second',
				subcategories: null,
			},
			{
				id: '5',
				value: 'Категории',
				link: '/catalog-second',
				subcategories: null,
			},
			{
				id: '6',
				value: 'Категории',
				link: '/catalog-second',
				subcategories: null,
			},
			{
				id: '7',
				value: 'Категории',
				link: '/catalog-second',
				subcategories: null,
			},
		],
	},
	productTypes: [
		{
			type: 'Активная пена',
		},
		{
			type: 'Антидождь',
		},
		{
			type: 'Антизапотеватель',
		},
		{
			type: 'Автошампунь',
		},
		{
			type: 'Пасивная пена',
		},
		{
			type: 'Вишневая пена',
		},
		{
			type: 'Мыльная пена',
		},
	],
	selectOptions: [
		{
			option: 'Red',
		},
		{
			option: 'Orange',
		},
		{
			option: 'Yellow',
		},
		{
			option: 'Green',
		},
		{
			option: 'Blue',
		},
		{
			option: 'Purple',
		},
		{
			option: 'Black',
		},
	],
};
