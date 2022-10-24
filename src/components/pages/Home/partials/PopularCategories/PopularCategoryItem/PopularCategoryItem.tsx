import cnBind from 'classnames/bind';
import Link from 'next/link';
import React, { FC, ReactElement } from 'react';

import { PopularCategoryItemProps } from './PopularCategoryItem.types';

import styles from './PopularCategoryItem.module.scss';

const cx = cnBind.bind(styles);

const PopularCategoryItem: FC<PopularCategoryItemProps> = ({
	src,
	title,
	link,
	alt,
}): ReactElement => (
	<div className={cx('PopularCategoryItem')}>
		<img
			alt={alt}
			className={cx('PopularCategoryItem__image')}
			src={src}
			width={197}
			height={197}
		/>

		<Link href={link}>
			<a className={cx('PopularCategoryItem__link')}>{title}</a>
		</Link>
	</div>
);

export { PopularCategoryItem };
