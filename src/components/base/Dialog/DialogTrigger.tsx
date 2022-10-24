/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-return-assign */
import { PressResponder } from '@react-aria/interactions';
import { SpectrumDialogClose } from '@react-types/dialog';
import { ReactElement } from 'react';
import { OverlayTriggerState, useOverlayTriggerState } from 'react-stately';

import { useMediaQuery } from 'utils/useMediaQuery';

import { Modal } from '../Overlays/Modal';

import { DialogContext } from './DialogContext';

import { DialogTriggerProps } from '.';

export function DialogTrigger(props: DialogTriggerProps) {
	let {
		children,
		type = 'modal',
		mobileType = type === 'popover' ? 'modal' : type,
		isDismissable,
	} = props;
	if (!Array.isArray(children) || children.length > 2) {
		throw new Error('DialogTrigger must have exactly 2 children');
	}
	// if a function is passed as the second child, it won't appear in toArray
	const [trigger, content] = children as [ReactElement, SpectrumDialogClose];

	// On small devices, show a modal or tray instead of a popover.
	const isMobile = useMediaQuery('(max-width: 700px)');

	if (isMobile) {
		// handle cases where desktop popovers need a close button for the mobile modal view
		if (type !== 'modal' && mobileType === 'modal') {
			isDismissable = true;
		}

		type = mobileType;
	}

	const state = useOverlayTriggerState(props);

	const renderOverlay = () => {
		switch (type) {
			case 'modal':
				return (
					<Modal
						isOpen={state.isOpen}
						isDismissable={type === 'modal' ? isDismissable : false}
						onClose={state.close}
					>
						{typeof content === 'function' ? content(state.close) : content}
					</Modal>
				);
		}
	};

	return (
		<DialogTriggerBase
			type={type}
			state={state}
			isDismissable={isDismissable}
			trigger={trigger}
			overlay={renderOverlay()}
		/>
	);
}

interface DialogTriggerBaseProps {
	type: 'modal' | 'popover' | 'tray';
	state: OverlayTriggerState;
	isDismissable?: boolean;
	triggerProps?: any;
	overlay: ReactElement;
	trigger: ReactElement;
}

function DialogTriggerBase({
	type,
	state,
	isDismissable,
	triggerProps = {},
	overlay,
	trigger,
}: DialogTriggerBaseProps) {
	const context = {
		type,
		onClose: state.close,
		isDismissable,
	};

	return (
		<>
			<PressResponder
				{...triggerProps}
				onPress={state.toggle}
				isPressed={state.isOpen && type !== 'modal'}
			>
				{trigger}
			</PressResponder>
			<DialogContext.Provider value={context}>{overlay}</DialogContext.Provider>
		</>
	);
}
