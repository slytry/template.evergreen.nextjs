import { useModal, useOverlay, usePreventScroll } from '@react-aria/overlays';
import { TrayProps } from '@react-types/overlays';
import { DOMRef } from '@react-types/shared';
import cn from 'classnames/bind';
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react';
import { mergeProps } from 'react-aria';

import { useDOMRef } from 'utils/useDOMRef';
import { useViewportSize } from 'utils/useViewportSize';

import { Overlay } from '../Overlay';
import { Underlay } from '../Underlay';

import styles from './Tray.module.scss';

const cx = cn.bind(styles);

interface TrayWrapperProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	isFixedHeight?: boolean;
	isNonModal?: boolean;
	overlayProps: HTMLAttributes<HTMLElement>;
}

function Tray(props: TrayProps, ref: DOMRef<HTMLDivElement>) {
	const { children, onClose, isFixedHeight, isNonModal, ...otherProps } = props;
	const domRef = useDOMRef(ref);

	const { overlayProps, underlayProps } = useOverlay(
		{ ...props, isDismissable: true },
		domRef
	);

	return (
		<Overlay {...otherProps}>
			<Underlay {...underlayProps}>
				<TrayWrapper
					onClose={onClose}
					ref={domRef}
					overlayProps={overlayProps}
					isFixedHeight={isFixedHeight}
					isNonModal={isNonModal}
				>
					{children}
				</TrayWrapper>
			</Underlay>
		</Overlay>
	);
}

const TrayWrapper = forwardRef(
	(props: TrayWrapperProps, ref: ForwardedRef<HTMLDivElement>) => {
		const {
			children,
			isOpen,
			isFixedHeight,
			isNonModal,
			overlayProps,
			...otherProps
		} = props;
		usePreventScroll();
		const { modalProps } = useModal({
			isDisabled: isNonModal,
		});

		// We need to measure the window's height in JS rather than using percentages in CSS
		// so that contents (e.g. menu) can inherit the max-height properly. Using percentages
		// does not work properly because there is nothing to base the percentage on.
		// We cannot use vh units because mobile browsers adjust the window height dynamically
		// when the address bar/bottom toolbars show and hide on scroll and vh units are fixed.
		// Also, the visual viewport is smaller than the layout viewport when the virtual keyboard
		// is up, so use the VisualViewport API to ensure the tray is displayed above the keyboard.
		const viewport = useViewportSize();
		const wrapperStyle: any = {
			'--visual-viewport-height': `${viewport.height}px`,
		};

		const wrapperClassName = cx('Tray-wrapper');

		const className = cx('Tray', {
			'is-open': isOpen,
			'Tray--fixedHeight': isFixedHeight,
		});

		const domProps = mergeProps(otherProps, overlayProps);

		return (
			<div className={wrapperClassName} style={wrapperStyle}>
				<div {...domProps} {...modalProps} className={className} ref={ref}>
					{children}
				</div>
			</div>
		);
	}
);

const _Tray = forwardRef(Tray);
export { _Tray as Tray };
