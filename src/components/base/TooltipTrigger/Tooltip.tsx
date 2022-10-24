import { AriaLabelingProps, DOMProps, DOMRef } from '@react-types/shared';
import cn from 'classnames/bind';
import React, {
	CSSProperties,
	forwardRef,
	ReactNode,
	useContext,
	useImperativeHandle,
	useRef,
} from 'react';
import { mergeProps, useTooltip } from 'react-aria';

import { createDOMRef } from 'utils/useDOMRef';

import { TooltipContext } from './context';

import styles from './Tooltip.module.scss';

const cx = cn.bind(styles);

export interface TooltipProps extends DOMProps, AriaLabelingProps {
	isOpen?: boolean;
	children: ReactNode;
	placement?: 'top';
	UNSAFE_style?: CSSProperties;
}

const Tooltip = (props: TooltipProps, ref: DOMRef) => {
	let { ref: overlayRef, state, ...tooltipProviderProps } = useContext(TooltipContext);

	const defaultRef = useRef();
	overlayRef = overlayRef || defaultRef;
	props = mergeProps(props, tooltipProviderProps);
	const { children, placement = 'top', UNSAFE_style, isOpen } = props;

	const { tooltipProps } = useTooltip(props, state);

	// Sync ref with overlayRef from context.
	useImperativeHandle(ref, () => createDOMRef(overlayRef));

	return (
		<div
			style={{ ...UNSAFE_style }}
			{...tooltipProps}
			className={cx('Tooltip', `Tooltip--${placement}`, {
				isOpen,
			})}
			ref={overlayRef}
		>
			{children}
		</div>
	);
};

const _Tooltip = forwardRef(Tooltip);
export { _Tooltip as Tooltip };
