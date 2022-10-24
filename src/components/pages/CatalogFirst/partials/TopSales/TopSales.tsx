import cnBind from 'classnames/bind';
import React, { ReactElement } from 'react';

import { Heading } from '@/base/Heading';
import { ProductList } from 'components/shared/ProductList';

import { filters, TOP_SALES } from './mocks';

import styles from './TopSales.module.scss';

const cx = cnBind.bind(styles);

const TopSales = (): ReactElement => (
	<section className={cx('TopSales')}>
		<Heading className={cx('TopSales__title')} level="1">
			Топ продаж
		</Heading>

		<ProductList products={TOP_SALES} filters={filters} />
	</section>
);

export { TopSales };
