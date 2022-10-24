import cnBind from 'classnames/bind';
import React, { FC, ReactElement } from 'react';

import { PopularCategoryItem } from '../PopularCategoryItem';

import { PopularCategoryListProps } from './PopularCategoryList.types';

import styles from './PopularCategoryList.module.scss';

const cx = cnBind.bind(styles);

const PopularCategoryList: FC<PopularCategoryListProps> = ({
	className,
	categories,
}): ReactElement => (
	<div className={cx('PopularCategoryList', className)}>
		{categories.map((category) => (
			<PopularCategoryItem key={category.title} {...category} />
		))}
	</div>
);

export { PopularCategoryList };
