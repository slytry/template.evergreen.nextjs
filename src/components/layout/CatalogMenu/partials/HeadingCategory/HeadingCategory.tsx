import cn from 'classnames/bind';
import Link from 'next/link';
import { ReactElement } from 'react';

import styles from './HeadingCategory.module.scss';

const cx = cn.bind(styles);

interface HeadingCategoryProps {
	className?: string;
	children: string;
	href: string;
}

const HeadingCategory = ({ className, children, href }: HeadingCategoryProps): ReactElement => (
	<Link href={href}>
		<a>
			<h2 className={cx('HeadingCategory', className)}>{children}</h2>
		</a>
	</Link>
);

export { HeadingCategory };
