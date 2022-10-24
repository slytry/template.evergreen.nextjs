import cnBind from 'classnames/bind';
import React, { ReactElement } from 'react';

import { ProductCard } from 'components/shared/ProductCard';
import { Slider } from 'components/shared/Slider';
import { THIRD_SLIDES } from 'lib/models';

import { NEW_PRODUCTS } from './mocks';

import styles from './NewProducts.module.scss';

const cx = cnBind.bind(styles);

const NewProducts = (): ReactElement => (
	<section className={cx('NewProducts')}>
		<div className={cx('NewProducts__container')}>
			<p className={cx('NewProducts__title')}>Новинки</p>
			<div className={cx('NewProducts__wrapper')}>
				<Slider
					mode="dark"
					className={cx('NewProducts__slider')}
					slides={THIRD_SLIDES}
					type="medium"
					showControls={false}
					animationDuration={5500}
				/>
				{NEW_PRODUCTS.map((product, index) => (
					<ProductCard {...product} key={index} className={cx('NewProducts__item')} />
				))}
			</div>
		</div>
	</section>
);

export { NewProducts };
