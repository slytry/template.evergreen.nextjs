import cn from 'classnames/bind';
import Link from 'next/link';
import { ReactElement } from 'react';

import { TCategoryItem } from 'lib/models/catalogMenu/CatalogMenu.types';

import styles from './CurrentCategotyItem.module.scss';

const cx = cn.bind(styles);

interface CurrentCategotyItemProps {
	heading?: string;
	link?: string;
	categories: TCategoryItem[];
	className?: string;
}

const CurrentCategotyItem = ({
	categories,
	heading,
	className,
	link = '/',
}: CurrentCategotyItemProps): ReactElement => {
	const categoryItems = categories.map((item) => (
		<li
			className={cx('CurrentCategotyItem__item', {
				'CurrentCategotyItem__item--dark': !heading,
			})}
			key={item.id}
		>
			<Link href={item.link}>
				<a>{item.value}</a>
			</Link>
		</li>
	));

	const hasCategoriesHeading = heading ? (
		<div className={cx('CurrentCategotyItem', className)}>
			<h2 className={cx('CurrentCategotyItem__heading')}>
				<Link href={link}>
					<a> {heading}</a>
				</Link>
			</h2>
			<ul>{categoryItems}</ul>
		</div>
	) : (
		<ul className={cx('CurrentCategotyItem', className)}>
			{categoryItems}
		</ul>
	);

	return hasCategoriesHeading;
};
export { CurrentCategotyItem };
