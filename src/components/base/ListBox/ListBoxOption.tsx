import cn from 'classnames/bind';
import { useRef } from 'react';
import { FocusRing, useHover, useOption, mergeProps } from 'react-aria';

import styles from './ListBox.module.scss';

const cx = cn.bind(styles);

export function ListBoxOption({ item, state }) {
	const ref = useRef();
	let { hoverProps, isHovered } = useHover({});
	const { optionProps, isSelected, labelProps } = useOption({ key: item.key }, state, ref);

	return (
		<FocusRing focusRingClass={cx('focus-ring')}>
			<li
				{...mergeProps(optionProps, hoverProps, labelProps)}
				ref={ref}
				className={cx('ListBoxOption', {
					'is-selected': isSelected,
					'is-hovered': isHovered,
				})}
			>
				{item.rendered}
			</li>
		</FocusRing>
	);
}
