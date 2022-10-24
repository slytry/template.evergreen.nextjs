import { AriaBreadcrumbItemProps } from '@react-types/breadcrumbs';
import cn from 'classnames/bind';
import Link from 'next/link';
import { ReactElement, useRef } from 'react';
import { useBreadcrumbItem } from 'react-aria';

import styles from './BreadcrumbItem.module.scss';

const cx = cn.bind(styles);

interface BreadcrumbItemProps extends AriaBreadcrumbItemProps {
	className?: string;
	href?: string;
}

const BreadcrumbItem = (props: BreadcrumbItemProps): ReactElement => {
	const ref = useRef();
	const { itemProps } = useBreadcrumbItem({ ...props, elementType: 'a' }, ref);
	return (
		<li
			className={cx('BreadcrumbItem', {
				'BreadcrumbItem--current': props.isCurrent,
			})}
		>
			<Link href={props.href}>
				<a
					{...itemProps}
					ref={ref}
					className={cx('BreadcrumbItem__text', {
						'BreadcrumbItem__text--current': props.isCurrent,
					})}
				>
					{props.children}
				</a>
			</Link>
		</li>
	);
};

export { BreadcrumbItem };
