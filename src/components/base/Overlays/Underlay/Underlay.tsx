import cn from 'classnames/bind';
import React, { ReactNode } from 'react';

import { useViewportSize } from 'utils/useViewportSize';

import styles from './Underlay.module.scss';

const cx = cn.bind(styles);

interface UnderlayProps {
	isOpen?: boolean;
	children: ReactNode;
}

export function Underlay({ isOpen, children }: UnderlayProps) {
	const viewport = useViewportSize();
	const style: any = {
		'--visual-viewport-height': `${viewport.height}px`,
	};
	return (
		<div
			style={style}
			className={cx('Underlay', {
				'is-open': isOpen,
			})}
		>
			{children}
		</div>
	);
}
