export type ProfileDataType = typeof ProfileDataEn;

export const ProfileDataEn = {
	breadcrumbs: [
		{ href: '/', title: 'Home' },
		{ href: '/profile', title: 'Profile' },
	],
	title: 'Profile',
	subscription: [
		{ value: 'Subscribe to news and promotions', isActive: true },
		{ value: 'Individual special offers', isActive: false },
		{ value: 'New arrivals', isActive: false },
	],
};
