import { FocusableProvider } from '@react-aria/focus';
import { PositionProps } from '@react-types/overlays';
import { Children, useRef, useMemo, ReactElement } from 'react';
import {
	useTooltipTrigger,
	useOverlayPosition,
	TooltipTriggerProps as STooltipTriggerProps,
} from 'react-aria';
import { useTooltipTriggerState } from 'react-stately';

import { Overlay } from '../Overlays';

import { TooltipContext } from './context';

const DEFAULT_OFFSET = 6;

interface TooltipTriggerProps extends STooltipTriggerProps, PositionProps {
	children: [ReactElement, ReactElement];

	/**
	 * The additional offset applied along the main axis between the element and its
	 * anchor element.
	 * @default 7
	 */
	offset?: number;
}

const TooltipTrigger = (props: TooltipTriggerProps) => {
	const {
		children,
		isDisabled,
		trigger: triggerAction,
		offset = DEFAULT_OFFSET,
	} = props;

	const [trigger, tooltip] = Children.toArray(children);

	const state = useTooltipTriggerState(props);

	const tooltipTriggerRef = useRef<HTMLElement>();
	const overlayRef = useRef<HTMLDivElement>();

	const { triggerProps, tooltipProps } = useTooltipTrigger(
		{
			isDisabled,
			trigger: triggerAction,
		},
		state,
		tooltipTriggerRef
	);

	const { overlayProps, placement } = useOverlayPosition({
		placement: props.placement || 'top',
		targetRef: tooltipTriggerRef,
		overlayRef,
		isOpen: state.isOpen,
		offset,
	});

	const context = useMemo(
		() => ({
			state,
			placement,
			UNSAFE_style: overlayProps.style,
			ref: overlayRef,
			...tooltipProps,
		}),
		[state]
	);
	return (
		<FocusableProvider {...triggerProps} ref={tooltipTriggerRef}>
			{trigger}
			<TooltipContext.Provider value={context}>
				<Overlay isOpen={state.isOpen}>{tooltip}</Overlay>
			</TooltipContext.Provider>
		</FocusableProvider>
	);
};

export { TooltipTrigger };
