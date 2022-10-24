/* eslint-disable no-restricted-globals */

import { useRouter } from 'next/router';
import React, { useState, useEffect, ReactElement, Children } from 'react';

import { ILink, Link } from '../Link';

type ActiveLinkProps = ILink & {
	children: ReactElement;
	activeClassName: string;
	className: string;
};

export const ActiveLink = ({
	children,
	activeClassName,
	className: PropClassName,
	...props
}: ActiveLinkProps) => {
	const { asPath, isReady } = useRouter();

	const child = Children.only(children);

	const childClassName = PropClassName || '';
	const [className, setClassName] = useState(childClassName);

	useEffect(() => {
		if (isReady) {
			const linkPathname = new URL(
				(props.as || props.href) as string,
				location.href
			).pathname;
			const activePathname = new URL(asPath, location.href).pathname;
			const newClassName =
				linkPathname === activePathname
					? `${childClassName} ${activeClassName}`.trim()
					: childClassName;

			if (newClassName !== className) {
				setClassName(newClassName);
			}
		}
	}, [
		asPath,
		isReady,
		props.as,
		props.href,
		childClassName,
		activeClassName,
		setClassName,
		className,
	]);

	return (
		<Link {...props} className={className}>
			{child}
		</Link>
	);
};
