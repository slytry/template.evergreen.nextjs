import { FocusableRef } from '@react-types/shared';
import cn from 'classnames/bind';
import React, { forwardRef } from 'react';
import { mergeProps, FocusRing, useButton, useHover } from 'react-aria';

import { useFocusableRef } from 'utils/useDOMRef';

import { ActionButtonProps } from '.';

import styles from './ActionButton.module.scss';

const cx = cn.bind(styles);

const ActionButton = (props: ActionButtonProps, ref: FocusableRef<HTMLButtonElement>) => {
	const { children, className, autoFocus, isDisabled, style, variant = 'dark' } = props;

	const domRef = useFocusableRef(ref);
	const { buttonProps, isPressed } = useButton(props, domRef);
	const { hoverProps, isHovered } = useHover({ isDisabled });

	return (
		<FocusRing focusRingClass={cx('focusRing')} autoFocus={autoFocus}>
			<button
				style={style}
				{...mergeProps(buttonProps, hoverProps)}
				ref={domRef}
				className={cx(
					'ActionButton',
					`ActionButton--${variant}`,
					{
						isHovered,
						isPressed,
						isDisabled,
					},
					className
				)}
			>
				{children}
			</button>
		</FocusRing>
	);
};

const _ActionButton = forwardRef(ActionButton);
export { _ActionButton as ActionButton };
