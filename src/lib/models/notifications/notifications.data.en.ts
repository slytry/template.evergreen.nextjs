export type TNotificationsData = typeof notificationsDataEn;

export const notificationsDataEn = {
	total: 4,
	notifications: [
		{
			type: 'trackedProducts',
			data: '15.03.2022',
			heading: 'The items you are tracking have appeared in stock',
			products: [
				{ link: '/lk/profile', img: 'public/images/cards/napkin 2.png' },
				{ link: '/lk/profile', img: 'public/images/cards/napkin 2.png' },
				{ link: '/lk/profile', img: 'public/images/cards/napkin 2.png' },
			],
		},
		{
			type: 'alert',
			data: '15.03.2022',
			heading: 'Documents must be provided!',
			text: 'We will check all the details, determine the amount of the credit limit and draw up a contract for placing an order.',
		},
		{
			type: 'application',
			data: '20.03.2022',
			heading: 'Your refund request from 03/11/2022 has been approved',
			text: 'The refund takes place after 5 banking days.',
		},
		{
			type: 'orderStatus',
			data: '15.03.2022',
			heading: 'Your order from 05.03.2022 has been delivered',
			text: 'The driver will contact you an hour before arrival.',
		},
	],
};
