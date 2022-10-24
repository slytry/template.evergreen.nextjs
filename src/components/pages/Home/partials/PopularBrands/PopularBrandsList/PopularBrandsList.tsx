import cn from 'classnames/bind';
import { ReactElement } from 'react';

import { PopularBrandsListProps } from './PopularBrandsList.types';

import styles from './PopularBrandsList.module.scss';

const cx = cn.bind(styles);

const PopularBrandsList = ({ brands, className }: PopularBrandsListProps): ReactElement => (
	<div className={cx('PopularBrandsList', className)}>
		{brands.map((brand) => (
			<div className={cx('PopularBrandsList__item')} key={brand.id}>
				<img src={brand.src} alt={brand.alt} className={cx('PopularBrands__image')} />
			</div>
		))}
	</div>
);

export { PopularBrandsList };
