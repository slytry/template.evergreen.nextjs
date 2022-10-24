import cnBind from 'classnames/bind';
import Link from 'next/link';
import React, { FC, ReactElement } from 'react';

import { SubCategoryBannerProps } from './SubCategoryBanner.types';

import styles from './SubCategoryBanner.module.scss';

const cx = cnBind.bind(styles);

const SubCategoryBanner: FC<SubCategoryBannerProps> = ({
	className,
	src,
	title,
	link,
}): ReactElement => (
	<div className={cx('SubCategoryBanner', className)}>
		<Link href={link}>
			<a>
				<div className={cx('SubCategoryBanner__decor')}>
					<img
						alt="баннер подкатегории"
						className={cx('SubCategoryBanner__image')}
						src={src}
					/>
				</div>
				<p className={cx('SubCategoryBanner__title')}>{title}</p>
			</a>
		</Link>
	</div>
);

export { SubCategoryBanner };
