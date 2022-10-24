import cnBind from 'classnames/bind';
import React, { ReactElement } from 'react';

import { Heading } from '@/base/Heading';
import { ProductCard } from 'components/shared/ProductCard';
import { Slider } from 'components/shared/Slider';
import { SlideProps } from 'components/shared/Slider/Slide/Slide.types';

import { promo } from './mocks';

import styles from './Promo.module.scss';

const cx = cnBind.bind(styles);

interface PromoProps {
	slides: SlideProps[];
}

const Promo = ({ slides }: PromoProps): ReactElement => (
	<section className={cx('Promo')}>
		<Heading level="1" className={cx('Promo__title')}>
			Акции
		</Heading>

		<div className={cx('Promo__wrapper')}>
			<Slider
				mode="dark"
				className={cx('Promo__slider')}
				slides={slides}
				type="medium"
				showControls
				animationDuration={5500}
			/>
			{promo.map((product, index) => (
				<ProductCard {...product} key={index} className={cx('Promo__item')} />
			))}
		</div>
	</section>
);

export { Promo };
