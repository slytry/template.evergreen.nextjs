import { FocusableRef } from '@react-types/shared';
import cn from 'classnames/bind';
import React, { forwardRef } from 'react';
import { mergeProps, FocusRing } from 'react-aria';

import { useSplitCode } from './ToggleButton.hooks';
import { ToggleButtonProps } from './ToggleButton.types';

import styles from './ToggleButton.module.scss';

const cx = cn.bind(styles);

const ToggleButton = (props: ToggleButtonProps, ref: FocusableRef<HTMLButtonElement>) => {
	const { children, className } = props;
	const { hoverProps, isHovered, buttonProps, domRef, buttonState } = useSplitCode(props, ref);

	return (
		<FocusRing focusRingClass={cx('focusRing')}>
			<button
				{...mergeProps(buttonProps, hoverProps)}
				ref={domRef}
				className={cx(
					'ToggleButton',
					{
						isHovered,
						isSelected: buttonState.isSelected,
					},
					className
				)}
			>
				{children}
			</button>
		</FocusRing>
	);
};

const _ToggleButton = forwardRef(ToggleButton);
export { _ToggleButton as ToggleButton };
