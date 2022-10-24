import cn from 'classnames/bind';
import NextLink from 'next/link';
import { useRef, cloneElement } from 'react';
import { useLink } from 'react-aria';

import { ILink } from '.';

import styles from './Link.module.scss';

const cx = cn.bind(styles);

export const Link = (props: ILink) => {
	const { className, href, children, target, isDisabled, variant = 'blue' } = props;
	const ref = useRef();
	const { linkProps, isPressed } = useLink(props, ref);

	return (
		<NextLink href={href}>
			{cloneElement(children, {
				className: cx(
					'Link',
					`Link--${variant}`,

					{
						isPressed,
						isDisabled,
					},
					className
				),
				...linkProps,
				target,
			})}
		</NextLink>
	);
};
