import cnBind from 'classnames/bind';
import React, { ReactElement } from 'react';

import { Heading } from '@/base/Heading';
import { SeeAll } from '@/base/SeeAll';
import { ProductCard } from 'components/shared/ProductCard';
import { Slider } from 'components/shared/Slider';
import { SlideProps } from 'components/shared/Slider/Slide/Slide.types';

import { products } from './mocks';

import styles from './NewProducts.module.scss';

const cx = cnBind.bind(styles);

interface NewProductsProps {
	slides: SlideProps[];
}

const NewProducts = ({ slides }: NewProductsProps): ReactElement => (
	<section className={cx('NewProducts')}>
		<div className={cx('NewProducts__headingWrapper')}>
			<Heading level="1" className={cx('NewProducts__title')}>
				Новинки
			</Heading>
			<SeeAll />
		</div>

		<div className={cx('NewProducts__wrapper')}>
			<Slider
				mode="light"
				className={cx('NewProducts__slider')}
				slides={slides}
				type="medium"
				showControls={false}
				animationDuration={5500}
			/>
			{products.map((product, index) => (
				<ProductCard {...product} key={index} className={cx('NewProducts__item')} />
			))}
		</div>
	</section>
);

export { NewProducts };
