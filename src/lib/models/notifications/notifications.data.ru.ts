export const notificationsDataRu = {
	total: 4,
	notifications: [
		{
			type: 'trackedPoducts',
			data: '15.03.2022',
			heading: 'Товары, которые вы отслеживаете, появились в наличии',
			products: [
				{ link: '/lk/profile', img: 'public/images/cards/napkin2.png' },
				{ link: '/lk/profile', img: 'public/images/cards/napkin2.png' },
				{ link: '/lk/profile', img: 'public/images/cards/napkin2.png' },
			],
		},
		{
			type: 'alert',
			data: '15.03.2022',
			heading: 'Необходимо предоставить документы!',
			text: 'Мы проверим все реквизиты, определим сумму кредитного лимита и составим договор для оформления заказа.',
		},
		{
			type: 'application',
			data: '20.03.2022',
			heading: 'Ваша заявка на возврат от 11.03.2022 одобрена',
			text: 'Возврат средств происходит через 5 банковских дней.',
		},
		{
			type: 'orderStatus',
			data: '15.03.2022',
			heading: 'Ваш заказ от 05.03.2022 передан в доставку',
			text: 'Водитель с вами свяжется за час до приезда.',
		},
	],
};
