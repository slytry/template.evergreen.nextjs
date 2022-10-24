import cn from 'classnames/bind';
import { ReactElement } from 'react';

import { popularBrands } from 'lib/models';

import { PopularBrandsList } from './PopularBrandsList';

import styles from './PopularBrands.module.scss';

const cx = cn.bind(styles);

interface PopularBrandsProps {
	className?: string;
}

const PopularBrands = ({ className }: PopularBrandsProps): ReactElement => (
	<section className={cx('PopularBrands', className)}>
		<h2 className={cx('PopularBrands__heading')}>Популярные бренды</h2>
		<PopularBrandsList brands={popularBrands} />
	</section>
);

export { PopularBrands };
