import cn from 'classnames/bind';
import { ReactElement, Children, cloneElement } from 'react';
import { useBreadcrumbs } from 'react-aria';

import { BreadcrumbsProps } from './Breadсrumbs.types';

import styles from './Breadсrumbs.module.scss';

const cx = cn.bind(styles);

function Breadcrumbs<T>(props: BreadcrumbsProps<T>) {
	const { navProps } = useBreadcrumbs(props);
	const children = Children.toArray(props.children);
	return (
		<nav {...navProps} className={cx(props.className)}>
			<ol className={cx('Breadcrumbs')}>
				{children.map((child, i) =>
					cloneElement(child as ReactElement<any>, {
						isCurrent: i === children.length - 1,
					})
				)}
			</ol>
		</nav>
	);
}

export { Breadcrumbs };
