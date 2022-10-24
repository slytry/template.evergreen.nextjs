import { PlacementAxis } from '@react-types/overlays';
import { DOMRef } from '@react-types/shared';
import cn from 'classnames/bind';
import React, {
	ForwardedRef,
	forwardRef,
	HTMLAttributes,
	ReactNode,
	RefObject,
} from 'react';
import { useOverlay, useModal, mergeProps } from 'react-aria';

import { useDOMRef } from 'utils/useDOMRef';

import { Overlay } from '../Overlay';

import { PopoverProps } from '.';

import styles from './Popover.module.scss';

const cx = cn.bind(styles);

interface PopoverWrapperProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	placement?: PlacementAxis;

	isOpen?: boolean;
	onClose?: () => void;
	shouldCloseOnBlur?: boolean;
	isKeyboardDismissDisabled?: boolean;
	isNonModal?: boolean;
	isDismissable?: boolean;
}

function Popover(props: PopoverProps, ref: DOMRef<HTMLDivElement>) {
	const {
		children,
		placement,
		onClose,
		shouldCloseOnBlur,
		isKeyboardDismissDisabled,
		isNonModal,
		isDismissable = true,
		...otherProps
	} = props;
	const domRef = useDOMRef(ref);

	return (
		<Overlay {...otherProps}>
			<PopoverWrapper
				style={otherProps.style}
				ref={domRef}
				placement={placement}
				onClose={onClose}
				shouldCloseOnBlur={shouldCloseOnBlur}
				isKeyboardDismissDisabled={isKeyboardDismissDisabled}
				isNonModal={isNonModal}
				isDismissable={isDismissable}
			>
				{children}
			</PopoverWrapper>
		</Overlay>
	);
}

const PopoverWrapper = forwardRef(
	(props: PopoverWrapperProps, ref: ForwardedRef<HTMLDivElement>) => {
		const {
			children,
			placement = 'bottom',
			isOpen,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			shouldCloseOnBlur,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			isKeyboardDismissDisabled,
			isNonModal,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			isDismissable,
			style,
			...otherProps
		} = props;
		const { overlayProps } = useOverlay(
			{ ...props, isDismissable: isDismissable && isOpen },
			ref as RefObject<HTMLDivElement>
		);
		const { modalProps } = useModal({
			isDisabled: isNonModal,
		});

		return (
			<div
				{...mergeProps(otherProps, overlayProps, modalProps)}
				style={style}
				ref={ref}
				className={cx('Popover', `Popover--${placement}`, {
					'is-open': isOpen,
				})}
				role="presentation"
			>
				{children}
			</div>
		);
	}
);

const _Popover = forwardRef(Popover);
export { _Popover as Popover };
