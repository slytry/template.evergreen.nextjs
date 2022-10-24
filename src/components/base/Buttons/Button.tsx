import { FocusableRef } from '@react-types/shared';
import classNames from 'classnames/bind';
import { forwardRef, ReactElement } from 'react';
import { useButton, useHover, mergeProps, FocusRing } from 'react-aria';

import { useFocusableRef } from 'utils/useDOMRef';

import { BaseButtonProps } from '.';

import ArrowSvg from 'public/icons/common/arrow-left-round.svg';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = (props: BaseButtonProps, ref: FocusableRef<HTMLButtonElement>) => {
	const {
		children,
		className,
		variant = 'red',
		isDisabled,
		autoFocus,
		isActive,
		fullWidth,
	} = props;

	let domRef = useFocusableRef(ref);

	let { buttonProps, isPressed } = useButton(props, domRef);
	let { hoverProps, isHovered } = useHover({ isDisabled });

	const chuvronButton = (
		<>
			<span>{children}</span>
			<ArrowSvg className={cx('btn__arrow')} />
		</>
	);

	const content = variant === 'chevron' ? chuvronButton : children;

	return (
		<FocusRing focusRingClass={cx('focus-ring')} autoFocus={autoFocus}>
			<button
				{...mergeProps(buttonProps, hoverProps)}
				ref={domRef}
				className={cx(className, 'btn', `btn--${variant}`, {
					'is-disabled': isDisabled,
					'is-active': isActive || isPressed,
					'is-hovered': isHovered,
					'full-width': fullWidth,
				})}
				data-value={props['data-value']}
			>
				{content}
			</button>
		</FocusRing>
	);
};

const _Button = forwardRef(Button) as (
	props: BaseButtonProps & { ref?: FocusableRef<HTMLElement> }
) => ReactElement;
export { _Button as Button };
