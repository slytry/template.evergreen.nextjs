import { PopularBrandsDataType } from '@/pages/Home/partials/PopularBrands/PopularBrandsList/PopularBrandsList.types';
import { PopularCategoryItemType } from '@/pages/Home/partials/PopularCategories/PopularCategoryItem/PopularCategoryItem.types';
import { EventCardType } from 'components/shared/EventList/EventCard/EventCard.types';
import { SlideProps } from 'components/shared/Slider/Slide/Slide.types';

export const FIRST_SLIDES: SlideProps[] = [
	{
		title: 'Майские праздники',
		subtitle: 'Скидки на товары для отдыха на даче!',
		background: '/images/slider/slider-bg.png',
		secondaryButton: {
			text: 'Акции недели',
			onClick: () => {
				console.log('clicked');
			},
		},
		mainButton: {
			text: 'Узнать больше',
			variant: 'white',
			onClick: () => {
				console.log('clicked');
			},
		},
	},
	{
		title: 'Второй слайд',
		subtitle: 'Скидки на товары для отдыха на даче!',
		background: '/images/slider/slider-bg.png',
		secondaryButton: {
			text: 'Акции недели',
			onClick: () => {
				console.log('clicked');
			},
		},
		mainButton: {
			text: 'Узнать больше',
			variant: 'white',
			onClick: () => {
				console.log('clicked');
			},
		},
	},
	{
		title: 'Третий слайд',
		subtitle: 'Скидки на товары для отдыха на даче!',
		background: '/images/slider/slider-bg.png',
		secondaryButton: {
			text: 'Акции недели',
			onClick: () => {
				console.log('clicked');
			},
		},
		mainButton: {
			text: 'Узнать больше',
			variant: 'white',
			onClick: () => {
				console.log('clicked');
			},
		},
	},
];

export const SECOND_SLIDES: SlideProps[] = [
	{
		title: 'Электроинструменты',
		subtitle: 'Скидка на электроинструменты',
		background: '/images/slider/slider-small-bg.png',
	},
	{
		title: 'Второй слайд',
		subtitle: 'Скидки на товары для отдыха на даче!',
		background: '/images/slider/slider-small-bg.png',
	},
	{
		title: 'Третий слайд',
		subtitle: 'Скидки на товары для отдыха на даче!',
		background: '/images/slider/slider-small-bg.png',
	},
];

export const ADVANTAGES = [
	{
		src: '/images/advantages/advantage-1.svg',
		text: 'Специальные цены на все категории товаров',
	},
	{
		src: '/images/advantages/advantage-2.svg',
		text: 'Заказы в удобное время через личный кабинет',
	},
	{
		src: '/images/advantages/advantage-3.svg',
		text: 'Широкий ассортимент Более 20 000 товаров',
	},
	{
		src: '/images/advantages/advantage-4.svg',
		text: 'Оперативная доставка в течение 24 часов',
	},
];

export const THIRD_SLIDES: SlideProps[] = [
	{
		title: 'Инструменты для дачи и сада',
		subtitle: 'Новый ассортимент товаров для дачного сезона',
		mode: 'light',
		background: '/images/slider/slider-medium-bg.jpg',
		mainButton: {
			text: 'Смотреть товары',
			variant: 'white',
			onClick: () => {
				console.log('clicked');
			},
		},
	},
	{
		title: 'Второй слайд',
		subtitle: 'Новый ассортимент товаров для дачного сезона',
		background: '/images/slider/slider-medium-bg.jpg',
		mode: 'light',
		mainButton: {
			text: 'Смотреть товары',
			variant: 'white',
			onClick: () => {
				console.log('clicked');
			},
		},
	},
	{
		title: 'Третий слайд',
		subtitle: 'Новый ассортимент товаров для дачного сезона',
		mode: 'light',
		background: '/images/slider/slider-medium-bg.jpg',
		mainButton: {
			text: 'Смотреть товары',
			variant: 'white',
			onClick: () => {
				console.log('clicked');
			},
		},
	},
];

export const CATEGORIES: PopularCategoryItemType[] = [
	{
		title: 'Товары для сада и дачи',
		src: '/images/categories/category-garden.png',
		link: '/garden',
		alt: 'Лопатка зеленая',
	},
	{
		title: 'Все для порядка в доме',
		src: '/images/categories/category-house.png',
		link: '/house',
		alt: 'Лопатка зеленая',
	},
	{
		title: 'Комплектующие для сантехники',
		src: '/images/categories/plumber.png',
		link: '/auto',
		alt: 'Ванна',
	},
	{
		title: 'Инструменты',
		src: '/images/categories/category-instruments.png',
		link: '/instruments',
		alt: 'Инструменты',
	},
	{
		title: 'Лакокрасочные материалы',
		src: '/images/categories/paint.png',
		link: '/instruments',
		alt: 'Красная и зеленая кисточка',
	},
	{
		title: 'Бытовая химия',
		src: '/images/categories/chemistry.png',
		link: '/instruments',
		alt: 'Зеленые листочки и бутылка',
	},
];

export const popularBrands: PopularBrandsDataType[] = [
	{ src: '/images/brands/grass.svg', alt: 'grass', id: 'grass' },
	{ src: '/images/brands/jub.svg', alt: 'jub', id: 'jub' },
	{ src: '/images/brands/kudo.svg', alt: 'kudo', id: 'kudo' },
	{ src: '/images/brands/tikkurila.svg', alt: 'tikkurila', id: 'tikkurila' },
	{ src: '/images/brands/vgt.svg', alt: 'vgt', id: 'vgt' },
	{ src: '/images/brands/henkel.svg', alt: 'hankel', id: 'hankel' },
];

export const EVENTS: EventCardType[] = [
	{
		date: '12.10.2022',
		src: '/images/events/event-1.png',
		title: 'Открытие новых складов в трех городах',
	},
	{
		date: '10.11.2020',
		src: '/images/events/event-2.png',
		title: 'Открытие новых складов в трех городах',
	},
	{
		date: '08.09.2022',
		src: '/images/events/event-4.png',
		title: 'Открытие новых складов в трех городах',
	},
	{
		date: '16.10.2021',
		src: '/images/events/event-4.png',
		title: 'Открытие новых складов в трех городах',
	},
];
