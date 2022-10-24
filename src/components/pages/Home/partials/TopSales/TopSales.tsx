import cnBind from 'classnames/bind';
import React, { ReactElement } from 'react';

import { ProductList } from 'components/shared/ProductList';

import { TOP_SALES, FILTERS } from './mocks';

import styles from './TopSales.module.scss';

const cx = cnBind.bind(styles);

const TopSales = (): ReactElement => (
	<section className={cx('TopSales')}>
		<p className={cx('TopSales__title')}>Топ продаж</p>
		<ProductList products={TOP_SALES} filters={FILTERS} />
	</section>
);

export { TopSales };
